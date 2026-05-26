# metricforge

A dense analytics dashboard built for real-world data volume. Time-series at 100k+ points, virtualized tables, drilldowns, and filters that respond in under 100ms. A portfolio exercise in performance discipline and information-dense UI design.

## Status

Pre-development. Scope and architecture defined; implementation in progress.

## Why this exists

Most dashboards collapse under real data. This project's premise is the inverse: build a dashboard against a non-trivial dataset and make it feel snappy at any scale — no spinners, no jank, no "filtering will refresh the page."

## Planned stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Vite + React | No SSR overhead; client-heavy app |
| Charting | uPlot + Visx | uPlot for time-series perf; Visx for custom viz |
| Tables | TanStack Table + Virtual | Industry standard for virtualization |
| Query engine | DuckDB-WASM | In-browser SQL over Parquet, no backend needed |
| Data | Parquet snapshots from a real source | F1 telemetry / GitHub events / NYC taxi |
| Deploy | Vercel | Static + edge functions |

## Planned features

- Sub-100ms filter response on 1M+ rows
- Time-series charts with smooth zoom/pan
- Cross-filter between charts and tables
- Saved views / shareable URLs
- Light/dark theme with carefully-tuned palettes
- Dataset switcher (multiple sources)

## Roadmap

- [ ] Data pipeline: source → Parquet → DuckDB-WASM load
- [ ] Core dashboard layout + first chart
- [ ] Virtualized table with filters
- [ ] Cross-filter wiring (chart → table)
- [ ] URL state sync (shareable views)
- [ ] Polish: palette, motion, empty/loading states

---

By [Jamison Kimminau](https://github.com/jkimminau).
