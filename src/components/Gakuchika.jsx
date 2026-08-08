import './Gakuchika.css'

function Gakuchika() {
  return (
    <section id="gakuchika" className="gakuchika">
      <div className="gakuchika-container">

        <div className="section-heading">
          <span className="section-number">02</span>
          <p className="section-label">GAKUCHIKA</p>
          <h2>学生時代に力を入れたこと</h2>
        </div>

        <div className="gakuchika-content">

          <div className="gakuchika-intro">
            <p className="gakuchika-lead">
              相手を理解し、
              <br />
              伝え方を変える。
            </p>

            <p className="gakuchika-summary">
              日本語塾の留学説明会で約2年間、
              参加者に日本留学や日本語学習について伝える活動に取り組みました。
            </p>
          </div>

          <div className="gakuchika-points">

            <article>
              <span>01</span>
              <h3>Listen</h3>
              <p>
                参加者が抱えている不安や、
                日本留学に期待していることを個別に聞きました。
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Think</h3>
              <p>
                進学、日本語学習、日本での生活など、
                相手の関心に合わせて伝える内容を整理しました。
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Communicate</h3>
              <p>
                自身のN1取得や大学院進学の経験も交えながら、
                5〜10分程度の説明を約10回担当しました。
              </p>
            </article>

          </div>

          <div className="gakuchika-result">
            <p className="result-caption">WHAT I LEARNED</p>
            <p>
              自分が伝えたいことから考えるのではなく、
              相手が「何を知りたいのか」を起点に情報を整理することで、
              コミュニケーションはより伝わりやすくなると学びました。
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Gakuchika