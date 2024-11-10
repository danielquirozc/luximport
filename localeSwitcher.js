const btnChangeLang = document.getElementById('btnChangeLang');
const langSelect = document.getElementById('langSelect');
import { toggleLanguage } from "./i18n.js";
import { languages } from "./utils/languages.js";

languages.forEach(lang => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.classList.add('nav-link');
  a.setAttribute('lang-code', lang.code);
  a.textContent = lang.name;
  a.addEventListener('click', async (e) => {
    await toggleLanguage(e.target.getAttribute('lang-code'));
  });
  li.appendChild(a);
  langSelect.appendChild(li);
});

btnChangeLang.addEventListener('click', async (e) => {
  await toggleLanguage(e.target)
});

