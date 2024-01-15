// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy bithday to me!`)
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

//wrapGifts(gifts);

function writeCards(name, eventName) {
    let thankYouCards = [];

    for (let i = 0; i < name.length; i++) {
        let card = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;

        thankYouCards.push(card);
    }

    return thankYouCards
}

function countDown(x) {
    let i = 0;
    while (i <= x) {
        console.log(x - i);
        i++;
        debugger;
    }
}

countDown(10);