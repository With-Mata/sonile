import { Container } from "@/Container";
import Message from "@/types/Message";
import Image from "next/image";

export const firstAnniversary: Message = {
  id: "first-anniversary",
  title: "First Anniversary 🎉",
  createdAt: new Date("2025-08-25"),
  content: (
    <Container className="max-w-2xl min-h-[110dvh] space-y-8 py-8 md:py-10 text-lg px-8 md:px-4">
      <p>
        <strong>My dearest Matamando,</strong>
      </p>
      <div>
        <p>
          When Prudence asked me whether I wanted to be part of the wedding or
          the other events beforehand, I chose the wedding because weddings are
          memorable. Little did I know that I would bump into a man I’d soon be
          making memories with.
        </p>
      </div>
      <div>
        <p>
          Two days before the wedding, I arrived in Lilongwe in the evening,
          fully ready to help Prudence enjoy her big day. That night, I met some
          of your relatives and Prince, and then you and Maya walked in. There
          was this presence about you—something I couldn’t quite put my finger
          on, but I knew you were special.
        </p>
      </div>
      <div>
        <p>
          On the way to where Prudence was staying, I could sense that you were
          trying to make conversation. As a natural talker, chatting with you (a
          stranger at the time) came easily. This remains one of my favorite
          parts of our story. When the festivities came to an end, I was ready
          to go home and rest—yet I found myself sitting in the dark waiting for
          Mum to leave. Then you found me.
        </p>
      </div>

      <div>
        <p>
          The thought of us talking had crossed my mind, but experiencing it was
          even better than I imagined. At first, I only saw you as Maya’s
          brother, but after our first phone call, I knew I wanted to hear from
          you every day. When you later said you wanted to come to Blantyre for
          a date, I was nervous, excited, and hopeful. That first date set the
          tone for us. Not long after, you asked me to be your girlfriend. By
          then, I was already starting to fall in love, and every gesture you
          showed reassured me of your feelings.
        </p>
      </div>
      <div>
        <p>
          It’s been a month since we chose to do life together, and I have loved
          every moment. The tough conversations allow us to truly know one
          another, and the soft pillow talks deepen our connection. It’s like
          saying “I love you” without words—just through soft actions.
        </p>
      </div>
      <div>
        <p>
          You are the man of my dreams. I thank God that I met you at a time
          when I was open to welcoming love. You are very easy to love. I’m
          drawn to the way you speak about the people in your life—the care and
          love you show them reveal the beauty of your heart. With you, I can be
          my truest self, share my dreams and desires, and embrace my longing
          for a family. In any lifetime, I’d still choose to be your partner,
          because the feelings I have for you are true.
        </p>
      </div>
      <div>
        <p>
          Our relationship is a soft place to land. On hard days, I know I can
          always find comfort with you. Thank you for opening your heart to me,
          for caring for me, and for cherishing me the way you do. I know I am
          safe with you, always.
        </p>
      </div>
      <div>
        <p>
          This is the first of many anniversaries to come. I pray that the love
          we share continues to grow, binding us through challenges and guiding
          us as we achieve the goals we’ve set together.
        </p>
      </div>

      <div>
        <p>
          Below is your gift, for being such a gentle man. You mentioned wanting
          some items from Shein—so here’s something to make that possible.
        </p>
      </div>
      <div>
        <p>
          I love you, and I cannot wait to see what the future holds for us.
        </p>
      </div>
      <div>
        <p>
          <strong>With all my love,</strong>
        </p>
        <p>
          <strong>Sonile</strong>
        </p>
      </div>

      <div className="relative h-full  w-full">
        <Image
          src="/images/first-anniversary/gift-image.png"
          alt="gift image"
          className="rounded-xl object-cover"
          width={1200}
          height={630}
        />
      </div>
    </Container>
  ),
};
