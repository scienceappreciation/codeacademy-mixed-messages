const Inquirer = require('inquirer')

const QuoteAuthor = "- William Shakespeare";

const QUOTES = [
    quoteFactory("The fool doth think he is wise, but the wise man knows himself to be a fool.", "As You Like It."),
    quoteFactory("Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.", "Twelfth Night"),
    quoteFactory("The fault, dear Brutus, is not in our stars, but in ourselves.", "Julius Caesar"),
    quoteFactory("There is nothing either good or bad, but thinking makes it so.", "Hamlet"),
    quoteFactory("It is not in the stars to hold our destiny but in ourselves."),
    quoteFactory("We know what we are, but not what we may be."),
    quoteFactory("Words are easy, like the wind; faithful friends are hard to find.", "The Passionate Pilgrim"),
    quoteFactory("Though she be but little, she is fierce!", "A Midsummer Night's Dream")
]

function quoteFactory(text, origin="") {
    return {
        _text: text,
        _author: QuoteAuthor,
        _origin: origin,
        get text() {
            return this._text;
        },
        get author() {
            return this._author;
        },
        get origin() {
            return this._origin;
        }
     }
}

function getRandomQuote(arr) {
    const selector = Math.floor(Math.random() * arr.length);
    const quote = arr[selector];
    
    let formattedQuote = `🙶${quote.text}🙷\n―${quote.author}`;
    if (quote.origin.length > 0) formattedQuote += `, ${quote.origin}`;
    return formattedQuote;
}

function printRandomQuote() {
    console.log(getRandomQuote(QUOTES));
}

printRandomQuote();
