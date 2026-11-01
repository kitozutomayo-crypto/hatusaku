import "../../styles/reliability/simulator.css";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  defaultParameters,
  optimizeInspectionInterval,
} from "../../models/maintenanceModel";

import CostCurve from "./CostCurve";


export default function InteractiveSimulator() {

  const [failureCost, setFailureCost] =
    useState(defaultParameters.failureCost);

  const [inspectionCost, setInspectionCost] =
    useState(defaultParameters.inspectionCost);

  const [preventiveCost, setPreventiveCost] =
    useState(defaultParameters.preventiveCost);


  const [
    calculationParameters,
    setCalculationParameters,
  ] = useState(defaultParameters);


  useEffect(() => {

    const timer = setTimeout(() => {

      setCalculationParameters({
        ...defaultParameters,
        failureCost,
        inspectionCost,
        preventiveCost,
      });

    }, 120);

    return () => clearTimeout(timer);

  }, [
    failureCost,
    inspectionCost,
    preventiveCost,
  ]);


  const result = useMemo(
    () =>
      optimizeInspectionInterval(
        calculationParameters
      ),
    [calculationParameters]
  );


  return (
    <section
      id="reliability-simulator"
      className="reliability-project simulator-home-section"
    >

      <div className="reliability-container">


        {/* Heading */}

        <div className="reliability-section-heading">

          <div>

            <h3>
              保全方針を試してみる
            </h3>

            <p>
              Interactive Maintenance Simulator
            </p>

          </div>

          <span className="simulator-live">
            LIVE MODEL
          </span>

        </div>


        <p className="simulator-intro">
          コスト条件を変更すると、
          CTMCモデルが最適な点検間隔と
          長期平均コストをリアルタイムで計算します。
        </p>



        {/* Dynamic Curve */}

        <div className="simulator-curve-panel">

          <CostCurve
            parameters={
              calculationParameters
            }
            optimalInterval={
              result.optimalInterval
            }
            optimalCost={
              result.costRate
            }
          />

        </div>



        {/* Interactive Controls */}

        <div className="simulator-controls-grid">


          {/* Failure Cost */}

          <div className="simulator-control">

            <div className="simulator-control-header">

              <div>
                <strong>
                  故障コスト
                </strong>

                <small>
                  Failure Cost
                </small>
              </div>

              <span>
                {failureCost}
              </span>

            </div>


            <input
              type="range"
              min="300"
              max="2000"
              step="50"
              value={failureCost}
              onChange={(e) =>
                setFailureCost(
                  Number(e.target.value)
                )
              }
            />


            <div className="slider-range">

              <span>300</span>
              <span>2000</span>

            </div>

          </div>



          {/* Inspection Cost */}

          <div className="simulator-control">

            <div className="simulator-control-header">

              <div>

                <strong>
                  点検コスト
                </strong>

                <small>
                  Inspection Cost
                </small>

              </div>

              <span>
                {inspectionCost}
              </span>

            </div>


            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={inspectionCost}
              onChange={(e) =>
                setInspectionCost(
                  Number(e.target.value)
                )
              }
            />


            <div className="slider-range">

              <span>5</span>
              <span>100</span>

            </div>

          </div>



          {/* Preventive Cost */}

          <div className="simulator-control">

            <div className="simulator-control-header">

              <div>

                <strong>
                  予防保全コスト
                </strong>

                <small>
                  Preventive Maintenance Cost
                </small>

              </div>

              <span>
                {preventiveCost}
              </span>

            </div>


            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={preventiveCost}
              onChange={(e) =>
                setPreventiveCost(
                  Number(e.target.value)
                )
              }
            />


            <div className="slider-range">

              <span>50</span>
              <span>500</span>

            </div>

          </div>

        </div>



        {/* Compact Results */}

        <div className="simulator-results-compact">

          <div className="compact-result">

            <span>
              最適点検間隔
            </span>

            <strong>
              {result.optimalInterval.toFixed(2)}
              <small> h</small>
            </strong>

            <p>
              Optimal Inspection Interval
            </p>

          </div>


          <div className="compact-result">

            <span>
              長期平均コスト
            </span>

            <strong>
              {result.costRate.toFixed(4)}
              <small> / h</small>
            </strong>

            <p>
              Expected Long-run Cost Rate
            </p>

          </div>

        </div>



        {/* Footer */}

        <div className="simulator-footer">

          <p className="simulator-note">

            CTMCの遷移率は
            λ01 = 0.002、
            λ12 = 0.004、
            λ23 = 0.008
            に固定しています。

          </p>


          <div className="simulator-project-link">

            <a href="#machine-reliability">

              プロジェクトの詳細を見る

              <span>
                ↓
              </span>

            </a>

          </div>

        </div>


      </div>

    </section>
  );
}