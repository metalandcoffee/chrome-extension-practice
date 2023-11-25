const tmi = window.tmi;

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
	const vidMeta = document.querySelector('meta[itemprop="name"]');
	console.log(vidMeta);
})

