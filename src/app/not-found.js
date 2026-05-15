import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div className="section-tag">404</div>
      <h2 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        Sorry, Nothing
        <br />
        Exists Here.
      </h2>
      <p style={{ color: "var(--titanium)", marginBottom: "2rem" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn btn-primary">
        ← Back to Home
      </Link>
    </div>
  );
}
