import "./Hero.css";
import profileImage from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Profile Photo */}
        <div className="hero-photo-wrapper">
          <img
            src={profileImage}
            alt="陳文康"
            className="hero-photo"
          />
        </div>

        {/* Name */}
        <h1 className="hero-name">陳 文康</h1>

        <p className="hero-name-sub">
          CHEN WENKANG <span>·</span> チン ブンコウ
        </p>

        <div className="hero-line"></div>

        {/* Education */}
        <div className="hero-education">
          <p className="hero-university">中南林業科技大学</p>

          <p className="hero-university">法政大学大学院</p>
          <p className="hero-department">
            理工学研究科・経営システム工学専攻
          </p>
        </div>

        {/* Japan */}
        <p className="hero-japan">
          2024.10　来日
        </p>

        {/* Interests */}
        <div className="hero-interests">
          <p className="hero-interests-title">得意・興味分野</p>

          <div className="hero-tags">
            <span>数理</span>
            <span>IT</span>
            <span>金融</span>
          </div>
        </div>

        {/* Scroll */}
        

      </div>
    </section>
  );
}

export default Hero;