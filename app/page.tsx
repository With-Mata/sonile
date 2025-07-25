import type { Metadata } from "next";
import "./globals.css";
import { eudoxusSansGX } from "../app/font";
import { Container } from "../Container";

export const metadata: Metadata = {
  title: "Message to Sonile",
  description: "Message to Sonile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${eudoxusSansGX.className} @container/main`}>
        <Container className="lg:max-w-2xl space-y-4 pt-10">
          <p>
            <strong>Dear Sonile,</strong>
          </p>
          <p>
            Some people wait years, maybe even a lifetime, to find a moment like
            ours. I heard your voice at my uncle’s house and felt your energy
            right away. In that split second, I knew I wanted a moment with you.
            <br />
            <br />
            And when I finally got that moment… everything just clicked. Texts
            turned into long calls, calls turned into plans, and before I knew
            it, I was on a bus heading your way.
            <br />
            <br />
            I’ve meant every step I’ve taken toward you because what I feel is
            real. One of the coolest things I got to do this past weekend was
            watch your beautiful, shiny face light up as you smiled, while you
            explained something with that wild depth only you and I can
            understand.
            <br />
            <br />
            There’s such an ease between us, like we’ve been playing on the same
            team for 15 years.
            <strong>You make me feel seen and heard.</strong>
            With you, I don’t have to hide the unicorn parts of myself.
            <br />
            <br />
            And maybe… that makes you my Mrs. Unicorn.
            <br />
            <br />
            So here it is!
            <br />
            <br />
            Sonile, will you be my girlfriend… my partner… my baby girl?
            <br />
            <br />
            Because I want this, and I know you do too.
            <br />
            <br />
            <strong>I want to call you mine.</strong>
          </p>
        </Container>
      </body>
    </html>
  );
}
