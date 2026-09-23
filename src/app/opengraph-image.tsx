import { ImageResponse } from "next/og";

export const alt = "Rhenvox — web, mobile and software product development";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#121417",
          color: "#F3F1EC",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "4px",
            backgroundColor: "#8C7358",
            marginBottom: "36px",
          }}
        />
        <div
          style={{
            fontSize: "72px",
            fontWeight: 600,
            letterSpacing: "-1px",
            lineHeight: 1.1,
          }}
        >
          Rhenvox
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: "28px",
            color: "#A7A39B",
            maxWidth: "760px",
            lineHeight: 1.35,
          }}
        >
          Web, mobile and software product development
        </div>
      </div>
    ),
    { ...size }
  );
}
