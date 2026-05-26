import type { CSSProperties } from "react";

const accent = "#ef4444";

const features = [
  "In-browser SQL (DuckDB-WASM)",
  "1M+ row virtualization",
  "Sub-100ms filter response",
  "Cross-filtering charts and tables",
];

export default function App() {
  return (
    <main style={{ "--accent": accent } as CSSProperties}>
      <span className="pill">
        <span className="dot" /> In development
      </span>
      <h1>metricforge</h1>
      <p className="tagline">
        A dense analytics dashboard built for real-world data volume — in-browser
        SQL, virtualized tables, and filters that respond in under 100ms.
      </p>
      <ul className="features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <footer>
        <span>By Jamison Kimminau</span>
        <a href="https://github.com/jkimminau/metricforge">View on GitHub →</a>
      </footer>
    </main>
  );
}
