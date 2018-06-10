import throttle from 'lodash.throttle';

function setVideoSpeed(speed) {
  const videos = document.getElementsByTagName('video');
  Object.values(videos).forEach(video => {
    video.playbackRate = speed; // eslint-disable-line no-param-reassign
  });
}

function FacebookObserver(MutationObserver, container, config) {
  this.MutationObserver = MutationObserver;
  this.container = container;
  this.config = config;
  this.observer = null;
}

FacebookObserver.prototype.setVideoSpeed = throttle(setVideoSpeed, 1000, {
  trailing: true,
});

FacebookObserver.prototype.setObserver = function setObserver(speed) {
  if (this.observer) {
    this.observer.disconnect();
  }

  this.observer = new this.MutationObserver(() => this.setVideoSpeed(speed));

  this.observer.observe(this.container, this.config);
};

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

chrome.runtime.onMessage.addListener(request => {
  console.log(request.speed);
});
