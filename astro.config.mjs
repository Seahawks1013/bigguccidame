// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Hosted on Netlify. Netlify sets `URL` to the site's primary domain at build
  // time, which Astro uses for canonical / og:url tags.
  site: process.env.URL || 'http://localhost:4321',

  // No code blocks on this site; Shiki's inline styles would conflict with the CSP.
  markdown: { syntaxHighlight: false },

  security: {
    // Astro emits a Content-Security-Policy <meta> with hashes for every
    // script/style it renders. Other security headers live in netlify.toml.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        "font-src 'self'",
        "connect-src 'self'",
        // Spotify player only loads after the visitor taps "Play".
        'frame-src https://open.spotify.com',
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
