import type { Metadata } from "next";
import { Container } from "../Container";

export const metadata: Metadata = {
  title: "Message to Sonile",
  description: "Message to Sonile",
};

const MainPage = () => {
  return (
    <Container className="max-w-2xl space-y-8 py-8 md:py-10 text-lg px-8 md:px-4">
      <p>
        <strong>
          Dear <span className="text-pink-600">Sonile</span>,
        </strong>
      </p>

      <div>
        <p>
          Some people wait years, maybe even a lifetime, to find a moment like
          ours.
        </p>
      </div>
      <div className="space-y-2">
        <p>
          I heard your voice at my uncle’s house and felt your energy right
          away.
        </p>
        <p> In that split second, I knew I wanted a moment with you.</p>
        <p>And when I finally got that moment… everything just clicked.</p>

        <p>Texts turned into long calls,</p>

        <p>calls turned into plans,</p>

        <p> and before I knew it, I was on a bus heading your way.</p>
      </div>

      <div className="space-y-2">
        <p>
          I’ve meant every step I’ve taken toward you because what I feel is
          real.
        </p>
        <p>
          One of the coolest things I got to do this past weekend was watch your
          beautiful, shiny face light up as you smiled, while you explained
          something with that wild depth only you and I can understand.
        </p>
        <p>
          There’s such an ease between us, like we’ve been playing on the same
          team for 15 years.
        </p>
        <p>You make me feel seen and heard.</p>
        <p>With you, I don’t have to hide the unicorn parts of myself.</p>
        <p>And maybe… that makes you my Mrs. Unicorn.</p>
      </div>

      <div className="space-y-2">
        <p>So here it is!</p>
        <p>Sonile, will you be my girlfriend… my partner… my baby girl?</p>
        <p>Because I want this, and I know you do too.</p>
        <p>I want to call you mine. </p>
      </div>

      <div className="space-y-2 font-bold">
        <p>With all my heart,</p>
        <p className="text-teal-600">
          Mr. Unicorn <span className="ml-1">🦄</span>
        </p>
      </div>
    </Container>
  );
};

export default MainPage;
