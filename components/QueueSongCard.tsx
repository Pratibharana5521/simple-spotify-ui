import { HeartIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default function QueueSongCard({
  name,
  image,
  artist,
}: {
  name: string;
  image: string;
  artist: string;
}) {
  return (
    <Card className="flex flex-row">
      <CardHeader className="p-2">
        <Image src={image} alt={name} width={120} height={120} />
      </CardHeader>
      <CardContent className="flex w-full flex-row justify-between p-2">
        <div className="flex flex-col justify-between">
            <CardTitle className="text-lg">{name}</CardTitle>
            <h3>{artist}</h3>
        </div>
        <Button size={"icon"} variant={"ghost"}>
          <HeartIcon />
          <span className="sr-only">more</span>
        </Button>
      </CardContent>
    </Card>
  );
}
