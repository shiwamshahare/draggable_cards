import React, { useRef } from "react";
import Card from "./Card";

const ForeGround = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "A  programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen.       - Paul Graham",
      filesize: ".5kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download now",
        tagColor: "green",
      },
    },
    {
      desc: "It's better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive. - Steve McConnell",
      filesize: ".2kb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Completed ",
        tagColor: "blue",
      },
    },
    {
      desc: " Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. - Rick Cook",
      filesize: ".7kb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download now",
        tagColor: "green",
      },
    },

    {
      desc: "  Talk is cheap.Show me the code. - Linus Torvalds",
      filesize: ".7kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download now",
        tagColor: "green",
      },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-5 p-5"
      >
        {data.map((item, idx) => (
          <Card data={item} refer={ref} />
        ))}
      </div>
    </>
  );
};

export default ForeGround;
