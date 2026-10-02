(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  function setTheme(theme) {
    root.dataset.theme = theme;
    const isDark = theme === 'dark';
    themeButton.setAttribute('aria-pressed', String(isDark));
    themeButton.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#0c1425' : '#f9fafc';
  }
  try { setTheme(localStorage.getItem('sf-theme') === 'dark' ? 'dark' : 'light'); } catch { setTheme('light'); }
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('sf-theme', next); } catch { /* Theme still works without storage. */ }
  });

  const menuButton = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  function closeMenu() {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', `${open ? 'Close' : 'Open'} navigation`);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  const cards = [...document.querySelectorAll('.project-card')];
  const filters = [...document.querySelectorAll('.filter')];
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    cards.forEach(card => {
      const matches = category === 'all' || card.dataset.category.split(' ').includes(category);
      card.hidden = !matches;
      if (matches) count += 1;
    });
    document.getElementById('result-count').textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
