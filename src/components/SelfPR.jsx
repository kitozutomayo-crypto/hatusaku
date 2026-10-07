import "./SelfPR.css";
import nttMePhoto from "../assets/ntt-me.jpeg";
import Personal from "./Personal";

function SelfPR() {
  return (
  <>
    <section className="selfpr" id="self-pr">
      <div className="selfpr-container">

        {/* Header */}
       
        {/* Top Grid */}
        <div className="selfpr-top-grid">

          {/* Strength */}
          <article className="pr-card strength-card">
            <p className="card-label">MY STRENGTH</p>

            <h3>
              課題を分析し、
              <br />
              改善につなげる力
            </h3>

            <p className="card-description">
              現状をそのまま受け入れるのではなく、
              原因を考え、より良い方法を試しながら
              改善していくことが得意です。
            </p>

            <div className="rubik-area">
              <div className="rubik-title">
                <span className="cube-icon">◆</span>
                <div>
                  <strong>ルービックキューブ
                  </strong>
                  <p>
                    高校時代、サークルの代表として大会に出場。
                    自分の動きを分析し、練習方法を改善しました。
                  </p>
                </div>
              </div>

              <div className="rubik-result">
                <div className="result-box">
                  <span>START</span>
                  <strong>15秒台</strong>
                </div>

                <div className="result-arrow">→</div>

                <div className="result-box result-main">
                  <span>BEST</span>
                  <strong>9.8秒</strong>
                </div>

                <div className="result-box">
                  <span>RESULT</span>
                  <strong>32名中 準優勝</strong>
                </div>
              </div>
            </div>
          </article>


          {/* Right column */}
          <div className="selfpr-right-column">

            {/* Language */}
            <article className="pr-card">
              <p className="card-label">LANGUAGE</p>

              <div className="language-grid">
                <div className="language-item">
                  <span>日本語</span>
                  <strong>N1</strong>
                  <small>JLPT</small>
                </div>

                <div className="language-item">
                  <span>英語</span>
                  <strong>715</strong>
                  <small>TOEIC</small>
                </div>

                <div className="language-item">
                  <span>中国語</span>
                  <strong className="native-text">Native</strong>
                  <small>母語</small>
                </div>
              </div>
            </article>


            {/* Qualification */}
            <article className="pr-card">
              <p className="card-label">QUALIFICATION</p>

              <div className="qualification-grid">
                <div>
                  <span>取得済み</span>
                  <strong>日商簿記3級</strong>
                </div>

                <div>
                  <span>現在学習中</span>
                  <strong>日商簿記2級</strong>
                </div>

                <div>
                  <span>Interest</span>
                  <strong>IT・金融</strong>
                </div>
              </div>
            </article>

          </div>
        </div>


        {/* Study */}
        <article className="pr-card study-card">
          <div className="study-heading">
            <p className="card-label">STUDY &amp; RESEARCH</p>

            <h3>法政大学大学院</h3>

            <p className="study-course">
              理工学研究科・経営システム工学専攻
            </p>
          </div>

          <div className="study-content">

            <div className="study-fields">
              <h4>学んでいること</h4>

              <div className="field-row">
                <span className="field-symbol">Σ</span>
                <div>
                  <strong>数理</strong>
                  <p>確率・統計 / マルコフ連鎖 / 確率過程</p>
                </div>
              </div>

              <div className="field-row">
                <span className="field-symbol">&lt;/&gt;</span>
                <div>
                  <strong>IT</strong>
                  <p>Python / R / Web開発</p>
                </div>
              </div>

              <div className="field-row">
                <span className="field-symbol">¥</span>
                <div>
                  <strong>Business</strong>
                  <p>簿記 / 金融 / 経営システム</p>
                </div>
              </div>
            </div>


            {/* R example */}
            <div className="simulation-card">
              <div className="simulation-header">
                <div>
                  <span>EXAMPLE</span>
                  <strong>Rでマルコフ連鎖をシミュレーション</strong>
                </div>

                <span className="r-badge">R</span>
              </div>

              <div className="simulation-body">

                <pre className="r-code">
{`P <- matrix(c(
  0.7, 0.2, 0.1,
  0.3, 0.4, 0.3,
  0.2, 0.3, 0.5
), nrow = 3)

state <- sample(1:3, 1)

for(i in 1:1000){
  state <- sample(
    1:3, 1,
    prob = P[state, ]
  )
}`}
                </pre>

                <div className="chart-area">
                  <p>State probability</p>

                  <svg
                    viewBox="0 0 260 150"
                    className="markov-chart"
                    aria-label="Markov chain simulation example"
                  >
                    <line x1="35" y1="15" x2="35" y2="125" />
                    <line x1="35" y1="125" x2="245" y2="125" />

                    <line
                      className="grid-line"
                      x1="35"
                      y1="45"
                      x2="245"
                      y2="45"
                    />
                    <line
                      className="grid-line"
                      x1="35"
                      y1="85"
                      x2="245"
                      y2="85"
                    />

                    <polyline
                      className="chart-line"
                      points="40,52 70,63 100,77 130,71 160,88 190,74 220,79 242,70"
                    />

                    <circle cx="40" cy="52" r="4" />
                    <circle cx="100" cy="77" r="4" />
                    <circle cx="160" cy="88" r="4" />
                    <circle cx="220" cy="79" r="4" />
                  </svg>
                </div>

              </div>

              <p className="simulation-note">
                理論だけでなく、Rを使って実際の動きを確認しながら理解しています。
              </p>
            </div>

          </div>
        </article>


        {/* Experience */}
        <article className="pr-card experience-card">
          <div className="experience-heading">
            <p className="card-label">EXPERIENCE</p>
            <h3>インターンシップ・仕事体験</h3>
          </div>

          <div className="experience-content">

            <div className="experience-photo">
              <img
                src={nttMePhoto}
                alt="NTT-ME 5Daysインターンシップ"
              />

              <div className="photo-caption">
                <strong>NTT-ME</strong>
                <span>5Days Internship</span>
              </div>
            </div>


            <div className="experience-list">

              <div className="experience-item featured">
                <span className="experience-dot"></span>

                <div>
                  <div className="experience-title">
                    <strong>NTT-ME</strong>
                    <span>5Days インターンシップ</span>
                  </div>

                  <p>
                    通信インフラを支える仕事について、
                    グループワークや現場での体験を通して理解を深めました。
                  </p>
                </div>
              </div>


              <div className="experience-item">
                <span className="experience-dot"></span>

                <div>
                  <div className="experience-title">
                    <strong>中央コンピュータシステム</strong>
                    <span>1Day 仕事体験</span>
                  </div>
                </div>
              </div>


              <div className="experience-item">
                <span className="experience-dot"></span>

                <div>
                  <div className="experience-title">
                    <strong>テクノプロ・IT社</strong>
                    <span>1Day 仕事体験</span>
                  </div>
                </div>
              </div>


              <div className="experience-item">
                <span className="experience-dot"></span>

                <div>
                  <div className="experience-title">
                    <strong>ユニリタグループ</strong>
                    <span>1Day 仕事体験</span>
                  </div>
                </div>
              </div>


              <div className="experience-more">
                <span>•••</span>
                <p>さまざまな企業・仕事に触れながら、視野を広げています。</p>
              </div>

            </div>
          </div>
        </article>

      </div>
    </section>
        <Personal />
  </>
    
  );

}

export default SelfPR;