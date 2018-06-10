import throttle from 'lodash.throttle';

const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;

const globalContainer = document.getElementById("globalContainer");

const throttleAdjustVideoSpeed = throttle(adjustVideoSpeed, 1000, { trailing: true });

const observer = new MutationObserver(mutations => {
  throttleAdjustVideoSpeed(0.5);
});

const config = {
  childList: true,
  attributes: false,
  characterData: false,
  subtree: true,
};

observer.observe(globalContainer, config);

function adjustVideoSpeed(speed) {
  const videos = document.getElementsByTagName("video");

  Object.values(videos).forEach(video => video.playbackRate = speed); 
}
