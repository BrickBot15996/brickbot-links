"use client";

import { IoIosGlobe } from "react-icons/io";
import InteractiveBox from "./interactive-box";
import { useRouter } from "next/navigation";
import { RxExternalLink } from "react-icons/rx";
import { FaStar } from "react-icons/fa";

type LinkBoxProps = {
  title: string;
  link: string;
  icon?: React.ReactNode;
  highlighted?: boolean;
};

export default function LinkBox({
  title,
  link,
  highlighted = false,
  icon = highlighted ? (
    <FaStar
      className="h-[var(--icon-size)] w-[var(--icon-size)]"
      style={{ fill: highlighted ? "#9E9563" : "#9B9B9B" }}
    />
  ) : (
    <IoIosGlobe
      className="h-[var(--icon-size)] w-[var(--icon-size)]"
      style={{ fill: highlighted ? "#9E9563" : "#9B9B9B" }}
    />
  ),
}: LinkBoxProps) {
  const router = useRouter();

  return (
    <InteractiveBox
      highlighted={highlighted}
      onClickAction={() => {
        router.push("https://" + link);
      }}
      onWheelAction={() => {
        window.open("https://" + link, "_blank");
      }}
      className="w-[var(--content-width)]"
    >
      <div className="flex flex-row space-x-[var(--icon-padding)] p-[var(--icon-padding)] items-center justify-center">
        {icon}
        <div
          className="flex flex-col mr-auto flex-[0_85%]"
          style={{
            fontSize: "var(--link-text-size)",
            lineHeight: "var(--link-text-line-height)",
          }}
        >
          <div style={{ fontWeight: 700 }}>{title}</div>
          <div
            style={{
              color: highlighted ? "#9E9563" : "#9B9B9B",
              fontWeight: 500,
            }}
          >
            {link}
          </div>
        </div>
        <RxExternalLink
          className="h-[var(--icon-size)] w-[var(--icon-size)] ml-auto"
          style={{ color: highlighted ? "#9E9563" : "#9B9B9B" }}
        />
      </div>
    </InteractiveBox>
  );
}
