import LatestSongs from "./LatestSongs";

const latestEnglish = [
  {
    image: "/LatestEnglish/1.jpeg",
    name: "Peaches",
    artist: "Justin Bieber",
  },
  {
    image: "/LatestEnglish/2.jpeg",
    name: "Save Your Tears",
    artist: "The Weeknd",
  },
  {
    image: "/LatestEnglish/3.jpeg",
    name: "Levitating",
    artist: "Dua Lipa",
  },
  {
    image: "/LatestEnglish/4.jpeg",
    name: "Blinding Lights",
    artist: "The Weeknd",
  },
  {
    image: "/LatestEnglish/5.jpeg",
    name: "Kiss Me More",
    artist: "Doja Cat",
  },
  {
    image: "/LatestEnglish/6.jpeg",
    name: "Montero",
    artist: "Lil Nas X",
  },
  {
    image: "/LatestEnglish/4.jpeg",
    name: "Good 4 U",
    artist: "Olivia Rodrigo",
  },
  {
    image: "/LatestEnglish/1.jpeg",
    name: "Deja Vu",
    artist: "Olivia Rodrigo",
  },
];

export default function LatestEnglish() {
  return <LatestSongs heading={"Latest English"} songs={latestEnglish} />;
}
