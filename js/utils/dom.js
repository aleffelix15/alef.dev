/**
 * Safely wires a link.
 */
export function wireLink(el, url, fallbackText = "Link ainda não disponível") {
  if (!el) return;
  if (url) {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  } else {
    el.addEventListener('click', (e) => e.preventDefault());
    el.style.opacity = "0.6";
    el.style.cursor = "default";
    el.title = fallbackText;
  }
}

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
