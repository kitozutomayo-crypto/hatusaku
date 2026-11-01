import { useMemo } from "react";

import {
  generateCostCurve,
} from "../../models/maintenanceModel";

export default function CostCurve({
  parameters,
  optimalInterval,
  optimalCost,
}) {

  const data = useMemo(
    () =>
      generateCostCurve(
        parameters,
        20,
        250,
        70
      ),
    [parameters]
  );

  const width = 900;
  const height = 220;

  const padding = {
    top: 30,
    right: 35,
    bottom: 55,
    left: 70,
  };

  const minX = 20;
  const maxX = 250;

  const costs = data.map(
    (point) => point.cost
  );

  const rawMinY = Math.min(...costs);
  const rawMaxY = Math.max(...costs);

  const yMargin =
    (rawMaxY - rawMinY) * 0.12;

  const minY =
    Math.max(
      0,
      rawMinY - yMargin
    );

  const maxY =
    rawMaxY + yMargin;

  const plotWidth =
    width -
    padding.left -
    padding.right;

  const plotHeight =
    height -
    padding.top -
    padding.bottom;


  function xScale(value) {
    return (
      padding.left +
      ((value - minX) /
        (maxX - minX)) *
        plotWidth
    );
  }


  function yScale(value) {
    return (
      padding.top +
      (1 -
        (value - minY) /
          (maxY - minY)) *
        plotHeight
    );
  }


  const path = data
    .map((point, index) => {

      const x =
        xScale(point.interval);

      const y =
        yScale(point.cost);

      return `${
        index === 0 ? "M" : "L"
      } ${x} ${y}`;

    })
    .join(" ");


  const xTicks = [
    20,
    50,
    100,
    150,
    200,
    250,
  ];

  const yTicks = Array.from(
    { length: 5 },
    (_, index) =>
      minY +
      ((maxY - minY) * index) / 4
  );


  const optimalX =
    xScale(optimalInterval);

  const optimalY =
    yScale(optimalCost);


  return (
    <div className="cost-curve-card">

      <div className="cost-curve-heading">

        <div>
          <h4>
            点検間隔と長期平均コスト
          </h4>

          <p>
            Inspection Interval vs.
            Long-run Cost Rate
          </p>
        </div>

        <div className="cost-curve-optimal">
          <span>OPTIMAL</span>

          <strong>
            {optimalInterval.toFixed(1)} h
          </strong>
        </div>

      </div>


      <div className="cost-curve-chart">

        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label="Inspection interval and long-run maintenance cost curve"
        >

          {/* Horizontal grid */}
          {yTicks.map((tick) => {

            const y = yScale(tick);

            return (
              <g key={tick}>

                <line
                  x1={padding.left}
                  x2={width - padding.right}
                  y1={y}
                  y2={y}
                  className="cost-grid-line"
                />

                <text
                  x={padding.left - 14}
                  y={y + 4}
                  textAnchor="end"
                  className="cost-axis-text"
                >
                  {tick.toFixed(2)}
                </text>

              </g>
            );
          })}


          {/* X ticks */}
          {xTicks.map((tick) => {

            const x = xScale(tick);

            return (
              <g key={tick}>

                <line
                  x1={x}
                  x2={x}
                  y1={padding.top}
                  y2={
                    height -
                    padding.bottom
                  }
                  className="cost-grid-line"
                />

                <text
                  x={x}
                  y={
                    height -
                    padding.bottom +
                    25
                  }
                  textAnchor="middle"
                  className="cost-axis-text"
                >
                  {tick}
                </text>

              </g>
            );
          })}


          {/* Cost curve */}
          <path
            d={path}
            className="cost-curve-path"
          />


          {/* Optimal vertical line */}
          <line
            x1={optimalX}
            x2={optimalX}
            y1={padding.top}
            y2={
              height -
              padding.bottom
            }
            className="cost-optimal-line"
          />


          {/* Optimal point */}
          <circle
            cx={optimalX}
            cy={optimalY}
            r="7"
            className="cost-optimal-point"
          />


          {/* Optimal label */}
          <text
            x={optimalX + 12}
            y={optimalY - 12}
            className="cost-optimal-label"
          >
            {optimalInterval.toFixed(1)} h
          </text>


          {/* X axis label */}
          <text
            x={
              padding.left +
              plotWidth / 2
            }
            y={height - 8}
            textAnchor="middle"
            className="cost-axis-label"
          >
            Inspection Interval (hours)
          </text>


          {/* Y axis label */}
          <text
            x="18"
            y={
              padding.top +
              plotHeight / 2
            }
            textAnchor="middle"
            transform={
              `rotate(-90 18 ${
                padding.top +
                plotHeight / 2
              })`
            }
            className="cost-axis-label"
          >
            Long-run Cost Rate
          </text>

        </svg>

      </div>

    </div>
  );
}