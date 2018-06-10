const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;

const globalContainer = document.getElementById("globalContainer");

const observer = new MutationObserver(mutations => {
  console.log(mutations);
});

const config = {
  childList: true,
  attributes: false,
  characterData: false,
  subtree: true,
};

observer.observe(globalContainer, config);
