const root = document.documentElement;
const button = document.getElementById('theme-toggle');
function applyTheme(theme) {
  root.dataset.theme = theme;
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  button.setAttribute('aria-label', label);
  button.title = label;
  button.textContent = theme === 'dark' ? '☼' : '☾';
}
try { const saved = localStorage.getItem('honghao-theme'); if (saved === 'light' || saved === 'dark') applyTheme(saved); } catch {}
button.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  try { localStorage.setItem('honghao-theme', theme); } catch {}
});
