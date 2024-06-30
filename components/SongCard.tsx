import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function SongCard({
  image,
  name,
  date,
  artist,
}: {
  image: string;
  name: string;
  date: string;
  artist: string;
}) {
  return (
    <Card className="flex flex-row">
      <CardHeader className="p-2">
        <Image src={image} alt={name} width={120} height={120} />
      </CardHeader>
      <CardContent className="flex w-full flex-row justify-between p-2">
        <div className="flex flex-col justify-between">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <h3>{artist}</h3>
          </div>
          <span className=" opacity-90">{date}</span>
        </div>
        <Button size={"icon"} variant={"ghost"}>
          <DotsHorizontalIcon />
          <span className="sr-only">more</span>
        </Button>
      </CardContent>
    </Card>
  );
}
