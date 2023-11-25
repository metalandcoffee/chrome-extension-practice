importScripts('tmi.js');

var vidTitle;

const client = new self.tmi.Client({
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	channels: ['metalandcoffee_']
});

client.connect();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (tab.url?.includes("youtube.com") && changeInfo?.title) {
		console.log(changeInfo?.title);
	}
});

client.on('message', (channel, tags, message, self) => {
	const vidMeta = document.querySelector('meta[itemprop="name"]');
	console.log(vidMeta);
})
