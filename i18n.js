import { getCurrentPage } from './utils/getCurrentPage.js';

let lang = localStorage.getItem('lang') || 'it';

async function fetchLanguageData(lang, page) {
  const response = await fetch(`/i18n/${lang}/${page}.json`);
  return response.json();
}

function updateContent(langData) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
      element.innerHTML = langData[key];
  });
}

export async function changeLanguage(lang) {  
  let page = getCurrentPage();
  let langData = await fetchLanguageData(lang, page);
  updateContent(langData);
}

export async function toggleLanguage(langcode) {  
  if (langcode) {
    lang = langcode;
  }
  localStorage.setItem('lang', lang);
  await changeLanguage(lang);
}

changeLanguage(lang);