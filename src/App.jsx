import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  Sparkles,
  Flower2,
  Camera,
  Cookie,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="small-title">
            <Sparkles size={18} />
            A little something for you
            <Sparkles size={18} />
          </div>

          <h1>
            Happy Teacher's Day,
            <span> Amma ❤️</span>
          </h1>

          <p>
            To the teacher who inspires many,
            <br />
            and the person who inspires me the most.
          </p>

          <motion.div
            className="heart"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart fill="currentColor" size={42} />
          </motion.div>
        </motion.div>

        <div className="scroll-hint">
          ↓ Scroll to discover your surprise ↓
        </div>
      </section>

      {/* About Mom */}
      <section className="section about">
        <Flower2 className="section-icon" size={35} />

        <h2>More Than A Teacher</h2>

        <p>
          You teach your students lessons they will remember for a lifetime.
          But at home, you taught me something even more precious — how to be
          kind, patient, strong and never stop learning.
        </p>

        <p>
          You may be a teacher to many, but to me, you will always be my
          <strong> first and most important teacher.</strong>
        </p>
      </section>

      {/* Photo Section */}
      <section className="section memories">
        <div className="section-heading">
          <Camera size={35} />
          <h2>Our Little Memories</h2>
        </div>

        <p className="memory-intro">
          Some moments may look simple, but they are the ones I will always
          keep close to my heart. ❤️
        </p>

        <div className="photo-grid">
          <motion.div
            className="photo-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/photos/mom-daughters.jpeg"
              alt="A beautiful memory with Amma"
            />
            <p>Our first teacher ❤️</p>
          </motion.div>

          <motion.div
            className="photo-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/photos/mom-me-2.jpeg"
              alt="A special memory with Amma"
            />
            <p>One of my favourite memories with you, Amma ❤️</p>
          </motion.div>
        </div>
      </section>

      {/* Snacks Memory */}
      <section className="section snack-memory">
        <motion.div
          className="snack-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Cookie className="section-icon" size={38} />

          <h2>The Little Things You Did For Us</h2>

          <p>
            I still remember how, whenever there was a function or special
            program at your school, you would bring the snacks given to you
            all the way home...
          </p>

          <p>
            Not because you had to, but because you always thought of
            <strong> me and aanu. ❤️</strong>
          </p>

          <p>
            Those little packets of snacks may have seemed like such a small
            thing, but to me they meant so much🍪.
          </p>

          

          <div className="snack-highlight">
            
            <div>
              <h3>“Amma, you always remembered us.”</h3>
              <p>
                Even in the middle of your busy school days, you would think
                about what you could bring home for your daughters.
              </p>
            </div>
            <span>❤️</span>
          </div>
        </motion.div>
      </section>

      {/* Teacher Qualities */}
      <section className="section qualities">
        <div className="section-heading">
          <BookOpen size={35} />
          <h2>What Makes You Special</h2>
        </div>

        <div className="cards">
          <div className="card">
            <span>🌷</span>
            <h3>Patient</h3>
            <p>You are the calmest person i have ever seen in my life.</p>
          </div>

          <div className="card">
            <span>✨</span>
            <h3>Inspiring</h3>
            <p>You inspire me in all ways.</p>
          </div>

          <div className="card">
            <span>❤️</span>
            <h3>Caring</h3>
            <p>Your kindness makes everyone around you feel special.</p>
          </div>

          <div className="card">
            <span>🌱</span>
            <h3>Dedicated</h3>
            <p>You give your very best to everyone.</p>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="final">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Heart className="final-heart" fill="currentColor" size={45} />

          <h2>One Last Thing...</h2>

          <p>
            Before you were my teacher,
            <br />
            you were my Mom.
          </p>

          <p>
            And if I ever become even half the person you are,
            <br />
            I'll know I learned from the best.
          </p>

          <p>
            Thanks for everything you have been for me and aanu.
          </p>
          <p>
            Most of the time we hurted you unknowingly, but you never stopped loving us.❤️
          </p>

          <h3>Happy Teacher's Day, Vani Amma ❤️</h3>

          <div className="signature">
            With all my love,
            <br />
            <strong>Achu❤️</strong>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default App;