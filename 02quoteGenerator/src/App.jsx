import { useState } from 'react'

function App() {

  const quotes = [
    {
      text: "Click generate to generate quotes",
      author: "Dev"
    },
    {
      text: "The best way to learn programming is by building projects.",
      author: "Anonymous"
    },
    {
      text: "Programs must be written for people to read.",
      author: "Harold Abelson"
    },
    {
      text: "Talk is cheap. Show me the code.",
      author: "Linus Torvalds"
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde "
    },
    {
      text: "A friend is someone who knows all about you and still loves you.",
      author: "Elbert Hubbard"
    },
    {
      text: "Always forgive your enemies; nothing annoys them so much.",
      author: "Oscar Wilde "
    },
    {
      text: "We accept the love we think we deserve.",
      author: " Stephen Chbosky, The Perks of Being a Wallflower "
    },
    {
      text: "Without music, life would be a mistake",
      author: " Friedrich Nietzsche, Twilight of the Idols "
    },
    {
      text: "All that glitters is not gold.",
      author: "William Shakespeare"
    },
    {
      text: "Eighty percent of success is showing up.",
      author: "Woody Allen"
    },
    {
      text: "A rose by any other name would smell as sweet.",
      author: "William Shakespeare"
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  function generateQuote() {
    let newIndex = randomNum();
    while (newIndex == currentIndex) {
      if (quotes.length <= 2) {
        return
      }
      else
        newIndex = randomNum();
    }
    setCurrentIndex(newIndex)
  }

  function randomNum() {
    return (
      Math.floor(Math.random() * (quotes.length - 1)) + 1
    )
  }

  return (
    <>
      <div className='flex flex-col gap-10  justify-center items-center'>
        <h1>Quote Generator</h1>
        <div className='bg-gray-500 text-white w-230 h-30 flex flex-col justify-center items-center gap-4  rounded-2xl'>
          <p className='font-bold text-3xl'>{quotes[currentIndex].text}</p>
          <h2 className=''>-{quotes[currentIndex].author}</h2>
        </div>
        <button
          onClick={generateQuote}
          className='bg-red-500 text-white p-4 m-2  rounded-3xl hover:scale-110 hover:bg-red-800 ease-in duration-100 '>Generate</button>
      </div>
    </>
  )
}

export default App
