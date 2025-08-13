"use client";

import { IoIosGlobe } from "react-icons/io";
import InteractiveBox from "./interactive-box";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTikTok, AiOutlineYoutube } from "react-icons/ai";
import { LiaLinkedin } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { BiLogoFacebook } from "react-icons/bi";

export default function Socials() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row justify-between w-[var(--content-width)] mt-[var(--section-gap)] mb-[var(--related-gap)]">
        <InteractiveBox
          className="p-[var(--icon-padding)] flex flex-col items-center justify-center w-full h-full"
          onClickAction={() => {
            router.push("https://brickbot.ro/");
          }}
          onWheelAction={() => {
            window.open("https://brickbot.ro/", "_blank");
          }}
        >
          <IoIosGlobe className="w-[var(--icon-size)] h-[var(--icon-size)] fill-white" />
        </InteractiveBox>
        <InteractiveBox
          className="p-[var(--icon-padding)] flex flex-col items-center justify-center w-full h-full"
          onClickAction={() => {
            router.push("https://www.instagram.com/brickbotcnu/");
          }}
          onWheelAction={() => {
            window.open("https://www.instagram.com/brickbotcnu/", "_blank");
          }}
        >
          <FaInstagram className="w-[var(--icon-size)] h-[var(--icon-size)] fill-white" />
        </InteractiveBox>
        <InteractiveBox
          className="p-[var(--icon-padding)] flex flex-col items-center justify-center w-full h-full"
          onClickAction={() => {
            router.push("https://www.facebook.com/brickbotcnu/");
          }}
          onWheelAction={() => {
            window.open("https://www.facebook.com/brickbotcnu/", "_blank");
          }}
        >
          <BiLogoFacebook className="w-[var(--icon-size)] h-[var(--icon-size)] fill-white" />
        </InteractiveBox>
        <InteractiveBox
          className="p-[var(--icon-padding)] flex flex-col items-center justify-center w-full h-full"
          onClickAction={() => {
            router.push("https://www.tiktok.com/@brickbotcnu");
          }}
          onWheelAction={() => {
            window.open("https://www.tiktok.com/@brickbotcnu", "_blank");
          }}
        >
          <AiOutlineTikTok className="w-[var(--icon-size)] h-[var(--icon-size)] fill-white" />
        </InteractiveBox>
      </div>
      <div className="flex flex-row justify-between w-[var(--content-width)]">
        <InteractiveBox
          className="p-[var(--icon-padding)] flex flex-col items-center justify-center w-full h-full"
          onClickAction={() => {
            router.push("https://www.linkedin.com/company/brickbot/");
          }}
          onWheelAction={() => {
            window.open("https://www.linkedin.com/company/brickbot/", "_blank");
          }}
        >
          <LiaLinkedin className="w-[var(--icon-size)] h-[var(--icon-size)] fill-white" />
        </InteractiveBox>
        <InteractiveBox
          className="p-[var(--icon-padding)] flex flex-col items-center justify-center w-full h-full"
          onClickAction={() => {
            router.push("mailto:brickbot@liceulunirea.ro");
          }}
          onWheelAction={() => {
            window.open("mailto:brickbot@liceulunirea.ro", "_blank");
          }}
        >
          <MdOutlineMailOutline className="w-[var(--icon-size)] h-[var(--icon-size)] fill-white" />
        </InteractiveBox>
        <InteractiveBox
          className="p-[var(--icon-padding)] flex flex-col items-center justify-center w-full h-full"
          onClickAction={() => {
            router.push(
              "https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
            );
          }}
          onWheelAction={() => {
            window.open(
              "https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew",
              "_blank"
            );
          }}
        >
          <AiOutlineYoutube className="w-[var(--icon-size)] h-[var(--icon-size)] fill-white" />
        </InteractiveBox>
        <InteractiveBox
          className="p-[var(--icon-padding)] flex flex-col items-center justify-center w-full h-full"
          onClickAction={() => {
            router.push("https://github.com/BrickBot15996");
          }}
          onWheelAction={() => {
            window.open("https://github.com/BrickBot15996", "_blank");
          }}
        >
          <VscGithub className="w-[var(--icon-size)] h-[var(--icon-size)] fill-white" />
        </InteractiveBox>
      </div>
    </>
  );
}
