// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        position: "relative",
        bottom: "0",
        width: "100%",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Join the Film Community
        </h2>
        <p style={{ fontSize: "1rem", color: "#bbb" }}>
          Connect with other movie lovers, share your reviews, and track your film journey.
        </p>
      </div>

      {/* Social Media Links */}
      <div style={{ marginBottom: "20px" }}>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#1da1f2",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#3b5998",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#e4405f",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#0077b5",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Footer Text */}
      <div style={{ fontSize: "0.9rem", color: "#bbb" }}>
        <p>&copy; 2024 YourAppName. All rights reserved.</p>
        <p>
          <Link href="/privacy-policy" style={{ color: "#bbb", textDecoration: "none" }}>
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms-of-service" style={{ color: "#bbb", textDecoration: "none" }}>
            Terms of Service
          </Link>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <div
        style={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
          backgroundColor: "#333",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-chevron-up" style={{ color: "#fff", fontSize: "20px" }}></i>
      </div>
    </footer>
  );
}
