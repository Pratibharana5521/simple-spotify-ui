import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "./ui/carousel";
import Image from "next/image";

export default function LatestSongs({
  heading,
  songs,
}: {
  heading: string;
  songs: { image: string; name: string; artist: string }[];
}) {
  return (
    <section className="py-6">
      <h2 className="p-4 text-2xl font-medium">{heading}</h2>
      <Carousel
        opts={{
          dragFree: true,
        }}
      >
        <CarouselContent>
          {songs.map((song) => {
            return (
              <CarouselItem
                key={song.name}
                className="flex basis-1/3 flex-col items-center justify-center gap-2 lg:basis-1/4 xl:basis-1/5"
              >
                <Image
                  className="size-44 rounded-md"
                  src={song.image}
                  alt={song.name}
                  width={300}
                  height={300}
                />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-lg font-medium">{song.name}</h3>
                  <span className="opacity-90">{song.artist}</span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  );
}
