import LatestEnglish from "@/components/LatestEnglish";
import LatestHindi from "@/components/LatestHindi";
import LatestReleases from "@/components/LatestReleases";
import MainShowcase from "@/components/MainShowcase";
import PopularArtists from "@/components/PopularArtists";
import SongQueue from "@/components/SongQueue";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="grid h-full grid-cols-3">
      <ScrollArea className="col-span-2 flex h-full flex-col p-4">
        <MainShowcase />
        <LatestReleases />
        <PopularArtists />
        <LatestEnglish />
        <LatestHindi />
      </ScrollArea>
      <div className="">
        <SongQueue />
      </div>
    </main>
  );
}
