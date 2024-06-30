import QueueSongCard from "./QueueSongCard";

const songQueue = [
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
    image: "/LatestHindi/1.jpeg",
    name: "Mere Bina",
    artist: "Pritam",
  },
  {
    image: "/LatestHindi/4.jpeg",
    name: "Halka Halka",
    artist: "Sunidhi Chauhan",
  },
  {
    image: "/LatestEnglish/4.jpeg",
    name: "Blinding Lights",
    artist: "The Weeknd",
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

export default function SongQueue() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="p-4 text-2xl font-medium">Queue</h2>
      <div className="flex h-full flex-col gap-2">
        {songQueue.map((song, index) => {
          return (
            <div key={song.name} className="flex w-full flex-row items-start">
              <span className="pl-2 pr-4 py-2">{index + 1}</span>
              <QueueSongCard
                name={song.name}
                image={song.image}
                artist={song.artist}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
