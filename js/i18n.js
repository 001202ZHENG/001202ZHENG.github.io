// Simple client-side i18n
(function () {
  const translations = {
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.skills': 'Skills',
      'nav.interests': 'Interests',
      'nav.projects': 'Projects',
      'sections.experience': 'Internship Experience',
      'sections.education': 'Education',
      'sections.skills': 'Skills',
      'sections.interests': 'Interests',
      'sections.projects': 'Projects & Competitions',
      'about.intro': "Welcome to my page. I’m a postgraduate student in Data Science and Business Analytics at ESSEC Business School and CentraleSupélec.",
      'about.download': 'Download CV (2025)',
      'about.motto': "Motto: Sans la liberté de blâmer, il n'est point d'éloge flatteur. — Beaumarchais",
      'skills.languages': 'Languages',
      'skills.programming': 'Programming',
      'skills.data_tools': 'Data Tools',
      'skills.business': 'Business & Finance'
    },
    fr: {
      'nav.about': 'À propos',
      'nav.experience': 'Expérience',
      'nav.education': 'Éducation',
      'nav.skills': 'Compétences',
      'nav.interests': 'Centres d’intérêt',
      'nav.projects': 'Projets',
      'sections.experience': 'Stages',
      'sections.education': 'Éducation',
      'sections.skills': 'Compétences',
      'sections.interests': 'Centres d’intérêt',
      'sections.projects': 'Projets & Compétitions',
      'about.intro': "Bienvenue sur ma page. Je suis étudiant en master Data Science & Business Analytics à ESSEC Business School et CentraleSupélec.",
      'about.download': 'Télécharger le CV (2025)',
      'about.motto': "Devise : Sans la liberté de blâmer, il n'est point d'éloge flatteur. — Beaumarchais",
      'skills.languages': 'Langues',
      'skills.programming': 'Programmation',
      'skills.data_tools': 'Outils de données',
      'skills.business': 'Business & Finance'
    },
    zh: {
      'nav.about': '关于',
      'nav.experience': '经历',
      'nav.education': '教育',
      'nav.skills': '技能',
      'nav.interests': '兴趣',
      'nav.projects': '项目',
      'sections.experience': '实习经历',
      'sections.education': '教育背景',
      'sections.skills': '技能',
      'sections.interests': '兴趣',
      'sections.projects': '项目与竞赛',
      'about.intro': '欢迎来到我的主页。我是 ESSEC 与 CentraleSupélec 的数据科学与商业分析硕士在读生。',
      'about.download': '下载简历（2025）',
      'about.motto': '座右铭：没有指责的自由，就没有真诚的赞美。— 博马舍',
      'skills.languages': '语言',
      'skills.programming': '编程',
      'skills.data_tools': '数据工具',
      'skills.business': '商业与金融'
    }
  };

  const LANG_KEY = 'site_lang';

  function applyLang(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // Update active button style
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.classList.remove('btn-outline-light');
        btn.classList.add('btn-light');
      } else {
        btn.classList.remove('active');
        btn.classList.remove('btn-light');
        btn.classList.add('btn-outline-light');
      }
    });
  }

  function init() {
    const saved = localStorage.getItem(LANG_KEY) || 'en';
    applyLang(saved);
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        localStorage.setItem(LANG_KEY, lang);
        applyLang(lang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

