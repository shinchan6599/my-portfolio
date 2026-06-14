import { ImageResponse } from "next/og";
import { siteName, siteTagline } from "../lib/site";

export const alt = `${siteName} — ${siteTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #4c1d95 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#a5b4fc", letterSpacing: 4, marginBottom: 12 }}>
          PORTFOLIO
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>
          {siteName}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#cbd5e1", marginTop: 16 }}>
          {siteTagline}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          {["♟ FIDE-rated chess", "🏆 ICPC AIR 41", "✈ 24 countries", "⚙ Cloud-native ML infra"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 26,
                padding: "10px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
