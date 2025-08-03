"use client";

import { Container } from "@/Container";
import { messages, theBigQuestion } from "../data/messages";
import { useMemo } from "react";
import { cn } from "../cn";
import { useQueryState } from "nuqs";

const MessagesViewer = () => {
  const sortedMessages = useMemo(
    () =>
      messages.sort(
        (a, b) =>
          (a.createdAt || new Date()).getTime() -
          (b.createdAt || new Date()).getTime()
      ),
    []
  );

  const [episode, setEpisode] = useQueryState<string>("e", {
    defaultValue: theBigQuestion.id,
    parse: (value) => value,
    serialize: (value) => value,
  });

  const currentMessage = useMemo(() => {
    return sortedMessages.find((message) => message.id === episode);
  }, [episode]);

  return (
    <Container className="max-w-2xl min-h-[110dvh] space-y-8 py-8 md:py-10 text-lg px-8 md:px-4">
      <div className="flex flex-row gap-4">
        {sortedMessages.map((message, index) => (
          <div
            role="button"
            tabIndex={index}
            key={index}
            className={cn(
              "flex flex-col cursor-pointer gap-4 bg-gray-100/80 border-2 border-transparent font-medium hover:bg-gray-200/80 rounded-full py-2 px-3.5",
              currentMessage?.id === message.id &&
                "bg-gray-200/90 hover:bg-gray-200 border-gray-300"
            )}
            onClick={() => setEpisode(message.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEpisode(message.id);
              }
            }}
            aria-label={message.title}
          >
            <p className="text-xs text-gray-500 flex flex-row gap-1.5">
              <span className=" text-black">{message.title}</span>
              {message.createdAt && (
                <>
                  &bull;
                  <span className="text-gray-600">
                    {message.createdAt.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
      {currentMessage?.content}
    </Container>
  );
};

export default MessagesViewer;
