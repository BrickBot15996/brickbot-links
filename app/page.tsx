"use client";

import { IconCard, LinkCard } from "brickbot-ui";
import Image from "next/image";
import Link from "next/link";
import {
  CiFacebook,
  CiGlobe,
  CiInstagram,
  CiLinkedin,
  CiMail,
} from "react-icons/ci";
import { PiTiktokLogoLight, PiYoutubeLogoLight } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import { motion } from "framer-motion";

export default function Home() {
  const date = new Date();

  return (
    <div className="flex min-h-screen items-start justify-center bg-(--bg-dark) relative select-none">
      <div
        className="absolute top-[min(calc(20rem-18vw),0rem)] bg-linear-to-b from-[#1c1c1c] to-(--bg-dark) to-70% h-auto w-full max-w-[min(100vw,120rem)] aspect-[1.8/1] object-contain max-h-screen"
        style={{
          WebkitMaskImage: "url(/brickbot-yellow.svg)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: "url(/brickbot-yellow.svg)",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      />
      <div className="flex flex-col items-center justify-center gap-[2rem] mt-[clamp(2.5rem,2rem+5vw,6rem)] h-full max-w-(--content-width) z-[100]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full flex flex-col gap-[1rem] items-center"
        >
          <div className="relative w-full h-[clamp(4.5rem,_4.5rem+1vw,_6rem)] overflow-hidden">
            <Image
              src="brickbot-yellow.svg"
              alt="BrickBot Logo"
              fill
              priority
              fetchPriority="high"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="relative w-full h-[clamp(2.5rem,_2.5rem+1vw,_4rem)] mt-[var(--related-gap)] overflow-hidden">
            <Image
              src="brickbot-text.svg"
              alt="BrickBot"
              fill
              priority
              fetchPriority="high"
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-md text-[#f8f8f8] font-semi-condensed mt-[var(--related-gap)]">
            FTC Team 15996
          </h1>
        </motion.div>
        <SocialIcons />
        <Links />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-[2rem] mt-[2rem] text-[#9B9B9B] text-xs"
        >
          BrickBot © {date.getFullYear()}
        </motion.div>
      </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="grid grid-rows-2 w-full gap-[2rem]">
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          visualDuration: 0.4,
          ease: "easeOut",
          type: "spring",
          bounce: 0.35,
        }}
        className="flex flex-row justify-between items-center w-full"
      >
        <Link
          href="https://brickbot.ro/en"
          target="_blank"
          aria-label="Team Website"
        >
          <IconCard>
            <CiGlobe className="h-[2rem] w-[2rem] fill-(--text)" />
          </IconCard>
        </Link>
        <Link
          href="https://www.instagram.com/brickbotcnu/"
          target="_blank"
          aria-label="Team Instagram"
        >
          <IconCard>
            <CiInstagram className="h-[2rem] w-[2rem] fill-(--text)" />
          </IconCard>
        </Link>
        <Link
          href="https://www.facebook.com/brickbotcnu/"
          target="_blank"
          aria-label="Team Facebook"
        >
          <IconCard>
            <CiFacebook className="h-[2rem] w-[2rem] fill-(--text)" />
          </IconCard>
        </Link>
        <Link
          href="https://www.tiktok.com/@brickbotcnu"
          target="_blank"
          aria-label="Team TikTok"
        >
          <IconCard>
            <PiTiktokLogoLight className="h-[2rem] w-[2rem] fill-(--text)" />
          </IconCard>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          visualDuration: 0.4,
          ease: "easeOut",
          type: "spring",
          bounce: 0.35,
          delay: 0.1,
        }}
        className="flex flex-row justify-between items-center w-full"
      >
        <Link
          href="https://www.linkedin.com/company/brickbot/"
          target="_blank"
          aria-label="Team LinkedIn"
        >
          <IconCard>
            <CiLinkedin className="h-[2rem] w-[2rem] fill-(--text)" />
          </IconCard>
        </Link>
        <Link
          href="mailto:brickbot@liceulunirea.ro"
          target="_blank"
          aria-label="Team Email"
        >
          <IconCard>
            <CiMail className="h-[2rem] w-[2rem] fill-(--text)" />
          </IconCard>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
          target="_blank"
          aria-label="Team YouTube"
        >
          <IconCard>
            <PiYoutubeLogoLight className="h-[2rem] w-[2rem] fill-(--text)" />
          </IconCard>
        </Link>
        <Link
          href="https://github.com/BrickBot15996"
          target="_blank"
          aria-label="Team GitHub"
        >
          <IconCard>
            <VscGithubAlt className="h-[2rem] w-[2rem] fill-(--text)" />
          </IconCard>
        </Link>
      </motion.div>
    </div>
  );
}

function Links() {
  const linkList = [
    {
      title: "Participate at Focșani Tech Challenge League Meet!",
      displayLink: "brickbot.ro/meet",
      highlighted: true,
      link: "https://brickbot.ro/meet",
    },
    {
      title: "Redirect 3.5% of your income tax to help BrickBot!",
      displayLink: "brickbot.ro/formular230",
      highlighted: false,
      link: "https://brickbot.ro/formular230",
      icon: (
        <div className="h-(--icon-size) w-(--icon-size) p-[0.1rem]">
          <div
            className="w-full h-full bg-(--text)"
            style={{
              WebkitMaskImage: "url(/230.svg)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url(/230.svg)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          />
        </div>
      ),
    },
  ];

  const date = new Date();

  return (
    <div className="flex flex-col gap-[2rem]">
      {linkList.map((link, index) => {
        if (
          ((date.getDate() > 24 && date.getMonth() === 4) ||
            date.getMonth() >= 5) &&
          link.displayLink == "brickbot.ro/formular230"
        ) {
          return null;
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 60 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              visualDuration: 0.4,
              ease: "easeOut",
              type: "spring",
              bounce: 0.35,
              delay: index * 0.1 + 0.2,
            }}
          >
            <Link
              href={link.link}
              target="_blank"
              aria-label={link.title}
              key={link.link}
            >
              <LinkCard
                title={link.title}
                displayLink={link.displayLink}
                highlighted={link.highlighted}
                icon={link.icon}
              />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
