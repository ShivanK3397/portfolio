import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

export const alt = "Developer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f8f7f4", color: "#20221f", padding: "80px", width: "100%", height: "100%" }}><div style={{ display: "flex", color: "#2456db", fontSize: 28 }}>{profile.role}</div><div style={{ display: "flex", fontSize: 90, letterSpacing: "-5px" }}>{profile.name}.</div><div style={{ display: "flex", fontSize: 30 }}>Work, experience, and a little curiosity.</div></div>, size);
}
