import Image from "next/image";
import Cover1 from "@/public/MusicCovers/cover-1.jpg";
import Cover2 from "@/public/MusicCovers/cover-2.jpg";
import Cover3 from "@/public/MusicCovers/cover-3.jpg";

export default function MainShowcase() {
  return (
    <section className="flex flex-row items-center justify-center py-6 gap-4">
      <Image className="rounded-md hover:scale-105" src={Cover2} alt="song 2" />
      <Image className="rounded-md hover:scale-105" src={Cover3} alt="song 3" />
      <Image className="rounded-md hover:scale-105" src={Cover1} alt="song 1" />
    </section>
  );
}
