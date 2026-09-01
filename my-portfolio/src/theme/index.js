import { extendTheme } from "@chakra-ui/react";

/**
 * The visual system. Colour values are not defined here — they live as CSS
 * custom properties in src/styles/tokens.css and switch on the [data-theme]
 * attribute. Chakra's semantic tokens simply forward to those vars so there is
 * one source of truth for both Chakra props and plain CSS.
 */
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const semanticTokens = {
  colors: {
    "bg.canvas": "var(--bg)",
    "bg.surface": "var(--surface)",
    "bg.card": "var(--card)",
    "bg.cardHover": "var(--card-hover)",
    "bg.wash": "var(--accent-wash)",

    "border.subtle": "var(--border)",
    "border.strong": "var(--border-strong)",

    "text.primary": "var(--text)",
    "text.muted": "var(--text-muted)",
    "text.faint": "var(--text-faint)",

    "accent.solid": "var(--accent)",
    "accent.bright": "var(--accent-bright)",
    "accent.contrast": "var(--accent-contrast)",
    "gold.solid": "var(--gold)",
    "focus.ring": "var(--focus)",
  },
};

const fonts = {
  heading: `'Fraunces', Georgia, 'Times New Roman', serif`,
  body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
  mono: `'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace`,
};

const fontSizes = {
  eyebrow: "0.75rem",
  caption: "0.8125rem",
  bodySm: "0.9375rem",
  body: "1.0625rem",
  lead: "clamp(1.125rem, 1rem + 0.6vw, 1.375rem)",
  h4: "1.25rem",
  h3: "clamp(1.5rem, 1.2rem + 1.4vw, 2rem)",
  h2: "clamp(2rem, 1.4rem + 3vw, 3.25rem)",
  display: "clamp(2.75rem, 1.5rem + 6.2vw, 5.5rem)",
};

const radii = {
  xs: "6px",
  sm: "10px",
  md: "14px",
  lg: "20px",
  full: "9999px",
};

const shadows = {
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  cta: "var(--glow-cta)",
  topHighlight: "var(--top-highlight)",
  outline: "none", // focus handled by :focus-visible in global.css
};

const styles = {
  global: {
    "html, body": {
      bg: "bg.canvas",
      color: "text.primary",
    },
    body: {
      fontFamily: "body",
    },
    "#root": {
      minHeight: "100%",
      isolation: "isolate",
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontFamily: "body",
      fontWeight: 500,
      borderRadius: "sm",
      letterSpacing: "0",
      transition: "background 180ms var(--ease-soft), color 180ms var(--ease-soft), border-color 180ms var(--ease-soft), box-shadow 220ms var(--ease-soft), transform 180ms var(--ease-soft)",
      _focusVisible: { boxShadow: "none" },
    },
    variants: {
      cta: {
        bg: "accent.solid",
        color: "accent.contrast",
        _hover: {
          bg: "accent.bright",
          transform: "translateY(-1px)",
          boxShadow: "cta",
          _disabled: { bg: "accent.solid", transform: "none", boxShadow: "none" },
        },
        _active: { transform: "translateY(0)" },
      },
      line: {
        bg: "transparent",
        color: "text.primary",
        border: "1px solid",
        borderColor: "border.strong",
        _hover: { borderColor: "accent.solid", bg: "bg.wash" },
        _active: { bg: "bg.wash" },
      },
      quiet: {
        bg: "transparent",
        color: "text.muted",
        px: 2,
        _hover: { color: "text.primary", bg: "bg.wash" },
      },
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "heading",
      fontWeight: 380,
      letterSpacing: "-0.02em",
      lineHeight: 1.08,
    },
  },
  Link: {
    baseStyle: {
      _hover: { textDecoration: "none" },
      _focusVisible: { boxShadow: "none" },
    },
  },
};

const theme = extendTheme({
  config,
  semanticTokens,
  fonts,
  fontSizes,
  radii,
  shadows,
  styles,
  components,
});

export default theme;
