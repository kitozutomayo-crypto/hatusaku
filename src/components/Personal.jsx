import "./Personal.css";

import zutomayo from "../assets/personal/zutomayo.jpeg";
import railway from "../assets/personal/railway.jpeg";
import ski from "../assets/personal/ski.jpeg";
import travel from "../assets/personal/travel.jpeg";
import fashion from "../assets/personal/fashion.jpeg";
import snooker from "../assets/personal/snooker.jpeg";

function Personal() {
  return (
    <section className="personal-section">

      {/* ==============================
          PAGE 1 — Main interests
      ============================== */}
      <div className="personal-page personal-main">

        <header className="personal-header">
          <h2>好きなもの、好きな時間。</h2>
          <p>ここからは、少しだけ普段の自分を。</p>
        </header>

        <div className="main-scrapbook">

          {/* ZUTOMAYO */}
          <article className="scrap-item zutomayo-item">

            <div className="scrap-photo">
              <img src={zutomayo} alt="ZUTOMAYOのグッズ" />
              
            </div>

            <div className="scrap-content">
              

              <h3>ずっと真夜中でいいのに</h3>

              <p>
                日本へのふれあいのきっかけ、一番夢中になったアーティスト
              </p>
            </div>

          </article>


          {/* Railway */}
          <article className="scrap-item railway-item">

            <div className="scrap-photo">
              <img src={railway} alt="雪の日の鉄道" />
             
            </div>

            <div className="scrap-content">
              

              <h3>移動する時間も、旅の一部。</h3>

              <p>
                鉄道マニアとは言えないけど、普通に電車を乗るのが好きです
              </p>
            </div>

          </article>


          {/* Ski */}
          <article className="scrap-item ski-item">

            <div className="scrap-photo">
              <img src={ski} alt="スキーを楽しんだ日の写真" />
              
            </div>

            <div className="scrap-content">
              

              <h3>新しいことを、一緒に。</h3>

              <p>
                大切な人と一緒に、初めての場所へ行ったり、
                新しいことを体験したりする時間が好きです。
              </p>
            </div>

          </article>

        </div>
      </div>


     {/* ==============================
    PAGE 2 — More about me
============================== */}
<div className="personal-page personal-more">

  <div className="more-heading">
    <span>AND MORE...</span>
    <h2>日常でささいなこと。</h2>
  </div>

  <div className="more-grid">

    {/* Travel */}
    <article className="more-item travel-item">

      <div className="more-photo">
        <img src={travel} alt="旅行先の景色" />
      </div>

      <div className="more-content">
       

        <h3>知らない景色に出会う。</h3>

        <p>
          知らない街を歩いたり、その土地ならではの
          景色を見るのが好きです。
        </p>
      </div>

    </article>


    {/* Fashion */}
    <article className="more-item fashion-item">

      <div className="more-photo">
        <img src={fashion} alt="ファッション" />
      </div>

      <div className="more-content">
        

        <h3>服も、自分らしさの一つ。</h3>

        <p>
          服を見るのも買うのも好き。
          自分らしい組み合わせを考えるのも楽しみです。
        </p>
      </div>

    </article>


    {/* Snooker */}
    <article className="more-item snooker-item">

      <div className="more-photo">
        <img src={snooker} alt="スヌーカー" />
      </div>

      <div className="more-content">
        

        <h3>人生を貫くスポーツかも</h3>

        <p>
          スヌーカーが好きで、プレッシャーを解消して一番いい方法
        </p>
      </div>

    </article>

  </div>
</div>

    </section>
  );
}

export default Personal;