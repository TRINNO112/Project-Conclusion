import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <div 
        className="spotlight"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      <section id="intro" className="story-section">
        <div className="content-wrapper">
          <motion.h1 
            className="text-huge"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeUpVariant}
          >
            Hey Akari.
          </motion.h1>
          <motion.p 
            className="text-large"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeUpVariant}
          >
            I need to show you this. I have something important to tell you, and something to ask you. 
          </motion.p>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={24} color="#888" />
          <div className="scroll-line"></div>
        </div>
      </section>

      <section id="apology" className="story-section">
        <div className="content-wrapper">
          <motion.h2 
            className="text-huge"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeUpVariant}
            style={{ color: '#ff4d4d', marginBottom: '3rem' }}
          >
            I am truly sorry.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p className="apology-text" variants={fadeUpVariant}>
              I am really, really sorry. I always seem to mess things up like this, and this entire situation was 100% my mistake. I literally fucked up.
            </motion.p>

            <motion.p className="apology-text" variants={fadeUpVariant}>
              I failed to value human emotions. Because of my own idiotic sense and my inability to handle the situation maturely, I caused you a lot of unnecessary pain and confusion. You were honest and vulnerable with me, and instead of returning that respect, I was useless, defensive, and incredibly cold.
            </motion.p>

            <motion.p className="apology-text" variants={fadeUpVariant}>
              I should have been honest with you from the start. I shouldn't have lied, and I shouldn't have tried to manipulate the way you see me. I am deeply sorry for treating you that way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="realization" className="story-section">
        <div className="content-wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-large" variants={fadeUpVariant}>
              Where I Really Fucked Up.
            </motion.h2>
            
            <motion.p className="text-body" variants={fadeUpVariant}>
              Looking back at the reality of how I acted, it's clear I handled this in the worst possible way. Instead of being honest, I panicked and made terrible mistakes:
            </motion.p>

            <motion.p className="text-body" variants={fadeUpVariant}>
              <span className="highlight">1. I acted out a toxic persona influenced by social media.</span> I didn't entirely make this story up out of thin air. My thinking and perception of how to handle this were heavily skewed by toxic social media mindsets. Instead of just saying I only saw you as a friend, I let that internet garbage influence my behavior, and I tried to force you to think I was a misogynistic monster just to push you away.
            </motion.p>

            <motion.p className="text-body" variants={fadeUpVariant}>
              <span className="highlight">2. The "Pedophile" comment.</span> I am 17 and you are younger. Bringing up the age gap by aggressively saying "I'm not a pedophile" was incredibly jarring. It made your innocent feelings sound like something disgusting or illegal.
            </motion.p>

            <motion.p className="text-body" variants={fadeUpVariant}>
              <span className="highlight">3. I treated your feelings like a science experiment.</span> When you were brave enough to say "I can't hide my feelings for you," my response was cold and robotic ("Well bro, upon learning my personality..."). I completely ignored your vulnerability and analyzed it instead of acknowledging your humanity. You deserved comfort and honesty in that vulnerable moment, not an analytical debate.
            </motion.p>

            <motion.p className="text-body" variants={fadeUpVariant}>
              <span className="highlight">4. I didn't respect your boundaries.</span> You clearly and maturely asked to stop talking. Instead of respecting that and letting you heal, I kept provoking you, asking "why?" and mocking the situation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="feedback" className="story-section">
        <div className="content-wrapper">
          <motion.h2 
            className="text-huge"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeUpVariant}
          >
            How We Move Forward.
          </motion.h2>

          <motion.p 
            className="text-body"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeUpVariant}
          >
            Akari, we can come up with a plan to figure this out together, but if you don't want to talk anymore, it is absolutely okay. Here are some options that I would like to recommend:
          </motion.p>

          <motion.div 
            className="plan-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div className="plan-step" variants={fadeUpVariant}>
              <div className="step-number">A</div>
              <div className="step-content">
                <h3>Absolute Distance</h3>
                <p>We stop talking completely, just like you asked. I walk away, respect your boundary, and give you the peace and space you deserve.</p>
              </div>
            </motion.div>

            <motion.div className="plan-step" variants={fadeUpVariant}>
              <div className="step-number">B</div>
              <div className="step-content">
                <h3>Clear the Air</h3>
                <p>We have one final, honest conversation to talk through this properly—no fake personas, no lies, and no cold responses—just to get complete closure.</p>
              </div>
            </motion.div>

            <motion.div className="plan-step" variants={fadeUpVariant}>
              <div className="step-number">C</div>
              <div className="step-content">
                <h3>Your Terms</h3>
                <p>Whatever you think is best. The ball is entirely in your court, and I will follow your lead.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="feedback-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUpVariant}
            style={{ textAlign: 'center', padding: '3rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>You don't need to explain anything right now.</h3>
            <p className="text-body" style={{ margin: 0 }}>
              There is absolutely no time limit to this. Reply today, next week, or never.<br/>
              Whenever you're ready, just text me <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>. I will understand completely.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeUpVariant} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            style={{ marginTop: '6rem', textAlign: 'center' }}
          >
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--text-muted)' }}>
              Sincerely,<br/>
              <span style={{ fontSize: '2.5rem', color: 'var(--text-main)', display: 'inline-block', marginTop: '1rem', fontWeight: '400' }}>Trinno</span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default App;
