import { writeFileSync } from 'node:fs';

const themes = [
  {
    id: 'rpn-garden',
    font: "'Instrument Serif', Georgia, serif",
    dark: {
      bg: '#0c1017', fg: '#e2e8f0', muted: '#94a3b8', textBody: '#cbd5e1', accent: '#ff2e72', border: '#1e293b',
      surface: '#131924', surfaceRaised: '#1b2434', cardBg: '#0f141f',
      bgImg: 'radial-gradient(rgba(255, 46, 114, 0.12) 1px, transparent 1px)', bgSize: '24px 24px',
      cardRadius: '12px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)', cardHoverShadow: '0 8px 30px rgba(255, 46, 114, 0.2)',
      badgeRadius: '999px', tagRadius: '999px'
    },
    light: {
      bg: '#f6f5ef', fg: '#0f172a', muted: '#64748b', textBody: '#334155', accent: '#e11d48', border: '#e2dfd4',
      surface: '#ffffff', surfaceRaised: '#fbfaf6', cardBg: '#ffffff',
      bgImg: 'radial-gradient(rgba(225, 29, 72, 0.08) 1px, transparent 1px)', bgSize: '24px 24px',
      cardRadius: '12px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)', cardHoverShadow: '0 8px 24px rgba(225, 29, 72, 0.15)',
      badgeRadius: '999px', tagRadius: '999px'
    }
  },
  {
    id: 'grid-meltdown',
    font: "'Space Grotesk', system-ui, sans-serif",
    dark: {
      bg: '#0a0a0c', fg: '#f7f7ee', muted: '#a1a1aa', textBody: '#d4d4d8', accent: '#e9ff39', border: '#27272a',
      surface: '#141417', surfaceRaised: '#1c1c20', cardBg: '#111114',
      bgImg: 'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)', bgSize: '24px 24px',
      cardRadius: '0px', cardBorderWidth: '2.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '5px 5px 0 #e9ff39', cardHoverShadow: '8px 8px 0 #ff2e72', cardHoverTransform: 'translate(-3px, -3px)',
      badgeRadius: '0px', tagRadius: '0px'
    },
    light: {
      bg: '#f5f4ea', fg: '#111111', muted: '#52525b', textBody: '#27272a', accent: '#849700', border: '#111111',
      surface: '#ffffff', surfaceRaised: '#fefefe', cardBg: '#ffffff',
      bgImg: 'linear-gradient(rgba(17, 17, 17, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.08) 1px, transparent 1px)', bgSize: '24px 24px',
      cardRadius: '0px', cardBorderWidth: '2.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '5px 5px 0 #111111', cardHoverShadow: '8px 8px 0 #db1456', cardHoverTransform: 'translate(-3px, -3px)',
      badgeRadius: '0px', tagRadius: '0px'
    }
  },
  {
    id: 'the-exploit-grimoire',
    font: "'Instrument Serif', Georgia, serif",
    dark: {
      bg: '#150c22', fg: '#f5efe0', muted: '#9d8eb5', textBody: '#dcd3eb', accent: '#f0b92f', border: '#3b255a',
      surface: '#201335', surfaceRaised: '#2c1a48', cardBg: '#190e2b',
      bgImg: 'radial-gradient(circle at 1px 1px, rgba(240, 185, 47, 0.35) 1.2px, transparent 1.2px)', bgSize: '20px 20px',
      cardRadius: '6px', cardBorderWidth: '3px', cardBorderStyle: 'double',
      cardBoxShadow: '0 8px 24px rgba(240, 185, 47, 0.1)', cardHoverShadow: '0 12px 32px rgba(54, 239, 190, 0.18)',
      badgeRadius: '4px', tagRadius: '4px'
    },
    light: {
      bg: '#fff8e8', fg: '#2b123f', muted: '#6e5a80', textBody: '#3f2b54', accent: '#a17808', border: '#d9caa9',
      surface: '#ffffff', surfaceRaised: '#fbf3de', cardBg: '#ffffff',
      bgImg: 'radial-gradient(circle at 1px 1px, rgba(161, 120, 8, 0.22) 1.2px, transparent 1.2px)', bgSize: '20px 20px',
      cardRadius: '6px', cardBorderWidth: '3px', cardBorderStyle: 'double',
      cardBoxShadow: '0 4px 18px rgba(43, 18, 63, 0.08)', cardHoverShadow: '0 8px 24px rgba(161, 120, 8, 0.2)',
      badgeRadius: '4px', tagRadius: '4px'
    }
  },
  {
    id: 'stack-underflow',
    font: "'JetBrains Mono', monospace",
    dark: {
      bg: '#080a06', fg: '#fbbf24', muted: '#b45309', textBody: '#f59e0b', accent: '#f59e0b', border: '#292518',
      surface: '#11140d', surfaceRaised: '#181d13', cardBg: '#0c0f08',
      bgImg: 'repeating-linear-gradient(0deg, rgba(245, 158, 11, 0.045) 0 1px, transparent 1px 4px)', bgSize: 'auto',
      cardRadius: '0px', cardBorderWidth: '1.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 0 14px rgba(245, 158, 11, 0.12)', cardHoverShadow: '0 0 22px rgba(245, 158, 11, 0.28)',
      badgeRadius: '0px', tagRadius: '0px'
    },
    light: {
      bg: '#fbf8ee', fg: '#1c190f', muted: '#786e58', textBody: '#383222', accent: '#b45309', border: '#d4ccb8',
      surface: '#ffffff', surfaceRaised: '#f5f1e1', cardBg: '#ffffff',
      bgImg: 'repeating-linear-gradient(0deg, rgba(180, 83, 9, 0.035) 0 1px, transparent 1px 4px)', bgSize: 'auto',
      cardRadius: '0px', cardBorderWidth: '1.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 2px 10px rgba(180, 83, 9, 0.08)', cardHoverShadow: '0 4px 16px rgba(180, 83, 9, 0.2)',
      badgeRadius: '0px', tagRadius: '0px'
    }
  },
  {
    id: 'cryptographic-blockbuster',
    font: "'Space Grotesk', system-ui, sans-serif",
    dark: {
      bg: '#040711', fg: '#ecfeff', muted: '#0891b2', textBody: '#cffafe', accent: '#06b6d4', border: '#15253b',
      surface: '#0a1020', surfaceRaised: '#101a33', cardBg: '#060b17',
      bgImg: 'linear-gradient(rgba(6, 182, 212, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.06) 1px, transparent 1px)', bgSize: '28px 28px',
      cardRadius: '14px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 0 20px rgba(6, 182, 212, 0.2), inset 0 0 15px rgba(6, 182, 212, 0.04)', cardHoverShadow: '0 0 30px rgba(236, 72, 153, 0.35)',
      badgeRadius: '8px', tagRadius: '8px'
    },
    light: {
      bg: '#effbfe', fg: '#082f49', muted: '#0284c7', textBody: '#0c4a6e', accent: '#0284c7', border: '#bae6fd',
      surface: '#ffffff', surfaceRaised: '#f0f9ff', cardBg: '#ffffff',
      bgImg: 'linear-gradient(rgba(2, 132, 199, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.06) 1px, transparent 1px)', bgSize: '28px 28px',
      cardRadius: '14px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 18px rgba(2, 132, 199, 0.1)', cardHoverShadow: '0 8px 24px rgba(219, 39, 119, 0.22)',
      badgeRadius: '8px', tagRadius: '8px'
    }
  },
  {
    id: 'proof-bonbons',
    font: "'Fraunces', serif",
    dark: {
      bg: '#170c18', fg: '#fce7f3', muted: '#f472b6', textBody: '#fbcfe8', accent: '#f472b6', border: '#4a1d48',
      surface: '#221124', surfaceRaised: '#2e1731', cardBg: '#1a0d1b',
      bgImg: 'radial-gradient(rgba(244, 114, 182, 0.2) 1.5px, transparent 1.5px)', bgSize: '24px 24px',
      cardRadius: '22px', cardBorderWidth: '2px', cardBorderStyle: 'solid',
      cardBoxShadow: '5px 5px 0 #f472b6', cardHoverShadow: '7px 7px 0 #38bdf8', cardHoverTransform: 'translate(-2px, -2px)',
      badgeRadius: '999px', tagRadius: '999px'
    },
    light: {
      bg: '#fff5f8', fg: '#1f1320', muted: '#db2777', textBody: '#40203f', accent: '#db2777', border: '#1f1320',
      surface: '#ffffff', surfaceRaised: '#fdf2f6', cardBg: '#ffffff',
      bgImg: 'radial-gradient(rgba(219, 39, 119, 0.16) 1.5px, transparent 1.5px)', bgSize: '24px 24px',
      cardRadius: '22px', cardBorderWidth: '2px', cardBorderStyle: 'solid',
      cardBoxShadow: '5px 5px 0 #1f1320', cardHoverShadow: '7px 7px 0 #db2777', cardHoverTransform: 'translate(-2px, -2px)',
      badgeRadius: '999px', tagRadius: '999px'
    }
  },
  {
    id: 'the-hash-crash',
    font: "'Space Grotesk', monospace",
    dark: {
      bg: '#0c0b1a', fg: '#e0e7ff', muted: '#818cf8', textBody: '#c7d2fe', accent: '#34d399', border: '#232047',
      surface: '#15132d', surfaceRaised: '#1d1a3f', cardBg: '#0f0e21',
      bgImg: 'linear-gradient(60deg, rgba(52, 211, 153, 0.05) 1px, transparent 1px), linear-gradient(-60deg, rgba(52, 211, 153, 0.05) 1px, transparent 1px)', bgSize: '30px 52px',
      cardRadius: '8px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 0 18px rgba(52, 211, 153, 0.16)', cardHoverShadow: '0 0 28px rgba(244, 63, 94, 0.28)',
      badgeRadius: '4px', tagRadius: '4px'
    },
    light: {
      bg: '#f3f6ff', fg: '#1e1b4b', muted: '#4338ca', textBody: '#312e81', accent: '#059669', border: '#c7d2fe',
      surface: '#ffffff', surfaceRaised: '#eef2ff', cardBg: '#ffffff',
      bgImg: 'linear-gradient(60deg, rgba(5, 150, 105, 0.05) 1px, transparent 1px), linear-gradient(-60deg, rgba(5, 150, 105, 0.05) 1px, transparent 1px)', bgSize: '30px 52px',
      cardRadius: '8px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 16px rgba(5, 150, 105, 0.1)', cardHoverShadow: '0 8px 24px rgba(225, 29, 72, 0.18)',
      badgeRadius: '4px', tagRadius: '4px'
    }
  },
  {
    id: 'form-follows-failure',
    font: "'Space Grotesk', sans-serif",
    dark: {
      bg: '#101012', fg: '#fafafa', muted: '#a1a1aa', textBody: '#e4e4e7', accent: '#ef4444', border: '#27272a',
      surface: '#18181b', surfaceRaised: '#222226', cardBg: '#131316',
      bgImg: 'repeating-linear-gradient(45deg, rgba(239, 68, 68, 0.04) 0 10px, transparent 10px 20px)', bgSize: 'auto',
      cardRadius: '0px', cardBorderWidth: '3px', cardBorderStyle: 'solid',
      cardBoxShadow: '6px 6px 0 #ef4444', cardHoverShadow: '9px 9px 0 #ffffff', cardHoverTransform: 'translate(-3px, -3px)',
      badgeRadius: '0px', tagRadius: '0px'
    },
    light: {
      bg: '#faf7f0', fg: '#09090b', muted: '#71717a', textBody: '#27272a', accent: '#dc2626', border: '#09090b',
      surface: '#ffffff', surfaceRaised: '#f5f2e9', cardBg: '#ffffff',
      bgImg: 'repeating-linear-gradient(45deg, rgba(220, 38, 38, 0.04) 0 10px, transparent 10px 20px)', bgSize: 'auto',
      cardRadius: '0px', cardBorderWidth: '3px', cardBorderStyle: 'solid',
      cardBoxShadow: '6px 6px 0 #dc2626', cardHoverShadow: '9px 9px 0 #09090b', cardHoverTransform: 'translate(-3px, -3px)',
      badgeRadius: '0px', tagRadius: '0px'
    }
  },
  {
    id: 'twin-blades',
    font: "'Space Grotesk', monospace",
    dark: {
      bg: '#08080a', fg: '#f1f5f9', muted: '#94a3b8', textBody: '#cbd5e1', accent: '#ef4444', border: '#261b1e',
      surface: '#131015', surfaceRaised: '#1c161f', cardBg: '#0d0a0f',
      bgImg: 'repeating-linear-gradient(90deg, rgba(239, 68, 68, 0.04) 0 1px, transparent 1px 32px)', bgSize: 'auto',
      cardRadius: '4px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 0 18px rgba(239, 68, 68, 0.22)', cardHoverShadow: '0 0 28px rgba(239, 68, 68, 0.42)',
      badgeRadius: '2px', tagRadius: '2px'
    },
    light: {
      bg: '#fcf8f8', fg: '#0f172a', muted: '#64748b', textBody: '#334155', accent: '#dc2626', border: '#e2d5d7',
      surface: '#ffffff', surfaceRaised: '#fbf0f0', cardBg: '#ffffff',
      bgImg: 'repeating-linear-gradient(90deg, rgba(220, 38, 38, 0.04) 0 1px, transparent 1px 32px)', bgSize: 'auto',
      cardRadius: '4px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 16px rgba(220, 38, 38, 0.1)', cardHoverShadow: '0 8px 24px rgba(220, 38, 38, 0.25)',
      badgeRadius: '2px', tagRadius: '2px'
    }
  },
  {
    id: 'cathedral-of-constraints',
    font: "'Cormorant Garamond', serif",
    dark: {
      bg: '#090d0b', fg: '#ecfdf5', muted: '#6ee7b7', textBody: '#d1fae5', accent: '#10b981', border: '#1c3328',
      surface: '#101a14', surfaceRaised: '#17271e', cardBg: '#0c140f',
      bgImg: 'radial-gradient(ellipse at 50% -20%, rgba(16, 185, 129, 0.18), transparent 70%)', bgSize: 'auto',
      cardRadius: '10px', cardBorderWidth: '2px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 8px 25px rgba(16, 185, 129, 0.14)', cardHoverShadow: '0 12px 32px rgba(244, 63, 94, 0.22)',
      badgeRadius: '6px', tagRadius: '6px'
    },
    light: {
      bg: '#f4fbf7', fg: '#062817', muted: '#047857', textBody: '#064e3b', accent: '#047857', border: '#c0ebd7',
      surface: '#ffffff', surfaceRaised: '#eaf8f1', cardBg: '#ffffff',
      bgImg: 'radial-gradient(ellipse at 50% -20%, rgba(4, 120, 87, 0.12), transparent 70%)', bgSize: 'auto',
      cardRadius: '10px', cardBorderWidth: '2px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 16px rgba(4, 120, 87, 0.08)', cardHoverShadow: '0 8px 24px rgba(4, 120, 87, 0.18)',
      badgeRadius: '6px', tagRadius: '6px'
    }
  },
  {
    id: 'orbiting-footnotes',
    font: "'Instrument Serif', Georgia, serif",
    dark: {
      bg: '#050914', fg: '#f0f9ff', muted: '#7dd3fc', textBody: '#e0f2fe', accent: '#38bdf8', border: '#172544',
      surface: '#0b1429', surfaceRaised: '#111e3d', cardBg: '#070e1e',
      bgImg: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 1px, transparent 1px)', bgSize: '24px 24px',
      cardRadius: '14px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 0 24px rgba(56, 189, 248, 0.16)', cardHoverShadow: '0 0 34px rgba(192, 132, 252, 0.28)',
      badgeRadius: '999px', tagRadius: '999px'
    },
    light: {
      bg: '#f0f6ff', fg: '#082f49', muted: '#0284c7', textBody: '#0c4a6e', accent: '#0284c7', border: '#bae6fd',
      surface: '#ffffff', surfaceRaised: '#e0f2fe', cardBg: '#ffffff',
      bgImg: 'radial-gradient(circle, rgba(2, 132, 199, 0.09) 1px, transparent 1px)', bgSize: '24px 24px',
      cardRadius: '14px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 18px rgba(2, 132, 199, 0.1)', cardHoverShadow: '0 8px 24px rgba(147, 51, 234, 0.18)',
      badgeRadius: '999px', tagRadius: '999px'
    }
  },
  {
    id: 'monsters-in-the-math',
    font: "'Fraunces', serif",
    dark: {
      bg: '#020d12', fg: '#ecfeff', muted: '#22d3ee', textBody: '#cffafe', accent: '#22d3ee', border: '#0e2b36',
      surface: '#051821', surfaceRaised: '#0a232f', cardBg: '#031219',
      bgImg: 'radial-gradient(70rem 32rem at 50% -10%, rgba(34, 211, 238, 0.15), transparent 60%)', bgSize: 'auto',
      cardRadius: '14px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 0 22px rgba(34, 211, 238, 0.18)', cardHoverShadow: '0 0 32px rgba(168, 85, 247, 0.3)',
      badgeRadius: '999px', tagRadius: '999px'
    },
    light: {
      bg: '#ebfbfd', fg: '#083344', muted: '#0891b2', textBody: '#155e75', accent: '#0891b2', border: '#a5f3fc',
      surface: '#ffffff', surfaceRaised: '#cffafe', cardBg: '#ffffff',
      bgImg: 'radial-gradient(70rem 32rem at 50% -10%, rgba(8, 145, 178, 0.12), transparent 60%)', bgSize: 'auto',
      cardRadius: '14px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 18px rgba(8, 145, 178, 0.1)', cardHoverShadow: '0 8px 24px rgba(8, 145, 178, 0.22)',
      badgeRadius: '999px', tagRadius: '999px'
    }
  },
  {
    id: 'sam-at-sunrise',
    font: "'Syne', sans-serif",
    dark: {
      bg: '#12081c', fg: '#fff1f2', muted: '#fb923c', textBody: '#ffe4e6', accent: '#fb923c', border: '#381c4e',
      surface: '#1c0f2b', surfaceRaised: '#28173d', cardBg: '#150a21',
      bgImg: 'linear-gradient(rgba(251, 146, 60, 0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.065) 1px, transparent 1px)', bgSize: '24px 24px',
      cardRadius: '16px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 6px 24px rgba(251, 146, 60, 0.16)', cardHoverShadow: '0 10px 32px rgba(129, 140, 248, 0.28)',
      badgeRadius: '10px', tagRadius: '10px'
    },
    light: {
      bg: '#fff6f0', fg: '#2b0f19', muted: '#ea580c', textBody: '#431407', accent: '#ea580c', border: '#fed7aa',
      surface: '#ffffff', surfaceRaised: '#ffedd5', cardBg: '#ffffff',
      bgImg: 'linear-gradient(rgba(234, 88, 12, 0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 88, 12, 0.065) 1px, transparent 1px)', bgSize: '24px 24px',
      cardRadius: '16px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 18px rgba(234, 88, 12, 0.1)', cardHoverShadow: '0 8px 24px rgba(234, 88, 12, 0.22)',
      badgeRadius: '10px', tagRadius: '10px'
    }
  },
  {
    id: 'mercury-keyspace',
    font: "'Space Grotesk', monospace",
    dark: {
      bg: '#0c0d10', fg: '#f1f5f9', muted: '#94a3b8', textBody: '#cbd5e1', accent: '#94a3b8', border: '#272933',
      surface: '#15161c', surfaceRaised: '#1d1e26', cardBg: '#101115',
      bgImg: 'linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)', bgSize: '20px 20px',
      cardRadius: '8px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)', cardHoverShadow: '0 8px 24px rgba(56, 189, 248, 0.2)',
      badgeRadius: '4px', tagRadius: '4px'
    },
    light: {
      bg: '#f3f4f6', fg: '#0f172a', muted: '#64748b', textBody: '#334155', accent: '#475569', border: '#d1d5db',
      surface: '#ffffff', surfaceRaised: '#e5e7eb', cardBg: '#ffffff',
      bgImg: 'linear-gradient(rgba(71, 85, 105, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 85, 105, 0.06) 1px, transparent 1px)', bgSize: '20px 20px',
      cardRadius: '8px', cardBorderWidth: '1px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)', cardHoverShadow: '0 6px 18px rgba(15, 23, 42, 0.15)',
      badgeRadius: '4px', tagRadius: '4px'
    }
  },
  {
    id: 'crowd-signal',
    font: "'JetBrains Mono', monospace",
    dark: {
      bg: '#050c07', fg: '#dcfce7', muted: '#22c55e', textBody: '#bbf7d0', accent: '#22c55e', border: '#14301c',
      surface: '#0b190f', surfaceRaised: '#112517', cardBg: '#08130b',
      bgImg: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.08) 0%, transparent 70%)', bgSize: 'auto',
      cardRadius: '4px', cardBorderWidth: '1.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 0 16px rgba(34, 197, 94, 0.14)', cardHoverShadow: '0 0 26px rgba(249, 115, 22, 0.25)',
      badgeRadius: '2px', tagRadius: '2px'
    },
    light: {
      bg: '#effcf3', fg: '#052e16', muted: '#16a34a', textBody: '#14532d', accent: '#16a34a', border: '#bbf7d0',
      surface: '#ffffff', surfaceRaised: '#dcfce7', cardBg: '#ffffff',
      bgImg: 'radial-gradient(circle at center, rgba(22, 163, 74, 0.08) 0%, transparent 70%)', bgSize: 'auto',
      cardRadius: '4px', cardBorderWidth: '1.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '0 2px 12px rgba(22, 163, 74, 0.1)', cardHoverShadow: '0 6px 20px rgba(194, 65, 12, 0.18)',
      badgeRadius: '2px', tagRadius: '2px'
    }
  },
  {
    id: 'mutant-mathematics',
    font: "'Space Grotesk', sans-serif",
    dark: {
      bg: '#09100d', fg: '#f7fee7', muted: '#a3e635', textBody: '#ecfccb', accent: '#a3e635', border: '#1f3825',
      surface: '#101d17', surfaceRaised: '#172a22', cardBg: '#0c1611',
      bgImg: 'linear-gradient(rgba(163, 230, 53, 0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(163, 230, 53, 0.065) 1px, transparent 1px)', bgSize: '22px 22px',
      cardRadius: '6px', cardBorderWidth: '1.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '3px 3px 0 #1f3825', cardHoverShadow: '5px 5px 0 #a3e635', cardHoverTransform: 'translate(-2px, -2px)',
      badgeRadius: '4px', tagRadius: '4px'
    },
    light: {
      bg: '#f7fceb', fg: '#1a2e05', muted: '#65a30d', textBody: '#365314', accent: '#65a30d', border: '#d9f99d',
      surface: '#ffffff', surfaceRaised: '#ecfccb', cardBg: '#ffffff',
      bgImg: 'linear-gradient(rgba(101, 163, 13, 0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(101, 163, 13, 0.065) 1px, transparent 1px)', bgSize: '22px 22px',
      cardRadius: '6px', cardBorderWidth: '1.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '3px 3px 0 #d9f99d', cardHoverShadow: '5px 5px 0 #65a30d', cardHoverTransform: 'translate(-2px, -2px)',
      badgeRadius: '4px', tagRadius: '4px'
    }
  },
  {
    id: 'cut-paste-factor',
    font: "'Space Grotesk', sans-serif",
    dark: {
      bg: '#0e0e11', fg: '#fefce8', muted: '#facc15', textBody: '#fef08a', accent: '#facc15', border: '#33333d',
      surface: '#16161b', surfaceRaised: '#202027', cardBg: '#121216',
      bgImg: 'radial-gradient(rgba(250, 204, 21, 0.15) 1px, transparent 1px)', bgSize: '16px 16px',
      cardRadius: '0px', cardBorderWidth: '2.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '5px 5px 0 #facc15', cardHoverShadow: '8px 8px 0 #ffffff', cardHoverTransform: 'translate(-3px, -3px)',
      badgeRadius: '0px', tagRadius: '0px'
    },
    light: {
      bg: '#faf8ee', fg: '#000000', muted: '#854d0e', textBody: '#1f1f1f', accent: '#ca8a04', border: '#000000',
      surface: '#ffffff', surfaceRaised: '#fef9c3', cardBg: '#ffffff',
      bgImg: 'radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)', bgSize: '16px 16px',
      cardRadius: '0px', cardBorderWidth: '2.5px', cardBorderStyle: 'solid',
      cardBoxShadow: '5px 5px 0 #000000', cardHoverShadow: '8px 8px 0 #ca8a04', cardHoverTransform: 'translate(-3px, -3px)',
      badgeRadius: '0px', tagRadius: '0px'
    }
  }
];

let css = '/* Deuterium-Grade Theme Engine — Authentic palettes, textures & card structures */\n';
css += '/* Supports dual Dark and Light mode for every theme */\n\n';

for (const t of themes) {
  // Dark mode block
  css += ':root[data-skin="' + t.id + '"],\n';
  css += ':root[data-skin="' + t.id + '"][data-theme="dark"] {\n';
  css += '  --font-display: ' + t.font + ';\n';
  css += '  --background: ' + t.dark.bg + ';\n';
  css += '  --foreground: ' + t.dark.fg + ';\n';
  css += '  --muted-foreground: ' + t.dark.muted + ';\n';
  css += '  --text-body: ' + t.dark.textBody + ';\n';
  css += '  --text-strong: #ffffff;\n';
  css += '  --accent: ' + t.dark.accent + ';\n';
  css += '  --accent-muted: color-mix(in srgb, ' + t.dark.accent + ' 18%, transparent);\n';
  css += '  --border: ' + t.dark.border + ';\n';
  css += '  --surface: ' + t.dark.surface + ';\n';
  css += '  --surface-raised: ' + t.dark.surfaceRaised + ';\n';
  css += '  --card-bg: ' + t.dark.cardBg + ';\n';
  css += '  --header-bg: color-mix(in srgb, ' + t.dark.bg + ' 85%, transparent);\n';
  css += '  --code-bg: ' + t.dark.cardBg + ';\n';
  css += '  --code-header: ' + t.dark.surface + ';\n';
  css += '  --shadow-card: ' + t.dark.cardBoxShadow + ';\n';
  css += '  --bg-image: ' + t.dark.bgImg + ';\n';
  css += '  --bg-size: ' + t.dark.bgSize + ';\n';
  css += '  --bg-repeat: repeat;\n';
  css += '  --card-radius: ' + t.dark.cardRadius + ';\n';
  css += '  --card-border-width: ' + t.dark.cardBorderWidth + ';\n';
  css += '  --card-border-style: ' + t.dark.cardBorderStyle + ';\n';
  css += '  --card-box-shadow: ' + t.dark.cardBoxShadow + ';\n';
  css += '  --card-hover-shadow: ' + t.dark.cardHoverShadow + ';\n';
  if (t.dark.cardHoverTransform) {
    css += '  --card-hover-transform: ' + t.dark.cardHoverTransform + ';\n';
  }
  css += '  --badge-radius: ' + t.dark.badgeRadius + ';\n';
  css += '  --tag-radius: ' + t.dark.tagRadius + ';\n';
  css += '}\n\n';

  // Light mode block
  css += ':root[data-skin="' + t.id + '"][data-theme="light"] {\n';
  css += '  --font-display: ' + t.font + ';\n';
  css += '  --background: ' + t.light.bg + ';\n';
  css += '  --foreground: ' + t.light.fg + ';\n';
  css += '  --muted-foreground: ' + t.light.muted + ';\n';
  css += '  --text-body: ' + t.light.textBody + ';\n';
  css += '  --text-strong: #09090b;\n';
  css += '  --accent: ' + t.light.accent + ';\n';
  css += '  --accent-muted: color-mix(in srgb, ' + t.light.accent + ' 15%, transparent);\n';
  css += '  --border: ' + t.light.border + ';\n';
  css += '  --surface: ' + t.light.surface + ';\n';
  css += '  --surface-raised: ' + t.light.surfaceRaised + ';\n';
  css += '  --card-bg: ' + t.light.cardBg + ';\n';
  css += '  --header-bg: color-mix(in srgb, ' + t.light.bg + ' 88%, transparent);\n';
  css += '  --code-bg: ' + t.light.surfaceRaised + ';\n';
  css += '  --code-header: ' + t.light.surface + ';\n';
  css += '  --shadow-card: ' + t.light.cardBoxShadow + ';\n';
  css += '  --bg-image: ' + t.light.bgImg + ';\n';
  css += '  --bg-size: ' + t.light.bgSize + ';\n';
  css += '  --bg-repeat: repeat;\n';
  css += '  --card-radius: ' + t.light.cardRadius + ';\n';
  css += '  --card-border-width: ' + t.light.cardBorderWidth + ';\n';
  css += '  --card-border-style: ' + t.light.cardBorderStyle + ';\n';
  css += '  --card-box-shadow: ' + t.light.cardBoxShadow + ';\n';
  css += '  --card-hover-shadow: ' + t.light.cardHoverShadow + ';\n';
  if (t.light.cardHoverTransform) {
    css += '  --card-hover-transform: ' + t.light.cardHoverTransform + ';\n';
  }
  css += '  --badge-radius: ' + t.light.badgeRadius + ';\n';
  css += '  --tag-radius: ' + t.light.tagRadius + ';\n';
  css += '}\n\n';
}

writeFileSync('src/styles/themes.css', css);
console.log('themes.css generated successfully!');
