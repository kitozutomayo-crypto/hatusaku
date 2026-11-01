import "./Story.css";

function Story() {
  return (
    <section className="story" id="story">

      <div className="story-notes">

        {/* Section title */}
        <div className="story-title">
          <h2>言葉と文化のあいだで。</h2>
        </div>


        {/* Japanese */}
        <article className="story-note note-japanese">
          <p>
            知らないことを理解していく時間が好きです。
            数学を学ぶことも、コードを書くことも、
            知らない街を歩くことも、
            私の中ではどこか似ています。
          </p>

          <p>
            最初はよく分からなかったものが、
            少しずつ形になっていく。
            その瞬間に、いつも面白さを感じます。
          </p>

          <p>
            中国から日本へ来たことも、
            その延長線上にあったのかもしれません。
            まだ知らないものを、
            これからも自分の目で見てみたいと思っています。
          </p>
        </article>


        {/* Chinese */}
        <article className="story-note note-chinese">
          <p>
            很多事情开始的时候，
            我其实都不知道自己最后会走到哪里。
          </p>

          <p>
            学日语是这样，来到日本是这样，
            现在学习数学和编程也是这样。
            我好像并不是一个很早就知道自己想要什么的人。
          </p>

          <p>
            但回头看，那些当时只是因为
            “有点喜欢”“有点好奇”而做出的选择，
            最后一点点连成了现在的生活。
          </p>

          <p>
            所以现在的我，
            比以前更愿意相信自己的好奇心。
          </p>
        </article>


        {/* English */}
        <article className="story-note note-english">
          <p>
            I still don’t know exactly where I will end up.
            But there are still many things I want to see,
            learn, understand, and build.
          </p>

          <p>
            I think that is enough for now.
          </p>
        </article>

      </div>

    </section>
  );
}

export default Story;