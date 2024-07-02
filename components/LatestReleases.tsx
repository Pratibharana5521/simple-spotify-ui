import SongCard from "./SongCard";

export default function LatestReleases() {
  return (
    <section className=" py-6">
      <h2 className="text-2xl font-medium p-4">Latest Releases</h2>
      <div className=" grid grid-cols-2 gap-2">
        <SongCard image="/MusicCovers/img1.jpg" artist={"Song"} name="Ranjhana" date="30 July 2024" />
        <SongCard image="/MusicCovers/img2.jpg" artist={"Song"} name="Dilli wali Girlfriend" date="30 July 2024" />
        <SongCard image="/MusicCovers/img3.jpg" artist={"Song"} name="Khada hu aaj bhi whi" date="30 July 2024" />
        <SongCard image="/MusicCovers/img4.jpg" artist={"Song"} name="Give me some sunshine" date="30 July 2024" />
        <SongCard image="/MusicCovers/img5.jpg" artist={"Song"} name="Mere Dholna" date="30 July 2024" />
        <SongCard image="/MusicCovers/img6.jpg" artist={"Song"} name="Ye tune kya kia" date="30 July 2024" />
      </div>
    </section>
  );
}
