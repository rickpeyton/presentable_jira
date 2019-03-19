chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    code: 'document.getElementById("ghx-pool").style.paddingTop="0"'
  });
  chrome.tabs.executeScript({
    code: 'document.getElementById("ghx-header").remove()'
  });
  chrome.tabs.executeScript({
    code: 'document.getElementById("ghx-quick-filters").remove()'
  });
  chrome.tabs.executeScript({
    code: 'document.getElementById("ghx-work").style.height=""'
  });
});
