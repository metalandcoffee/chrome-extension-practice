const tmi = window.tmi;

const vidMeta = document.querySelector('meta[itemprop="name"]');
let vidTitle = vidMeta ? vidMeta.getAttribute('content') : null;
console.log(vidTitle);

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	channels: ['metalandcoffee_']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	console.log(message);
})

