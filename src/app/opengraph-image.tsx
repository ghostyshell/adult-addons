import { ImageResponse } from "next/og";
import { DEFAULT_TITLE } from "@/lib/site";

export const alt = DEFAULT_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#ff375f",
            }}
          >
            Stremio &amp; Nuvio · 18+
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.02,
              color: "#ffffff",
              maxWidth: 900,
            }}
          >
            Stremio adult addons
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.62)",
              maxWidth: 920,
            }}
          >
            NSFW and porn addon directory with one-click install links
          </div>
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.45)" }}>adult-addons.click</div>
      </div>
    ),
    size,
  );
}
