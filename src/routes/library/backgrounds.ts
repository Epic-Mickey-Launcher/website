export let downloadPageBackgrounds = [
  {
    src: "download/back1.jpg",
    credit: "Disney Epic Mickey 2 Concept Art",
  },
  {
    src: "download/back2.jpg",
    credit: "Disney Epic Mickey 2 Concept Art",
  },
  {
    src: "download/back3.png",
    credit: "Disney Epic Mickey w/ Authentic Oswald Cosplay EML Mod",
  },
  {
    src: "download/back4.png",
    credit: "Disney Epic Mickey w/ Authentic Oswald Cosplay EML Mod",
  },
  {
    src: "download/back5.png",
    credit: "Disney Epic Mickey w/ Authentic Oswald Cosplay EML Mod",
  },
  {
    src: "download/back6.png",
    credit: "Disney Epic Mickey",
  },
  {
    src: "download/back7.png",
    credit: "Disney Epic Mickey",
  },
  {
    src: "download/back8.png",
    credit: "Disney Epic Mickey w/ Epic Mickey Awesome Edition EML Mod",
  },
  {
    src: "download/back9.png",
    credit: "Disney Epic Mickey w/ Epic Mickey Awesome Edition EML Mod",
  },
  {
    src: "download/back10.png",
    credit: "Disney Epic Mickey 2 w/ FNATI Skins for Mickey and Oswald EML Mod",
  },
  {
    src: "download/back11.png",
    credit: "Disney Epic Mickey 2",
  },
  {
    src: "download/back12.png",
    credit: "Disney Epic Mickey 2",
  },
  {
    src: "download/back13.png",
    credit: "Disney Epic Mickey 2",
  },
  {
    src: "download/back14.png",
    credit: "Disney Epic Mickey 2 w/ FNATI Skins for Mickey and Oswald EML Mod",
  },
  { src: "download/back16.jpg", credit: "Disney Epic Mickey Rebrushed" },
];

let mainBackgrounds = [
  { src: "main/back1.webp", credit: "Disney Epic Mickey Concept Art" },
  { src: "main/back2.webp", credit: "Disney Epic Mickey Concept Art" },
  { src: "main/back3.jpg", credit: "Disney Epic Mickey Concept Art" },
  { src: "main/back4.webp", credit: "Disney Epic Mickey Concept Art" },
  {
    src: "main/back5.png",
    credit: "Disney Epic Mickey w/ Epic Mickey Awesome Edition EML Mod",
  },
  { src: "main/back6.png", credit: "Disney Epic Mickey" },
  { src: "main/back7.png", credit: "Disney Epic Mickey" },
  { src: "main/back8.png", credit: "Disney Epic Mickey" },
  { src: "main/back9.png", credit: "Disney Epic Mickey" },
  { src: "main/back10.png", credit: "Disney Epic Mickey 2" },
  {
    src: "main/back11.png",
    credit: "Disney Epic Mickey 2 w/ FNATI Skins for Mickey and Oswald EML Mod",
  },
  {
    src: "main/back12.png",
    credit: "Disney Epic Mickey 2 w/ FNATI Skins for Mickey and Oswald EML Mod",
  },
  { src: "main/back13.png", credit: "Disney Epic Mickey 2" },
  { src: "main/back14.png", credit: "Disney Epic Mickey 2" },
  { src: "main/back5.webp", credit: "Disney Epic Mickey Rebrushed" },
  { src: "main/back6.webp", credit: "Disney Epic Mickey Rebrushed" },
  { src: "main/back7.webp", credit: "Disney Epic Mickey Rebrushed" },
  { src: "main/back8.webp", credit: "Disney Epic Mickey Rebrushed" },
  { src: "main/back9.webp", credit: "Disney Epic Mickey Rebrushed" },
  { src: "main/back15.jpg", credit: "Disney Epic Mickey Rebrushed" },
];

export enum BackgroundSetType {
  Download,
  Main,
}

export function GetBackgrounds(type: BackgroundSetType) {
  switch (type) {
    case BackgroundSetType.Download:
      return downloadPageBackgrounds;
    case BackgroundSetType.Main:
      return mainBackgrounds;
  }
}
