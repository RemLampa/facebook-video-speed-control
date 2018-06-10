import { GET_SAVED_SPEED } from '../constants';

function saveSpeed(speed) {
  chrome.storage.local.set({ speed });
}

chrome.runtime.onInstalled.addListener(() => saveSpeed(0.25));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type !== GET_SAVED_SPEED) {
    return;
  }

  chrome.storage.local.get(['speed'], result => {
    console.log(result.speed);
    sendResponse({ speed: Number.parseFloat(result.speed) })
  }
  );

  return true; // allow async response
});
