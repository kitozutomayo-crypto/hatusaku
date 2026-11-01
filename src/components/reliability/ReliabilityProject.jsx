import "../../styles/reliability/project.css";

import {
  modelInfo,
  referenceResult,
} from "../../models/maintenanceModel";

export default function ReliabilityProject() {
  return (
    <section
      id="machine-reliability"
      className="reliability-project"
    >
      <div className="reliability-container">

        {/* Hero */}
        <div className="reliability-hero">

          <p className="reliability-eyebrow">
            MACHINE RELIABILITY PROJECT
          </p>

          <h2>
            機械信頼性分析・保全最適化
          </h2>

          <p className="reliability-subtitle">
            Machine Reliability & Maintenance Optimization
          </p>

          <p className="reliability-description">
            Weibull分布による故障特性の分析、
            CTMCによる劣化状態のモデル化、
            数値最適化、Monte Carlo Simulationを組み合わせ、
            長期平均コストを最小化する保全方針を検討したプロジェクトです。
          </p>

          <p className="reliability-description-en">
            Reliability analysis, stochastic degradation modeling,
            numerical optimization, and simulation for maintenance
            decision-making.
          </p>

          <a
            href="https://github.com/kitozutomayo-crypto/machine-reliability"
            target="_blank"
            rel="noreferrer"
            className="reliability-github"
          >
            GitHubでコードを見る
            <span>↗</span>
          </a>

        </div>

        {/* Key Results */}
        <div className="reliability-section-heading">
          <div>
            <h3>主な結果</h3>
            <p>Key Results</p>
          </div>
        </div>

        <div className="reliability-results">

          <div className="result-card">
            <div className="result-card-label">
              <span>Weibull 形状パラメータ</span>
              <small>Shape parameter β</small>
            </div>

            <strong>
              {modelInfo.weibullBeta}
            </strong>
          </div>

          <div className="result-card">
            <div className="result-card-label">
              <span>年齢ベース最適交換時期</span>
              <small>
                Age-based optimal replacement
              </small>
            </div>

            <strong>
              {modelInfo.ageBasedOptimalTime}
              <span className="result-unit"> h</span>
            </strong>
          </div>

          <div className="result-card">
            <div className="result-card-label">
              <span>CTMC 最適点検間隔</span>
              <small>
                Optimal inspection interval
              </small>
            </div>

            <strong>
              {referenceResult.optimalInspectionInterval}
              <span className="result-unit"> h</span>
            </strong>
          </div>

          <div className="result-card">
            <div className="result-card-label">
              <span>Monte Carlo 検証値</span>
              <small>Simulated cost rate</small>
            </div>

            <strong>
              {referenceResult.monteCarloCostRate}
              <span className="result-unit"> / h</span>
            </strong>
          </div>

        </div>

        {/* Modeling Flow */}
        <section className="reliability-content-section">

          <div className="reliability-section-heading">
            <div>
              <h3>モデル構築の流れ</h3>
              <p>Modeling Flow</p>
            </div>
          </div>

          <div className="flow-container">

            <div className="flow-item">
              <span className="flow-number">01</span>

              <div>
                <strong>故障データ</strong>
                <small>Failure Data</small>
              </div>
            </div>

            <span className="flow-arrow">→</span>

            <div className="flow-item">
              <span className="flow-number">02</span>

              <div>
                <strong>Weibull 分析</strong>
                <small>Reliability Analysis</small>
              </div>
            </div>

            <span className="flow-arrow">→</span>

            <div className="flow-item">
              <span className="flow-number">03</span>

              <div>
                <strong>CTMC 劣化モデル</strong>
                <small>Degradation Model</small>
              </div>
            </div>

            <span className="flow-arrow">→</span>

            <div className="flow-item">
              <span className="flow-number">04</span>

              <div>
                <strong>保全最適化</strong>
                <small>Optimization</small>
              </div>
            </div>

            <span className="flow-arrow">→</span>

            <div className="flow-item">
              <span className="flow-number">05</span>

              <div>
                <strong>Monte Carlo 検証</strong>
                <small>Validation</small>
              </div>
            </div>

          </div>
        </section>

        {/* Extensions */}
        <section className="reliability-content-section">

          <div className="reliability-section-heading">
            <div>
              <h3>今後の拡張</h3>
              <p>Possible Extensions</p>
            </div>

            <span className="extension-note">
              Future Work
            </span>
          </div>

          <div className="extension-grid">

            <div className="extension-card">
              <span>01</span>
              <h4>
                Markov Decision Process
              </h4>
              <p>
                状態ごとに保全行動を選択し、
                最適な意思決定方策を求める。
              </p>
            </div>

            <div className="extension-card">
              <span>02</span>
              <h4>
                Imperfect Inspection
              </h4>
              <p>
                点検誤差を考慮し、
                より現実的な状態推定モデルへ拡張する。
              </p>
            </div>

            <div className="extension-card">
              <span>03</span>
              <h4>
                Downtime Cost
              </h4>
              <p>
                修理時間や生産停止による損失を
                コストモデルへ追加する。
              </p>
            </div>

            <div className="extension-card">
              <span>04</span>
              <h4>
                Multi-machine Scheduling
              </h4>
              <p>
                複数設備を対象とした
                保全スケジューリング問題へ発展させる。
              </p>
            </div>

          </div>

        </section>

      </div>
    </section>
  );
}