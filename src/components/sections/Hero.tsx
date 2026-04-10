import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const brands = [
  { name: "Khan Academy", logo: "https://www.google.com/s2/favicons?sz=64&domain=khanacademy.org" },
  { name: "W3Schools", logo: "https://www.google.com/s2/favicons?sz=64&domain=w3schools.com" },
  { name: "Shopify", logo: "https://www.google.com/s2/favicons?sz=64&domain=shopify.com" },
  { name: "Gymshark", logo: "https://www.google.com/s2/favicons?sz=64&domain=gymshark.com" },
  { name: "Duolingo", logo: "https://www.google.com/s2/favicons?sz=64&domain=duolingo.com" },
];

/* ── SVG platform icons (floating) ── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="url(#ig)" />
    <circle
      cx="12"
      cy="12"
      r="4.2"
      stroke="white"
      strokeWidth="1.8"
      fill="none"
    />
    <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
    <defs>
      <radialGradient id="ig" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="70%" stopColor="#d6249f" />
        <stop offset="100%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#000" />
    <path
      d="M6 6h4l2.5 3.5L15.5 6H18l-4 5.5L18 18h-4l-2.5-3.8L8.5 18H6l4.2-5.8z"
      fill="white"
    />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#0A66C2" />
    <rect x="5" y="9" width="3" height="10" fill="white" />
    <circle cx="6.5" cy="6.5" r="1.8" fill="white" />
    <path
      d="M11 9h3v1.4c.6-1 1.8-1.6 3-1.4 2.2.1 3 1.5 3 3.8V19h-3v-5.5c0-1.2-.4-2-1.5-2s-1.5.9-1.5 2V19h-3z"
      fill="white"
    />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#010101" />
    <path
      d="M14 4h2.5c.3 2 1.8 3.3 3.5 3.5v2.5c-1.2-.1-2.3-.5-3.2-1.2V14a5 5 0 1 1-5-5c.2 0 .4 0 .7.1v2.6c-.2-.1-.4-.1-.7-.1a2.5 2.5 0 1 0 2.2 2.4z"
      fill="white"
    />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <polygon points="10,8.5 10,15.5 16,12" fill="white" />
  </svg>
);
const RedditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#2c5270" />
    <circle cx="12" cy="13" r="5" fill="white" />
    <circle cx="9.5" cy="13" r="1" fill="#2c5270" />
    <circle cx="14.5" cy="13" r="1" fill="#2c5270" />
    <path
      d="M9.5 15.5c.7.6 1.5.9 2.5.9s1.8-.3 2.5-.9"
      stroke="#2c5270"
      strokeWidth="0.8"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="18" cy="8" r="2" fill="white" />
    <line x1="13" y1="8" x2="17" y2="8" stroke="white" strokeWidth="1.2" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#25D366" />
    <path
      d="M12 4a8 8 0 0 0-6.9 12l-1.1 3.2 3.3-1.1A8 8 0 1 0 12 4z"
      fill="white"
    />
    <path
      d="M9 10.5c0-.3.2-.5.5-.5h.5c.3 0 .5.2.6.5l.4 1c.1.2 0 .5-.2.7l-.3.3c.4.8 1 1.4 1.8 1.8l.3-.3c.2-.2.5-.3.7-.2l1 .4c.3.1.5.3.5.6v.5c0 .3-.2.5-.5.5C10.5 15.8 9 13 9 10.5z"
      fill="#25D366"
    />
  </svg>
);

const floatingIcons: {
  Icon: () => JSX.Element;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
  duration: number;
}[] = [
  {
    Icon: InstagramIcon,
    size: 50,
    top: "8%",
    left: "8%",
    delay: 0,
    duration: 3.5,
  },
  {
    Icon: TikTokIcon,
    size: 42,
    top: "30%",
    left: "1%",
    delay: 0.6,
    duration: 4,
  },
  {
    Icon: YouTubeIcon,
    size: 46,
    top: "60%",
    left: "5%",
    delay: 1.2,
    duration: 3.8,
  },
  {
    Icon: TwitterIcon,
    size: 42,
    top: "78%",
    left: "20%",
    delay: 0.3,
    duration: 3.2,
  },
  {
    Icon: LinkedInIcon,
    size: 44,
    top: "5%",
    left: "72%",
    delay: 0.9,
    duration: 4.2,
  },
  {
    Icon: RedditIcon,
    size: 40,
    top: "22%",
    left: "88%",
    delay: 0.4,
    duration: 3.6,
  },
  {
    Icon: WhatsAppIcon,
    size: 42,
    top: "72%",
    left: "82%",
    delay: 1.5,
    duration: 3.9,
  },
];

const statCards: {
  label: string;
  value: string;
  delta: string;
  color: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}[] = [
  {
    label: "Total Followers",
    value: "2.4M",
    delta: "+18%",
    color: "#2c5270",
    top: "12%",
    right: "2%",
  },
  {
    label: "Avg. Engagement",
    value: "8.7%",
    delta: "+3.2%",
    color: "#60516f",
    top: "50%",
    left: "0%",
  },
  {
    label: "Monthly Reach",
    value: "12.1M",
    delta: "+24%",
    color: "#2c5270",
    bottom: "6%",
    right: "4%",
  },
];

/* ── Shared status bar ── */
const StatusBar = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "6px 18px 4px",
    }}
  >
    <span
      style={{
        color: "#fff",
        fontWeight: 600,
        fontSize: 11,
        fontFamily: '"SF Pro Text", -apple-system, system-ui, sans-serif',
        letterSpacing: "-0.01em",
      }}
    >
      9:41
    </span>
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
        <rect x="0" y="5" width="2.5" height="4" rx="0.5" fill="white" />
        <rect x="3.5" y="3" width="2.5" height="6" rx="0.5" fill="white" />
        <rect x="7" y="1" width="2.5" height="8" rx="0.5" fill="white" />
        <rect
          x="10.5"
          y="0"
          width="2.5"
          height="9"
          rx="0.5"
          fill="white"
          opacity="0.3"
        />
      </svg>
      <svg width="12" height="9" viewBox="0 0 12 9" fill="white">
        <path d="M6 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        <path
          d="M2.5 4.8a5 5 0 0 1 7 0"
          stroke="white"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0.5 2.8a8 8 0 0 1 11 0"
          stroke="white"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
      <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
        <rect
          x="0"
          y="1"
          width="15"
          height="7"
          rx="2"
          stroke="white"
          strokeWidth="1"
          opacity="0.6"
        />
        <rect x="1.5" y="2.5" width="10" height="4" rx="1" fill="white" />
        <path
          d="M16 3.5v2"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  </div>
);

/* ── iPhone home indicator bar ── */
const HomeIndicator = ({
  color = "rgba(255,255,255,0.3)",
}: {
  color?: string;
}) => (
  <div
    style={{ display: "flex", justifyContent: "center", padding: "6px 0 8px" }}
  >
    <div
      style={{ width: 96, height: 4, borderRadius: 100, background: color }}
    />
  </div>
);

/* ====================================================================
   INSTAGRAM SCREEN - Authentic dark mode
   ==================================================================== */
const InstagramScreen = () => (
  <div
    style={{
      background: "#000",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    }}
  >
    <StatusBar />
    {/* Header */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2px 14px 6px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <span
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "-0.03em",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif',
          }}
        >
          Instagram
        </span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <svg width="18" height="17" viewBox="0 0 24 22" fill="none">
          <path
            d="M12 20s-8.5-5.5-8.5-12A5.5 5.5 0 0 1 12 4.5 5.5 5.5 0 0 1 20.5 8C20.5 14.5 12 20 12 20z"
            stroke="white"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
        <svg width="18" height="17" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            stroke="white"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
      </div>
    </div>

    {/* Stories */}
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: "6px 14px 10px",
        overflowX: "hidden",
      }}
    >
      {[
        { n: "Your Story", ring: "rgba(255,255,255,0.2)", add: true },
        {
          n: "alex.kim",
          ring: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
        },
        {
          n: "mia.ux",
          ring: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
        },
        {
          n: "dev.raj",
          ring: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)",
        },
        { n: "sara_m", ring: "linear-gradient(135deg,#833ab4,#405de6)" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              padding: 2,
              background: s.ring,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "#000",
                border: "2px solid #000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {s.add ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#262626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="#0095f6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: `hsl(${i * 70},40%,25%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    {s.n[0].toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 7.5,
              fontWeight: 400,
              maxWidth: 42,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            {s.add ? "Your story" : s.n.split(".")[0]}
          </span>
        </div>
      ))}
    </div>

    <div style={{ height: 0.3, background: "rgba(255,255,255,0.15)" }} />

    {/* Post header */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px 6px",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)",
          padding: 1.5,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#2c5270", fontSize: 7, fontWeight: 700 }}>
            SQ
          </span>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <p
            style={{
              color: "white",
              fontSize: 10,
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            squaresocial_hq
          </p>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#3897f0">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
        </div>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 8 }}>Sponsored</p>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <circle cx="5" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="19" cy="12" r="1.5" />
      </svg>
    </div>

    {/* Post image */}
    <div
      style={{
        position: "relative",
        flex: 1,
        minHeight: 140,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,#0d0d0d 0%,#60516f 50%,#2c5270 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -10,
          right: -10,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(200,240,60,0.3)",
          filter: "blur(25px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -10,
          left: -10,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.3)",
          filter: "blur(20px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 18px",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 7.5,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 5,
          }}
        >
          Campaign of the Week
        </p>
        <p
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Grow Your Brand
          <br />
          10× Faster.
        </p>
        <div style={{ marginTop: 10 }}>
          <div
            style={{
              height: 22,
              background: "#2c5270",
              borderRadius: 6,
              padding: "0 12px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 8, fontWeight: 600, color: "#0d0d0d" }}>
              Learn more
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 3,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: i === 0 ? 14 : 4,
              height: 4,
              borderRadius: 4,
              background: i === 0 ? "#0095f6" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </div>

    {/* Actions */}
    <div
      style={{ display: "flex", alignItems: "center", padding: "8px 14px 4px" }}
    >
      <div style={{ display: "flex", gap: 14, flex: 1 }}>
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
        >
          <svg width="18" height="17" viewBox="0 0 24 22" fill="#ff3040">
            <path d="M12 20s-8.5-5.5-8.5-12A5.5 5.5 0 0 1 12 4.5 5.5 5.5 0 0 1 20.5 8C20.5 14.5 12 20 12 20z" />
          </svg>
        </motion.div>
        <svg width="18" height="17" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            stroke="white"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
        <svg width="18" height="17" viewBox="0 0 24 24" fill="none">
          <line
            x1="22"
            y1="2"
            x2="11"
            y2="13"
            stroke="white"
            strokeWidth="1.8"
          />
          <polygon
            points="22 2 15 22 11 13 2 9 22 2"
            stroke="white"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
      </div>
      <svg width="16" height="17" viewBox="0 0 24 24" fill="none">
        <path
          d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
          stroke="white"
          strokeWidth="1.8"
          fill="none"
        />
      </svg>
    </div>

    <div style={{ padding: "2px 14px 6px" }}>
      <p
        style={{
          color: "white",
          fontSize: 9.5,
          fontWeight: 600,
          marginBottom: 2,
        }}
      >
        24,891 likes
      </p>
      <p style={{ color: "white", fontSize: 9, lineHeight: 1.5 }}>
        <span style={{ fontWeight: 600 }}>squaresocial_hq </span>Elevating
        brands with data-driven strategies 🚀{" "}
        <span style={{ color: "#e0f1ff" }}>#growth #marketing</span>
      </p>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 8, marginTop: 3 }}>
        View all 847 comments
      </p>
      <p
        style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: 7.5,
          marginTop: 2,
          textTransform: "uppercase",
          letterSpacing: "0.03em",
        }}
      >
        2 hours ago
      </p>
    </div>

    {/* Bottom nav */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "6px 16px 0",
        borderTop: "0.3px solid rgba(255,255,255,0.15)",
        marginTop: "auto",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="white" />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.8"
        />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.8"
        />
      </svg>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          border: "1.5px solid rgba(255,255,255,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24">
          <path
            d="M12 5v14M5 12h14"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.8"
        />
      </svg>
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.7)",
          background: "linear-gradient(135deg,#2c5270,#60516f)",
        }}
      />
    </div>
    <HomeIndicator />
  </div>
);

/* ====================================================================
   LINKEDIN SCREEN - Authentic dark mode (#000 + #1B1F23 cards)
   ==================================================================== */
const LinkedInScreen = () => (
  <div
    style={{
      background: "#000",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily:
        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}
  >
    <StatusBar />
    {/* Top bar */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "2px 12px 8px",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#0077B5,#0A66C2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "white", fontSize: 8, fontWeight: 700 }}>SQ</span>
      </div>
      <div
        style={{
          flex: 1,
          height: 28,
          background: "#38434F",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: 6,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="#B0B7BE" strokeWidth="1.8" />
          <line
            x1="21"
            y1="21"
            x2="16.65"
            y2="16.65"
            stroke="#B0B7BE"
            strokeWidth="1.8"
          />
        </svg>
        <span style={{ color: "#B0B7BE", fontSize: 9, fontWeight: 400 }}>
          Search
        </span>
      </div>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.6"
          fill="none"
        />
      </svg>
    </div>

    {/* Post card */}
    <div
      style={{
        background: "#1B1F23",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Post header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 8,
          padding: "10px 12px 0",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 4,
            background: "linear-gradient(135deg,#0077B5,#00A0DC)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>
            SQ
          </span>
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "rgba(255,255,255,0.95)",
              fontSize: 10,
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            SquareSocial Agency
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 8,
              lineHeight: 1.4,
            }}
          >
            12,483 followers
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 8 }}>
            3h · <span style={{ fontSize: 9 }}>🌐</span>
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="#71B7FB"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span style={{ color: "#71B7FB", fontSize: 9.5, fontWeight: 600 }}>
            Follow
          </span>
        </div>
      </div>

      <p
        style={{
          color: "rgba(255,255,255,0.95)",
          fontSize: 9.5,
          lineHeight: 1.55,
          padding: "8px 12px 6px",
        }}
      >
        Excited to share our client{" "}
        <span style={{ color: "#71B7FB", fontWeight: 500 }}>@TechBrand</span>{" "}
        just hit 100K followers in 30 days! 🎉
        <br />
        Here's the 3-step content strategy we used...
        <span style={{ color: "rgba(255,255,255,0.5)" }}> …see more</span>
      </p>

      {/* Link preview */}
      <div
        style={{
          margin: "0 12px 8px",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            height: 65,
            background: "linear-gradient(135deg,#0077B5,#60516f)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
            }}
          >
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 7,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 2,
                }}
              >
                Case Study
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: 10.5,
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                From 0 to 100K:
                <br />
                Our Proven Formula
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#2C3338", padding: "6px 10px" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 7.5 }}>
            squaresocial.com
          </p>
        </div>
      </div>

      {/* Reactions */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 12px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                fontSize: 11,
                background: "#378FE9",
                borderRadius: "50%",
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #1B1F23",
                zIndex: 3,
              }}
            >
              👍
            </span>
            <span
              style={{
                fontSize: 11,
                background: "#E8453C",
                borderRadius: "50%",
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: -5,
                border: "1.5px solid #1B1F23",
                zIndex: 2,
              }}
            >
              ❤️
            </span>
            <span
              style={{
                fontSize: 11,
                background: "#F5BB5C",
                borderRadius: "50%",
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: -5,
                border: "1.5px solid #1B1F23",
                zIndex: 1,
              }}
            >
              💡
            </span>
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 8,
              marginLeft: 3,
            }}
          >
            2,847
          </span>
        </div>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 8 }}>
          312 comments · 84 reposts
        </span>
      </div>

      {/* Action bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "4px 8px 6px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {[
          {
            icon: (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            label: "Like",
          },
          {
            icon: (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.5"
                />
              </svg>
            ),
            label: "Comment",
          },
          {
            icon: (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 1l4 4-4 4"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 11V9a4 4 0 0 1 4-4h14"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 23l-4-4 4-4"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 13v2a4 4 0 0 1-4 4H3"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            label: "Repost",
          },
          {
            icon: (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <line
                  x1="22"
                  y1="2"
                  x2="11"
                  y2="13"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.5"
                />
                <polygon
                  points="22 2 15 22 11 13 2 9 22 2"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            ),
            label: "Send",
          },
        ].map((a, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "6px 4px",
            }}
          >
            {a.icon}
            <span
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 8.5,
                fontWeight: 600,
              }}
            >
              {a.label}
            </span>
          </div>
        ))}
      </div>

      {/* Separator + second post teaser */}
      <div style={{ height: 6, background: "#000" }} />
      <div style={{ background: "#1B1F23", padding: "10px 12px", flex: 1 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#E7A33E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "white", fontSize: 9, fontWeight: 700 }}>
              MH
            </span>
          </div>
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 9.5,
                fontWeight: 600,
              }}
            >
              Marketing Hub{" "}
              <span
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 400,
                  fontSize: 8,
                }}
              >
                · 1st
              </span>
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 8 }}>
              Content Strategy Lead
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 7.5,
                marginTop: 1,
              }}
            >
              1h · 🌐
            </p>
          </div>
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 9,
            lineHeight: 1.5,
            marginTop: 6,
          }}
        >
          The algorithm change that doubled our reach overnight 📈
        </p>
      </div>
    </div>

    {/* Bottom nav */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "6px 12px 0",
        background: "#1B1F23",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {[
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                fill="white"
              />
            </svg>
          ),
          label: "Home",
          active: true,
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
            </svg>
          ),
          label: "My Network",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="7"
                height="7"
                rx="1"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
              <rect
                x="14"
                y="3"
                width="7"
                height="7"
                rx="1"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
              <rect
                x="3"
                y="14"
                width="7"
                height="7"
                rx="1"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
              <rect
                x="14"
                y="14"
                width="7"
                height="7"
                rx="1"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
            </svg>
          ),
          label: "Post",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
              <path
                d="M13.73 21a2 2 0 0 1-3.46 0"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
            </svg>
          ),
          label: "Notifications",
        },
        {
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
            </svg>
          ),
          label: "Jobs",
        },
      ].map((n, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          {n.icon}
          <span
            style={{
              fontSize: 6.5,
              color: n.active ? "white" : "rgba(255,255,255,0.5)",
              fontWeight: n.active ? 600 : 400,
            }}
          >
            {n.label}
          </span>
        </div>
      ))}
    </div>
    <HomeIndicator />
  </div>
);

/* ====================================================================
   REDDIT SCREEN - Authentic dark mode
   ==================================================================== */
const RedditScreen = () => (
  <div
    style={{
      background: "#0B1416",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}
  >
    <StatusBar />
    {/* Top bar */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "2px 12px 6px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 5, flex: 1 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#2c5270" />
          <circle cx="12" cy="14" r="5" fill="white" />
          <circle cx="10" cy="13.5" r="0.9" fill="#2c5270" />
          <circle cx="14" cy="13.5" r="0.9" fill="#2c5270" />
          <path
            d="M10 15.5c.5.5 1.2.8 2 .8s1.5-.3 2-.8"
            stroke="#2c5270"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="18" cy="8" r="2" fill="white" />
          <line x1="13" y1="8" x2="17" y2="8" stroke="white" strokeWidth="1" />
        </svg>
        <span style={{ color: "white", fontWeight: 700, fontSize: 12 }}>
          r/socialmedia
        </span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.8" />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          stroke="white"
          strokeWidth="1.8"
        />
      </svg>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
        <circle cx="12" cy="5" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="12" cy="19" r="1.5" />
      </svg>
    </div>

    {/* Sort tabs */}
    <div style={{ display: "flex", gap: 0, padding: "0 12px 8px" }}>
      {["Hot", "New", "Top", "Rising"].map((t, i) => (
        <div
          key={i}
          style={{
            padding: "5px 12px",
            borderRadius: 20,
            background: i === 0 ? "rgba(44,82,112,0.15)" : "transparent",
          }}
        >
          <span
            style={{
              color: i === 0 ? "#2c5270" : "rgba(255,255,255,0.5)",
              fontSize: 9,
              fontWeight: i === 0 ? 700 : 500,
            }}
          >
            {t}
          </span>
        </div>
      ))}
    </div>

    <div style={{ height: 0.5, background: "rgba(255,255,255,0.08)" }} />

    {/* Post 1 */}
    <div
      style={{
        padding: "10px 12px",
        borderBottom: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginBottom: 6,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#2c5270,#60516f)",
          }}
        />
        <span
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 8,
            fontWeight: 600,
          }}
        >
          r/socialmedia
        </span>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 7.5 }}>
          · 3h
        </span>
        <div
          style={{
            marginLeft: "auto",
            background: "rgba(44,82,112,0.12)",
            borderRadius: 12,
            padding: "2px 8px",
          }}
        >
          <span style={{ color: "#2c5270", fontSize: 7, fontWeight: 600 }}>
            Case Study
          </span>
        </div>
      </div>
      <p
        style={{
          color: "white",
          fontSize: 10.5,
          fontWeight: 600,
          lineHeight: 1.35,
          marginBottom: 8,
        }}
      >
        How we grew a brand's Instagram from 0 to 50K followers in 60 days 🚀
        [Full Breakdown]
      </p>
      {/* Image */}
      <div
        style={{
          height: 85,
          borderRadius: 10,
          background:
            "linear-gradient(135deg,#2c5270 0%,#60516f 60%,#2c5270 100%)",
          position: "relative",
          overflow: "hidden",
          marginBottom: 8,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              0 → 50K
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 8.5,
                fontWeight: 600,
                marginTop: 2,
              }}
            >
              in 60 days
            </p>
          </div>
        </div>
      </div>
      {/* Vote bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "5px 10px",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#2c5270">
            <path d="M12 4l-8 8h5v8h6v-8h5z" />
          </svg>
          <span style={{ color: "white", fontSize: 9, fontWeight: 700 }}>
            4.2k
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,0.35)"
          >
            <path d="M12 20l8-8h-5V4H9v8H4z" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "5px 10px",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
            />
          </svg>
          <span
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 8.5,
              fontWeight: 600,
            }}
          >
            847
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "5px 10px",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 8.5,
              fontWeight: 600,
            }}
          >
            Share
          </span>
        </div>
      </div>
    </div>

    {/* Post 2 teaser */}
    <div style={{ padding: "10px 12px", flex: 1 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginBottom: 6,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#60516f",
          }}
        />
        <span
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 8,
            fontWeight: 600,
          }}
        >
          r/marketing
        </span>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 7.5 }}>
          · 1h
        </span>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <p
          style={{
            flex: 1,
            color: "white",
            fontSize: 10,
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          The algorithm change that doubled our reach overnight 📈
        </p>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 8,
            background: "linear-gradient(135deg,#60516f,#2c5270)",
            flexShrink: 0,
          }}
        />
      </div>
      <div
        style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 8,
            fontWeight: 600,
          }}
        >
          ↑ 1.8k ↓
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 8,
            fontWeight: 600,
          }}
        >
          💬 234
        </span>
      </div>
    </div>

    {/* Bottom nav */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "6px 16px 0",
        borderTop: "0.5px solid rgba(255,255,255,0.08)",
        background: "#0B1416",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="white" />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </svg>
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "#2c5270",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24">
          <path
            d="M12 5v14M5 12h14"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
        <path
          d="M13.73 21a2 2 0 0 1-3.46 0"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
    <HomeIndicator />
  </div>
);

/* ====================================================================
   TWITTER / X SCREEN - Authentic dark mode
   ==================================================================== */
const TwitterScreen = () => (
  <div
    style={{
      background: "#000",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily:
        '"Chirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif',
    }}
  >
    <StatusBar />
    {/* Top bar */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px 16px 0",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#2c5270,#60516f)",
        }}
      />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M4 4h4l2.5 3.5L14 4h3.5l-4.5 6 5 7h-4l-2.8-4L8.5 17H5l4.8-6.5z" />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="1" fill="white" />
        <circle cx="19" cy="12" r="1" fill="white" />
        <circle cx="5" cy="12" r="1" fill="white" />
      </svg>
    </div>

    {/* Tabs */}
    <div
      style={{
        display: "flex",
        borderBottom: "0.5px solid rgba(255,255,255,0.12)",
        marginTop: 8,
      }}
    >
      {["For you", "Following"].map((t, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            textAlign: "center",
            padding: "10px 0",
            position: "relative",
          }}
        >
          <span
            style={{
              color: i === 0 ? "#E7E9EA" : "#71767B",
              fontSize: 10,
              fontWeight: i === 0 ? 700 : 500,
            }}
          >
            {t}
          </span>
          {i === 0 && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 28,
                height: 3,
                background: "#1D9BF0",
                borderRadius: 2,
              }}
            />
          )}
        </div>
      ))}
    </div>

    {/* Tweet 1 */}
    <div
      style={{
        padding: "10px 14px 8px",
        borderBottom: "0.5px solid rgba(255,255,255,0.12)",
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#2c5270,#60516f)",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              marginBottom: 2,
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#E7E9EA", fontSize: 10, fontWeight: 700 }}>
              SquareSocial
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#1D9BF0">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            </svg>
            <span style={{ color: "#71767B", fontSize: 8.5, fontWeight: 400 }}>
              @SquareSocialHQ · 2h
            </span>
          </div>
          <p
            style={{
              color: "#E7E9EA",
              fontSize: 9.5,
              lineHeight: 1.45,
              marginBottom: 8,
              fontWeight: 400,
            }}
          >
            Just hit <span style={{ color: "#1D9BF0" }}>1M impressions</span>{" "}
            this week for a client 🚀
            <br />
            Thread on what's working in social media right now 👇
          </p>
          {/* Media */}
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              height: 105,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "linear-gradient(135deg,#1D9BF0 0%,#60516f 100%)",
              position: "relative",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 14px",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 7.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 3,
                  fontWeight: 500,
                }}
              >
                Thread 1/7
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                The Content Formula
                <br />
                That 10× Our Reach
              </p>
            </div>
          </div>
          {/* Actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "90%",
            }}
          >
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      stroke="#71767B"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                val: "234",
                color: "#71767B",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 1l4 4-4 4"
                      stroke="#00BA7C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 11V9a4 4 0 0 1 4-4h14"
                      stroke="#00BA7C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 23l-4-4 4-4"
                      stroke="#00BA7C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 13v2a4 4 0 0 1-4 4H3"
                      stroke="#00BA7C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                val: "1.2K",
                color: "#00BA7C",
              },
              {
                icon: (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#F91880"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                ),
                val: "8.4K",
                color: "#F91880",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"
                      stroke="#1D9BF0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                val: "124K",
                color: "#1D9BF0",
              },
            ].map((a, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 3 }}
              >
                {a.icon}
                <span style={{ fontSize: 8, color: a.color }}>{a.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Tweet 2 */}
    <div
      style={{
        padding: "10px 14px",
        borderBottom: "0.5px solid rgba(255,255,255,0.12)",
        flex: 1,
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#1D9BF0",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "white", fontSize: 9, fontWeight: 700 }}>
            MH
          </span>
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              marginBottom: 3,
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#E7E9EA", fontSize: 10, fontWeight: 700 }}>
              Marketing Hub
            </span>
            <span style={{ color: "#71767B", fontSize: 8.5 }}>
              @mktghub · 45m
            </span>
          </div>
          <p
            style={{
              color: "#E7E9EA",
              fontSize: 9,
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            Replying to{" "}
            <span style={{ color: "#1D9BF0" }}>@SquareSocialHQ</span> — This is
            exactly what we needed! The engagement strategy is 🔥
          </p>
        </div>
      </div>
    </div>

    {/* Bottom nav */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "8px 24px 0",
        borderTop: "0.5px solid rgba(255,255,255,0.12)",
        marginTop: "auto",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="white" />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#71767B" strokeWidth="1.5" />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          stroke="#71767B"
          strokeWidth="1.5"
        />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
          stroke="#71767B"
          strokeWidth="1.5"
        />
        <path
          d="M13.73 21a2 2 0 0 1-3.46 0"
          stroke="#71767B"
          strokeWidth="1.5"
        />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v16H4z" stroke="#71767B" strokeWidth="1.5" rx="2" />
        <path d="M4 9h16" stroke="#71767B" strokeWidth="1.5" />
      </svg>
    </div>
    <HomeIndicator />
  </div>
);

/* ====================================================================
   WHATSAPP CHANNEL SCREEN - Authentic dark mode (#0B141A)
   ==================================================================== */
const WhatsAppScreen = () => (
  <div
    style={{
      background: "#0B141A",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    }}
  >
    <StatusBar />
    {/* Channel header */}
    <div style={{ background: "#1F2C33", padding: "6px 12px 10px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 8,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 12H5M12 5l-7 7 7 7"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#25D366,#128C7E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: 10, fontWeight: 600 }}>
              SQ
            </span>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span
                style={{ color: "#E9EDEF", fontSize: 11.5, fontWeight: 500 }}
              >
                SquareSocial
              </span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#00A884">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
            </div>
            <span style={{ color: "#8696A0", fontSize: 8 }}>
              Channel · 48.2K followers
            </span>
          </div>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,0.6)"
        >
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <div
          style={{
            flex: 1,
            background: "#00A884",
            borderRadius: 20,
            padding: "7px 0",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#111B21", fontSize: 9, fontWeight: 600 }}>
            Follow
          </span>
        </div>
        <div
          style={{
            flex: 1,
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 20,
            padding: "7px 0",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#E9EDEF", fontSize: 9, fontWeight: 500 }}>
            Mute
          </span>
        </div>
      </div>
    </div>

    {/* Chat area with wallpaper-like tint */}
    <div
      style={{
        flex: 1,
        padding: "8px 10px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        background: "#0B141A",
        position: "relative",
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)",
        }}
      />

      {[
        {
          text: "🚀 New case study dropped! How we 10x'd a brand's reach in 30 days. Thread below 👇",
          time: "2:14 pm",
          views: "12.4K",
          reaction: "🔥",
          rCount: "847",
        },
        {
          text: "📊 Weekly Growth Tip: Consistency beats virality every single time. Here's the data to prove it...",
          time: "Yesterday",
          views: "9.8K",
          reaction: "❤️",
          rCount: "623",
        },
        {
          text: "🎯 Free webinar this Friday — Social Media Strategy for 2025. Register now, spots are limited!",
          time: "Mon",
          views: "18.1K",
          reaction: "🙌",
          rCount: "1.2K",
        },
      ].map((msg, i) => (
        <div key={i} style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              background: "#1B2B34",
              borderRadius: "0 8px 8px 8px",
              padding: "6px 8px 16px",
              maxWidth: "92%",
              position: "relative",
            }}
          >
            {/* Tail */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: -4,
                width: 0,
                height: 0,
                borderTop: "6px solid #1B2B34",
                borderLeft: "6px solid transparent",
              }}
            />
            <p style={{ color: "#E9EDEF", fontSize: 9.5, lineHeight: 1.45 }}>
              {msg.text}
            </p>
            <div
              style={{
                position: "absolute",
                bottom: 3,
                right: 6,
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                  stroke="#8696A0"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#8696A0"
                  strokeWidth="1.5"
                />
              </svg>
              <span style={{ color: "#8696A0", fontSize: 7 }}>{msg.views}</span>
              <span style={{ color: "#8696A0", fontSize: 7 }}>{msg.time}</span>
            </div>
          </div>
          {/* Reaction pill */}
          <div
            style={{
              position: "absolute",
              bottom: -6,
              left: 8,
              background: "#1F2C33",
              borderRadius: 12,
              padding: "2px 6px",
              border: "1px solid #0B141A",
              display: "flex",
              gap: 3,
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: 9 }}>{msg.reaction}</span>
            <span style={{ color: "#E9EDEF", fontSize: 7.5, fontWeight: 500 }}>
              {msg.rCount}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom area */}
    <div
      style={{
        background: "#1F2C33",
        padding: "8px 12px 0",
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#8696A0" strokeWidth="1.5" />
        <path
          d="M8 14s1.5 2 4 2 4-2 4-2"
          stroke="#8696A0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="9"
          y1="9"
          x2="9.01"
          y2="9"
          stroke="#8696A0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="9"
          x2="15.01"
          y2="9"
          stroke="#8696A0"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          flex: 1,
          background: "#2A3942",
          borderRadius: 20,
          padding: "7px 12px",
        }}
      >
        <span style={{ color: "#8696A0", fontSize: 9 }}>Message</span>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
          stroke="#8696A0"
          strokeWidth="1.5"
        />
        <path
          d="M19 10v2a7 7 0 0 1-14 0v-2"
          stroke="#8696A0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="19"
          x2="12"
          y2="23"
          stroke="#8696A0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <HomeIndicator color="rgba(255,255,255,0.2)" />
  </div>
);

const SCREENS = [
  InstagramScreen,
  LinkedInScreen,
  RedditScreen,
  TwitterScreen,
  WhatsAppScreen,
];
const PLATFORM_COLORS = ["#E1306C", "#0A66C2", "#2c5270", "#000000", "#25D366"];

/* ── Hero ── */
export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SCREENS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const Screen = SCREENS[idx];

  return (
    <section className="w-full bg-[#e8e8e8] pt-24 pb-12 overflow-hidden relative">
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Drifting orbs */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: "0%",
            left: "-6%",
            background: "radial-gradient(circle, rgba(44,82,112,0.08) 0%, transparent 68%)",
          }}
          animate={{ y: [0, 28, 0], x: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-10 sm:pt-16 md:pt-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">
          {/* ── Left: text ── */}
          <div className="space-y-7 relative z-10">

            {/* Agency badge pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-[#0d0d0d] dark:bg-white text-white dark:text-[#0d0d0d] text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#2c5270" }} />
              Social Media Agency
            </motion.div>

            {/* Heading — line-by-line blur + slide reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-[#0d0d0d] dark:text-white leading-[1.05] tracking-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 56, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                A Modern Social
              </motion.span>

              <motion.span
                className="block"
                initial={{ opacity: 0, y: 56, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                Agency For A
              </motion.span>

              <motion.span
                className="block"
                initial={{ opacity: 0, y: 56, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                Modern{" "}
                <span className="relative inline-block">
                  Brand.
                  {/* Drawn-on underline */}
                  <motion.span
                    className="absolute left-0 bottom-1 h-[4px] rounded-full"
                    style={{ background: "#2c5270" }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.76, ease: "easeOut" }}
                  />
                </span>
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
              className="text-[#0d0d0d]/70 dark:text-white/70 text-base leading-relaxed font-medium max-w-sm"
            >
              We build content that stops the scroll, grows real audiences, and turns followers into revenue — backed by data, not guesswork.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="flex flex-row items-center gap-3"
            >
              <Link to="/book">
                <button className="flex items-center gap-2 h-12 px-7 rounded-full bg-[#0d0d0d] text-white font-bold text-sm hover:bg-[#222] dark:bg-white dark:text-[#0d0d0d] dark:hover:bg-white/90 transition-colors">
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/work">
                <button className="flex items-center gap-2 h-12 px-7 rounded-full border border-[#0d0d0d]/20 text-[#0d0d0d] font-bold text-sm hover:border-[#0d0d0d]/40 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5 transition-colors">
                  See Our Work
                </button>
              </Link>
            </motion.div>

            {/* Trusted brands strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="pt-1"
            >
              <p className="text-xs text-[#0d0d0d]/60 dark:text-white/60 font-semibold uppercase tracking-widest mb-3">
                Trusted by brands
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {brands.map((b) => (
                  <div key={b.name} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                    <img src={b.logo} alt={b.name} className="w-5 h-5 object-contain rounded-sm" />
                    <span className="text-sm font-black text-[#0d0d0d]/90 dark:text-white/70 tracking-tight">
                      {b.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: illustration ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[600px]"
          >
            {/* Glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 320,
                height: 320,
                background:
                  "radial-gradient(circle, rgba(200,240,60,0.15) 0%, transparent 70%)",
              }}
            />

            {/* Floating platform icons */}
            {floatingIcons.map(
              (
                { Icon, size, top, left, right, bottom, delay, duration },
                i,
              ) => (
                <motion.div
                  key={i}
                  className="absolute hidden sm:block"
                  style={{
                    top,
                    left,
                    right,
                    bottom,
                    width: size,
                    height: size,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { duration: 0.4, delay: delay + 0.3 },
                    scale: { duration: 0.4, delay: delay + 0.3 },
                    y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{
                      duration: duration + 0.5,
                      repeat: Infinity,
                      delay,
                    }}
                    style={{ background: "rgba(124,58,237,0.2)" }}
                  />
                  <Icon />
                </motion.div>
              ),
            )}

            {/* Phone */}
            {/* Centering wrapper — handles only the 50%/50% translate */}
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 20,
                width: 248,
              }}
            >
              {/* Scale shell — shrinks the phone on smaller viewports without breaking pixel-perfect internals */}
              <div className="scale-[0.68] sm:scale-[0.85] lg:scale-100 origin-center">
                <motion.div
                  style={{ width: 248 }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  {/* Buttons */}
                  <div
                    style={{
                      position: "absolute",
                      left: -4,
                      top: 68,
                      width: 3,
                      height: 14,
                      background: "#2a2a2a",
                      borderRadius: "2px 0 0 2px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: -4,
                      top: 90,
                      width: 3,
                      height: 26,
                      background: "#2a2a2a",
                      borderRadius: "2px 0 0 2px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: -4,
                      top: 124,
                      width: 3,
                      height: 26,
                      background: "#2a2a2a",
                      borderRadius: "2px 0 0 2px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: -4,
                      top: 100,
                      width: 3,
                      height: 38,
                      background: "#2a2a2a",
                      borderRadius: "0 2px 2px 0",
                    }}
                  />

                  {/* Frame */}
                  <div
                    style={{
                      borderRadius: 42,
                      background:
                        "linear-gradient(160deg,#3a3a3a 0%,#1c1c1e 40%,#111 100%)",
                      padding: 3,
                      boxShadow:
                        "0 0 0 0.5px rgba(255,255,255,0.12), 0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 40,
                        background: "#000",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      {/* Dynamic Island */}
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 76,
                          height: 11,
                          background: "#000",
                          borderRadius: 20,
                          zIndex: 30,
                          boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                        }}
                      />

                      {/* Screen content — fills phone */}
                      <div style={{ height: 468, overflow: "hidden" }}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            style={{ height: "100%" }}
                          >
                            <Screen />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Platform dots */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 5,
                      marginTop: 10,
                    }}
                  >
                    {SCREENS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIdx(i)}
                        style={{
                          width: i === idx ? 16 : 5,
                          height: 5,
                          borderRadius: 5,
                          background:
                            i === idx
                              ? PLATFORM_COLORS[idx]
                              : "rgba(13,13,13,0.2)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
              {/* /scale shell */}
            </div>
            {/* /centering wrapper */}

            {/* Floating stat cards */}
            {statCards.map(
              ({ label, value, delta, color, top, right, left, bottom }, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-2xl shadow-lg hidden md:block"
                  style={{
                    top,
                    right,
                    left,
                    bottom,
                    background: "white",
                    padding: "10px 14px",
                    minWidth: 120,
                    zIndex: 25,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.8 + i * 0.15 },
                    scale: { duration: 0.4, delay: 0.8 + i * 0.15 },
                    y: {
                      duration: 3.5 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    },
                  }}
                >
                  <p
                    style={{
                      fontSize: 9,
                      color: "rgba(13,13,13,0.4)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 3,
                    }}
                  >
                    {label}
                  </p>
                  <div className="flex items-end gap-2">
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 900,
                        color: "#0d0d0d",
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        color,
                        marginBottom: 1,
                        background: `${color}22`,
                        borderRadius: 6,
                        padding: "1px 5px",
                      }}
                    >
                      {delta}
                    </span>
                  </div>
                </motion.div>
              ),
            )}

            {/* Notification pop-up */}
            <motion.div
              className="absolute rounded-2xl shadow-lg hidden sm:flex items-center"
              style={{
                bottom: "20%",
                left: "10%",
                background: "white",
                padding: "8px 12px",
                zIndex: 25,
                border: "1px solid rgba(0,0,0,0.06)",
                gap: 8,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 4,
                delay: 2.5,
                ease: "easeInOut",
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#fd5949,#d6249f)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 12 }}>♥</span>
              </div>
              <div>
                <p style={{ fontSize: 8.5, fontWeight: 800, color: "#0d0d0d" }}>
                  New milestone!
                </p>
                <p
                  style={{
                    fontSize: 7.5,
                    color: "rgba(13,13,13,0.45)",
                    fontWeight: 600,
                  }}
                >
                  1K new followers today
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
