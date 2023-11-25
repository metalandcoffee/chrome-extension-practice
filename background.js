importScripts('tmi.js');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	console.log(tab);

	if (tab.url?.includes("youtube.com") && changeInfo.status == 'complete') {
		console.log("Hello, we're on YouTube! I can do more parsing from here!");
	}
});
