const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;

const globalContainer = document.getElementById("globalContainer");

const observer = new MutationObserver(mutations => {
  adjustVideoSpeed();
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

  Object.values(videos).forEach(video => console.log(video, video.playbackRate));
}
