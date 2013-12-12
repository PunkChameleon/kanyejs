/*
 * Welcome to kanye.js -- the best javascript library of ALL TIME.
 *
 * How it Works:
 *
 * When you want to have Kanye say something, just call 'Kanye.yell()' or 'Kanye.boast()' and you'll get a wonderful quote in your console log.
 *
 * Sources:
 * http://www.thedailybeast.com/articles/2013/12/11/the-31-best-kanye-west-quotes-of-2013.html
 *
 */

var Kanye = (function () {

	var quotes = {
		boast: [
			'I feel like a little bit, like, I’m the Braveheart of creativity.',
			'I am so credible and so influential and so relevant that I will change things.',
			'I made that song because I am a god... I don’t think there’s much more explanation.',
			'For me to say I wasn’t a genius, I would just be lying to you and to myself.',
			'I’m 10 years ahead of your mentality.'
		],
		yell: [
			'Cause I still ain’t seen a video better than Beyoncé to this mothafuckin day!',
			'I am Warhol!',
			'Now tell me something, ya’ll want me to do this show the way I would do this show? Don’t fucking heckle me.',
			'You ain’t got the answers. You ain’t been doing the education.'
		],
		motivate: [
			'If you’re a Kanye West fan, you’re not a fan of me, you’re a fan of yourself. You will believe in yourself. I’m just the espresso.'
		]
	};

	function randomEntry(array) {
		return Math.floor(Math.random() * array.length);
	}

	return {
		boast: function () {
			console.log(quotes.boast[randomEntry(quotes.boast)]);
		},
		yell: function () {
			console.log(quotes.yell[randomEntry(quotes.yell)]);
		},
		motivate: function () {
			console.log(quotes.motivate[randomEntry(quotes.motivate)]);
		}
	};

}());