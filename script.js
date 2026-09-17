document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.spotlight');

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 70}ms`;

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const strengthX = (px - 0.5) * 15;
      const strengthY = (py - 0.5) * -15;
      card.style.transform = `translateY(-6px) rotateX(${strengthY}deg) rotateY(${strengthX}deg)`;
      card.style.boxShadow = `0 26px 65px rgba(5, 8, 18, 0.46), 0 12px 28px rgba(139, 92, 246, 0.12), ${-strengthX * 2}px ${strengthY * 2}px 24px rgba(76, 201, 240, 0.08)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => revealObserver.observe(card));

  document.body.classList.add('is-ready');

  const iconMap = {
    python: 'images/icons/python.svg',
    sql: 'images/icons/sqlite.svg',
    sqlite: 'images/icons/sqlite.svg',
    c: 'images/icons/c.svg',
    bash: 'images/icons/gnubash.svg',
    'c++': 'images/icons/cplusplus.svg',
    flask: 'images/icons/flask.svg',
    fastapi: 'images/icons/fastapi.svg',
    sqlalchemy: 'images/icons/sqlite.svg',
    alembic: 'images/icons/sqlite.svg',
    'pydantic v2': 'images/icons/python.svg',
    marshmallow: 'images/icons/python.svg',
    docker: 'images/icons/docker.svg',
    postgresql: 'images/icons/postgresql.svg',
    redis: 'images/icons/redis.svg',
    'github actions': 'images/icons/github.svg',
    pytest: 'images/icons/pytest.svg',
    k6: 'images/icons/k6.svg',
    ruff: 'images/icons/python.svg',
    mypy: 'images/icons/python.svg',
    prometheus: 'images/icons/python.svg',
    git: 'images/icons/git.svg',
    github: 'images/icons/github.svg',
    'vs code': 'images/icons/vscode.png',
    aws: 'images/icons/aws.png',
    telegram: 'images/icons/telegram.svg',
    x: 'images/icons/x.svg',
    linkedin: 'images/icons/linkedin.png',
    whatsapp: 'images/icons/whatsapp.svg',
    email: '✉️'
  };

  const resolveIcon = (label) => {
    const key = String(label || '').trim().toLowerCase();
    if (!key) return '🔗';
    return iconMap[key] || '🔗';
  };

  fetch('data.json')
    .then((response) => response.json())
    .then((portfolioData) => {
      const profile = portfolioData.profile || {};
      const interests = portfolioData.interests || [];
      const skills = portfolioData.skills || {};
      const projects = portfolioData.projects || [];
      const links = portfolioData.links || [];

      const nameEl = document.getElementById('name');
      const bioEl = document.getElementById('bio');
      const availabilityEl = document.getElementById('availability');
      const statusMetrics = document.getElementById('statusMetrics');
      const statusResearch = document.getElementById('statusResearch');

      if (nameEl) nameEl.textContent = profile.name || 'Alexey Lyapin';
      if (bioEl) bioEl.textContent = profile.bio || '';
      if (availabilityEl) availabilityEl.textContent = profile.availability || 'Open to interesting projects';

      if (statusMetrics) {
        const impact = Array.isArray(profile.impact) ? profile.impact : [];
        statusMetrics.innerHTML = `
          <span class="status-label">Open-source impact</span>
          ${impact.map((item) => `<span class="status-pill">${item}</span>`).join('')}
        `;
      }

      if (statusResearch) {
        const research = Array.isArray(profile.research) ? profile.research : [];
        statusResearch.innerHTML = `
          <div class="status-label-block">
            <span class="status-label">Research & Systems</span>
          </div>
          <div class="status-tags">
            ${research.map((item) => `<span class="status-pill status-pill--soft">${item}</span>`).join('')}
          </div>
        `;
      }

      const impactList = document.getElementById('impactList');
      if (impactList) {
        const builder = Array.isArray(profile.builder) ? profile.builder : Array.isArray(profile.impact) ? profile.impact : [];
        impactList.innerHTML = builder
          .map((item) => `<div class="impact-item"><span class="impact-dot"></span><span>${item}</span></div>`)
          .join('');
      }

      const interestsList = document.getElementById('interestsList');
      if (interestsList) {
        interestsList.innerHTML = interests
          .map((item) => `<span class="chip">${item}</span>`)
          .join('');
      }

      const skillsList = document.getElementById('skillsList');
      if (skillsList) {
        skillsList.innerHTML = Object.entries(skills)
          .map(
            ([group, items]) => `
              <div class="skill-group">
                <div class="skill-group-title">${group}</div>
                <div class="skill-tags">
                  ${(items || []).map((skill) => {
                    const icon = resolveIcon(skill);
                    const isImage = icon.endsWith('.svg') || icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.jpeg');
                    return `
                      <span class="skill-tag">
                        ${isImage ? `<img src="${icon}" alt="${skill}" class="skill-icon-img">` : `<span class="skill-icon-emoji">${icon}</span>`}
                        <span>${skill}</span>
                      </span>
                    `;
                  }).join('')}
                </div>
              </div>
            `
          )
          .join('');
      }

      const projectsList = document.getElementById('projectsList');
      if (projectsList) {
        projectsList.innerHTML = projects
          .map(
            (project) => `
              <article class="project-item">
                <div class="project-header">
                  <h4>${project.title}</h4>
                  <span class="project-tag">${project.type || 'Project'}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                  ${(project.links || [])
                    .map(
                      (link) => `
                        <a class="project-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
                      `
                    )
                    .join('')}
                </div>
              </article>
            `
          )
          .join('');
      }

      const linksList = document.getElementById('linksList');
      if (linksList) {
        linksList.innerHTML = (links || [])
          .map((link) => {
            const name = String(link.name || '').toLowerCase();
            const key = name === 'github' ? 'github' : name === 'telegram' ? 'telegram' : name === 'x' ? 'x' : name === 'linkedin' ? 'linkedin' : name === 'whatsapp' ? 'whatsapp' : name === 'email' ? 'email' : 'link';
            const icon = resolveIcon(key);
            const isImage = icon.endsWith('.svg') || icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.jpeg');
            return `
              <a class="link-item" href="${link.url}" target="_blank" rel="noreferrer" aria-label="${link.name}">
                ${isImage ? `<img src="${icon}" alt="${link.name}" class="link-icon-img">` : `<span class="link-icon">${icon}</span>`}
                <span>${link.name}</span>
              </a>
            `;
          })
          .join('');
      }

    })
    .catch((error) => {
      console.error('Failed to load portfolio data:', error);
    });
});
