const quotes = ["Beyond Struggles is a Light","Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all" ];
const writers = ["Simran Garcha", "John Kenneth Galbraith", ];

const quoteDisplay = [{
    "quote" : "Beyond Struggles is a Light",
    "writer" : "Simran Garcha"
},{
    "quote" : "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    "writer" : "John Kenneth Galbraith"
},{
    "quote" : "The price of anything is the amount of life you exchange for it.",
    "writer" : "David Thoreau"
},{
    "quote" : "God save me from my friends. I can protect myself from my enemies.",
    "writer" : "Claude Louis Hector de Villars "
},{
    "quote" : "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    "writer" : "Tyne Daly "

},{
    "quote" : "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    "writer" : "Life "
}]

generateQuote = () => {
    /*document.getElementById('quote').innerHTML = JSON.stringify(quoteDisplay[1]);
    document.getElementById('writer').innerHTML = JSON.stringify(quoteDisplay.quote[1]);*/

    for(const {quote, writer} of quoteDisplay) {

        let randomQuote = Math.floor(Math.random() * quoteDisplay.length)

        document.getElementById('quote').innerHTML = quoteDisplay[randomQuote].quote;
        document.getElementById('writer').innerHTML = quoteDisplay[randomQuote].writer;

        //Append them in case you do create

    }
}
