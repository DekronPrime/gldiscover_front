import { FC } from "react";

import SocialMedia from "./SocialMedia";

import FacebookLight from "@/public/logo/facebook-logo-light.png";
import InstagramLight from "@/public/logo/instagram-logo-light.png";
import TelegramLight from "@/public/logo/telegram-logo-light.png";
import XLight from "@/public/logo/x-logo-light.png";
import YoutubeLight from "@/public/logo/youtube-logo-light.png";
import FacebookAccent from "@/public/logo/facebook-logo-accent.png";
import InstagramAccent from "@/public/logo/instagram-logo-accent.png";
import TelegramAccent from "@/public/logo/telegram-logo-accent.png";
import XAccent from "@/public/logo/x-logo-accent.png";
import YoutubeAccent from "@/public/logo/youtube-logo-accent.png";

const SocialMediaLinks: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <span className="font-nunitoSemibold font-semibold text-3xl text-center">
          Join us in Social media
        </span>
        <div className="flex justify-evenly">
          <SocialMedia
            icon={TelegramLight}
            hoverIcon={TelegramAccent}
            link="https://desktop.telegram.org/"
          />
          <SocialMedia
            icon={XLight}
            hoverIcon={XAccent}
            link="https://x.com/"
          />
          <SocialMedia
            icon={InstagramLight}
            hoverIcon={InstagramAccent}
            link="https://www.instagram.com/"
          />
          <SocialMedia
            icon={FacebookLight}
            hoverIcon={FacebookAccent}
            link="https://www.facebook.com/"
          />
          <SocialMedia
            icon={YoutubeLight}
            hoverIcon={YoutubeAccent}
            link="https://www.youtube.com/"
          />
        </div>
      </div>
    </>
  );
};

export default SocialMediaLinks;
