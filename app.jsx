const { useState, useEffect, useRef } = React;

// ===== [需求1] 数字滚动增长组件 =====
// 进入视口时从 0 缓动到 target；easeOutExpo；只触发一次；带 suffix（如 "+"）
function AnimatedNumber({ target, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !fired.current) {
        fired.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); // easeOutExpo
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#16A34A",
  "accentColor": "#D4D83A",
  "heroTitle": "让植物\n点亮人类生活",
  "heroSub": "构建你的园艺空间",
  "borderRadius": 0,
  "cornerStyle": "sharp",
  "showFloatingNav": false
}/*EDITMODE-END*/;

// Real asset paths (URL-encoded for spaces / unicode safety)
const IMG = {
  hero: 'images/150ppi/export%20(1).jpg',
  gridPanel: 'images/150ppi/151ppi/%E8%B5%84%E6%BA%90%201.jpg', // 资源 1.jpg — 5-panel plant shots
  office:   'images/150ppi/151ppi/%E8%B5%84%E6%BA%90%203.jpg', // 资源 3.jpg — warm home plant shelf
  factory:  'images/150ppi/151ppi/%E8%B5%84%E6%BA%90%207.jpg', // 资源 7.jpg — greenhouse w/ grow lights
};

// placeholder SVG "photos" (kept as fallback only)
const heroPhoto = (
  <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
    <defs>
      <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#d7e4cf"/>
        <stop offset="1" stopColor="#a8bf9a"/>
      </linearGradient>
      <linearGradient id="floorG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#8a7356"/>
        <stop offset="1" stopColor="#5b4a34"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#skyG)"/>
    {/* greenhouse frame hints */}
    <path d="M 0 40 L 800 40" stroke="#5a6f4a" strokeWidth="3" opacity="0.4"/>
    <path d="M 120 0 L 120 600" stroke="#5a6f4a" strokeWidth="2" opacity="0.3"/>
    <path d="M 680 0 L 680 600" stroke="#5a6f4a" strokeWidth="2" opacity="0.3"/>
    {/* background foliage */}
    <ellipse cx="80" cy="280" rx="120" ry="220" fill="#4d6b3f" opacity="0.7"/>
    <ellipse cx="720" cy="260" rx="110" ry="200" fill="#3f5934" opacity="0.75"/>
    <ellipse cx="200" cy="180" rx="90" ry="100" fill="#5a7a48" opacity="0.6"/>
    <ellipse cx="600" cy="160" rx="100" ry="110" fill="#496a3c" opacity="0.6"/>
    {/* floor/table */}
    <rect x="0" y="480" width="800" height="120" fill="url(#floorG)"/>
    <rect x="80" y="440" width="640" height="50" fill="#6b553a"/>
    {/* pots on table */}
    <path d="M 140 390 L 160 440 L 220 440 L 240 390 Z" fill="#b8704a"/>
    <ellipse cx="190" cy="360" rx="30" ry="32" fill="#3b6a30"/>
    <ellipse cx="178" cy="345" rx="14" ry="22" fill="#4a8a3a" transform="rotate(-20 178 345)"/>
    <ellipse cx="202" cy="345" rx="14" ry="22" fill="#2e5a28" transform="rotate(20 202 345)"/>
    <path d="M 560 390 L 580 440 L 640 440 L 660 390 Z" fill="#c4785a"/>
    <ellipse cx="610" cy="355" rx="35" ry="36" fill="#2e5a28"/>
    <ellipse cx="595" cy="338" rx="12" ry="26" fill="#4a7a3a" transform="rotate(-25 595 338)"/>
    <ellipse cx="625" cy="338" rx="12" ry="26" fill="#3b6a30" transform="rotate(25 625 338)"/>
    {/* people silhouettes */}
    {/* person 1 - left, holding pot */}
    <ellipse cx="285" cy="270" rx="28" ry="32" fill="#e8d4b8"/>
    <path d="M 257 290 Q 250 340 240 400 L 240 460 L 330 460 L 330 400 Q 320 340 313 290 Z" fill="#e6e1d0"/>
    <rect x="250" y="320" width="80" height="60" fill="#4a5c3a"/>
    {/* hair */}
    <path d="M 260 248 Q 285 232 310 248 L 308 265 Q 295 258 285 260 Q 273 260 262 265 Z" fill="#3a2a1a"/>
    {/* person 2 */}
    <ellipse cx="385" cy="260" rx="28" ry="32" fill="#dcb896"/>
    <path d="M 357 280 Q 350 340 345 400 L 345 460 L 425 460 L 425 400 Q 420 340 413 280 Z" fill="#5a6a52"/>
    <path d="M 358 240 Q 385 220 412 240 L 412 265 Q 395 252 385 252 Q 372 252 358 265 Z" fill="#2a1a10"/>
    {/* person 3 */}
    <ellipse cx="485" cy="260" rx="28" ry="32" fill="#e8c8a6"/>
    <path d="M 457 280 Q 450 340 440 400 L 440 460 L 530 460 L 530 400 Q 520 340 513 280 Z" fill="#cfd4c2"/>
    <path d="M 458 242 Q 485 224 512 242 L 510 278 Q 495 268 485 268 Q 472 270 460 278 Z" fill="#4a3222"/>
    {/* person 4 - right, holding plant */}
    <ellipse cx="585" cy="265" rx="28" ry="32" fill="#d8a880"/>
    <path d="M 557 285 Q 545 340 538 400 L 538 460 L 628 460 L 628 400 Q 620 340 613 285 Z" fill="#7a8a6a"/>
    <path d="M 558 245 Q 585 228 612 245 L 610 270 Q 597 260 585 260 Q 572 260 560 270 Z" fill="#2a1810"/>
    {/* held plant */}
    <path d="M 552 330 L 560 370 L 610 370 L 618 330 Z" fill="#b8704a"/>
    <ellipse cx="585" cy="310" rx="28" ry="26" fill="#3b6a30"/>
    <ellipse cx="572" cy="298" rx="10" ry="20" fill="#4a8a3a" transform="rotate(-25 572 298)"/>
    <ellipse cx="598" cy="298" rx="10" ry="20" fill="#2e5a28" transform="rotate(25 598 298)"/>
    {/* light rays */}
    <rect x="0" y="0" width="800" height="600" fill="url(#raysG)" opacity="0.15"/>
  </svg>
);

// Dotted world map — countries built from grids of small circles
const worldMap = (() => {
  // rough country rectangles (x, y, w, h) in a 600×320 canvas with equirectangular-ish feel
  const landmasses = [
    // North America: Canada + USA + Mexico + Alaska
    { x: 60, y: 55, w: 120, h: 40 },   // Canada
    { x: 75, y: 92, w: 95, h: 32 },    // USA
    { x: 100, y: 122, w: 45, h: 20 },  // Mexico
    { x: 40, y: 58, w: 28, h: 18 },    // Alaska
    // Central America
    { x: 120, y: 140, w: 22, h: 10 },
    // South America
    { x: 150, y: 160, w: 38, h: 25 },  // north SA
    { x: 145, y: 180, w: 35, h: 35 },
    { x: 148, y: 210, w: 24, h: 35 },  // tapering south
    { x: 152, y: 242, w: 16, h: 25 },
    // Greenland
    { x: 225, y: 40, w: 32, h: 24 },
    // Europe
    { x: 280, y: 75, w: 55, h: 30 },
    { x: 268, y: 82, w: 22, h: 18 },   // UK/Ireland
    { x: 295, y: 62, w: 28, h: 15 },   // Scandinavia north
    // Africa
    { x: 290, y: 115, w: 60, h: 40 },  // N Africa
    { x: 300, y: 150, w: 50, h: 40 },  // Central
    { x: 310, y: 188, w: 32, h: 30 },  // South Africa
    // Middle East
    { x: 345, y: 110, w: 35, h: 22 },
    // Russia
    { x: 340, y: 55, w: 180, h: 35 },
    // Central Asia
    { x: 370, y: 92, w: 60, h: 18 },
    // China / East Asia
    { x: 430, y: 100, w: 70, h: 32 },
    // India
    { x: 400, y: 128, w: 30, h: 28 },
    // SE Asia
    { x: 445, y: 138, w: 35, h: 20 },
    // Indonesia (islands)
    { x: 460, y: 165, w: 40, h: 10 },
    // Japan
    { x: 510, y: 102, w: 14, h: 18 },
    // Philippines
    { x: 485, y: 145, w: 10, h: 14 },
    // Australia
    { x: 480, y: 205, w: 55, h: 32 },
    // NZ
    { x: 545, y: 232, w: 14, h: 14 },
  ];

  const dotSize = 2;
  const gap = 6;
  const dots = [];
  let key = 0;
  landmasses.forEach(({ x, y, w, h }) => {
    for (let i = 0; i < w; i += gap) {
      for (let j = 0; j < h; j += gap) {
        // slight noise so edges aren't perfect rectangles
        const edge = (i < gap || j < gap || i > w - gap - 1 || j > h - gap - 1);
        if (edge && Math.random() < 0.35) continue;
        dots.push(
          <circle key={key++} cx={x + i} cy={y + j} r={dotSize} fill="#cfd6cc" />
        );
      }
    }
  });

  const pins = [
    { x: 116, y: 100, label: 'USA' },
    { x: 105, y: 70,  label: 'Canada' },
    { x: 125, y: 135, label: 'Mexico' },
    { x: 292, y: 88,  label: 'UK', anchor: 'end' },
    { x: 308, y: 92,  label: 'Netherlands' },
    { x: 314, y: 100, label: 'Germany' },
    { x: 302, y: 104, label: 'France', anchor: 'end' },
    { x: 320, y: 110, label: 'Italy' },
    { x: 296, y: 112, label: 'Spain', anchor: 'end' },
    { x: 360, y: 122, label: 'Saudi Arabia' },
    { x: 472, y: 116, label: 'China' },
    { x: 518, y: 110, label: 'Japan' },
    { x: 415, y: 142, label: 'India', anchor: 'end' },
    { x: 505, y: 222, label: 'Australia' },
  ];

  return (
    <svg viewBox="0 0 600 320" width="100%" height="100%" style={{ display: 'block' }}>
      <g>{dots}</g>
      {pins.map((p, i) => (
        <g key={`pin-${i}`}>
          <circle cx={p.x} cy={p.y} r="5" fill="var(--pp-green)" />
          <circle cx={p.x} cy={p.y} r="9" fill="var(--pp-green)" opacity="0.25" />
          <text
            x={p.anchor === 'end' ? p.x - 8 : p.x + 8}
            y={p.y + 3}
            fontSize="9"
            fontWeight="600"
            fill="#1a3d2a"
            textAnchor={p.anchor || 'start'}
            style={{ fontFamily: 'inherit' }}
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
})();

// sparkle starburst (yellow)
const sparkle = (
  <svg viewBox="0 0 60 60" width="48" height="48">
    <g stroke="#D4D83A" strokeWidth="2.5" strokeLinecap="round" fill="none">
      <line x1="30" y1="6" x2="30" y2="20"/>
      <line x1="30" y1="40" x2="30" y2="54"/>
      <line x1="6" y1="30" x2="20" y2="30"/>
      <line x1="40" y1="30" x2="54" y2="30"/>
      <line x1="13" y1="13" x2="22" y2="22"/>
      <line x1="38" y1="38" x2="47" y2="47"/>
      <line x1="47" y1="13" x2="38" y2="22"/>
      <line x1="22" y1="38" x2="13" y2="47"/>
    </g>
  </svg>
);

// office photo placeholder
const officePhoto = (
  <svg viewBox="0 0 500 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
    <rect width="500" height="360" fill="#d9ddcf"/>
    {/* window */}
    <rect x="0" y="0" width="500" height="180" fill="#c9d4c0"/>
    <line x1="160" y1="0" x2="160" y2="180" stroke="#a8b8a0" strokeWidth="2"/>
    <line x1="320" y1="0" x2="320" y2="180" stroke="#a8b8a0" strokeWidth="2"/>
    {/* plants outside */}
    <ellipse cx="60" cy="120" rx="50" ry="60" fill="#7a9068" opacity="0.7"/>
    <ellipse cx="240" cy="120" rx="55" ry="60" fill="#6a805a" opacity="0.7"/>
    <ellipse cx="420" cy="120" rx="50" ry="60" fill="#7a9068" opacity="0.7"/>
    {/* floor */}
    <rect x="0" y="180" width="500" height="180" fill="#b8b8a8"/>
    {/* desks */}
    <rect x="60" y="230" width="150" height="10" fill="#e8e4d8"/>
    <rect x="70" y="240" width="4" height="60" fill="#888"/>
    <rect x="196" y="240" width="4" height="60" fill="#888"/>
    <rect x="280" y="230" width="150" height="10" fill="#e8e4d8"/>
    <rect x="290" y="240" width="4" height="60" fill="#888"/>
    <rect x="416" y="240" width="4" height="60" fill="#888"/>
    {/* chairs */}
    <circle cx="135" cy="280" r="12" fill="#5a5a4a"/>
    <circle cx="355" cy="280" r="12" fill="#5a5a4a"/>
    {/* plants on desks */}
    <rect x="90" y="215" width="14" height="15" fill="#b8704a"/>
    <ellipse cx="97" cy="210" rx="10" ry="10" fill="#3b6a30"/>
    <rect x="310" y="215" width="14" height="15" fill="#b8704a"/>
    <ellipse cx="317" cy="210" rx="10" ry="10" fill="#3b6a30"/>
  </svg>
);

// factory/greenhouse photo placeholder
const factoryPhoto = (
  <svg viewBox="0 0 500 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
    <defs>
      <linearGradient id="gh" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#d0d8c4"/>
        <stop offset="1" stopColor="#b0bca2"/>
      </linearGradient>
    </defs>
    <rect width="500" height="360" fill="url(#gh)"/>
    {/* greenhouse structure */}
    <path d="M 40 100 L 40 300 L 460 300 L 460 100 L 250 40 Z" fill="none" stroke="#7a8a70" strokeWidth="2"/>
    <line x1="40" y1="100" x2="460" y2="100" stroke="#7a8a70" strokeWidth="2"/>
    <line x1="150" y1="72" x2="150" y2="300" stroke="#8a9a80" strokeWidth="1.5" opacity="0.6"/>
    <line x1="250" y1="40" x2="250" y2="300" stroke="#8a9a80" strokeWidth="1.5" opacity="0.6"/>
    <line x1="350" y1="72" x2="350" y2="300" stroke="#8a9a80" strokeWidth="1.5" opacity="0.6"/>
    <line x1="40" y1="180" x2="460" y2="180" stroke="#8a9a80" strokeWidth="1" opacity="0.5"/>
    {/* rows of plants */}
    <rect x="70" y="210" width="360" height="10" fill="#6a553a"/>
    <rect x="70" y="250" width="360" height="10" fill="#6a553a"/>
    {Array.from({length: 9}).map((_,i) => (
      <ellipse key={'a'+i} cx={90 + i*42} cy="205" rx="14" ry="12" fill="#4a6a3a"/>
    ))}
    {Array.from({length: 9}).map((_,i) => (
      <ellipse key={'b'+i} cx={90 + i*42} cy="245" rx="14" ry="12" fill="#3a5a2a"/>
    ))}
    {/* perspective path */}
    <path d="M 200 300 L 220 220 L 280 220 L 300 300 Z" fill="#8a7a5a" opacity="0.3"/>
  </svg>
);

// five plant image placeholders for the image row
const plantShots = [
  (key) => (
    <svg key={key} viewBox="0 0 200 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="200" height="280" fill="#d4d4c0"/>
      {/* shelf room */}
      <rect x="0" y="0" width="200" height="180" fill="#e2dccc"/>
      <rect x="20" y="120" width="160" height="6" fill="#8a6a4a"/>
      <rect x="20" y="180" width="160" height="6" fill="#8a6a4a"/>
      <rect x="20" y="240" width="160" height="6" fill="#8a6a4a"/>
      <rect x="60" y="90" width="20" height="30" fill="#c4785a"/>
      <ellipse cx="70" cy="80" rx="14" ry="16" fill="#3b6a30"/>
      <rect x="120" y="140" width="22" height="40" fill="#b8704a"/>
      <ellipse cx="131" cy="130" rx="16" ry="18" fill="#4a7a3a"/>
      <rect x="70" y="200" width="24" height="40" fill="#c4785a"/>
      <ellipse cx="82" cy="190" rx="18" ry="14" fill="#2e5a28"/>
    </svg>
  ),
  (key) => (
    <svg key={key} viewBox="0 0 200 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="200" height="280" fill="#e8e2d0"/>
      <rect x="0" y="0" width="200" height="120" fill="#dcd4bc"/>
      {/* tall indoor plant */}
      <rect x="80" y="200" width="40" height="60" fill="#b8704a"/>
      <ellipse cx="100" cy="180" rx="26" ry="16" fill="#8a6a4a"/>
      <path d="M 100 200 Q 70 140 60 80 Q 80 90 100 130" fill="#3b6a30"/>
      <path d="M 100 200 Q 130 140 140 70 Q 120 85 100 130" fill="#2e5a28"/>
      <path d="M 100 200 Q 95 140 90 80" stroke="#4a8a3a" strokeWidth="3" fill="none"/>
      <ellipse cx="75" cy="130" rx="10" ry="22" fill="#4a7a3a" transform="rotate(-30 75 130)"/>
      <ellipse cx="125" cy="130" rx="10" ry="22" fill="#3b6a30" transform="rotate(30 125 130)"/>
    </svg>
  ),
  (key) => (
    <svg key={key} viewBox="0 0 200 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="200" height="280" fill="#bca890"/>
      {/* terracotta pots on concrete */}
      <path d="M 40 180 L 50 260 L 90 260 L 100 180 Z" fill="#c67850"/>
      <ellipse cx="70" cy="180" rx="30" ry="8" fill="#a0603a"/>
      <ellipse cx="70" cy="155" rx="22" ry="26" fill="#3b6a30"/>
      <path d="M 110 160 L 120 260 L 175 260 L 185 160 Z" fill="#b8704a"/>
      <ellipse cx="148" cy="160" rx="38" ry="10" fill="#8a5232"/>
      <ellipse cx="148" cy="130" rx="28" ry="32" fill="#2e5a28"/>
      <ellipse cx="130" cy="115" rx="10" ry="22" fill="#4a7a3a" transform="rotate(-30 130 115)"/>
      <ellipse cx="165" cy="115" rx="10" ry="22" fill="#3b6a30" transform="rotate(30 165 115)"/>
    </svg>
  ),
  (key) => (
    <svg key={key} viewBox="0 0 200 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="200" height="280" fill="#b8c0a8"/>
      {/* hanging plant */}
      <line x1="100" y1="0" x2="100" y2="80" stroke="#444" strokeWidth="2"/>
      <ellipse cx="100" cy="95" rx="50" ry="14" fill="#e8e2d0"/>
      <path d="M 60 95 Q 50 180 30 240" stroke="#3b6a30" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M 80 100 Q 70 180 60 250" stroke="#4a7a3a" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M 100 100 Q 100 200 100 260" stroke="#2e5a28" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M 120 100 Q 130 180 140 250" stroke="#4a7a3a" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M 140 95 Q 150 180 170 240" stroke="#3b6a30" strokeWidth="6" fill="none" strokeLinecap="round"/>
      {[40,80,120,160].map((y,i) => (
        <ellipse key={i} cx={60 + (i%2)*80} cy={120+y} rx="8" ry="16" fill="#4a7a3a" transform={`rotate(${-20+i*15} ${60+(i%2)*80} ${120+y})`}/>
      ))}
    </svg>
  ),
  (key) => (
    <svg key={key} viewBox="0 0 200 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="200" height="280" fill="#9a8868"/>
      {/* watering can + tools */}
      <path d="M 30 120 Q 25 180 40 220 L 120 220 Q 135 180 130 120 Z" fill="#D4D83A"/>
      <path d="M 125 140 L 175 100 L 180 110 L 135 155" fill="#D4D83A"/>
      <path d="M 40 120 Q 40 95 80 95 Q 120 95 120 120" stroke="#2E8A5F" strokeWidth="3" fill="none"/>
      <rect x="75" y="90" width="10" height="15" fill="#2E8A5F"/>
      {/* tools in background */}
      <rect x="145" y="140" width="4" height="90" fill="#6a553a" opacity="0.6"/>
      <rect x="160" y="150" width="4" height="80" fill="#6a553a" opacity="0.6"/>
    </svg>
  ),
];

function App() {
  const [scrollTop, setScrollTop] = useState(false);
  const [tweakOpen, setTweakOpen] = useState(false);
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--pp-green', tweaks.primaryColor);
    root.style.setProperty('--pp-yellow', tweaks.accentColor);
  }, [tweaks]);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweakOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweakOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const updateTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  useEffect(() => {
    const handleScroll = () => setScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const renderTitle = (str) => str.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>{line}{i < arr.length - 1 && <br/>}</React.Fragment>
  ));

  return (
    <div className="design-canvas">
      {/* ===== NAV ===== */}
      <nav className="top-bar">
        <div className="nav-left-group">
          <button className="nav-hamburger" aria-label="menu">
            <span></span><span></span><span></span>
          </button>
          <a href="#" className="nav-link nav-lang">语言</a>
          <a href="#" className="nav-link">关于植加</a>
          <a href="#" className="nav-link">系列产品</a>
        </div>
        <div className="nav-center">
          <PPWordmark size={26} />
        </div>
        <div className="nav-right-group">
          <a href="#" className="nav-link">植加招聘</a>
          <a href="PlantPlus Contact.html" className="nav-link">合作联系</a>
          <a href="#" className="nav-search-pill">
            <SearchIcon size={14} />
            <span>搜索</span>
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero-split" data-section data-screen-label="01 Hero">
        <div className="hero-split-left">
          <h1 className="hero-split-title">让植物<br/>点亮人类生活</h1>
          <a href="PlantPlus Company.html" className="hero-pill-btn">构建你的园艺空间</a>
        </div>
        <div className="hero-split-right">
          <img src={IMG.hero} alt="PlantPlus greenhouse" />
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE MAP ===== */}
      <section className="map-section" data-section data-screen-label="02 Map">
        <div className="map-inner">
          <div className="map-left">
            <div className="map-kicker">GLOBAL PRESENCE MAP</div>
            <h2 className="map-title">全球覆盖<span className="map-title-hl">18个</span>国家</h2>
            <p className="map-desc">从欧洲到美洲，从中东到亚太地区 — PlantPlus 产品深受全球<br/>用户喜爱。我们提供从研发到发货的全流程控制，保证品质和供应稳定。</p>
          </div>
          <div className="map-right">
            <div className="map-sparkle">{sparkle}</div>
            <div className="map-svg">{worldMap}</div>
            <div className="map-footnote">*Indicates PlantPlus presence / distribution across regions.</div>
          </div>
        </div>
        <div className="map-stats-wrap"><div className="map-stats">
          <div className="stat-card">
            <div className="stat-label">Countries Covered</div>
            <div className="stat-value"><AnimatedNumber target={18} /> <span>countries</span></div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Production Bases</div>
            <div className="stat-value"><AnimatedNumber target={2} /> <span>factories</span></div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Main Series</div>
            <div className="stat-value"><AnimatedNumber target={14} suffix="+" /></div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Horticultural Products</div>
            <div className="stat-value"><AnimatedNumber target={2000} suffix="+" /></div>
          </div>
        </div></div>
      </section>

      {/* ===== IMAGE GRID ===== */}
      <section className="grid-section" data-section data-screen-label="03 Grid">
        <div className="grid-row grid-row-single">
          <img className="grid-panel-img" src={IMG.gridPanel} alt="PlantPlus product showcase" />
          <a href="PlantPlus Products.html" className="grid-btn">解锁更多空间</a>
        </div>
      </section>

      {/* ===== TWO CARDS ===== */}
      <section className="twocards-section" data-section data-screen-label="04 Cards">
        <div className="twocard">
          <div className="twocard-photo"><img src={IMG.office} alt="PlantPlus office" /></div>
          <div className="twocard-watermark">Keep Real</div>
          <a href="PlantPlus Careers.html" className="twocard-btn-top">加入我们</a>
          <div className="twocard-body">
            <h3 className="twocard-title">舒适的<br/>开放式办公空间</h3>
          </div>
        </div>
        <div className="twocard">
          <div className="twocard-photo"><img src={IMG.factory} alt="PlantPlus greenhouse" /></div>
          <a href="PlantPlus Contact.html" className="twocard-btn-top">合作联系</a>
          <div className="twocard-body">
            <h3 className="twocard-title">欢迎各界合作伙伴</h3>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer-new" data-section data-screen-label="05 Footer">
        <div className="footer-new-inner">
          <div className="footer-new-left">
            <div className="footer-new-logo">
              <PPWordmark size={40} color="white" />
            </div>
            <div className="footer-new-slogan">LET PLANT LIGHTS UP PEOPLE'S LIFE</div>
            <div className="footer-new-contact">
              <div className="contact-block">
                <strong>Lishui Office</strong>
                <span>8th Floor, Building 2, Green Valley Information Industry Park,</span>
                <span>Liandu District, Lishui City, Zhejiang Province, China</span>
              </div>
              <div className="contact-block">
                <strong>Hangzhou Office</strong>
                <span>Room 1704, Tower A, Yuecui Victory Centre,</span>
                <span>Shangcheng District, Hangzhou City, Zhejiang Province, China</span>
              </div>
              <div className="contact-block">
                <span>PlantPlus01@hotmail.com</span>
                <span>+86 188 5808 7141</span>
              </div>
            </div>
          </div>
          <div className="footer-new-links">
            <div className="footer-new-col">
              <h4>PRODUCTS</h4>
              <ul>
                <li><a href="PlantPlus Products.html">Plant Stand</a></li>
                <li><a href="PlantPlus Products.html">Plant Pot</a></li>
                <li><a href="PlantPlus Products.html">Gardening Tool</a></li>
                <li><a href="PlantPlus Products.html">Wall Plant Shelf</a></li>
                <li><a href="PlantPlus Products.html">Watering Can</a></li>
              </ul>
            </div>
            <div className="footer-new-col">
              <h4>MORE</h4>
              <ul>
                <li><a href="#">Green House</a></li>
                <li><a href="#">Grow Light</a></li>
                <li><a href="#">Plant Caddy</a></li>
                <li><a href="#">Electric Sprayer</a></li>
              </ul>
            </div>
            <div className="footer-new-col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="PlantPlus Company.html">About PlantPlus</a></li>
                <li><a href="#">Manufacturing</a></li>
                <li><a href="#">Global Presence</a></li>
                <li><a href="#">Vision &amp; Mission</a></li>
              </ul>
            </div>
            <div className="footer-new-col">
              <h4>BUSINESS</h4>
              <ul>
                <li><a href="#">Wholesale</a></li>
                <li><a href="#">OEM</a></li>
                <li><a href="#">ODM</a></li>
                <li><a href="#">Download Catalog</a></li>
                <li><a href="PlantPlus Contact.html">Contact Sales</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-new-watermark">PlantPlus</div>
        <div className="footer-new-bottom">
          <div className="footer-bottom-left">
            <span className="globe-dot">● Global · English</span>
          </div>
          <div className="footer-bottom-center">
            © 2026 PlantPlus Technology Co., Ltd. All rights reserved.
          </div>
          <div className="footer-bottom-right">
            浙ICP备 2024 01234号
          </div>
        </div>
      </footer>

      <div className={`scroll-top ${scrollTop ? 'visible' : ''}`} onClick={scrollToTop}>↑</div>

      {/* Tweaks Panel */}
      {tweakOpen && (
        <div className="tweaks-panel">
          <div className="tweaks-header">
            <strong>Tweaks</strong>
            <span onClick={() => setTweakOpen(false)} style={{cursor:'pointer',fontSize:18,lineHeight:1}}>×</span>
          </div>
          <div className="tweaks-body">
            <div className="tweak-row">
              <label>主色</label>
              <div className="color-row">
                {['#3BA876','#2E8A5F','#1a3d2a','#4A7C59','#6B8E4E','#1C6758'].map(c => (
                  <div key={c} onClick={() => updateTweak('primaryColor', c)}
                    className={`swatch ${tweaks.primaryColor===c?'active':''}`}
                    style={{background:c}} />
                ))}
              </div>
            </div>
            <div className="tweak-row">
              <label>强调色</label>
              <div className="color-row">
                {['#D4D83A','#F5C842','#FF8C42','#E85D75','#9B89B3','#F5F3E8'].map(c => (
                  <div key={c} onClick={() => updateTweak('accentColor', c)}
                    className={`swatch ${tweaks.accentColor===c?'active':''}`}
                    style={{background:c}} />
                ))}
              </div>
            </div>
            <div className="tweak-row">
              <label>主标题</label>
              <textarea rows="3" value={tweaks.heroTitle}
                onChange={e => updateTweak('heroTitle', e.target.value)} />
            </div>
            <div className="tweak-row">
              <label>副标题</label>
              <textarea rows="2" value={tweaks.heroSub}
                onChange={e => updateTweak('heroSub', e.target.value)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
