import { GET_SAVED_SPEED, SAVE_SET_SPEED } from '../constants';

function setSpeed(speedOptions, speed) {
  const speedValues = Object.values(speedOptions).map((option) =>
    Number.parseFloat(option.value),
  );

  let selectedIndex = speedValues.indexOf(speed);
  if (selectedIndex < 0) {
    selectedIndex = 3; // index of normal speed: 3
  }

  speedOptions.selectedIndex = selectedIndex; // eslint-disable-line no-param-reassign
}

function onChangeListener(event) {
  event.preventDefault();

  const speed = Number.parseFloat(event.target.value);

  chrome.tabs.query({ url: '*://*.facebook.com/*' }, (tabs) =>
    tabs.forEach((tab) => chrome.tabs.sendMessage(tab.id, { speed })),
  );

  chrome.runtime.sendMessage({ type: SAVE_SET_SPEED, data: { speed } });
}

window.onload = function onLoad() {
  const form = document.getElementsByClassName('playback')[0];

  form.addEventListener('submit', (event) => event.preventDefault());

  const speedOptions = document.getElementsByName('speed')[0];

  chrome.runtime.sendMessage({ type: GET_SAVED_SPEED }, (response) => {
    // set initial speed
    setSpeed(speedOptions, response.speed);

    speedOptions.addEventListener('change', onChangeListener);
  });
};
