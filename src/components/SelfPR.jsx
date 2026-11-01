import "./SelfPR.css";

function SelfPR() {
  return (
    <>
      <section className="selfpr" id="self-pr">
        <div className="selfpr-container">

          <div className="selfpr-top-grid">

            {/* =========================
                STRENGTH / GROWTH ROUTE
            ========================= */}

            <article className="pr-card strength-card">

              <p className="card-label">
                強み / STRENGTH
              </p>

              <h3>
                課題を分析し、
                <br />
                改善しながら成果につなげる力
              </h3>

              <p className="card-description">
                学生生活の中で、
                分野の異なる課題に取り組みながら、
                原因を考え、試し、改善する姿勢を身につけてきました。
              </p>


              <div className="growth-route">

                {/* High School */}
                <div className="growth-item">

                  <div className="growth-year">
                    高校
                  </div>

                  <div className="growth-marker">
                    <span></span>
                  </div>

                  <div className="growth-content">

                    <span className="growth-tag">
                      ANALYSIS
                    </span>

                    <strong>
                      ルービックキューブ大会 準優勝
                    </strong>

                    <p>
                      自分の動きを分析し、
                      練習方法を改善。
                    </p>

                    <div className="growth-highlight">
                      BEST 9.8 sec
                    </div>

                  </div>

                </div>


                {/* University */}
                <div className="growth-item">

                  <div className="growth-year">
                    大学
                  </div>

                  <div className="growth-marker">
                    <span></span>
                  </div>

                  <div className="growth-content">

                    <span className="growth-tag">
                      COMMUNICATION
                    </span>

                    <strong>
                      外国語塾で約2年間
                    </strong>

                    <p>
                      説明会・広報・学生対応を通して、
                      相手に合わせた伝え方を工夫。
                    </p>

                  </div>

                </div>


                {/* Graduate School */}
                <div className="growth-item">

                  <div className="growth-year">
                    大学院
                  </div>

                  <div className="growth-marker">
                    <span></span>
                  </div>

                  <div className="growth-content">

                    <span className="growth-tag">
                      MODELING
                    </span>

                    <strong>
                      Machine Reliability Project
                    </strong>

                    <p>
                      CTMC・最適化・Monte Carloを用いて、
                      保全方針をモデル化。
                    </p>

                    <div className="growth-highlight">
                      Python → Interactive Web
                    </div>

                  </div>

                </div>


                {/* Future */}
                <div className="growth-item growth-future">

                  <div className="growth-year">
                    NEXT
                  </div>

                  <div className="growth-marker">
                    <span></span>
                  </div>

                  <div className="growth-content">

                    <span className="growth-tag">
                      CONTINUE
                    </span>

                    <strong>
                      次の課題へ
                    </strong>

                    <p>
                      数理・IT・Businessを組み合わせながら、
                      新しいテーマに挑戦していきます。
                    </p>

                  </div>

                </div>

              </div>

            </article>


            {/* =========================
                QUALIFICATIONS & SKILLS
            ========================= */}

            <article className="pr-card profile-skills-card">

              <p className="card-label">
                QUALIFICATIONS &amp; SKILLS
              </p>


              {/* Qualifications */}
              <div className="profile-block">

                <h4>
                  Qualifications
                </h4>

                <div className="qualification-grid">

                  <div>
                    <span>Japanese</span>
                    <strong>JLPT N1</strong>
                  </div>

                  <div>
                    <span>English</span>
                    <strong>TOEIC 715</strong>
                  </div>

                  <div>
                    <span>Accounting</span>
                    <strong>日商簿記2級</strong>
                  </div>

                </div>

              </div>


              {/* Skills */}
              <div className="profile-block">

                <h4>
                  Skills
                </h4>


                <div className="study-fields">

                  <div className="field-row">

                    <span className="field-symbol">
                      Σ
                    </span>

                    <div>
                      <strong>
                        数理・分析
                      </strong>

                      <p>
                        確率過程 / Markov / CTMC / 最適化
                      </p>
                    </div>

                  </div>


                  <div className="field-row">

                    <span className="field-symbol">
                      &lt;/&gt;
                    </span>

                    <div>
                      <strong>
                        IT・開発
                      </strong>

                      <p>
                        Python / React / JavaScript / R
                      </p>
                    </div>

                  </div>


                  <div className="field-row">

                    <span className="field-symbol">
                      ¥
                    </span>

                    <div>
                      <strong>
                        Business
                      </strong>

                      <p>
                        簿記 / 金融 / 経営システム
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* Experience Mini Block */}
              <div className="profile-block">

                <h4>
                  Internship Experience
                </h4>

                <div className="mini-experience-list">

                  <div className="mini-experience-item">
                    <span>UPCOMING</span>

                    <strong>
                      日本総合研究所
                    </strong>

                    <p>
                      PM 1Day Internship
                    </p>
                  </div>


                  <div className="mini-experience-item">
                    <span>5DAYS</span>

                    <strong>
                      NTT-ME
                    </strong>

                    <p>
                      Internship
                    </p>
                  </div>


                  <div className="mini-experience-item">
                    <span>1DAY</span>

                    <strong>
                      中央コンピュータシステム
                    </strong>

                    <p>
                      仕事体験
                    </p>
                  </div>


                  <div className="mini-experience-item">
                    <span>1DAY</span>

                    <strong>
                      テクノプロ・IT社
                    </strong>

                    <p>
                      仕事体験
                    </p>
                  </div>


                  <div className="mini-experience-item">
                    <span>1DAY</span>

                    <strong>
                      ユニリタグループ
                    </strong>

                    <p>
                      仕事体験
                    </p>
                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>
      </section>

      
    </>
  );
}

export default SelfPR;