import { useMemo } from "react";
import { Attribution, Layout, Quote } from "./movie-quote.styles";

const QUOTES = [
  {
    quote: "Search your feelings. You know it to be true.",
    speaker: "Darth Vader",
    movie: "Star Wars: The Empire Strikes Back",
  },
  {
    quote: "Do or do not. There is no try.",
    speaker: "Yoda",
    movie: "Star Wars: The Empire Strikes Back",
  },
  {
    quote: "Say hello to my little friend!",
    speaker: "Tony Montana",
    movie: "Scarface",
  },
  {
    quote: "Snakes. Why'd it have to be snakes?",
    speaker: "Indiana Jones",
    movie: "Raiders of the Lost Ark",
  },
  {
    quote: "I feel the need...the need for speed!",
    speaker: "Maverick",
    movie: "Top Gun",
  },
  {
    quote: "It's not the years, honey, it's the mileage.",
    speaker: "Indiana Jones",
    movie: "Raiders of the Lost Ark",
  },
  {
    quote: "Human sacrifice. Dogs and cats living together. Mass hysteria.",
    speaker: "Peter Venkman",
    movie: "Ghostbusters",
  },
  {
    quote: "Let off some steam, Bennett.",
    speaker: "John Matrix",
    movie: "Commando",
  },
  {
    quote: "Get to the choppa!",
    speaker: "Dutch",
    movie: "Predator",
  },
  {
    quote: "Fear leads to anger, anger leads to hate, hate leads to suffering.",
    speaker: "Yoda",
    movie: "Star Wars: The Phantom Menace",
  },
  {
    quote: "Quiet! And there's a fresh one if you mouth off again.",
    speaker: "K-2SO",
    movie: "Rogue One",
  },
  {
    quote: "Talk to me Goose",
    speaker: "Maverick",
    movie: "Top Gun",
  },
  {
    quote:
      "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    speaker: "Ferris Bueller",
    movie: "Ferris Bueller's Day Off",
  },
  {
    quote: "I'm sorry, Dave. I'm afraid I can't do that.",
    speaker: "HAL",
    movie: "2001: A Space Odyssey",
  },
  {
    quote: "I love the smell of napalm in the morning.",
    speaker: "Lt. Col. Bill Kilgore",
    movie: "Apocalypse Now",
  },
  {
    quote: "I'm having an old friend for dinner.",
    speaker: "Hannibal Lecter",
    movie: "The Silence of the Lambs",
  },
  {
    quote: "Gentlemen, you can't fight in here! This is the war room!",
    speaker: "President Merkin Muffley",
    movie: "Dr. Strangelove",
  },
];

export const MovieQuote = () => {
  const { quote, speaker, movie } = useMemo(
    () => QUOTES[Math.floor(Math.random() * QUOTES.length)],
    []
  );

  return (
    <Layout data-testid="quote">
      <Quote>&ldquo;{quote}&rdquo;</Quote>
      <Attribution>
        &mdash; {speaker}&nbsp;&nbsp; | &nbsp;&nbsp;{movie}
      </Attribution>
    </Layout>
  );
};
