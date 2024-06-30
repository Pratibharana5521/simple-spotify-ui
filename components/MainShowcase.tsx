import Image from "next/image";
import Cover1 from "@/public/MusicCovers/cover-1.jpg";
import Cover2 from "@/public/MusicCovers/cover-2.jpg";
import Cover3 from "@/public/MusicCovers/cover-3.jpg";

export default function MainShowcase() {
  return (
    <section className="py-6">
      <div className="grid grid-cols-3 items-center justify-center gap-4">
        <div>
          <Image
            className="h-auto w-full rounded-md object-contain hover:scale-105"
            src={Cover2}
            alt="song 2"
          />
        </div>
        <div>
          <Image
            className="h-auto w-full rounded-md object-contain hover:scale-105"
            src={Cover3}
            alt="song 3"
          />
        </div>
        <div>
          <Image
            className="h-auto w-full rounded-md object-contain hover:scale-105"
            src={Cover1}
            alt="song 1"
          />
        </div>
      </div>
    </section>
  );
}
