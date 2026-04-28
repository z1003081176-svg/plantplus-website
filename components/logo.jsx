// PlantPlus wordmark - stylized "Plant Plus" stacked logo
function PPWordmark({ size = 20, color, dotColor = '#D4D83A' }) {
  return (
    <div className="pp-wordmark" style={{ fontSize: size, color }}>
      <span className="line1">Plant</span>
      <span className="line2">Plus<span className="dot" style={{ color: dotColor }}>.</span></span>
    </div>
  );
}

// Placeholder plant SVG illustration
function PlantIllustration({ variant = 1 }) {
  if (variant === 1) {
    // Potted plant on stand
    return (
      <svg viewBox="0 0 400 400" fill="none">
        {/* Stand */}
        <rect x="100" y="280" width="200" height="8" fill="#8B6F47"/>
        <rect x="120" y="288" width="8" height="80" fill="#8B6F47"/>
        <rect x="272" y="288" width="8" height="80" fill="#8B6F47"/>
        {/* Pot */}
        <path d="M 150 280 L 160 220 L 240 220 L 250 280 Z" fill="#F5F3E8"/>
        {/* Leaves */}
        <ellipse cx="200" cy="180" rx="12" ry="50" fill="#5BC490" transform="rotate(-20 200 180)"/>
        <ellipse cx="200" cy="180" rx="12" ry="60" fill="#3BA876" transform="rotate(0 200 180)"/>
        <ellipse cx="200" cy="180" rx="12" ry="55" fill="#2E8A5F" transform="rotate(25 200 180)"/>
        <ellipse cx="180" cy="165" rx="10" ry="40" fill="#5BC490" transform="rotate(-45 180 165)"/>
        <ellipse cx="220" cy="165" rx="10" ry="40" fill="#3BA876" transform="rotate(45 220 165)"/>
        <circle cx="200" cy="130" r="18" fill="#D4D83A" opacity="0.6"/>
      </svg>
    );
  }
  // Hanging plant variant
  return (
    <svg viewBox="0 0 400 400" fill="none">
      <line x1="200" y1="0" x2="200" y2="140" stroke="#8B6F47" strokeWidth="3"/>
      <ellipse cx="200" cy="170" rx="80" ry="24" fill="#F5F3E8"/>
      <path d="M 130 170 Q 140 240 120 300 Q 110 330 130 340" stroke="#3BA876" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M 170 180 Q 160 260 180 320" stroke="#5BC490" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M 200 180 Q 210 270 200 340" stroke="#2E8A5F" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M 230 180 Q 240 260 220 320" stroke="#5BC490" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M 270 170 Q 260 240 280 300 Q 290 330 270 340" stroke="#3BA876" strokeWidth="8" fill="none" strokeLinecap="round"/>
      {/* Leaves */}
      <ellipse cx="125" cy="280" rx="8" ry="18" fill="#3BA876" transform="rotate(-30 125 280)"/>
      <ellipse cx="175" cy="290" rx="8" ry="18" fill="#5BC490" transform="rotate(-10 175 290)"/>
      <ellipse cx="225" cy="300" rx="8" ry="18" fill="#2E8A5F" transform="rotate(20 225 300)"/>
      <ellipse cx="275" cy="280" rx="8" ry="18" fill="#5BC490" transform="rotate(40 275 280)"/>
    </svg>
  );
}

function YellowSparkle({ size = 14 }) {
  return (
    <span className="sparkle" style={{ height: size }}>
      <span style={{ height: size }}></span>
      <span style={{ height: size }}></span>
      <span style={{ height: size }}></span>
    </span>
  );
}

Object.assign(window, { PPWordmark, PlantIllustration, YellowSparkle });
