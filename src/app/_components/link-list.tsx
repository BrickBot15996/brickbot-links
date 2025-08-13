import LinkBox from "./link-box";

export default function LinkList() {
  return (
    <section className="grid grid-cols-1 grid-flow-row mt-[var(--related-gap)] gap-y-[1rem]">
      {links
        .sort((link1, link2) => {
          return link1.highlighted
            ? link2.highlighted
              ? 0
              : -1
            : link2.highlighted
            ? 1
            : 0;
        })
        .map((link, index) => {
          return (
            <LinkBox
              key={index}
              title={link.title}
              link={link.link}
              highlighted={link.highlighted}
            />
          );
        })}
    </section>
  );
}

const links: { title: string; link: string; highlighted?: boolean }[] = [
  {
    title: "BrickBot Recruitment Form",
    link: "brickbot.ro/apply",
    highlighted: true,
  },
];
