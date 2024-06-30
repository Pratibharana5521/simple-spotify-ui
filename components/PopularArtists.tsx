import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const artists = [
  {
    image: "/artists/amit.jpeg",
    name: "Amit Trivedi",
  },
  {
    image: "/artists/arijit.jpeg",
    name: "Arijit Singh",
  },
  {
    image: "/artists/eminem.jpeg",
    name: "Slim Shady baby",
  },
  {
    image: "/artists/pritam.jpeg",
    name: "Pritam",
  },
  {
    image: "/artists/shreya.jpeg",
    name: "Shreya Ghoshal",
  },
  {
    image: "/artists/kk.jpeg",
    name: "KK",
  },
];

export default function PopularArtists() {
  return (
    <section className="py-6">
      <h2 className="p-4 text-2xl font-medium">Popular Artists</h2>

      <Carousel
        opts={{
          dragFree: true,
        }}
      >
        <CarouselContent>
          {artists.map((artist) => {
            return (
              <CarouselItem
                key={artist.name}
                className="flex basis-1/5 flex-col items-center justify-center gap-2"
              >
                <Image
                  className="size-44 rounded-full"
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={300}
                />
                <h3 className="text-lg font-medium">{artist.name}</h3>
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
