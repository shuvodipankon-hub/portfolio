import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <section style={{ textAlign: "center", maxWidth: 680 }}>
        <p className="eyebrow">Route rejected</p>
        <h1 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(3rem, 6vw, 8rem)", margin: "0 0 1rem" }}>404</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.86 }}>
          The page you requested is not on this route. Return to the portfolio and try another path.
        </p>
        <Link href="/" className="primary-button" style={{ marginTop: "1rem" }}>
          Go home
        </Link>
      </section>
    </main>
  );
}
