const quotes = [
	{
		quote: '"Be the change that you wish to see in the world."',
		quotee: 'Mahatma Gandhi'
	},{
		quote: '"In three words I can sum up everything I\'ve learned about life: it goes on."',
		quotee: 'Robert Frost'
	},{
		quote: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
		quotee: 'Ralph Waldo Emerson'
	},{
		quote: '"It is better to be hated for what you are than to be loved for what you are not."',
		quotee: 'Andre Gide'
	},{
		quote: '"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong \
		so that you appreciate them when they\'re right, you believe lies so you eventually learn to trust no one but yourself, \
		and sometimes good things fall apart so better things can fall together."',
		quotee: 'Andre Gide'
	},{
		quote: '"I used to think the worst thing in life is to end up all alone. It\'s not. The worst thing in life is to \
		end up with people who make you feel all alone."',
		quotee: 'Robin Williams'
	},{
		quote: '"Crying does not indicate that you are weak. Since birth, it has always been a sign that you are alive."',
		quotee: 'Jane Eyre'
	},{
		quote: '"A man should never be ashamed to own that he has been in the wrong, which is but saying in other words that he \
		is wiser today than he was yesterday."',
		quotee: 'Alexander Pope'
	}
]

let random = () => Math.floor(Math.random() * quotes.length)

function generate_new_quote(){
	// generate new quote id
	let new_quote_id = random()

	// assign the new quote to the HTML
	const quote = document.querySelector(".quote")
	quote.innerText = quotes[new_quote_id]["quote"]

	// assign the new quotee to the HTML
	const quotee = document.querySelector(".quotee")
	quotee.innerText = quotes[new_quote_id]["quotee"]
}

const button = document.querySelector("main div button")
button.addEventListener("click",generate_new_quote)