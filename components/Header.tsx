import Image from "next/image";
import SpotifyLogo from "@/public/logo.png";
import Avatar from "@/public/avatar.jpeg";
import { MagnifyingGlassIcon, BellIcon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky z-10 left-0 top-0 flex w-full flex-row justify-between py-2 px-4 bg-background">
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="flex flex-row items-center gap-2">
          <Image src={SpotifyLogo} width={50} height={50} alt="spotify logo" />
          <h1 className="text-xl font-medium">Spotify</h1>
        </div>
        <button>favorites</button>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="relative flex flex-row">
          <Button
            size={"icon"}
            variant={"outline"}
            className="absolute left-1 scale-75 border-0 p-0"
          >
            <MagnifyingGlassIcon />
            <span className="sr-only">search</span>
          </Button>
          <Input className="pl-10" type="text" placeholder="Search" />
        </div>
        <Button size={"icon"} variant={"outline"}>
          <BellIcon />
          <span className="sr-only">notifications</span>
        </Button>
        <Image
          src={Avatar}
          width={40}
          height={40}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </header>
  );
}
