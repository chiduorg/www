import {nav, siteFooter, DOMAIN_LABEL, DOMAIN_HREF, DOMAIN_EN} from './chrome.mjs';

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const attr = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const P = (zh, en) => `<p ${zh.includes('<') ? `data-en-html="${attr(en)}"` : `data-en="${attr(en)}"`}>${zh}</p>`;
const PH = (zh, en) => `<p data-en-html="${attr(en)}">${zh}</p>`;
const H2 = (id, zh, en) => `<h2 id="${id}" data-en="${attr(en)}">${zh}</h2>`;
const LI = (zh, en) => `<li data-en="${attr(en)}">${zh}</li>`;
const UL = items => `<ul>${items.map(([zh, en]) => LI(zh, en)).join('')}</ul>`;
const NOTE = (zh, en) => `<div class="legal-note" data-en-html="${attr(en)}">${zh}</div>`;
const UPDATED = '2026-11-18';

const DOCS = {
  terms: {
    slug: 'terms',
    kicker: 'TERMS OF USE',
    title: '服务条款',
    titleEn: 'Terms of use',
    intro: '使用本站之前，请先读这一页。它说明你可以怎样使用内容，以及我们不能承诺什么。',
    introEn: 'Please read this page before using the site. It explains how you may use the content and what we cannot promise.',
    sections: [
      {id: 'acceptance', heading: '接受条款', headingEn: 'Acceptance', blocks: [
        P('本条款适用于你访问和使用「尺度 MAGNITUDE」门户及空间、时间、温度、元素、质量等子站（以下合称“本站”）。访问或使用本站，即表示你已阅读并同意本条款；如不同意，请停止使用。', 'These terms apply to your access to and use of the MAGNITUDE portal and its Space, Time, Temperature, Elements and Mass subsites (together, “the site”). By accessing or using the site, you confirm that you have read and agree to these terms. If you do not agree, please stop using the site.'),
      ]},
      {id: 'nature', heading: '本站是什么', headingEn: 'What the site is', blocks: [
        P('本站是一个开放尺度知识项目，提供科普内容、数据整理、可视化图景和检索工具。本站不是学术机构、新闻媒体、医疗机构或法律服务机构；本站内容不构成专业意见，也不能替代持证专业人士的判断。', 'The site is an open knowledge project about scale. It provides educational content, organized data, visual scenes and search tools. It is not an academic institution, news organization, medical provider or legal service. Its content is not professional advice and cannot replace the judgment of a licensed professional.'),
      ]},
      {id: 'permitted-use', heading: '你可以怎样使用', headingEn: 'Permitted use', blocks: [
        P('你可以为个人学习、教学、研究和非商业讨论阅读、链接和引用本站内容。转载、改编、商业使用或大规模复制时，请同时遵守本站的版权与许可说明，并注明来源。', 'You may read, link to and quote the site for personal learning, teaching, research and non-commercial discussion. If you republish, adapt, use commercially or copy at scale, please follow the copyright and licensing notice and credit the source.'),
        P('本站的原创内容以 CC BY 4.0 提供，源代码以 MIT 提供；具体范围见 <a href="/license/">版权与许可</a>。', 'Original content is offered under CC BY 4.0 and source code under MIT; see <a href="/license/">Copyright &amp; licensing</a> for the exact scope.'),
      ]},
      {id: 'prohibited', heading: '请不要这样做', headingEn: 'Prohibited conduct', blocks: [
        UL([
          ['违反法律法规、公序良俗，或侵犯他人合法权益；', 'Violating laws, public order or the lawful rights of others;'],
          ['未经授权进入、干扰、扫描或压力测试本站系统；', 'Accessing, disrupting, scanning or stress-testing the site without authorization;'],
          ['以自动化方式高频抓取内容，影响其他访问者或托管服务；', 'Making high-frequency automated requests that affect other visitors or the hosting service;'],
          ['冒充本站、项目团队或贡献者，或虚构与本站的合作关系；', 'Impersonating the site, its team or contributors, or inventing a relationship with the site;'],
          ['上传恶意代码、虚假信息，或包含侵犯他人权利的内容；', 'Uploading malicious code, false information or content that infringes the rights of others;'],
          ['将本站内容用于欺诈、误导、危险实验或其他违法用途。', 'Using the content for fraud, deception, hazardous experiments or other unlawful purposes.'],
        ]),
      ]},
      {id: 'third-party', heading: '第三方链接与资源', headingEn: 'Third-party links and resources', blocks: [
        P('本站可能链接到外部网站、论文、数据库或素材。我们不对第三方内容的准确性、可用性或许可负责；你访问外部资源时，应自行阅读其条款和隐私政策。', 'The site may link to external websites, papers, databases or assets. We are not responsible for their accuracy, availability or licensing. When you visit an external resource, please read its own terms and privacy policy.'),
      ]},
      {id: 'availability', heading: '服务的可用性', headingEn: 'Availability', blocks: [
        P('本站按“现状”和“现有”基础提供。内容、页面、域名和功能可能随时调整、暂停或终止。我们会尽力维护，但不承诺服务不间断、无错误或永久保留。', 'The site is provided on an “as is” and “as available” basis. Content, pages, domains and features may change, pause or end at any time. We try to maintain the service, but do not promise uninterrupted, error-free or permanent availability.'),
      ]},
      {id: 'liability', heading: '责任边界', headingEn: 'Limitation of liability', blocks: [
        P('在法律允许的最大范围内，项目团队不对因使用或无法使用本站内容而产生的间接、附带、特殊或后果性损失承担责任。本条不排除依法不得排除的责任。', 'To the fullest extent permitted by law, the project team is not liable for indirect, incidental, special or consequential loss arising from the use of, or inability to use, the site. This clause does not exclude liability that cannot lawfully be excluded.'),
      ]},
      {id: 'changes', heading: '条款更新', headingEn: 'Changes to these terms', blocks: [
        P('我们可能更新本条款，更新后的版本会在本页公布。继续使用本站，视为接受更新后的条款。若其中某一部分被认定为无效，其余部分仍然有效。', 'We may update these terms and publish the revised version on this page. Continued use of the site means you accept the revised terms. If part of these terms is held invalid, the remaining parts remain in effect.'),
      ]},
      {id: 'law', heading: '适用法律', headingEn: 'Governing law', blocks: [
        P('本条款适用中华人民共和国法律（不含冲突规范）。发生争议时，双方应先友好协商；协商不成的，提交有管辖权的人民法院处理。', 'These terms are governed by the laws of the People’s Republic of China, excluding conflict-of-law rules. The parties should first try to resolve any dispute in good faith; failing that, the dispute may be brought before a court with jurisdiction.'),
        P('如对本条款有疑问，可通过 <a href="/contribute/">共同构建</a> 页面与我们联系。', 'If you have questions about these terms, you can reach us through the <a href="/contribute/">Contribute</a> page.'),
      ]},
    ],
  },
  privacy: {
    slug: 'privacy',
    kicker: 'PRIVACY POLICY',
    title: '隐私政策',
    titleEn: 'Privacy policy',
    intro: '这份政策说明本站会接触到哪些信息、为什么接触，以及你可以怎样控制自己的本地设置。',
    introEn: 'This policy explains what information the site may handle, why, and how you can control your local settings.',
    sections: [
      {id: 'scope', heading: '适用范围', headingEn: 'Scope', blocks: [
        P('本政策适用于「尺度 MAGNITUDE」门户及空间、时间、温度、元素、质量等子站。本站是开放知识站点，不设用户账户，也不要求登录。', 'This policy applies to the MAGNITUDE portal and its Space, Time, Temperature, Elements and Mass subsites. The site is an open knowledge project; it has no user accounts and does not require sign-in.'),
      ]},
      {id: 'collect', heading: '本站不主动收集什么', headingEn: 'What we do not collect', blocks: [
        P('本站不要求你提交姓名、邮箱、手机号、身份证号或支付信息，也不设置广告画像、跨站追踪或社交登录。', 'The site does not ask for your name, email, phone number, identity number or payment information, and does not run advertising profiles, cross-site tracking or social login.'),
      ]},
      {id: 'logs', heading: '托管服务产生的技术日志', headingEn: 'Technical logs from hosting', blocks: [
        P('与大多数网站一样，托管服务商可能为安全防护、故障排查和容量管理记录技术日志，例如 IP 地址、浏览器类型、请求页面、访问时间、来源页面和响应状态。我们只在提供服务、防止滥用和排查故障所需的范围内使用这些信息，不将其出售或用于广告画像。', 'Like most websites, the hosting provider may keep technical logs for security, troubleshooting and capacity management, such as IP address, browser type, requested page, time, referrer and response status. We use this information only as needed to provide the service, prevent abuse and diagnose problems; we do not sell it or use it for advertising profiles.'),
        P('日志的保存期限取决于托管服务商的安全策略和实际需要。我们会在不再需要时删除或汇总处理。', 'Log retention depends on the hosting provider’s security practices and operational needs. We delete or aggregate logs when they are no longer needed.'),
      ]},
      {id: 'local', heading: '本地存储与偏好', headingEn: 'Local storage and preferences', blocks: [
        P('本站使用浏览器 localStorage 记住你的语言和明暗主题，键名为 <code>atlas-lang</code> 与 <code>atlas-theme</code>。这些数据留在你的设备上，不会随页面请求发送给我们。', 'The site uses browser localStorage to remember your language and light/dark preference under the keys <code>atlas-lang</code> and <code>atlas-theme</code>. These values stay on your device and are not sent to us with page requests.'),
        P('本站当前不设置用于广告或跨站追踪的 Cookie。清除浏览器站点数据即可删除上述偏好。', 'The site currently sets no advertising or cross-site tracking cookies. Clearing browser site data removes these preferences.'),
      ]},
      {id: 'third-party', heading: '第三方服务', headingEn: 'Third-party services', blocks: [
        P('托管、CDN 或安全防护服务可能按照其自身政策处理技术日志。本站当前不使用第三方统计 SDK、广告平台或第三方登录服务；如未来引入，会在本页更新说明。', 'Hosting, CDN or security services may process technical logs under their own policies. The site currently uses no third-party analytics SDK, advertising platform or third-party sign-in; if that changes, this page will be updated.'),
        P('点击外部链接后，你将离开本站，外部网站会按照其隐私政策处理信息。', 'When you click an external link, you leave the site and the external website handles information under its own privacy policy.'),
      ]},
      {id: 'rights', heading: '你的选择与权利', headingEn: 'Your choices and rights', blocks: [
        P('你可以随时在浏览器设置中清除本站的本地存储，以删除语言和主题偏好。若你认为托管日志中包含你的个人信息，并希望查询或删除，可通过 <a href="/contribute/">共同构建</a> 页面联系我们；我们会在法律允许的范围内处理。', 'You can clear the site’s local storage in your browser settings at any time to remove language and theme preferences. If you believe hosting logs contain your personal information and want to access or delete it, contact us through the <a href="/contribute/">Contribute</a> page; we will respond within the limits of applicable law.'),
      ]},
      {id: 'children', heading: '未成年人', headingEn: 'Minors', blocks: [
        P('本站是一般性科普站点，不主动面向儿童收集个人信息，也不设置需要提交个人资料的互动功能。若监护人发现未成年人向本站提交了个人信息，可联系我们处理。', 'The site is a general educational site. It does not intentionally collect personal information from children or offer interactive features that require personal details. If a guardian believes a minor has submitted personal information, please contact us.'),
      ]},
      {id: 'changes', heading: '政策更新', headingEn: 'Changes', blocks: [
        P('本政策可能随功能或法规变化而更新，更新版本会在本页公布并标注生效日期。', 'This policy may be updated as features or regulations change. The revised version will appear on this page with its effective date.'),
      ]},
    ],
  },
  disclaimer: {
    slug: 'disclaimer',
    kicker: 'DISCLAIMER',
    title: '免责声明',
    titleEn: 'Disclaimer',
    intro: '我们希望内容可靠，但知识、测量和图景都有边界。这一页把边界说清楚。',
    introEn: 'We aim for reliable content, but knowledge, measurement and visual scenes all have limits. This page sets out those limits.',
    sections: [
      {id: 'general', heading: '一般信息，不是专业意见', headingEn: 'General information, not professional advice', blocks: [
        P('本站内容仅供一般阅读、学习和讨论，不构成医疗、法律、金融、工程、安全或其他专业建议。遇到需要专业判断的事项，请咨询具备相应资质的专业人士。', 'The content is for general reading, learning and discussion. It is not medical, legal, financial, engineering, safety or other professional advice. For matters requiring professional judgment, consult a qualified professional.'),
      ]},
      {id: 'accuracy', heading: '数值与事实的边界', headingEn: 'The limits of values and facts', blocks: [
        P('条目中的数值、日期、单位和适用条件来自条目所列参考资料，并经过编辑整理与有限范围的来源核对。测量存在不确定度、版本差异和条件依赖；页面上的单一数字通常是参考值，不应被视为唯一答案。', 'Values, dates, units and conditions come from the references listed with each entry and have been edited and checked within a limited scope. Measurements carry uncertainty, version differences and condition dependence; a single number on a page is usually a reference value, not the only answer.'),
        P('涉及健康、安全、实验或工程决策时，请回到原始来源并咨询专业人士，不要仅凭本站内容行动。', 'For health, safety, experiments or engineering decisions, return to the primary sources and consult a professional; do not act on this site’s content alone.'),
      ]},
      {id: 'visual', heading: '图景是解释工具', headingEn: 'Visual scenes are explanatory tools', blocks: [
        P('三维场景、纹理、光照、颜色、粒子、比例和动画用于帮助理解，通常经过压缩、夸张或示意处理，不是按真实比例、真实时序或真实物理过程制作的模拟，也不是观测照片。它们不能用于导航、工程计算、安全评估或精确预测。', '3D scenes, textures, lighting, colours, particles, proportions and animation are used to aid understanding. They are often compressed, exaggerated or simplified; they are not simulations at true scale, true timing or full physical fidelity, and they are not observational photographs. They must not be used for navigation, engineering calculations, safety assessment or precise prediction.'),
        P('部分场景是风格化重建；具体图景的说明和限制以条目页中的说明为准。', 'Some scenes are stylized reconstructions. The notes on each entry page describe the specific limits of that scene.'),
      ]},
      {id: 'external', heading: '外部链接', headingEn: 'External links', blocks: [
        P('本站提供的外部链接仅为方便查阅。我们不对第三方网站的内容、准确性、安全性或可用性作担保；访问外部链接的风险由访问者自行承担。', 'External links are provided for convenience. We do not endorse or guarantee the content, accuracy, security or availability of third-party sites; you access them at your own risk.'),
      ]},
      {id: 'warranty', heading: '不作保证', headingEn: 'No warranty', blocks: [
        P('本站按“现状”提供，不承诺内容完整、最新、无误，也不承诺服务持续可用。法律允许的最大范围内，项目团队不承担因使用或依赖本站内容而产生的损失。', 'The site is provided “as is”. We do not warrant that the content is complete, current or error-free, or that the service will remain available. To the fullest extent permitted by law, the project team is not liable for loss arising from use of or reliance on the site.'),
      ]},
      {id: 'contact', heading: '发现错误', headingEn: 'Reporting an error', blocks: [
        P('如果你发现数值、来源、表述或图景说明有问题，欢迎通过 <a href="/contribute/">共同构建</a> 页面指出。我们会核查并在必要时更正。', 'If you find a problem with a value, source, statement or scene note, please report it through the <a href="/contribute/">Contribute</a> page. We will review it and correct it where needed.'),
      ]},
    ],
  },
  copyright: {
    slug: 'copyright',
    kicker: 'COPYRIGHT & LICENSING',
    title: '版权声明',
    titleEn: 'Copyright & licensing',
    intro: '原创内容、源代码和第三方素材适用不同的许可。这里说明各自的范围和署名方式。',
    introEn: 'Original content, source code and third-party assets are under different licences. This page explains each scope and how to credit them.',
    sections: [
      {id: 'content', heading: '原创内容：CC BY 4.0', headingEn: 'Original content: CC BY 4.0', blocks: [
        P('本站原创的条目正文、标题与摘要、分类与标签、适用条件、图景说明、学习文案和项目文档，由 尺度 MAGNITUDE 贡献者撰写，以 <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> 提供。', 'Original entry text, titles and summaries, categories and tags, conditions, scene notes, learning copy and project documentation are written by MAGNITUDE contributors and offered under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a>.'),
        P('推荐署名：尺度 MAGNITUDE 贡献者，《条目名称》，' + DOMAIN_LABEL + '，CC BY 4.0；如有修改请注明。', 'Suggested credit: MAGNITUDE contributors, “Entry title”, ' + DOMAIN_EN + ', CC BY 4.0; note any changes.'),
        P('你可以复制、发行、改编和商业使用原创内容，但须注明作者与来源、链接到许可证，并说明是否作出修改；不得增加法律或技术限制。完整许可文本见 <a href="/licenses/LICENSE-CONTENT.txt">LICENSE-CONTENT.txt</a>。', 'You may copy, distribute, adapt and use the original content commercially, provided you credit the authors and source, link to the licence and indicate whether changes were made. You may not add legal or technical restrictions. The full licence text is in <a href="/licenses/LICENSE-CONTENT.txt">LICENSE-CONTENT.txt</a>.'),
      ]},
      {id: 'code', heading: '源代码：MIT', headingEn: 'Source code: MIT', blocks: [
        P('构建脚本、站点代码与共用引擎以 MIT 许可提供。完整文本见 <a href="/licenses/LICENSE.txt">LICENSE.txt</a>。使用代码时请保留版权与许可声明。', 'Build scripts, site code and the shared engine are under the MIT licence. The full text is in <a href="/licenses/LICENSE.txt">LICENSE.txt</a>. Keep the copyright and permission notice when you use the code.'),
      ]},
      {id: 'brand', heading: '名称与视觉识别', headingEn: 'Name and visual identity', blocks: [
        P('“尺度 MAGNITUDE”、站点标志、品牌图形和整体视觉识别不属于 CC BY 4.0 或 MIT 的授权范围。你可以为指明来源而合理提及本站名称，但不得暗示本站对你或你的产品作出背书。', 'The “MAGNITUDE” name, site mark, brand graphics and overall visual identity are not licensed under CC BY 4.0 or MIT. You may refer to the site name to identify the source, but may not suggest that the site endorses you or your product.'),
      ]},
      {id: 'third-party', heading: '第三方素材', headingEn: 'Third-party assets', blocks: [
        P('行星纹理、三维模型、字体、软件库和其他第三方素材仍归各自权利人所有，适用其各自许可。当前使用的部分来源包括：Solar System Scope / INOVE 的行星纹理（CC BY 4.0）、Grab3D 的细胞与人体模型（CC0）、Three.js（MIT）。', 'Planetary textures, 3D models, fonts, software libraries and other third-party assets remain the property of their respective owners and are subject to their own licences. Current sources include Solar System Scope / INOVE planetary textures (CC BY 4.0), Grab3D cell and human models (CC0) and Three.js (MIT).'),
        P('逐项来源、授权状态和使用方式见 <a href="/THIRD_PARTY_NOTICES.md">第三方来源说明</a> 与 <a href="/assets.html">图像来源</a>。第三方素材不因出现在本站而改变其许可。', 'Per-item sources, licence status and usage are listed in the <a href="/THIRD_PARTY_NOTICES.md">third-party notices</a> and <a href="/assets.html">asset credits</a>. Third-party assets do not change their licence by appearing on this site.'),
      ]},
      {id: 'contributions', heading: '贡献内容', headingEn: 'Contributions', blocks: [
        P('向本站提交文字、图片、模型或其他材料前，请确认你有权提交并授权本站使用。除另有书面约定外，贡献的文本按 CC BY 4.0 提供，代码按 MIT 提供；第三方素材仍适用其原许可。', 'Before submitting text, images, models or other material, make sure you have the right to submit it and to authorize its use here. Unless agreed otherwise in writing, contributed text is offered under CC BY 4.0 and code under MIT; third-party assets remain under their original licences.'),
      ]},
      {id: 'notice', heading: '侵权通知', headingEn: 'Infringement notice', blocks: [
        P('如果你认为本站内容侵犯了你的著作权或其他权利，请通过 <a href="/contribute/">共同构建</a> 页面联系我们，并尽量提供作品名称、链接、权利证明和联系方式。我们会核查并采取删除、更正或补充署名等措施。', 'If you believe content on the site infringes your copyright or another right, contact us through the <a href="/contribute/">Contribute</a> page and, where possible, include the work, URL, evidence of your rights and contact details. We will review it and take steps such as removal, correction or additional credit.'),
      ]},
      {id: 'precedence', heading: '许可文本优先', headingEn: 'Licence text prevails', blocks: [
        P('本页是版权与许可的说明，不替代 CC BY 4.0、MIT 或第三方许可的完整文本。如本页与完整许可文本有冲突，以完整许可文本为准。', 'This page summarizes copyright and licensing; it does not replace the full text of CC BY 4.0, MIT or any third-party licence. If this page conflicts with a full licence, the full licence prevails.'),
      ]},
    ],
  },
};

function legalAside(active) {
  const items = [
    ['/legal/', '法律与站点信息', 'Legal & site information'],
    ['/legal/terms/', '服务条款', 'Terms of use'],
    ['/legal/privacy/', '隐私政策', 'Privacy policy'],
    ['/legal/disclaimer/', '免责声明', 'Disclaimer'],
    ['/legal/copyright/', '版权声明', 'Copyright & licensing'],
  ];
  return `<aside class="legal-aside" aria-label="法律文档目录" data-en-aria="Legal documents"><p class="legal-aside-label" data-en="Legal documents">法律文档</p><nav>${items.map(([href, zh, en]) => `<a href="${href}"${href.endsWith(active + '/') || (active === '' && href === '/legal/') ? ' aria-current="page"' : ''} data-en="${attr(en)}">${zh}</a>`).join('')}</nav><div class="legal-aside-foot"><p data-en="Questions about this page?">对本页有疑问？</p><a href="/contribute/" data-en="Contact the project ↗">联系项目组 ↗</a></div></aside>`;
}

function docPage(doc) {
  const body = doc.sections.map(section => `<section class="legal-section" aria-labelledby="${section.id}">${H2(section.id, section.heading, section.headingEn)}${section.blocks.join('')}</section>`).join('');
  return `<main id="main" class="legal-page"><div class="legal-hero"><div><p class="eyebrow">${doc.kicker}</p><h1 data-en-title="${attr(doc.titleEn)}">${doc.title}</h1><p class="legal-lead" data-en="${attr(doc.introEn)}">${doc.intro}</p></div><div class="legal-hero-meta"><span data-en="Effective">生效</span><strong>${UPDATED}</strong><span data-en="Version">版本</span><strong>1.0</strong></div></div><div class="legal-shell">${legalAside(doc.slug)}<article class="legal-content">${body}<p class="legal-updated" data-en="Last updated: ${UPDATED}. This page is site policy, not legal advice.">最后更新：${UPDATED}。本页是站点规则说明，不构成法律意见。</p></article></div></main>`;
}

function hubPage() {
  const cards = [
    ['/legal/terms/', '01', '服务条款', 'Terms of use', '使用本站的权利、义务与责任边界。', 'Your rights, obligations and the limits of liability when using the site.'],
    ['/legal/privacy/', '02', '隐私政策', 'Privacy policy', '本站接触哪些信息，以及你如何控制本地偏好。', 'What information the site handles and how you control local preferences.'],
    ['/legal/disclaimer/', '03', '免责声明', 'Disclaimer', '知识、测量、三维图景与外部链接的边界。', 'The limits of knowledge, measurement, 3D scenes and external links.'],
    ['/legal/copyright/', '04', '版权声明', 'Copyright & licensing', '原创内容、源代码、品牌与第三方素材的许可。', 'Licences for original content, source code, brand and third-party assets.'],
  ];
  return `<main id="main" class="legal-page legal-home"><div class="legal-hero legal-hero-home"><div><p class="eyebrow">LEGAL / SITE INFORMATION</p><h1 data-en-title="Rules and boundaries.">规则与边界。</h1><p class="legal-lead" data-en="This is an open knowledge project. This page explains the rules of use, privacy boundaries, content responsibility and licensing.">本站是一个开放尺度知识项目。这里说明使用规则、隐私边界、内容责任与版权许可。</p></div><div class="legal-hero-meta"><span data-en="Effective">生效</span><strong>${UPDATED}</strong><span data-en="Version">版本</span><strong>1.0</strong></div></div><div class="legal-shell legal-home-shell"><article class="legal-content"><div class="legal-card-grid">${cards.map(([href, n, zh, en, desc, descEn]) => `<a class="legal-card" href="${href}"><span class="legal-card-number">${n}</span><h2 data-en="${attr(en)}">${zh}</h2><p data-en="${attr(descEn)}">${desc}</p><span class="legal-card-arrow" aria-hidden="true">↗</span></a>`).join('')}</div><section class="legal-section legal-site-info" aria-labelledby="site-info"><h2 id="site-info" data-en="Site information">站点信息</h2><dl class="legal-facts"><div><dt data-en="Project">项目</dt><dd data-en="MAGNITUDE / Scale Knowledge Project">尺度 MAGNITUDE / 尺度知识计划</dd></div><div><dt data-en="Domain">域名</dt><dd><a href="${DOMAIN_HREF}" rel="noopener" data-en="${DOMAIN_EN}">${DOMAIN_LABEL}</a></dd></div><div><dt data-en="Content version">内容版本</dt><dd>v1.3.0</dd></div><div><dt data-en="Contact">联系</dt><dd><a href="/contribute/" data-en="Contribute / contact ↗">共同构建 / 联系 ↗</a></dd></div></dl></section><div class="legal-note" data-en-html="These pages describe the site rules. They are not legal advice, and they do not replace the full text of any licence.">这些页面是站点规则说明，不构成法律意见，也不替代任何完整许可文本。如你是权利人并认为本站内容有问题，请通过<a href="/contribute/">共同构建</a>页面联系。</div></article></div></main>`;
}

function shell({title, titleEn, body, site, config, canonicalPath}) {
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · ${esc(config.name)}</title><meta name="description" content="${esc(title === '法律与站点信息' ? '尺度 MAGNITUDE 的服务条款、隐私政策、免责声明与版权声明。' : title + ' · 尺度 MAGNITUDE')}"><meta property="og:title" content="${esc(title)} · ${esc(config.name)}"><meta property="og:description" content="尺度 MAGNITUDE 的法律与站点信息。"><meta property="og:type" content="website"><meta property="og:locale" content="zh_CN"><meta property="og:site_name" content="${esc(config.name)}"><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/refined.css"><link rel="stylesheet" href="/theme.css"><link rel="stylesheet" href="/legal.css"><script type="module" src="/brand.js"></script></head><body>${nav(site, config)}${body}${siteFooter(config)}</body></html>`;
}

export function renderLegalPages({config, site}) {
  const pages = new Map();
  const base = {site, config};
  pages.set('legal/index.html', shell({...base, title: '法律与站点信息', titleEn: 'Legal & site information', body: hubPage(), canonicalPath: '/legal/'}));
  for (const doc of Object.values(DOCS)) {
    pages.set(`legal/${doc.slug}/index.html`, shell({...base, title: doc.title, titleEn: doc.titleEn, body: docPage(doc), canonicalPath: `/legal/${doc.slug}/`}));
  }
  return pages;
}
