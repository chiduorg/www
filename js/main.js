(function() {
  'use strict';

  function createParticles() {
    var container = document.getElementById('particles');
    if (!container) return;
    var count = window.innerWidth < 768 ? 80 : 200;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      var size = Math.random() * 2.5 + 0.5;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
      star.style.setProperty('--delay', (Math.random() * 5) + 's');
      star.style.setProperty('--brightness', (Math.random() * 0.6 + 0.4));
      fragment.appendChild(star);
    }
    container.appendChild(fragment);
  }

  function loadScaleData(dataUrl, renderFn) {
    fetch(dataUrl)
      .then(function(response) {
        if (!response.ok) throw new Error('数据加载失败: ' + response.status);
        return response.json();
      })
      .then(function(data) {
        renderFn(data);
        setupScrollObserver();
      })
      .catch(function(error) {
        console.error('数据加载错误:', error);
        var container = document.querySelector('.scale-nodes');
        if (container) {
          container.innerHTML = '<div class="error-state"><div class="error-state-icon">⚠️</div><div class="error-state-text">数据加载失败，请检查网络连接</div><button class="error-state-btn" onclick="location.reload()">重新加载</button></div>';
        }
      });
  }

  function renderSpaceNodes(container, data) {
    var html = '';
    var scales = data.scales;
    for (var i = 0; i < scales.length; i++) {
      var s = scales[i];
      var eraLabel = s.category === '量子尺度' || s.category === '亚原子粒子' || s.category === '原子核'
        ? '微观世界'
        : s.category === '原子尺度' || s.category === '分子尺度' || s.category === '微观生命'
        ? '微观生命'
        : s.category === '肉眼可见' || s.category === '昆虫尺度' || s.category === '人类尺度'
        ? '人类尺度'
        : s.category === '大型生物' || s.category === '人造建筑' || s.category === '地质尺度'
        ? '地球尺度'
        : s.category === '行星尺度' || s.category === '恒星尺度'
        ? '恒星尺度'
        : '宇宙尺度';
      html += '<div class="scale-node" data-id="' + s.id + '" data-category="' + eraLabel + '">';
      html += '<div class="node-marker"><span class="axis-label">10<sup>' + s.orderOfMagnitude + '</sup></span><div class="node-dot"></div><div class="node-line"></div></div>';
      html += '<div class="node-card">';
      html += '<div class="node-card-header">';
      html += '<span class="node-icon">' + s.icon + '</span>';
      html += '<span class="node-name">' + s.name + '</span>';
      html += '<span class="node-name-en">' + s.nameEn + '</span>';
      html += '<span class="node-tag tag-space">' + eraLabel + '</span>';
      html += '</div>';
      html += '<div class="node-meta">';
      html += '<span class="node-meta-item">尺寸：<span class="node-meta-value">' + s.size + '</span></span>';
      html += '<span class="node-meta-item">数量级：<span class="node-meta-value">10<sup>' + s.orderOfMagnitude + '</sup> m</span></span>';
      html += '</div>';
      html += '<p class="node-desc">' + s.description + '</p>';
      html += '</div>';
      html += '</div>';

      if (i < scales.length - 1) {
        var next = scales[i + 1];
        var ratio = next.sizeMeters / s.sizeMeters;
        var ratioText;
        if (ratio < 10) {
          ratioText = ratio.toFixed(1) + ' 倍';
        } else if (ratio < 1e9) {
          ratioText = Math.round(ratio).toLocaleString() + ' 倍';
        } else {
          var orders = Math.round(Math.log10(ratio));
          ratioText = '差 ' + orders + ' 个数量级';
        }

        var toSize = 12;
        var fromSize = Math.max(0.1, toSize / ratio);

        html += '<div class="scale-comparison" data-to-id="' + next.id + '">';
        html += '<div class="comparison-connector"><div class="comparison-line"></div></div>';
        html += '<div class="comparison-card">';
        html += '<div class="comparison-visual">';
        html += '<span class="comp-from-name">' + s.name + '</span>';
        html += '<span class="comp-from-icon" style="font-size:' + fromSize.toFixed(2) + 'rem">' + s.icon + '</span>';
        html += '<div class="comp-divider">';
        html += '<span class="comp-arrow">⟶</span>';
        html += '<span class="comp-ratio-badge">' + ratioText + '</span>';
        html += '</div>';
        html += '<span class="comp-to-icon" style="font-size:' + toSize.toFixed(1) + 'rem">' + next.icon + '</span>';
        html += '<span class="comp-to-name">' + next.name + '</span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      }
    }
    container.innerHTML = html;
  }

  function renderTimeNodes(container, data) {
    var html = '';
    var timeline = data.timeline;
    for (var i = 0; i < timeline.length; i++) {
      var t = timeline[i];
      var eraLabel = 
        t.timeSeconds < 0.0001 ? '太初宇宙' :
        t.timeSeconds < 900 ? '粒子与核合成' :
        t.timeSeconds < 3.15e15 ? '辐射与黑暗时代' :
        t.timeSeconds < 3.16e17 ? '星系与太阳系' :
        t.timeSeconds < 3.94e17 ? '生命起源' :
        t.timeSeconds < 4.34e17 ? '生命大演化' :
        '人类与文明';
      html += '<div class="scale-node timeline-node" data-id="' + t.id + '" data-category="' + eraLabel + '">';
      html += '<div class="node-marker"><span class="axis-label">' + t.timeAfterBigBang.split('（')[0] + '</span><div class="timeline-dot"></div><div class="node-line"></div></div>';
      html += '<div class="node-card">';
      html += '<div class="node-card-header">';
      html += '<span class="node-icon">' + t.icon + '</span>';
      html += '<span class="node-name">' + t.event + '</span>';
      html += '<span class="node-tag tag-time">' + eraLabel + '</span>';
      html += '</div>';
      html += '<div class="node-meta">';
      html += '<span class="node-meta-item">时间：<span class="node-meta-value">' + t.timeAfterBigBang + '</span></span>';
      html += '<span class="node-meta-item">温度：<span class="node-meta-value">' + t.temperature + '</span></span>';
      html += '</div>';
      html += '<p class="node-desc">' + t.description + '</p>';
      html += '</div>';
      html += '</div>';
    }
    container.innerHTML = html;
  }

  function renderEnergyNodes(container, data) {
    var html = '';
    var energies = data.energies;
    var maxLog = Math.log10(1.42e32);
    for (var i = 0; i < energies.length; i++) {
      var e = energies[i];
      var logVal = e.temperatureKelvin > 0 ? Math.log10(e.temperatureKelvin) : -10;
      var percent = Math.max(2, ((logVal + 10) / (maxLog + 10)) * 100);
      var barColor = e.temperatureKelvin < 100 ? 'var(--color-primary)' :
                     e.temperatureKelvin < 10000 ? 'var(--color-accent-green)' :
                     e.temperatureKelvin < 1e8 ? 'var(--color-accent-orange)' :
                     'var(--color-accent-purple)';
      html += '<div class="scale-node energy-node" data-id="' + e.id + '" data-category="' + e.category + '">';
      html += '<div class="node-marker"><span class="axis-label">' + e.temperature + '</span><div class="energy-dot"></div><div class="node-line"></div></div>';
      html += '<div class="node-card">';
      html += '<div class="node-card-header">';
      html += '<span class="node-icon">' + e.icon + '</span>';
      html += '<span class="node-name">' + e.name + '</span>';
      html += '<span class="node-tag tag-energy">' + e.category + '</span>';
      html += '</div>';
      html += '<div class="node-meta">';
      html += '<span class="node-meta-item">温度：<span class="node-meta-value">' + e.temperature + '</span></span>';
      html += '<span class="node-meta-item">能量：<span class="node-meta-value">' + e.energy + '</span></span>';
      html += '<span class="node-meta-item">现象：<span class="node-meta-value">' + e.phenomenon + '</span></span>';
      html += '</div>';
      html += '<div class="energy-bar">';
      html += '<span class="energy-bar-label">0 K</span>';
      html += '<div class="energy-bar-fill" style="width:' + percent + '%;background:' + barColor + ';"></div>';
      html += '<span class="energy-bar-label">10³² K</span>';
      html += '</div>';
      html += '<p class="node-desc">' + e.description + '</p>';
      html += '</div>';
      html += '</div>';
    }
    container.innerHTML = html;
  }

  function setupScrollObserver() {
    var nodes = document.querySelectorAll('.scale-node, .scale-comparison');
    if (nodes.length === 0) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

      nodes.forEach(function(node) {
        observer.observe(node);
      });
    } else {
      nodes.forEach(function(node) {
        node.classList.add('visible');
      });
    }
  }

  function setupScaleClickHandler(container, detailPage) {
    container.addEventListener('click', function(e) {
      var nodeCard = e.target.closest('.node-card');
      if (nodeCard) {
        var node = nodeCard.closest('.scale-node');
        if (node) {
          var id = node.getAttribute('data-id');
          if (id) {
            window.location.href = detailPage + '?id=' + encodeURIComponent(id);
          }
        }
        return;
      }

      var compCard = e.target.closest('.comparison-card');
      if (compCard) {
        var comp = compCard.closest('.scale-comparison');
        if (comp) {
          var toId = comp.getAttribute('data-to-id');
          if (toId) {
            window.location.href = detailPage + '?id=' + encodeURIComponent(toId);
          }
        }
      }
    });
  }

  function highlightActiveNav() {
    var path = window.location.pathname;
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      link.classList.remove('active');
      var href = link.getAttribute('href');
      if (href && path.indexOf(href.replace(/.*\//, '').replace('.html', '')) !== -1) {
        link.classList.add('active');
      }
    });
    if (path === '/' || path.endsWith('index.html') || path === '') {
      var homeLink = document.querySelector('.nav-logo');
      if (homeLink) homeLink.classList.add('active');
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    highlightActiveNav();

    var dataType = document.body.getAttribute('data-page');
    var container = document.querySelector('.scale-nodes');

    // Back to top button
    var backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.title = '回到顶部';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Reading progress bar
    var progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    });

    // Mobile hamburger menu
    initMobileMenu();

    // Category filter
    var activeFilterCategory = 'all';
    var filterScrollSpyActive = false;

    function initCategoryFilter() {
      var filterBar = document.getElementById('category-filter');
      if (!filterBar) return;
      var nodes = document.querySelectorAll('.scale-node');
      if (nodes.length === 0) return;

      var categories = {};
      for (var i = 0; i < nodes.length; i++) {
        var cat = nodes[i].getAttribute('data-category');
        if (cat) {
          categories[cat] = (categories[cat] || 0) + 1;
        }
      }

      var catNames = Object.keys(categories);
      if (catNames.length <= 1) return;

      var html = '<button class="category-filter-btn active" data-category="all">全部<span class="category-filter-count">' + nodes.length + '</span></button>';
      for (var j = 0; j < catNames.length; j++) {
        var name = catNames[j];
        html += '<button class="category-filter-btn" data-category="' + name + '">' + name + '<span class="category-filter-count">' + categories[name] + '</span></button>';
      }
      filterBar.innerHTML = html;

      filterBar.addEventListener('click', function(e) {
        var btn = e.target.closest('.category-filter-btn');
        if (!btn) return;

        var cat = btn.getAttribute('data-category');
        activeFilterCategory = cat;
        filterScrollSpyActive = cat !== 'all';

        // Toggle active class
        var allBtns = filterBar.querySelectorAll('.category-filter-btn');
        for (var k = 0; k < allBtns.length; k++) {
          allBtns[k].classList.remove('active');
        }
        btn.classList.add('active');

        for (var m = 0; m < nodes.length; m++) {
          if (cat === 'all' || nodes[m].getAttribute('data-category') === cat) {
            nodes[m].classList.remove('filtered-out');
          } else {
            nodes[m].classList.add('filtered-out');
          }
        }

        // Also hide/show comparison cards
        var comps = document.querySelectorAll('.scale-comparison');
        for (var n = 0; n < comps.length; n++) {
          var prevNode = comps[n].previousElementSibling;
          var nextNode = comps[n].nextElementSibling;
          var prevHidden = prevNode && prevNode.classList.contains('scale-node') && prevNode.classList.contains('filtered-out');
          var nextHidden = nextNode && nextNode.classList.contains('scale-node') && nextNode.classList.contains('filtered-out');
          if (prevHidden || nextHidden) {
            comps[n].style.display = 'none';
          } else {
            comps[n].style.display = '';
          }
        }

        // Smooth scroll to results
        var container = document.querySelector('.scale-axis-container');
        if (container) {
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      // Scroll spy: auto-highlight category button based on visible nodes
      if ('IntersectionObserver' in window) {
        var categoryObserver = new IntersectionObserver(function(entries) {
          if (filterScrollSpyActive) return; // Don't override manual filter selection
          if (activeFilterCategory !== 'all') return;

          var visibleCategories = {};
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
              var cat = entries[i].target.getAttribute('data-category');
              if (cat) {
                visibleCategories[cat] = (visibleCategories[cat] || 0) + 1;
              }
            }
          }

          var catList = Object.keys(visibleCategories);
          if (catList.length === 0) return;

          // Find the category with most visible nodes (usually the first one in viewport)
          var topCat = catList[0];
          var topCount = visibleCategories[topCat];
          for (var j = 1; j < catList.length; j++) {
            if (visibleCategories[catList[j]] > topCount) {
              topCat = catList[j];
              topCount = visibleCategories[catList[j]];
            }
          }

          var allBtns = filterBar.querySelectorAll('.category-filter-btn');
          for (var k = 0; k < allBtns.length; k++) {
            if (allBtns[k].getAttribute('data-category') === topCat) {
              allBtns[k].classList.add('active');
            } else {
              allBtns[k].classList.remove('active');
            }
          }
        }, { threshold: 0.4, rootMargin: '-80px 0px -60% 0px' });

        for (var i = 0; i < nodes.length; i++) {
          categoryObserver.observe(nodes[i]);
        }
      }
    }

    if (dataType && container) {
      if (dataType === 'space') {
        loadScaleData('../data/space.json', function(data) {
          renderSpaceNodes(container, data);
          setupScaleClickHandler(container, 'space-detail.html');
          initCategoryFilter();
        });
      } else if (dataType === 'time') {
        loadScaleData('../data/time.json', function(data) {
          renderTimeNodes(container, data);
          setupScaleClickHandler(container, 'time-detail.html');
          initCategoryFilter();
        });
      } else if (dataType === 'energy') {
        loadScaleData('../data/energy.json', function(data) {
          renderEnergyNodes(container, data);
          setupScaleClickHandler(container, 'energy-detail.html');
          initCategoryFilter();
        });
      }
    }

    // Initialize nav search
    initNavSearch();
    // Initialize page search
    initPageSearch();
    // Initialize mobile bottom search
    if (window.innerWidth <= 768) {
      initMobileBottomSearch();
    }
  });

  // Nav search functionality (site-wide, across all scales)
  var searchIndex = null;
  var searchLoading = false;

  function initNavSearch() {
    var searchInput = document.querySelector('.nav-search-input');
    var searchResults = document.querySelector('.nav-search-results');
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('focus', function() {
      loadSearchIndex();
      if (this.value.trim()) {
        performSearch(this.value.trim(), searchResults);
      }
    });

    searchInput.addEventListener('input', function() {
      loadSearchIndex();
      performSearch(this.value.trim(), searchResults);
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var firstItem = searchResults.querySelector('.nav-search-result-item');
        if (firstItem) firstItem.focus();
      }
      if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.blur();
      }
    });

    // Keyboard shortcut: press / to focus search
    document.addEventListener('keydown', function(e) {
      if (e.key === '/' && document.activeElement !== searchInput && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchResults.classList.remove('active');
        searchInput.blur();
      }
    });

    // Close results when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-search')) {
        searchResults.classList.remove('active');
      }
    });
  }

  function loadSearchIndex() {
    if (searchIndex || searchLoading) return;
    searchLoading = true;
    var basePath = document.body.getAttribute('data-page') ? '../data/' : 'data/';
    fetch(basePath + 'search-index.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        searchIndex = data;
        var searchResults = document.querySelector('.nav-search-results');
        var searchInput = document.querySelector('.nav-search-input');
        if (searchInput && searchInput.value.trim()) {
          performSearch(searchInput.value.trim(), searchResults);
        }
      })
      .catch(function() { searchLoading = false; });
  }

  function performSearch(query, resultsEl, prefix) {
    prefix = prefix || 'nav-search';
    if (!searchIndex) {
      resultsEl.innerHTML = '<div class="' + prefix + '-no-results">正在加载搜索索引...</div>';
      resultsEl.classList.add('active');
      return;
    }

    if (!query) {
      resultsEl.classList.remove('active');
      return;
    }

    var q = query.toLowerCase();
    var matches = [];
    for (var i = 0; i < searchIndex.length; i++) {
      var item = searchIndex[i];
      if (item.name.toLowerCase().indexOf(q) !== -1) {
        matches.push(item);
      }
      if (matches.length >= 20) break;
    }

    if (matches.length === 0) {
      resultsEl.innerHTML = '<div class="' + prefix + '-no-results">未找到匹配项</div>';
    } else {
      var html = '';
      var basePagePath = document.body.getAttribute('data-page') ? '' : 'pages/';
      for (var j = 0; j < matches.length; j++) {
        var m = matches[j];
        html += '<div class="' + prefix + '-result-item" role="option" tabindex="0" data-url="' + basePagePath + m.detailPage + '?id=' + m.id + '">';
        html += '<span class="' + prefix + '-result-icon">' + m.icon + '</span>';
        html += '<span class="' + prefix + '-result-name">' + m.name + '</span>';
        html += '<span class="' + prefix + '-result-scale">' + m.scaleName + '</span>';
        html += '</div>';
      }
      resultsEl.innerHTML = html;

      // Add click handlers
      var items = resultsEl.querySelectorAll('.' + prefix + '-result-item');
      for (var k = 0; k < items.length; k++) {
        items[k].addEventListener('click', function() {
          window.location.href = this.getAttribute('data-url');
        });
        items[k].addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            window.location.href = this.getAttribute('data-url');
          }
        });
      }
    }
    resultsEl.classList.add('active');
  }

  function initPageSearch() {
    var searchInput = document.querySelector('.page-search-input');
    var searchResults = document.querySelector('.page-search-results');
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('focus', function() {
      loadSearchIndex();
      if (this.value.trim()) {
        performSearch(this.value.trim(), searchResults, 'page-search');
      }
    });

    searchInput.addEventListener('input', function() {
      loadSearchIndex();
      performSearch(this.value.trim(), searchResults, 'page-search');
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var firstItem = searchResults.querySelector('.page-search-result-item');
        if (firstItem) firstItem.focus();
      }
      if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.blur();
      }
    });

    // Close results when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.page-search')) {
        searchResults.classList.remove('active');
      }
    });
  }

  // Mobile hamburger menu
  function initMobileMenu() {
    var toggle = document.querySelector('.nav-menu-toggle');
    var links = document.querySelector('.nav-links');
    var overlay = document.querySelector('.nav-menu-overlay');
    if (!toggle || !links) return;

    function closeMenu() {
      toggle.classList.remove('active');
      links.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    }

    toggle.addEventListener('click', function() {
      var isOpen = links.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        toggle.classList.add('active');
        links.classList.add('active');
        if (overlay) overlay.classList.add('active');
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Close menu when a nav link is clicked
    var navLinks = links.querySelectorAll('.nav-link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', closeMenu);
    }
  }

  // Mobile bottom search
  function initMobileBottomSearch() {
    var container = document.querySelector('.mobile-bottom-search');
    if (!container) return;
    var input = container.querySelector('.mobile-bottom-search-input');
    var results = container.querySelector('.mobile-bottom-search-results');
    if (!input || !results) return;

    input.addEventListener('focus', function() {
      loadSearchIndex();
      if (this.value.trim()) {
        performSearch(this.value.trim(), results, 'mobile-bottom-search');
      }
    });

    input.addEventListener('input', function() {
      loadSearchIndex();
      performSearch(this.value.trim(), results, 'mobile-bottom-search');
    });

    // Keyboard navigation
    input.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var firstItem = results.querySelector('.mobile-bottom-search-result-item');
        if (firstItem) firstItem.focus();
      }
      if (e.key === 'Escape') {
        results.classList.remove('active');
        input.blur();
      }
    });

    // Keyboard shortcut: press / to focus search
    document.addEventListener('keydown', function(e) {
      if (window.innerWidth > 768) return;
      if (e.key === '/' && document.activeElement !== input && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        input.focus();
        input.select();
      }
      if (e.key === 'Escape' && document.activeElement === input) {
        results.classList.remove('active');
        input.blur();
      }
    });

    // Close results when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.mobile-bottom-search')) {
        results.classList.remove('active');
      }
    });
  }

  })();