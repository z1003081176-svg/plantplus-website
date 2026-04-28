function GlobeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
function SearchIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );
}

// Tiny product icons per category
function ProductIcon({ type }) {
  const color = '#3BA876';
  const dark = '#1a3d2a';
  switch(type) {
    case 'stand':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <rect x="20" y="72" width="60" height="3" fill="#8B6F47"/>
          <rect x="24" y="75" width="3" height="22" fill="#8B6F47"/>
          <rect x="73" y="75" width="3" height="22" fill="#8B6F47"/>
          <rect x="20" y="45" width="60" height="3" fill="#8B6F47"/>
          <path d="M 40 72 L 42 55 L 58 55 L 60 72 Z" fill="#F5F3E8" stroke="#ccc"/>
          <ellipse cx="50" cy="40" rx="4" ry="14" fill={color}/>
          <ellipse cx="44" cy="38" rx="3" ry="10" fill="#5BC490" transform="rotate(-30 44 38)"/>
          <ellipse cx="56" cy="38" rx="3" ry="10" fill={dark} transform="rotate(30 56 38)"/>
        </svg>
      );
    case 'pot':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M 28 60 L 32 88 L 68 88 L 72 60 Z" fill="#F5F3E8" stroke={dark} strokeWidth="1"/>
          <ellipse cx="50" cy="60" rx="22" ry="5" fill="#e6e4d8"/>
          <ellipse cx="50" cy="40" rx="5" ry="20" fill={color}/>
          <ellipse cx="42" cy="45" rx="4" ry="14" fill="#5BC490" transform="rotate(-30 42 45)"/>
          <ellipse cx="58" cy="45" rx="4" ry="14" fill={dark} transform="rotate(30 58 45)"/>
        </svg>
      );
    case 'tool':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <rect x="38" y="20" width="4" height="50" fill="#8B6F47"/>
          <path d="M 32 68 L 48 68 L 46 82 L 34 82 Z" fill="#888"/>
          <rect x="58" y="20" width="4" height="50" fill="#8B6F47"/>
          <path d="M 54 68 L 66 68 L 66 82 L 62 84 L 58 84 L 54 82 Z" fill="#666"/>
          <line x1="56" y1="70" x2="56" y2="82" stroke="#444" strokeWidth="1"/>
          <line x1="60" y1="70" x2="60" y2="82" stroke="#444" strokeWidth="1"/>
          <line x1="64" y1="70" x2="64" y2="82" stroke="#444" strokeWidth="1"/>
        </svg>
      );
    case 'sprayer':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <rect x="42" y="28" width="16" height="48" rx="3" fill="#fff" stroke={dark} strokeWidth="1"/>
          <rect x="44" y="22" width="12" height="8" rx="2" fill="#bbb"/>
          <circle cx="50" cy="42" r="3" fill={color}/>
          <rect x="46" y="60" width="8" height="12" fill="#eee"/>
        </svg>
      );
    case 'shelf':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke={dark} strokeWidth="2"/>
          <line x1="20" y1="50" x2="80" y2="50" stroke={dark} strokeWidth="2"/>
          <ellipse cx="35" cy="38" rx="6" ry="10" fill={color}/>
          <ellipse cx="65" cy="38" rx="6" ry="10" fill="#5BC490"/>
          <ellipse cx="50" cy="68" rx="6" ry="10" fill={dark}/>
        </svg>
      );
    case 'watering':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M 30 50 Q 28 70 35 78 L 65 78 Q 72 70 70 50 Z" fill="#3BA876"/>
          <path d="M 68 55 L 90 40 L 92 44 L 72 60" fill="#3BA876"/>
          <path d="M 35 50 Q 35 42 50 42 Q 65 42 65 50" stroke="#2E8A5F" strokeWidth="2" fill="none"/>
          <rect x="48" y="38" width="4" height="8" fill="#2E8A5F"/>
        </svg>
      );
    case 'greenhouse':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <rect x="25" y="25" width="50" height="60" fill="none" stroke={color} strokeWidth="2"/>
          <path d="M 25 25 L 50 12 L 75 25" fill="none" stroke={color} strokeWidth="2"/>
          <line x1="25" y1="45" x2="75" y2="45" stroke={color} strokeWidth="1"/>
          <line x1="25" y1="65" x2="75" y2="65" stroke={color} strokeWidth="1"/>
          <line x1="50" y1="25" x2="50" y2="85" stroke={color} strokeWidth="1"/>
          <ellipse cx="37" cy="55" rx="4" ry="7" fill={color} opacity="0.6"/>
          <ellipse cx="63" cy="55" rx="4" ry="7" fill={color} opacity="0.6"/>
          <ellipse cx="37" cy="75" rx="4" ry="7" fill={color} opacity="0.6"/>
          <ellipse cx="63" cy="75" rx="4" ry="7" fill={color} opacity="0.6"/>
        </svg>
      );
    case 'light':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <rect x="48" y="20" width="4" height="55" fill="#888"/>
          <circle cx="50" cy="80" r="8" fill="#666"/>
          <path d="M 50 20 Q 30 18 28 30" stroke="#aaa" strokeWidth="3" fill="none"/>
          <circle cx="26" cy="34" r="7" fill="#fffbe0" stroke="#ccc"/>
          <path d="M 50 20 Q 70 18 72 30" stroke="#aaa" strokeWidth="3" fill="none"/>
          <circle cx="74" cy="34" r="7" fill="#fffbe0" stroke="#ccc"/>
        </svg>
      );
    case 'caddy':
      return (
        <svg viewBox="0 0 100 100" fill="none">
          <rect x="20" y="45" width="60" height="25" fill="#A67C52" stroke={dark} strokeWidth="1"/>
          <line x1="30" y1="45" x2="30" y2="70" stroke={dark}/>
          <line x1="45" y1="45" x2="45" y2="70" stroke={dark}/>
          <line x1="60" y1="45" x2="60" y2="70" stroke={dark}/>
          <line x1="75" y1="45" x2="75" y2="70" stroke={dark}/>
          <circle cx="28" cy="78" r="6" fill="#333"/>
          <circle cx="72" cy="78" r="6" fill="#333"/>
        </svg>
      );
    default:
      return <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill={color}/></svg>;
  }
}

Object.assign(window, { GlobeIcon, SearchIcon, ProductIcon });
