import SongCard from "./SongCard";

export default function LatestReleases() {
  return (
    <section className=" py-6">
      <h2 className="text-2xl font-medium p-4">Latest Releases</h2>
      <div className=" grid grid-cols-2 gap-2">
        <SongCard image="/MusicCovers/img1.jpg" artist={"Aman Varshney"} name="Ranjhana" date="30 July 2024" />
        <SongCard image="/MusicCovers/img2.jpg" artist={"Aman Varshney"} name="Dilli wali Girlfriend" date="30 July 2024" />
        <SongCard image="/MusicCovers/img3.jpg" artist={"Aman Varshney"} name="Khada hu aaj bhi whi" date="30 July 2024" />
        <SongCard image="/MusicCovers/img4.jpg" artist={"Aman Varshney"} name="Give me some sunshine" date="30 July 2024" />
        <SongCard image="/MusicCovers/img5.jpg" artist={"Aman Varshney"} name="Mere Dholna" date="30 July 2024" />
        <SongCard image="/MusicCovers/img6.jpg" artist={"Aman Varshney"} name="Ye tune kya kia" date="30 July 2024" />
      </div>
    </section>
  );
}
