export function currentTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function watchTheme(callback) {
  const handler = (event) => callback(event?.detail?.theme === 'light' ? 'light' : currentTheme());
  document.addEventListener('atlas-theme', handler);
  return () => document.removeEventListener('atlas-theme', handler);
}

export function stageColors(theme = currentTheme()) {
  const light = theme === 'light';
  return {
    light,
    background: light ? 0xeef4f8 : 0x060912,
    fog: light ? 0xe8eff4 : 0x05080d,
    exposure: light ? 1.24 : 1.05,
    grid: light ? 0x5f7482 : 0x22313f,
    glow: light ? 0xffffff : 0x8fd8ff,
  };
}
