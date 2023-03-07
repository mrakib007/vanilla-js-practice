const jokes = [
    {
        id:1,
        joke: "What do you call a boomerang that won’t come back? A stick."
    },
    {
        id:2,
        joke: "What does a cloud wear under his raincoat? Thunderwear."
    },
    {
        id:3,
        joke: "What time is it when the clock strikes 13? Time to get a new clock."
    },
    {
        id:4,
        joke: "What did one toilet say to the other? You look a bit flushed."
    },
    {
        id:5,
        joke: "How does a cucumber become a pickle? It goes through a jarring experience."
    },
    {
        id:6,
        joke: "Why did the dinosaur cross the road? Because the chicken wasn’t born yet."
    },
    {
        id:7,
        joke: "Why can’t Elsa from Frozen have a balloon? Because she will "
    },
    {
        id:8,
        joke: "What musical instrument is found in the bathroom? A tuba toothpaste."
    },
    {
        id:9,
        joke: "Why did the kid bring a ladder to school? Because she wanted to go to high school."
    },
    {
        id:10,
        joke: "What do you call a dog magician? A labracadabrador."
    }
]

// let joke = jokes.map((joker)=>{
//     console.log(joker.joke)
// })

const generateJoke = () =>{
    const showJoke = test();
    let jokeText = document.querySelector('p');
    jokeText.innerText = showJoke;
}

function test() {
    let values = jokes;
      jokeToUse = values[Math.floor(Math.random() * values.length)];
      return jokeToUse.joke;
  }