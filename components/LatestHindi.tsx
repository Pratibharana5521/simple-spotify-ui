import LatestSongs from "./LatestSongs";

const latestHindi = [
  {
    image: "/LatestHindi/1.jpeg",
    name: "Sarphira",
    artist: "Sreerama Chandra",
  },
  {
    image: "/LatestHindi/2.jpeg",
    name: "Satranga",
    artist: "Arijit Singh",
  },
  {
    image: "/LatestHindi/3.jpeg",
    name: "Phela Pyaar",
    artist: "Jubin Nautiyal",
  },
  {
    image: "/LatestHindi/4.jpeg",
    name: "Raataan Lambiyan",
    artist: "Tanishk Bagchi",
  },
  {
    image: "/LatestHindi/5.jpeg",
    name: "Aaj Kal Zindagi",
    artist: "Shankar Ehsaan",
  },
  {
    image: "/LatestHindi/6.jpeg",
    name: "Kabira",
    artist: "Jubin Nautiyal",
  },
  {
    image: "/LatestHindi/1.jpeg",
    name: "Mere Bina",
    artist: "Pritam",
  },
  {
    image: "/LatestHindi/4.jpeg",
    name: "Halka Halka",
    artist: "Sunidhi Chauhan",
  },
];

export default function LatestHindi() {
  return <LatestSongs heading={"Latest Hindi"} songs={latestHindi} />;
}
