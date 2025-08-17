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
      <Container className="main:px-0 space-y-8 text-lg">
        <hr className="my-8 border-gray-200" />
        <p>
          <strong>
            <span className="text-pink-600">Continue Here....</span>{" "}
          </strong>
        </p>
        <p className="italic">
          Pssst… is the coast clear? Did you sneak in here without anyone
          following you?
        </p>
        <p>
          <span className="italic mr-2">Good.</span>Welcome to Part Two,{" "}
          <span className="font-semibold">Agent 007</span> 🥷🏽. Don’t worry, no
          riddles or secret missions here, just you and me, carrying on where we
          left off.
        </p>
        <p>
          I know I’ve told you plenty of times that you make me feel truly seen
          for the superhero I am, and today, more than ever, I want to shine
          that same spotlight back on you.
        </p>
        <p>
          It’s been over a month since you sent me that very first text message,
          and from that moment on, I’ve been quietly taking notes 👀. Because
          the truth is… I think you’re the real superhero here. And your first
          power? Well, I might as well just show you.
        </p>
        <div className="rounded-xl flex items-center py-5 mx-auto w-max px-4 justify-center flex-col gap-7">
          <div className="relative h-full w-full max-w-xs md:max-w-sm">
            <Image
              src="/images/sonile-sleeping.jpg"
              alt="sonile sleeping"
              className="rounded-2xl object-cover"
              width={1200}
              height={630}
            />
          </div>
          <p className="text-center text-base max-w-80">
            <span className="font-bold">
              The "I won't fall asleep Superpower"
            </span>{" "}
            — capable of dozing mid-mission while still looking adorable 😴
          </p>
        </div>
        <p>
          Not many people would consider this a superpower. You’re asleep…
          where’s the magic here? The truth is, they don’t have the full
          picture. While some might be resting, you’re actually just charging up
          for your next mission.
        </p>
        <p>
          Funny enough that actually brings us to your second power:{" "}
          <span className="font-bold">The Grind 🛠️</span>. Long hours at work
          and endless side hustles, chasing your big dreams (that AMG 😏)… you
          do it all with focus, determination, and style. Most heroes might hang
          up their cape when things get tough… but you? You just keep going!
        </p>
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-center">
          <div className="relative h-full w-full max-w-xs md:max-w-sm">
            <Image
              src="/images/sonile-stand.PNG"
              alt="sonile standing"
              className="rounded-2xl object-cover"
              width={1200}
              height={630}
            />
          </div>
          <div className="relative h-full w-full max-w-xs md:max-w-sm">
            <Image
              src="/images/sonile-laugh.PNG"
              alt="sonile laughing"
              className="rounded-2xl object-cover"
              width={1200}
              height={630}
            />
          </div>
        </div>
        <p>
          And now, for your greatest power:{" "}
          <span className="font-bold">Generosity ❤️</span>. Even after all the
          work and hustle, you show up for the people who matter most, quietly
          lifting them up and making life brighter. This is the power that
          leaves the biggest mark, the one we all feel every day.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-center">
          <div className="relative h-full w-full max-w-xs md:max-w-sm">
            <Image
              src="/images/sonile-hugging.JPG"
              alt="sonile hugging Prudence"
              className="rounded-2xl object-cover"
              width={1200}
              height={630}
            />
          </div>
          <div className="relative h-full w-full max-w-xs md:max-w-sm">
            <Image
              src="/images/sonile-dancing.jpg"
              alt="sonile dancing"
              className="rounded-2xl object-cover"
              width={1200}
              height={630}
            />
          </div>
        </div>
        <p>
          At this point, it’s quite clear you’re definitely{" "}
          <span className="font-bold">something out of this world</span>. And
          honestly, if anyone hasn’t noticed yet, they probably just haven’t
          been paying attention.
          <br />
          <br />
          So yeah… that’s the truth. You’re{" "}
          <span className="font-bold underline-offset-2">incredible</span>, and
          I hope today, right here, right now, you can feel even a fraction of
          just how amazing it is to exist in a world where there is you.
        </p>
        <p>
          <strong>
            Happy Birthday 🥳,{" "}
            <span className="text-pink-600">Mrs Unicorn</span>
          </strong>
          .
          <span className="ml-1.5">I'm really blessed to be your partner!</span>
        </p>
        <div className="relative h-full mx-auto w-full max-w-xs md:max-w-sm">
          <Image
            src="/images/sonile-smiling.jpeg"
            alt="sonile smiling"
            className="rounded-2xl object-cover"
            width={1200}
            height={630}
          />
        </div>
        <div className="relative h-full mx-auto w-full max-w-xs md:max-w-sm">
          <Image
            src="/images/birthday-cake.jpeg"
            alt="birthday cake"
            className="rounded-2xl object-cover"
            width={1200}
            height={630}
          />
        </div>
        <p className="text-center font-bold">
          Love,
          <strong className="ml-1.5 text-teal-600">Papa Bun Bun</strong>
        </p>
      </Container>
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
