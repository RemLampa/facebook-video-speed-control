import throttle from 'lodash.throttle';

const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;

function adjustVideoSpeed(speed) {
  const videos = document.getElementsByTagName('video');

  Object.values(videos).forEach(video => {
    video.playbackRate = speed; // eslint-disable-line no-param-reassign
  });
}

const throttleAdjustVideoSpeed = throttle(adjustVideoSpeed, 1000, {
  trailing: true,
});

const globalContainer = document.getElementById('globalContainer');

const observer = new MutationObserver(() => throttleAdjustVideoSpeed(0.5));

const config = {
  childList: true,
  attributes: false,
  characterData: false,
  subtree: true,
};

observer.observe(globalContainer, config);
