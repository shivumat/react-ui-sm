import React from "react";
import TextComponent from "../../../../Components/Text";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div style={styles.featureCard}>
    <TextComponent
      label={title}
      size="m"
      fontSize="1.2em"
      tag="h3"
    />
    <TextComponent
      label={description}
      size="s"
      fontSize="1em"
      tag="p"
    />
  </div>
);

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* <header style={styles.header}>
        <TextComponent
          label="Unlock Infinite Possibilities"
          size="xl"
          fontSize="2em"
          color="#fff"
          tag="h1"
        />
        <TextComponent
          label="Empowering developers to build unique, scalable, and accessible interfaces with ease."
          size="l"
          fontSize="1.2em"
          color="#fff"
          tag="p"
        />
        <div style={styles.ctaButtons}>
          <button style={{ ...styles.button, ...styles.primary }}>
            Get Started
          </button>
          <button style={{ ...styles.button, ...styles.secondary }}>
            View Documentation
          </button>
          <button style={{ ...styles.button, ...styles.primary }}>
            Explore Components
          </button>
        </div>
      </header> */}

      {/* Why Our Library */}
      <section style={styles.section}>
        <TextComponent
          label="Why Our Library?"
          size="l"
          fontSize="1.8em"
          tag="h2"
        />
        <TextComponent
          label="Built for Developers, Designed for Customization"
          size="m"
          fontSize="1.2em"
          tag="p"
        />
        <div style={styles.features}>
          <FeatureCard
            title="Fully Customizable"
            description="Tailor components to match your brand and user requirements."
          />
          <FeatureCard
            title="Design System Integration"
            description="A design system that adapts seamlessly to your needs."
          />
          <FeatureCard
            title="High Performance"
            description="Optimized for modern web and mobile applications."
          />
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <TextComponent
          label="Your Design. Your Rules."
          size="l"
          fontSize="1.8em"
          tag="h2"
        />
        <TextComponent
          label="Explore the features that make our component library stand out:"
          size="m"
          fontSize="1.2em"
          tag="p"
        />
        <div style={styles.features}>
          <FeatureCard
            title="Theming Support"
            description="Light, Dark, and Custom Themes with granular control."
          />
          <FeatureCard
            title="Accessibility First"
            description="WCAG-compliant components for an inclusive user experience."
          />
          <FeatureCard
            title="Modular Architecture"
            description="Pick and use only what you need to keep things lightweight."
          />
        </div>
      </section>

      {/* Footer */}
      {/* <footer style={styles.footer}>
        <TextComponent
          label="© 2025 Your Component Library. All rights reserved."
          size="m"
          fontSize="1em"
          color="#fff"
          tag="p"
        />
      </footer> */}
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center" as const,
    background: "#4CAF50",
    color: "white",
    padding: "2em 1em",
  },
  ctaButtons: {
    marginTop: "2em",
  },
  button: {
    textDecoration: "none",
    margin: "0.5em",
    padding: "0.8em 2em",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  primary: {
    background: "#007BFF",
  },
  secondary: {
    background: "#6C757D",
  },
  section: {
    padding: "2em 1em",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  features: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "2em",
    justifyContent: "center",
  },
  featureCard: {
    flex: "1",
    minWidth: "280px",
    padding: "1em",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center" as const,
    margin: "1em",
  },
  footer: {
    textAlign: "center" as const,
    padding: "2em 1em",
    background: "#333",
    color: "white",
  },
};

export default Home;
