import Navbar from '../components/Navbar';
import './About.css';

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <header className="about-hero">
          <h1>About Educative Excellence</h1>
          <p className="hero-tagline">Empowering students through collaborative learning</p>
        </header>

        <div className="about-content">
          {/* Mission Statement */}
          <section className="about-section mission">
            <h2>🎯 Our Mission</h2>
            <p>
              Student Learning Hub is dedicated to creating a collaborative educational environment where students 
              can connect, share knowledge, and achieve academic excellence together. We believe that learning is 
              most effective when students actively engage with peers, track their progress, and stay motivated 
              through meaningful rewards.
            </p>
          </section>

          {/* Core Values */}
          <section className="about-section values">
            <h2>💎 Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>We believe in the power of peer learning and knowledge sharing</p>
              </div>
              <div className="value-card">
                <div className="value-icon">📈</div>
                <h3>Growth</h3>
                <p>Continuous improvement through tracking and self-reflection</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Motivation</h3>
                <p>Gamification and rewards to keep students engaged</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h3>Excellence</h3>
                <p>Striving for academic achievement and personal development</p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="about-section how-it-works">
            <h2>🔧 How It Works</h2>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Create Your Profile</h3>
                <p>Sign up and personalize your learning dashboard</p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Join Study Sessions</h3>
                <p>Connect with peers and participate in collaborative learning</p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Track Your Progress</h3>
                <p>Monitor your academic growth with visual analytics</p>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h3>Earn Rewards</h3>
                <p>Get points for engagement and unlock exclusive perks</p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="about-section features">
            <h2>✨ Key Features</h2>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-bullet">📚</span>
                <div>
                  <h4>Study Sessions</h4>
                  <p>Join or host collaborative study sessions with peers</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">📊</span>
                <div>
                  <h4>Progress Tracking</h4>
                  <p>Visualize your academic progress across all subjects</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">🏆</span>
                <div>
                  <h4>Rewards System</h4>
                  <p>Earn points and unlock digital rewards and school perks</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">📖</span>
                <div>
                  <h4>Resource Library</h4>
                  <p>Access and share study materials with the community</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">💬</span>
                <div>
                  <h4>Community Forums</h4>
                  <p>Discuss topics and get help from fellow students</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">🔥</span>
                <div>
                  <h4>Streak System</h4>
                  <p>Build daily learning habits with streak tracking</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & FAQ */}
          <section className="about-section contact-faq">
            <div className="contact-box">
              <h2>📧 Contact Us</h2>
              <p>Have questions or feedback? We'd love to hear from you!</p>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>

            <div className="faq-box">
              <h2>❓ FAQ</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h4>How do I earn points?</h4>
                  <p>Complete quizzes, attend sessions, upload resources, and maintain daily login streaks!</p>
                </div>
                <div className="faq-item">
                  <h4>Can I create my own study session?</h4>
                  <p>Yes! Click "Create Session" on the Study Sessions page and earn 25 points for hosting.</p>
                </div>
                <div className="faq-item">
                  <h4>What can I do with my points?</h4>
                  <p>Spend points on digital rewards like themes and badges, or school perks like homework passes!</p>
                </div>
                <div className="faq-item">
                  <h4>Is my progress data private?</h4>
                  <p>Yes! Your personal progress and data are only visible to you.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Statement */}
          <section className="about-section accessibility">
            <h2>♿ Accessibility Commitment</h2>
            <p>
              We are committed to making Student Learning Hub accessible to all students. Our platform follows 
              web accessibility guidelines (WCAG 2.1) to ensure everyone can participate in collaborative learning. 
              If you encounter any accessibility barriers, please contact us so we can improve.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;