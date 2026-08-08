import './SelfPR.css'

function SelfPR() {
  return (
    <section id="self-pr" className="self-pr">
      <div className="self-pr-container">

        <div className="section-heading">
          <span className="section-number">01</span>
          <p className="section-label">SELF PR</p>
          <h2>自己PR</h2>
        </div>

        <div className="self-pr-content">

          <p className="self-pr-lead">
            常識を問い直し、
            <br />
            物事の本質を考える。
          </p>

          <div className="self-pr-story">
            <p>
              高校二年生のとき、学校のルービックキューブサークルの代表として
              交流大会に出場しました。大会に向けて練習を重ね、
              平均タイムは15秒まで縮まりましたが、
              そこから約3か月間、記録が伸びませんでした。
            </p>

            <p>
              当初は練習量を増やせば記録は伸びると考えていました。
              しかし、原因を分析すると、手順を覚えることばかりに意識が向き、
              次の動きを先読みする力が不足していることに気付きました。
            </p>

            <p>
              そこでトップ選手の試合映像を参考に、
              視線の動きや判断のタイミングを分析し、
              「先読み」を意識した練習へ切り替えました。
            </p>
          </div>

          <div className="self-pr-result">
            <div>
              <span className="result-value">9.88</span>
              <span className="result-unit">sec</span>
              <p>自己ベスト</p>
            </div>

            <div>
              <span className="result-value">2nd</span>
              <p>交流大会 準優勝</p>
            </div>

            <div>
              <span className="result-value">3</span>
              <span className="result-unit">months</span>
              <p>停滞から改善へ</p>
            </div>
          </div>

          <p className="self-pr-conclusion">
            この経験から、目の前の方法をそのまま続けるのではなく、
            「なぜうまくいかないのか」を考え、本質的な原因を捉えて
            改善する姿勢を大切にしています。
          </p>

        </div>
      </div>
    </section>
  )
}

export default SelfPR