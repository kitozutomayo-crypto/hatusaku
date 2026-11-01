export const defaultParameters = {
  inspectionCost: 20,
  preventiveCost: 100,
  failureCost: 1000,

  lambda01: 0.002,
  lambda12: 0.004,
  lambda23: 0.008,
};

export const referenceResult = {
  optimalInspectionInterval: 85.64,
  expectedCostRate: 0.6732,
  monteCarloCostRate: 0.6741,
};

export const modelInfo = {
  weibullBeta: 1.9267,
  weibullEta: 474.285,
  ageBasedOptimalTime: 159.43,
};


/* =========================================
   Helper
========================================= */

function expIntegral(rate, T) {
  return (1 - Math.exp(-rate * T)) / rate;
}


/* =========================================
   CTMC transition probabilities

   States:
   0 = Healthy
   1 = Degraded
   2 = Critical
   3 = Failed

   Sequential transitions:
   0 -> 1 -> 2 -> 3
========================================= */

function transitionProbabilities(
  T,
  lambda01,
  lambda12,
  lambda23
) {
  const a = lambda01;
  const b = lambda12;
  const c = lambda23;

  const ea = Math.exp(-a * T);
  const eb = Math.exp(-b * T);
  const ec = Math.exp(-c * T);

  // Start from Healthy
  const p00 = ea;

  const p01 =
    (a / (b - a)) *
    (ea - eb);

  const p02 =
    (a * b / (b - a)) *
    (
      (ea - ec) / (c - a) -
      (eb - ec) / (c - b)
    );

  // Start from Degraded
  const p11 = eb;

  const p12 =
    (b / (c - b)) *
    (eb - ec);

  // Start from Critical
  const p22 = ec;

  return {
    p00,
    p01,
    p02,
    p11,
    p12,
    p22,
  };
}


/* =========================================
   Expected operating time
   before failure within one interval
========================================= */

function expectedOperatingTimes(
  T,
  lambda01,
  lambda12,
  lambda23
) {
  const a = lambda01;
  const b = lambda12;
  const c = lambda23;

  const Ia = expIntegral(a, T);
  const Ib = expIntegral(b, T);
  const Ic = expIntegral(c, T);

  // Starting from Healthy
  const healthyTime =
    Ia +
    (a / (b - a)) *
      (Ia - Ib) +
    (a * b / (b - a)) *
      (
        (Ia - Ic) / (c - a) -
        (Ib - Ic) / (c - b)
      );

  // Starting from Degraded
  const degradedTime =
    Ib +
    (b / (c - b)) *
      (Ib - Ic);

  return {
    healthyTime,
    degradedTime,
  };
}


/* =========================================
   Long-run maintenance cost rate
========================================= */

export function maintenanceCostRate(
  inspectionInterval,
  parameters
) {
  const {
    inspectionCost,
    preventiveCost,
    failureCost,
    lambda01,
    lambda12,
    lambda23,
  } = parameters;

  const T = inspectionInterval;

  const {
    p00,
    p01,
    p02,
    p11,
    p12,
  } = transitionProbabilities(
    T,
    lambda01,
    lambda12,
    lambda23
  );

  const {
    healthyTime,
    degradedTime,
  } = expectedOperatingTimes(
    T,
    lambda01,
    lambda12,
    lambda23
  );


  /* -----------------------------------------
     Immediate expected cost
     starting from Healthy
  ----------------------------------------- */

  const healthySurvival =
    p00 + p01 + p02;

  const healthyFailure =
    1 - healthySurvival;

  const healthyImmediateCost =
    failureCost * healthyFailure +
    inspectionCost * healthySurvival +
    preventiveCost * p02;


  /* -----------------------------------------
     Immediate expected cost
     starting from Degraded
  ----------------------------------------- */

  const degradedSurvival =
    p11 + p12;

  const degradedFailure =
    1 - degradedSurvival;

  const degradedImmediateCost =
    failureCost * degradedFailure +
    inspectionCost * degradedSurvival +
    preventiveCost * p12;


  /* =========================================
     Expected total cost over maintenance cycle

     Degraded:
     V_D = c_D + p11 * V_D

     Healthy:
     V_H = c_H + p00 * V_H + p01 * V_D
  ========================================= */

  const degradedTotalCost =
    degradedImmediateCost /
    (1 - p11);

  const healthyTotalCost =
    (
      healthyImmediateCost +
      p01 * degradedTotalCost
    ) /
    (1 - p00);


  /* =========================================
     Expected total cycle length
  ========================================= */

  const degradedTotalTime =
    degradedTime /
    (1 - p11);

  const healthyTotalTime =
    (
      healthyTime +
      p01 * degradedTotalTime
    ) /
    (1 - p00);


  return (
    healthyTotalCost /
    healthyTotalTime
  );
}


/* =========================================
   Fast optimization
   Golden-section search
========================================= */

export function optimizeInspectionInterval(
  parameters
) {
  let left = 5;
  let right = 500;

  const ratio =
    (Math.sqrt(5) - 1) / 2;

  let x1 =
    right -
    ratio * (right - left);

  let x2 =
    left +
    ratio * (right - left);

  let f1 =
    maintenanceCostRate(
      x1,
      parameters
    );

  let f2 =
    maintenanceCostRate(
      x2,
      parameters
    );

  // 30 iterations is already more than enough
  // for homepage visualization
  for (let i = 0; i < 30; i++) {

    if (f1 > f2) {

      left = x1;

      x1 = x2;
      f1 = f2;

      x2 =
        left +
        ratio * (right - left);

      f2 =
        maintenanceCostRate(
          x2,
          parameters
        );

    } else {

      right = x2;

      x2 = x1;
      f2 = f1;

      x1 =
        right -
        ratio * (right - left);

      f1 =
        maintenanceCostRate(
          x1,
          parameters
        );

    }
  }

  const optimalInterval =
    (left + right) / 2;

  const costRate =
    maintenanceCostRate(
      optimalInterval,
      parameters
    );

  return {
    optimalInterval,
    costRate,
  };
}


/* =========================================
   Generate points for interactive cost curve
========================================= */

export function generateCostCurve(
  parameters,
  minT = 20,
  maxT = 250,
  points = 60
) {
  const data = [];

  for (let i = 0; i < points; i++) {

    const T =
      minT +
      (maxT - minT) *
      (i / (points - 1));

    const cost =
      maintenanceCostRate(
        T,
        parameters
      );

    data.push({
      interval: T,
      cost,
    });
  }

  return data;
}