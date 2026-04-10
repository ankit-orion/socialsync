import { motion } from "framer-motion";

/* Simplified continent paths — viewBox 0 0 900 420 */
const WorldMap = () => (
  <svg viewBox="0 0 900 420" fill="none" className="absolute inset-0 w-full h-full">
    {/* North America */}
    <path d="M128,28 L195,18 L245,34 L275,62 L288,118 L274,172 L242,204 L200,224 L160,208 L132,168 L112,120 L116,68 Z" fill="#d1d5db" opacity="0.5"/>
    {/* Greenland */}
    <path d="M220,8 L255,5 L270,18 L265,38 L240,42 L220,30 Z" fill="#d1d5db" opacity="0.4"/>
    {/* South America */}
    <path d="M202,250 L242,238 L268,258 L280,325 L268,388 L238,405 L205,396 L184,362 L180,302 L190,268 Z" fill="#d1d5db" opacity="0.5"/>
    {/* Europe */}
    <path d="M398,22 L458,15 L494,30 L502,66 L480,90 L448,98 L412,88 L396,62 Z" fill="#d1d5db" opacity="0.5"/>
    {/* UK */}
    <path d="M386,30 L400,22 L406,36 L396,48 L384,42 Z" fill="#d1d5db" opacity="0.45"/>
    {/* Africa */}
    <path d="M396,120 L450,108 L492,124 L508,192 L500,275 L468,335 L430,345 L392,318 L375,252 L380,178 Z" fill="#d1d5db" opacity="0.5"/>
    {/* Asia */}
    <path d="M508,12 L698,8 L775,44 L788,108 L752,162 L690,182 L618,165 L558,142 L520,92 L504,46 Z" fill="#d1d5db" opacity="0.5"/>
    {/* India */}
    <path d="M578,178 L618,172 L634,218 L618,272 L596,282 L572,254 L562,214 Z" fill="#d1d5db" opacity="0.45"/>
    {/* SE Asia */}
    <path d="M692,178 L735,170 L762,192 L756,230 L728,244 L694,232 L678,208 Z" fill="#d1d5db" opacity="0.45"/>
    {/* Japan */}
    <path d="M764,62 L780,55 L790,70 L784,90 L770,92 L760,78 Z" fill="#d1d5db" opacity="0.4"/>
    {/* Australia */}
    <path d="M700,272 L765,258 L798,282 L792,350 L760,372 L712,362 L692,328 L694,292 Z" fill="#d1d5db" opacity="0.5"/>
    {/* New Zealand */}
    <path d="M808,332 L820,325 L826,342 L818,358 L808,352 Z" fill="#d1d5db" opacity="0.4"/>
  </svg>
);

/* Hub center coords (for the SVG viewBox 0 0 900 420) */
const HX = 450;
const HY = 205;

const leftAvatars = [
  { x: 85,  y: 95,  name: 'Alex Kim',    loc: 'New York',  color: '#7c3aed', initials: 'AK' },
  { x: 60,  y: 205, name: 'Mia Russo',   loc: 'London',    color: '#c8f03c', initials: 'MR' },
  { x: 85,  y: 318, name: 'Sara Mehra',  loc: 'Dubai',     color: '#7c3aed', initials: 'SM' },
];
const rightAvatars = [
  { x: 815, y: 95,  name: 'Tom Wang',    loc: 'Tokyo',     color: '#c8f03c', initials: 'TW' },
  { x: 840, y: 205, name: 'Elena N.',    loc: 'Sydney',    color: '#7c3aed', initials: 'EN' },
  { x: 815, y: 318, name: 'Priya L.',    loc: 'Mumbai',    color: '#c8f03c', initials: 'PL' },
];

/* L-shaped path string from avatar to hub */
const leftPath = (ax: number, ay: number) => {
  const midX = 310;
  if (Math.abs(ay - HY) < 10) return `M${ax},${ay} H${HX - 68}`;
  return `M${ax},${ay} H${midX} V${HY} H${HX - 68}`;
};
const rightPath = (ax: number, ay: number) => {
  const midX = 590;
  if (Math.abs(ay - HY) < 10) return `M${ax},${ay} H${HX + 68}`;
  return `M${ax},${ay} H${midX} V${HY} H${HX + 68}`;
};

const lineColors = ['#7c3aed', '#c8f03c', '#7c3aed'];
const lineColorsR = ['#c8f03c', '#7c3aed', '#c8f03c'];

/* Sparkle star */
const Sparkle = ({ x, y, size = 14, color = '#7c3aed' }: { x: number; y: number; size?: number; color?: string }) => (
  <g transform={`translate(${x},${y})`}>
    <path d={`M0,${-size} L${size*0.2},${-size*0.2} L${size},0 L${size*0.2},${size*0.2} L0,${size} L${-size*0.2},${size*0.2} L${-size},0 L${-size*0.2},${-size*0.2} Z`} fill={color} />
  </g>
);

export function GlobalReach() {
  return (
    <section className="bg-[#e8e8e8] py-12 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[32px] overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#0d0d0d]/40">// Global Reach</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight tracking-tight">
                We Connect Your Brand<br />Across The World.
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-[#0d0d0d]/50 text-base leading-relaxed max-w-sm">
                From New York to Tokyo, our strategies drive engagement across every timezone and platform — building communities that transcend borders.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative mx-6 mb-6 rounded-2xl overflow-hidden bg-[#f8f8f8]" style={{ height: 420 }}>
            <svg viewBox="0 0 900 420" className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>

              {/* World map */}
              <WorldMap />

              {/* ── Connection lines ── */}
              {leftAvatars.map((a, i) => (
                <g key={`lline-${i}`}>
                  <motion.path
                    d={leftPath(a.x, a.y)}
                    stroke={lineColors[i]}
                    strokeWidth="2"
                    strokeDasharray="6 5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: 'easeInOut' }}
                  />
                  {/* Traveling dot */}
                  <motion.circle
                    r="4"
                    fill={lineColors[i]}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 + i * 0.2 }}
                  >
                    <animateMotion
                      dur={`${2 + i * 0.4}s`}
                      repeatCount="indefinite"
                      begin={`${1.5 + i * 0.3}s`}
                      path={leftPath(a.x, a.y)}
                    />
                  </motion.circle>
                </g>
              ))}

              {rightAvatars.map((a, i) => (
                <g key={`rline-${i}`}>
                  <motion.path
                    d={rightPath(a.x, a.y)}
                    stroke={lineColorsR[i]}
                    strokeWidth="2"
                    strokeDasharray="6 5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.2, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    r="4"
                    fill={lineColorsR[i]}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8 + i * 0.2 }}
                  >
                    <animateMotion
                      dur={`${2.2 + i * 0.4}s`}
                      repeatCount="indefinite"
                      begin={`${1.8 + i * 0.3}s`}
                      path={rightPath(a.x, a.y)}
                    />
                  </motion.circle>
                </g>
              ))}

              {/* Junction dots on lines */}
              {leftAvatars.filter(a => Math.abs(a.y - HY) > 10).map((_a, i) => (
                <motion.circle
                  key={`ljunc-${i}`}
                  cx={310} cy={HY} r="4"
                  fill={lineColors[i]}
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.2 }}
                />
              ))}
              {rightAvatars.filter(a => Math.abs(a.y - HY) > 10).map((_a, i) => (
                <motion.circle
                  key={`rjunc-${i}`}
                  cx={590} cy={HY} r="4"
                  fill={lineColorsR[i]}
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + i * 0.2 }}
                />
              ))}

              {/* ── Left avatars ── */}
              {leftAvatars.map((a, i) => (
                <motion.g
                  key={`lavatar-${i}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }}
                >
                  {/* Shadow */}
                  <circle cx={a.x} cy={a.y + 3} r="30" fill="rgba(0,0,0,0.08)" />
                  {/* White ring */}
                  <circle cx={a.x} cy={a.y} r="30" fill="white" />
                  {/* Colored ring */}
                  <circle cx={a.x} cy={a.y} r="30" fill="none" stroke={a.color} strokeWidth="2.5" />
                  {/* Avatar fill */}
                  <circle cx={a.x} cy={a.y} r="27" fill={`${a.color}18`} />
                  {/* Initials */}
                  <text x={a.x} y={a.y + 1} textAnchor="middle" dominantBaseline="middle" fill={a.color} fontSize="11" fontWeight="900" fontFamily="system-ui,-apple-system,sans-serif">{a.initials}</text>
                  {/* Name tag */}
                  <rect x={a.x - 32} y={a.y + 34} width="64" height="16" rx="8" fill="white" filter="url(#shadow)" />
                  <text x={a.x} y={a.y + 44} textAnchor="middle" dominantBaseline="middle" fill="#374151" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif">{a.loc}</text>
                  {/* Pulse ring */}
                  <motion.circle
                    cx={a.x} cy={a.y} r="30" fill="none" stroke={a.color} strokeWidth="1.5"
                    animate={{ r: [30, 42, 30], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
                  />
                </motion.g>
              ))}

              {/* ── Right avatars ── */}
              {rightAvatars.map((a, i) => (
                <motion.g
                  key={`ravatar-${i}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                >
                  <circle cx={a.x} cy={a.y + 3} r="30" fill="rgba(0,0,0,0.08)" />
                  <circle cx={a.x} cy={a.y} r="30" fill="white" />
                  <circle cx={a.x} cy={a.y} r="30" fill="none" stroke={a.color} strokeWidth="2.5" />
                  <circle cx={a.x} cy={a.y} r="27" fill={`${a.color}18`} />
                  <text x={a.x} y={a.y + 1} textAnchor="middle" dominantBaseline="middle" fill={a.color} fontSize="11" fontWeight="900" fontFamily="system-ui,-apple-system,sans-serif">{a.initials}</text>
                  <rect x={a.x - 32} y={a.y + 34} width="64" height="16" rx="8" fill="white" />
                  <text x={a.x} y={a.y + 44} textAnchor="middle" dominantBaseline="middle" fill="#374151" fontSize="7" fontWeight="700" fontFamily="system-ui,sans-serif">{a.loc}</text>
                  <motion.circle
                    cx={a.x} cy={a.y} r="30" fill="none" stroke={a.color} strokeWidth="1.5"
                    animate={{ r: [30, 42, 30], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 + 0.4 }}
                  />
                </motion.g>
              ))}

              {/* ── Central hub ── */}
              <motion.g
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 200 }}
              >
                {/* Outer glow */}
                <circle cx={HX} cy={HY} r="85" fill="rgba(200,240,60,0.12)" />
                <circle cx={HX} cy={HY} r="72" fill="rgba(200,240,60,0.15)" />
                {/* White card */}
                <rect x={HX-52} y={HY-62} width="104" height="124" rx="22" fill="white" filter="url(#hubshadow)" />
                {/* Lime accent bar */}
                <rect x={HX-52} y={HY-62} width="104" height="6" rx="3" fill="#c8f03c" />
                {/* Social platform mini-icons */}
                {/* Instagram */}
                <rect x={HX-32} y={HY-48} width="22" height="22" rx="6" fill="url(#ig2)" />
                <circle cx={HX-21} cy={HY-37} r="5.5" stroke="white" strokeWidth="1.4" fill="none"/>
                <circle cx={HX-13.5} cy={HY-44} r="1.2" fill="white"/>
                {/* LinkedIn */}
                <rect x={HX+10} y={HY-48} width="22" height="22" rx="6" fill="#0A66C2" />
                <rect x={HX+14} y={HY-42} width="3" height="10" fill="white"/>
                <circle cx={HX+15.5} cy={HY-44} r="1.8" fill="white"/>
                <path d={`M${HX+19},${HY-42} h3v1.5c.6-1 1.8-1.6 3-1.4 2.2.1 3 1.5 3 3.8V${HY-32} h-3v-5c0-1.2-.4-2-1.5-2s-1.5.9-1.5 2v5h-3z`} fill="white"/>
                {/* Twitter/X */}
                <rect x={HX-32} y={HY-20} width="22" height="22" rx="6" fill="#000"/>
                <text x={HX-21} y={HY-5} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="system-ui">𝕏</text>
                {/* WhatsApp */}
                <rect x={HX+10} y={HY-20} width="22" height="22" rx="6" fill="#25D366"/>
                <path d={`M${HX+21},${HY-14} a5,5 0 1,0 4,8 l2 1-1-2 a5,5 0 0,0-5-7z`} fill="white" strokeWidth="0" transform={`scale(0.7) translate(${(HX+10)*0.43},${(HY-20)*0.43})`}/>
                <circle cx={HX+21} cy={HY-9} r="5.5" fill="white" opacity="0.9"/>
                <text x={HX+21} y={HY-9} textAnchor="middle" dominantBaseline="middle" fill="#25D366" fontSize="8" fontWeight="900">W</text>
                {/* Reddit */}
                <rect x={HX-11} y={HY+8} width="22" height="22" rx="6" fill="#FF4500"/>
                <circle cx={HX} cy={HY+20} r="4.5" fill="white"/>
                <circle cx={HX-2.5} cy={HY+20} r="0.8" fill="#FF4500"/>
                <circle cx={HX+2.5} cy={HY+20} r="0.8" fill="#FF4500"/>
                <path d={`M${HX-2},${HY+22} q2,1.5 4,0`} stroke="#FF4500" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
                {/* Label */}
                <text x={HX} y={HY+44} textAnchor="middle" dominantBaseline="middle" fill="#0d0d0d" fontSize="9" fontWeight="900" fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="-0.3">Your Hub</text>
                {/* Pulse rings */}
                <motion.circle cx={HX} cy={HY} r="52" fill="none" stroke="#c8f03c" strokeWidth="1.5"
                  animate={{ r:[52,75,52], opacity:[0.4,0,0.4] }}
                  transition={{ duration:3, repeat:Infinity }}
                />
                <motion.circle cx={HX} cy={HY} r="52" fill="none" stroke="#7c3aed" strokeWidth="1"
                  animate={{ r:[52,68,52], opacity:[0.3,0,0.3] }}
                  transition={{ duration:3, repeat:Infinity, delay:1 }}
                />
              </motion.g>

              {/* ── Decorative sparkles ── */}
              <motion.g initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:1.4 }}>
                <Sparkle x={30} y={380} size={14} color="#7c3aed" />
              </motion.g>
              <motion.g initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:1.6 }}>
                <Sparkle x={870} y={30} size={12} color="#c8f03c" />
              </motion.g>
              <motion.g initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:1.5 }}>
                <Sparkle x={870} y={380} size={10} color="#7c3aed" />
              </motion.g>

              {/* ── Decorative loop/swirl ── */}
              <motion.path
                d="M 340,380 Q 380,340 420,380 Q 460,420 500,380"
                stroke="#0d0d0d" strokeWidth="2" fill="none" strokeLinecap="round"
                opacity="0.12"
                initial={{ pathLength:0 }} whileInView={{ pathLength:1 }} viewport={{ once:true }}
                transition={{ duration:1.5, delay:1.2 }}
              />
              <motion.path
                d="M 140,30 Q 170,10 200,30 Q 230,50 260,30"
                stroke="#0d0d0d" strokeWidth="2" fill="none" strokeLinecap="round"
                opacity="0.12"
                initial={{ pathLength:0 }} whileInView={{ pathLength:1 }} viewport={{ once:true }}
                transition={{ duration:1.5, delay:1.3 }}
              />

              {/* SVG filters */}
              <defs>
                <filter id="hubshadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0d0d0d" floodOpacity="0.12"/>
                </filter>
                <radialGradient id="ig2" cx="30%" cy="107%" r="150%">
                  <stop offset="0%" stopColor="#fdf497"/>
                  <stop offset="45%" stopColor="#fd5949"/>
                  <stop offset="70%" stopColor="#d6249f"/>
                  <stop offset="100%" stopColor="#285AEB"/>
                </radialGradient>
              </defs>

            </svg>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-3 divide-x divide-[#0d0d0d]/08 border-t border-[#0d0d0d]/08 mx-6 mb-6">
            {[
              { value: '50+', label: 'Countries Reached' },
              { value: '180+', label: 'Active Campaigns' },
              { value: '99M+', label: 'Impressions Delivered' },
            ].map((s, i) => (
              <div key={i} className="py-6 text-center">
                <p className="text-3xl font-black text-[#0d0d0d] tracking-tight">{s.value}</p>
                <p className="text-xs font-semibold text-[#0d0d0d]/40 mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
