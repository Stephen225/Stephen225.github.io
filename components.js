/* ============================================
   PORTFOLIO — SHARED COMPONENTS
   components.js

   Injects the nav and footer into every page.
   To update them site-wide, just edit here.
   ============================================ */

const SITE_NAME  = "Stephen Snyder";
const SITE_EMAIL = "snyderkidsrock@gmail.com";
const GITHUB_URL = "https://github.com/Stephen225";
const LINKEDIN_URL = "https://linkedin.com/in/stephen-snyder-8b0b82305/";

const NAV_LINKS = [
  { label: "Home",     href: "index.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Contact",  href: "contact.html" },
];

// ── Inject nav ────────────────────────────────────────────────────────────────
function injectNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const linksHTML = NAV_LINKS.map(({ label, href }) => {
    const isActive = href === currentPage ? ' class="active"' : "";
    return `<li><a href="${href}"${isActive}>${label}</a></li>`;
  }).join("\n      ");

  const nav = document.createElement("nav");
  nav.innerHTML = `
    <a class="nav-logo" href="index.html">${SITE_NAME}</a>
    <ul class="nav-links">
      ${linksHTML}
    </ul>
  `;

  document.body.prepend(nav);
}

// ── Inject footer ─────────────────────────────────────────────────────────────
function injectFooter() {
  const year = new Date().getFullYear();

  const footer = document.createElement("footer");
  footer.innerHTML = `
    <span>© ${year} ${SITE_NAME}</span>
    <div class="footer-links">
      <a href="${GITHUB_URL}" target="_blank">GitHub</a>
      <a href="${LINKEDIN_URL}" target="_blank">LinkedIn</a>
    </div>
  `;

  document.body.append(footer);
}

// ── Run ───────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  injectNav();
  injectFooter();
});
