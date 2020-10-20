import { GET_SAVED_SPEED } from '../constants';
import FacebookObserver from './observer';

function init(initialSpeed) {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;

  const config = {
    childList: true,
    attributes: false,
    characterData: false,
    subtree: true,
  };

  const observer = new FacebookObserver(MutationObserver, config);

  observer.setObserver(initialSpeed);

  chrome.runtime.onMessage.addListener((request) =>
    observer.setObserver(request.speed),
  );
}

chrome.runtime.sendMessage({ type: GET_SAVED_SPEED }, (response) =>
  init(response.speed),
);
