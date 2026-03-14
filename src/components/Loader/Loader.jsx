// import { useState } from "react";

const injectStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');

  @keyframes bar {
    0%, 100% { transform: scaleY(0.3); opacity: 0.4; }
    50%       { transform: scaleY(1);   opacity: 1;   }
  }

  .font-syne    { font-family: 'Syne', sans-serif; }
  .font-dm-mono { font-family: 'DM Mono', monospace; }
`;

export default function SoundBarsLoader() {
  const heights = [40, 65, 85, 100, 85, 65, 40];
  const delays  = [0, 0.1, 0.2, 0.3, 0.2, 0.1, 0];

  return (
    <>
      <style>{injectStyles}</style>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">

        {/* Stage */}
        <div
          className="w-64 h-64  rounded-3xl flex items-center justify-center"
        >
          <div className="flex items-end gap-1.5 h-24">
            {heights.map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-full bg-gradient-to-t from-cyan-500 to-sky-300"
                style={{
                  height: `${h}%`,
                  animation: `bar 0.9s ease-in-out ${delays[i]}s infinite`,
                  boxShadow: "0 0 8px rgba(34,211,238,0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <p className="font-syne text-lg font-bold text-cyan-400">Loading</p>
        </div>

      </div>
    </>
  );
}