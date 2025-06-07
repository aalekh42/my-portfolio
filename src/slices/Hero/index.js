"use client";

import { PrismicRichText } from "@prismicio/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  Code, 
  User, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Download,
  Briefcase,
  Languages,
  Zap
} from "lucide-react";
import "./styles.scss";

const Hero = ({ slice }) => {
  const containerRef = useRef(null);
  const profileCardRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const profileCard = profileCardRef.current;
    const content = contentRef.current;
    const sidebar = sidebarRef.current;
    const stats = statsRef.current;

    if (!container || !profileCard || !content || !sidebar || !stats) return;

    // Set initial states
    gsap.set([profileCard, content, sidebar, stats], { 
      opacity: 0, 
      y: 50 
    });

    gsap.set(sidebar, { x: -50 });
    gsap.set(profileCard, { x: -30, rotationY: -15 });

    // Create animation timeline
    const tl = gsap.timeline({ delay: 0.2 });

    // Animate sidebar
    tl.to(sidebar, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    // Animate profile card
    .to(profileCard, {
      opacity: 1,
      x: 0,
      y: 0,
      rotationY: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.4")

    // Animate main content
    .to(content, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.6")

    // Animate stats
    .to(stats, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");

    // Animate text elements
    const textElements = content.querySelectorAll('.hero__text-reveal');
    textElements.forEach((element, index) => {
      gsap.fromTo(element, {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1.2 + (index * 0.1),
        ease: "power2.out",
      });
    });

    // Animate skill badges
    const skillBadges = container.querySelectorAll('.hero__skill-badge');
    skillBadges.forEach((badge, index) => {
      gsap.fromTo(badge, {
        scale: 0,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        delay: 1.8 + (index * 0.1),
        ease: "back.out(1.7)",
      });
    });

    // Floating animation for profile card
    gsap.to(profileCard, {
      y: -10,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  const handleDownloadCV = () => {
    // CV download logic
    console.log("Downloading CV...");
  };

  const handleContactClick = () => {
    // Contact logic
    console.log("Opening contact...");
  };

  return (
    <section 
      ref={containerRef}
      className="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Sidebar Navigation */}
      <div ref={sidebarRef} className="hero__sidebar">
        <div className="hero__sidebar-content">
          <div className="hero__logo">
            <Code className="hero__logo-icon" />
          </div>
          <nav className="hero__nav">
            <button className="hero__nav-item" aria-label="About">
              <User />
            </button>
            <button className="hero__nav-item" aria-label="Portfolio">
              <Briefcase />
            </button>
            <button className="hero__nav-item" aria-label="Skills">
              <Zap />
            </button>
            <button className="hero__nav-item" aria-label="Contact">
              <Mail />
            </button>
          </nav>
        </div>
      </div>

      <div className="hero__main">
        {/* Profile Card */}
        <div ref={profileCardRef} className="hero__profile-card">
          <div className="hero__avatar">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" 
              alt={slice.primary.card_role || "Developer"}
              className="hero__avatar-image"
            />
          </div>
          
          <div className="hero__profile-info">
            <h3 className="hero__profile-name">
              {slice.primary.card_name || "Sinan"}
            </h3>
            <p className="hero__profile-title">
              {slice.primary.card_title || "Full-stack developer"}
            </p>
            
            <div className="hero__contact-info">
              <div className="hero__contact-item">
                <Mail className="hero__contact-icon" />
                <span>{slice.primary.card_email || "developer@example.com"}</span>
              </div>
              <div className="hero__contact-item">
                <MapPin className="hero__contact-icon" />
                <span>{slice.primary.card_location || "Turkey"}</span>
              </div>
              <div className="hero__contact-item">
                <Clock className="hero__contact-icon" />
                <span>{slice.primary.card_availability || "Full-time / Freelancer"}</span>
              </div>
              <div className="hero__contact-item">
                <Globe className="hero__contact-icon" />
                <span>{slice.primary.card_website || "www.developer.com"}</span>
              </div>
            </div>

            <div className="hero__skills">
              <span className="hero__skill-badge">HTML</span>
              <span className="hero__skill-badge">CSS</span>
              <span className="hero__skill-badge">JS</span>
              <span className="hero__skill-badge">REACT</span>
            </div>

            <button 
              className="hero__download-btn"
              onClick={handleDownloadCV}
              aria-label="Download CV"
            >
              <span>Download CV</span>
              <Download className="hero__download-icon" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="hero__content">
          <div className="hero__content-header">
            <span className="hero__code-tag">&lt;h1&gt;</span>
            <h1 className="hero__title hero__text-reveal">
              {slice.primary.title || "Developer"}
            </h1>
          </div>

          <div className="hero__intro">
            <span className="hero__code-tag">&lt;h1&gt;</span>
            <h2 className="hero__subtitle hero__text-reveal">
              Hey I'm <span className="hero__name">{slice.primary.name || "Sinan"}</span>,
            </h2>
            <h2 className="hero__subtitle hero__text-reveal">
              {slice.primary.subtitle || "Full-Stack Developer"}
            </h2>
            <span className="hero__code-tag">&lt;/h1&gt;</span>
          </div>

          <div className="hero__description">
            <span className="hero__code-tag">&lt;p&gt;</span>
            <div className="hero__text-reveal">
              <PrismicRichText 
                field={slice.primary.description || [
                  {
                    type: "paragraph",
                    text: "I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done,",
                    spans: []
                  }
                ]}
              />
            </div>
            <span className="hero__code-tag">&lt;/p&gt;</span>
          </div>

          <button 
            className="hero__cta-btn hero__text-reveal"
            onClick={handleContactClick}
          >
            Let's Talk
            <Mail className="hero__cta-icon" />
          </button>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">4</span>
            <span className="hero__stat-label">Programming Language</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">6</span>
            <span className="hero__stat-label">Development Tools</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">8</span>
            <span className="hero__stat-label">Years of Experience</span>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero__bg-elements">
        <div className="hero__bg-circle hero__bg-circle--1"></div>
        <div className="hero__bg-circle hero__bg-circle--2"></div>
        <div className="hero__bg-grid"></div>
      </div>
    </section>
  );
};

export default Hero;