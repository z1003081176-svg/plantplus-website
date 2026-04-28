// Global map with dots for presence
function WorldMap() {
  const regions = [
    {name: 'USA', x: 180, y: 180},
    {name: 'Canada', x: 190, y: 140},
    {name: 'Mexico', x: 200, y: 230},
    {name: 'UK', x: 430, y: 150},
    {name: 'Ireland', x: 415, y: 150},
    {name: 'Netherlands', x: 450, y: 155},
    {name: 'Belgium', x: 448, y: 165},
    {name: 'Germany', x: 465, y: 160},
    {name: 'Poland', x: 485, y: 160},
    {name: 'France', x: 445, y: 180},
    {name: 'Italy', x: 470, y: 190},
    {name: 'Spain', x: 425, y: 195},
    {name: 'UAE', x: 545, y: 230},
    {name: 'Saudi Arabia', x: 530, y: 235},
    {name: 'China', x: 660, y: 200},
    {name: 'Japan', x: 720, y: 195},
    {name: 'Australia', x: 700, y: 340},
    {name: 'Sweden', x: 475, y: 120},
  ];
  return (
    <svg viewBox="0 0 800 400" fill="none">
      {/* Simplified world continents */}
      <g fill="#d8dfd9" stroke="#b8c4ba" strokeWidth="0.5">
        {/* N America */}
        <path d="M 120 120 Q 100 140 110 200 Q 130 240 200 260 Q 230 240 240 200 Q 250 140 220 110 Q 170 100 120 120 Z"/>
        {/* S America */}
        <path d="M 220 260 Q 240 300 250 360 Q 230 390 220 370 Q 200 330 210 280 Z"/>
        {/* Europe */}
        <path d="M 410 130 Q 400 160 420 200 Q 460 210 500 200 Q 510 170 495 140 Q 450 125 410 130 Z"/>
        {/* Africa */}
        <path d="M 440 210 Q 430 260 450 320 Q 490 340 510 310 Q 520 260 510 220 Q 480 205 440 210 Z"/>
        {/* Asia */}
        <path d="M 500 140 Q 530 150 600 155 Q 700 160 720 200 Q 710 240 660 240 Q 580 235 530 210 Q 505 180 500 140 Z"/>
        {/* India */}
        <path d="M 600 220 Q 610 250 620 270 Q 630 260 625 230 Z"/>
        {/* Australia */}
        <path d="M 670 330 Q 660 350 700 360 Q 740 355 730 330 Q 700 320 670 330 Z"/>
      </g>
      {regions.map((r, i) => (
        <g key={i}>
          <circle cx={r.x} cy={r.y} r="4" fill="#3BA876" stroke="white" strokeWidth="2"/>
          <text x={r.x + 7} y={r.y - 3} fontSize="9" fill="#2E8A5F" fontWeight="700">{r.name}</text>
        </g>
      ))}
    </svg>
  );
}

Object.assign(window, { WorldMap });
