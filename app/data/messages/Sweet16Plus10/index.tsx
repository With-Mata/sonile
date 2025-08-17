import { Container } from "@/Container";
import Message from "@/types/Message";
import CountDownCard from "./_comps/CountDownCard";
import Image from "next/image";
import { fromZonedTime } from "date-fns-tz";
import Timezone from "timezone-enum";
import { useState } from "react";

import { getCldVideoUrl } from "next-cloudinary";

interface CountDownItem {
  key: string;
  releaseTime: Date;
  content: React.ReactNode;
  placeholder?: React.ReactNode;
}

const toRelease = (isoLocal: string) =>
  fromZonedTime(isoLocal, Timezone["Africa/Blantyre"]);

const countDownItems: CountDownItem[] = [
  {
    key: "morning-message",
    releaseTime: toRelease("2025-08-17T00:00:00"),
    content: (
      <div className="space-y-2">
        <>
          <p>
            <strong>
              Good <span className="text-yellow-500">Morning</span>,
            </strong>
          </p>
          <div className="bg-gray-100 flex items-center justify-center rounded-r-full rounded-b-full p-1 pl-3 w-max">
            <div className="w-10 h-10 bg-gray-200 rounded-full">
              <Image
                src="/images/me.jpg"
                alt="audio"
                className="rounded-r-full rounded-b-full"
                width={40}
                height={40}
              />
            </div>
            <audio controls className="rounded-full">
              <source
                src={getCldVideoUrl({
                  src: "birthday-recording_hhv571",
                  format: "ogg",
                })}
                type="audio/ogg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </>
      </div>
    ),
  },
  {
    key: "evening-message",
    releaseTime: toRelease("2025-08-17T20:00:00"),
    placeholder: (
      <div className="space-y-2">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="relative w-full h-28">
          <Image
            src="/images/birthday-ballons.jpg"
            alt="ballons"
            className="rounded-lg opacity-35 object-cover"
            fill
          />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="relative w-full h-28">
          <Image
            src="/images/cupcakes.jpg"
            alt="cupcakes"
            className="rounded-lg opacity-35 object-cover"
            fill
          />
        </div>
      </div>
    ),
    content: (
      <div className="space-y-2">
        <div className="relative w-full h-80">
          <Image
            src="/images/birthday-ballons.jpg"
            alt="audio"
            className="rounded-lg object-cover"
            fill
          />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining especially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="relative w-full h-80">
          <Image
            src="/images/cupcakes.jpg"
            alt="audio"
            className="rounded-lg object-cover"
            fill
          />
        </div>
      </div>
    ),
  },
];

const Sweet16Plus10Content = () => {
  const [releaseTick, setReleaseTick] = useState(0);

  const handleRelease = () => setReleaseTick((n) => n + 1);

  return (
    <Container
      className="max-w-2xl min-h-[110dvh] space-y-6 py-8 md:py-10 text-lg px-8 md:px-4"
      key={releaseTick}
    >
      {countDownItems
        .filter((item) => {
          const isUnlocked = Date.now() >= item.releaseTime.getTime();
          return isUnlocked;
        })
        .map((item) => {
          return (
            <CountDownCard key={item.key} releaseTime={item.releaseTime}>
              {item.content}
            </CountDownCard>
          );
        })}
      {countDownItems
        .filter((item) => {
          const isUnlocked = Date.now() < item.releaseTime.getTime();
          return isUnlocked;
        })
        .slice(0, 1)
        .map((item) => {
          return (
            <div className="relative">
              <p className="text-base font-medium">
                <span className="mr-0.5">Coming Soon...</span> Delay = suspense
                😏
                <span className="mx-0.5">☕</span>
              </p>
              <CountDownCard
                key={item.key}
                releaseTime={item.releaseTime}
                onRelease={handleRelease}
                className="mt-2"
              >
                {item.placeholder || item.content}
              </CountDownCard>
            </div>
          );
        })}
    </Container>
  );
};

export const sweet16Plus10: Message = {
  id: "sweet-16-plus-10",
  title: (
    <div className="flex flex-row items-center justify-center">
      <span>Sweet 16</span> <span className="ml-1 text-pink-600">+ 10</span>{" "}
      <span className="ml-1">🥳</span>
    </div>
  ),
  createdAt: new Date("2025-08-17"),
  content: <Sweet16Plus10Content />,
};
