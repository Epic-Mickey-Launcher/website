import { ServerLoad } from "@sveltejs/kit";

export const prerender = true;

export const load: ServerLoad = () => {
  let quotes = [
    "A new way to experience Epic Mickey.",
    "A must have for playing Epic Mickey.",
    "A must have for modding Epic Mickey.",
    "The easiest way to play Epic Mickey.",
    "An amazing way to relive your childhood.",
  ];

  let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  let currentQuote = quotes[randomQuoteIndex];
  return { currentQuote };
};
