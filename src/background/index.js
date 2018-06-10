import { SAVE_SET_SPEED, GET_SAVED_SPEED } from '../constants';

function saveSpeed(speed) {
  chrome.storage.local.set({ speed });
}

chrome.runtime.onInstalled.addListener(() => saveSpeed(1.0));

function saveSetSpeedHandler(callback, data) {
  saveSpeed(data.speed);
}

function getSaveSpeedHandler(callback) {
  chrome.storage.local.get(['speed'], result =>
    callback({ speed: Number.parseFloat(result.speed) }),
  );

  return true; // allow async response
}

const messageHandlers = {
  [SAVE_SET_SPEED]: saveSetSpeedHandler,
  [GET_SAVED_SPEED]: getSaveSpeedHandler,
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (!Object.prototype.hasOwnProperty.call(messageHandlers, request.type)) {
    return false;
  }

  const handler = messageHandlers[request.type];

  return handler(sendResponse, request.data);
});
