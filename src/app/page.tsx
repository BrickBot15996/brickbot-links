import Image from "next/image";
import Socials from "./_components/social-links";
import LinkList from "./_components/link-list";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start w-[var(--content-width)] h-full mt-[var(--top-spacing)] select-none scale-100">
      <div className="relative w-full h-[4.5rem] md:h-[5.25rem] lg:h-[6rem] overflow-hidden">
        <Image
          src="brickbot-yellow.svg"
          alt="BrickBot Logo"
          fill
          priority
          className="object-contain w-full h-full"
        />
      </div>
      <div className="relative w-full h-[2.5rem] md:h-[3rem] lg:h-[4rem] mt-[var(--related-gap)] overflow-hidden">
        <Image
          src="brickbot-text.svg"
          alt="BrickBot"
          fill
          priority
          className="object-contain w-full h-full"
        />
      </div>
      <h1 className="text-[1.75rem]/[1.75rem] lg:text-[2rem]/[2rem] text-[#ffffff] font-semibold mt-[var(--related-gap)]">
        FTC Team #15996
      </h1>
      <Socials />
      <LinkList />
    </section>
  );
}
