function saveSpeed(speed) {
  chrome.storage.local.set({ speed }, () => {
    console.log('storage initialized!');
  });
}

chrome.runtime.onInstalled.addListener(() => saveSpeed(1.0));

chrome.storage.local.get(['speed'], result => {
  console.log(result);
});
