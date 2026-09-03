import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Sparkles,
} from "lucide-react";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer"
import Clients from "./clients";


const slides = [
  {
    eyebrow: "Digital innovation",
    title: "We build digital experiences that move businesses forward.",
    text: "We design, develop and scale powerful digital experiences for ambitious brands around the world.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85",
  },
  {
    eyebrow: "Digital products",
    title: "Transform ideas into powerful digital products.",
    text: "From strategy to development, we create technology that delivers measurable business impact.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=85",
  },
  {
    eyebrow: "Global technology",
    title: "Technology built for global growth.",
    text: "Helping businesses innovate, scale and compete in an increasingly digital world.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85",
  },
  {
    eyebrow: "Build. Scale. Lead.",
    title: "Your vision. Our technology.",
    text: "We combine creativity, technology and strategy to build experiences that matter.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Software Development",
  "E-Commerce",
  "Digital Marketing",
  "AI & Automation",
  "Cloud Solutions",
];
const industries = [
  "Healthcare",
  "Fintech",
  "E-Commerce",
  "Education",
  "Real Estate",
  "Travel",
  "Manufacturing",
];
const locations = [
  "India",
  "United Kingdom",
  "United States",
  "UAE",
  "Singapore",
  "Australia",
];
const projects = [
  {
    number: "01",
    name: "Noma Health",
    industry: "Healthcare",
    result: "A patient-first platform that made care more accessible.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: "02",
    name: "Fintide",
    industry: "Fintech",
    result: "A bold product experience for the next generation of finance.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
  },
  {
    number: "03",
    name: "Arcline",
    industry: "Real estate",
    result: "Turning complex property data into confident decisions.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
];

function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = slides[slide];

  return (
    <main>
      <Navbar/>
      <section className="hero relative overflow-hidden" id="top">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide}
            className="absolute inset-0 z-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{
              duration: 7,
              ease: "easeOut",
            }}
            style={{
              backgroundImage: `
        linear-gradient(
          90deg,
          rgba(9,9,9,.92) 0%,
          rgba(9,9,9,.65) 45%,
          rgba(9,9,9,.25) 100%
        ),
        url(${current.image})
      `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>

        {/* Content */}
        <div className="hero-content relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="eyebrow">
                <i /> {current.eyebrow}
              </p>

              <h1>{current.title}</h1>

              <p className="hero-copy">{current.text}</p>

              <div className="hero-actions">
                <a className="button button-green" href="#contact">
                  Start a Project
                  <ArrowRight size={18} />
                </a>

                <a className="button button-ghost" href="#work">
                  Explore Our Work
                  <ArrowDownRight size={18} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="hero-footer relative  ">
          <span className="slide-count">
            0{slide + 1} <b>/ 0{slides.length}</b>
          </span>

          <div className="dots">
            {slides.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={index === slide ? "active" : ""}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>

          <div className="hero-note">
            Scroll to explore
            <ArrowDownRight size={16} />
          </div>
        </div>
      </section>

      <section className="trusted">
        <p>Trusted by ambitious teams worldwide</p>
        <div className="logo-row">
          <b>
            northern<span>star</span>
          </b>
          <b>vertex</b>
          <b>FORMA</b>
          <b>◎ orbit</b>
          <b>VANTAGE</b>
        </div>
      </section>

    <Clients/>

      <section className="section services" id="services">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">
              <i /> What we do
            </p>
            <h2>
              Digital craft with
              <br />
              <em>business purpose.</em>
            </h2>
          </div>
          <p>
            We bring strategy, creativity and engineering together to solve
            meaningful problems and create lasting value.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <a className="service-card" href="#contact" key={service}>
              <span>0{index + 1}</span>
              <h3>{service}</h3>
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>

      <section className="section companies section-light" id="companies">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">
              <i /> The iHumming group
            </p>
            <h2>
              Many disciplines.
              <br />
              <em>One shared ambition.</em>
            </h2>
          </div>
          <a className="text-link" href="#contact">
            Meet our companies <ArrowRight size={17} />
          </a>
        </div>
        <div className="company-grid">
          <article>
            <div className="company-mark">◒</div>
            <h3>iHumming Digital</h3>
            <p>End-to-end digital products for a connected world.</p>
            <a href="#contact">
              Explore <ArrowRight size={15} />
            </a>
          </article>
          <article>
            <div className="company-mark">✦</div>
            <h3>iHumming Labs</h3>
            <p>Emerging technology and intelligent automation.</p>
            <a href="#contact">
              Explore <ArrowRight size={15} />
            </a>
          </article>
          <article>
            <div className="company-mark">◈</div>
            <h3>iHumming Studio</h3>
            <p>Brand systems and experiences built to be remembered.</p>
            <a href="#contact">
              Explore <ArrowRight size={15} />
            </a>
          </article>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">
              <i /> Selected work
            </p>
            <h2>
              Ideas made
              <br />
              <em>real.</em>
            </h2>
          </div>
          <a className="text-link" href="#contact">
            View all work <ArrowRight size={17} />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-image">
                <img src={project.image} alt="" />
                <span>{project.number}</span>
              </div>
              <p className="project-meta">{project.industry}</p>
              <h3>{project.name}</h3>
              <p>{project.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section industries section-light" id="industries">
        <div className="section-intro">
          <p className="eyebrow">
            <i /> Across industries
          </p>
          <h2>
            Deep experience.
            <br />
            <em>Fresh perspective.</em>
          </h2>
        </div>
        <div className="industry-list">
          {industries.map((industry, index) => (
            <a href="#contact" key={industry}>
              <span>0{index + 1}</span>
              {industry}
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>

      <section className="presence section-dark" id="about">
        <div>
          <p className="eyebrow">
            <i /> Global presence
          </p>
          <h2>
            Close to you.
            <br />
            <em>Connected everywhere.</em>
          </h2>
          <p className="presence-copy">
            From our homes in India to partners across the globe, we bring
            diverse perspectives to every challenge.
          </p>
        </div>
        <div className="world">
          <Globe2 size={260} strokeWidth={0.7} />
          <div className="pin pin-one" />
          <div className="pin pin-two" />
          <div className="pin pin-three" />
        </div>
        <div className="locations">
          {locations.map((location) => (
            <span key={location}>{location}</span>
          ))}
        </div>
      </section>

      <section className="testimonial section" id="blog">
        <Sparkles className="quote-icon" />
        <blockquote>
          “iHumming didn't just deliver a product. They helped us see what was
          possible, then made it real.”
        </blockquote>
        <p>
          <b>Arjun Mehta</b> &nbsp; / &nbsp; Chief Product Officer, Fintide
        </p>
      </section>

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">
            <i /> Let’s work together
          </p>
          <h2>
            Let’s build something
            <br />
            <em>remarkable.</em>
          </h2>
          <p>
            Have a challenge, an idea, or simply want to talk? We’re all ears.
          </p>
          <a className="button button-green" href="mailto:hello@ihumming.com">
            Start a Project <ArrowRight size={18} />
          </a>
        </div>
        <div className="cta-circle">↗</div>
      </section>

      <Footer />
    </main>
  );
}

export default Hero;
