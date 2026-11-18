// 法律页与全站页脚共用同一套站点 chrome，避免各站出现不同版本的站点信息。
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const attr = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

export function nav(site, config) {
  const mark = target => target === site ? ' aria-current="page"' : '';
  return `<a class="skip-link" href="#main">跳至正文</a><header class="atlas-header"><a class="atlas-brand" href="/"><span class="atlas-symbol" aria-hidden="true">◎</span><span>${esc(config.name.replace(/\s+Atlas$/i, ''))}<span class="brand-line">ATLAS / 万物尺度</span></span><span class="visually-hidden">首页</span></a><nav aria-label="主导航"><a href="/space/"${mark('space')}>空间</a><a href="/time/"${mark('time')}>时间</a><a href="/temperature/"${mark('temperature')}>温度</a><a href="/elements/"${mark('elements')}>元素</a><a href="/mass/"${mark('mass')}>质量</a><a href="/library/">知识库</a></nav></header>`;
}

export const DOMAIN_LABEL = 'chidu.org';
export const DOMAIN_HREF = 'https://chidu.org/';
export const DOMAIN_EN = 'chidu.org';
export const NETCN_LABEL = '导航';
export const NETCN_LABEL_EN = 'Navigation';
export const NETCN_HREF = 'https://netcn.org/';

const APP_DOCK_ITEMS = [
  ['home', '尺度', 'Home', '◎', '/'],
  ['space', '空间', 'Space', '◌', '/space/'],
  ['time', '时间', 'Time', '◷', '/time/'],
  ['temperature', '温度', 'Temp', '◒', '/temperature/'],
  ['elements', '元素', 'Elements', '✧', '/elements/'],
  ['mass', '质量', 'Mass', '◍', '/mass/'],
  ['library', '知识库', 'Library', '▤', '/library/'],
  ['netcn', '导航', NETCN_LABEL_EN, '↗', NETCN_HREF]
];

function appDock(site) {
  return `<nav class="app-dock" aria-label="移动端导航" data-en-aria="Mobile navigation"><div class="app-dock-inner">${APP_DOCK_ITEMS.map(([key, label, labelEn, icon, href]) => {
    const current = key === site ? ' aria-current="page"' : '';
    const extra = key === 'netcn' ? ` aria-label="导航（外部链接）" data-en-aria="Navigation (external)"` : '';
    return `<a class="app-dock-link${key === 'netcn' ? ' app-dock-netcn' : ''}" href="${href}"${current}${extra}><span class="app-dock-icon" aria-hidden="true">${icon}</span><span class="app-dock-label"${labelEn !== label ? ` data-en="${labelEn}"` : ''}>${label}</span></a>`;
  }).join('')}</div></nav>`;
}

export function applyAppNav(html, site) {
  const withNetcn = html.replace(/<header class="(?:atlas-header|topbar)"[\s\S]*?<\/header>/i, header => {
    if (header.includes('class="nav-netcn"')) return header;
    const netcn = `<a class="nav-netcn" href="${NETCN_HREF}" aria-label="导航（外部链接）" data-en-aria="Navigation (external)" data-en="${NETCN_LABEL_EN}">${NETCN_LABEL}</a>`;
    const nav = header.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/i);
    if (nav) return header.replace(nav[0], nav[0].replace(/<\/nav>/i, `${netcn}</nav>`));
    if (/class="header-extra"/.test(header)) return header.replace(/(<a class="header-extra"[\s\S]*?<\/a>)/i, `$1${netcn}`);
    if (/class="architecture-link"/.test(header)) return header.replace(/(<a class="architecture-link"[\s\S]*?<\/a>)/i, `$1${netcn}`);
    return header.replace('</header>', `${netcn}</header>`);
  });
  return withNetcn.includes('class="app-dock"') ? withNetcn : withNetcn.replace(/<\/body>/i, `${appDock(site)}</body>`);
}

export function siteFooter(config) {
  const version = esc(config.contentVersion || '1.3.0');
  return `<footer class="site-footer"><span class="footer-brand">尺度 MAGNITUDE <span class="footer-divider">·</span> 换一个尺度，看见另一个世界。</span><span class="footer-meta"><a href="/about/">关于</a><span class="footer-divider">·</span><a href="/license/" data-en="Copyright &amp; licensing">版权与许可</a></span><span class="footer-legal"><a href="/legal/" data-en="Legal &amp; privacy">法律与隐私</a><span class="footer-divider">·</span><a href="${DOMAIN_HREF}" rel="noopener" data-en="${DOMAIN_EN}">${DOMAIN_LABEL}</a><span class="footer-divider">·</span><span>内容 v${version}</span></span></footer>`;
}

export function applyFooter(html, config) {
  return html.replace(/<footer class="site-footer"[\s\S]*?<\/footer>/i, siteFooter(config));
}
