import FacebookObserver from './observer';

const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;

const globalContainer = document.getElementById('globalContainer');

const config = {
  childList: true,
  attributes: false,
  characterData: false,
  subtree: true,
};

const observer = new FacebookObserver(
  MutationObserver,
  globalContainer,
  config,
);

observer.setObserver(2.0);

chrome.runtime.onMessage.addListener(request =>
  observer.setObserver(request.speed),
);
