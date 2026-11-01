import "../../styles/reliability/project.css";
export default function ResultFigures() {
  return (
    <section className="reliability-content-section">

      <div className="reliability-section-heading">
        <div>
          <h3>モデル分析結果</h3>
          <p>Model Results</p>
        </div>
      </div>

      <div className="result-figures-grid">

        <article className="result-figure-card">
          <div className="result-figure-text">
            <span className="result-figure-number">01</span>

            <h4>CTMCによる最適点検間隔</h4>

            <p className="result-figure-en">
              CTMC Inspection Optimization
            </p>

            <p className="result-figure-description">
              点検間隔と長期平均コストの関係を評価し、
              最適な点検間隔として約85.64時間を得ました。
            </p>
          </div>

          <div className="result-figure-image">
            <img
              src="/reliability/ctmc_inspection_optimization.png"
              alt="CTMC inspection interval optimization"
            />
          </div>
        </article>

        <article className="result-figure-card">
          <div className="result-figure-text">
            <span className="result-figure-number">02</span>

            <h4>理論値とMonte Carlo検証</h4>

            <p className="result-figure-en">
              Theory vs. Monte Carlo Simulation
            </p>

            <p className="result-figure-description">
              理論モデルとMonte Carlo Simulationを比較し、
              最適点付近を含む複数の点検間隔で
              ほぼ一致することを確認しました。
            </p>
          </div>

          <div className="result-figure-image">
            <img
              src="/reliability/policy_comparison.png"
              alt="Comparison between theoretical model and Monte Carlo simulation"
            />
          </div>
        </article>

      </div>

    </section>
  );
}