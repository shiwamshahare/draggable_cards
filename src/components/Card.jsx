import { motion } from "framer-motion";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const Card = ({ data, refer }) => {
  return (
    <motion.div
      drag
      dragConstraints={refer}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
      className="relative flex-shrink w-60 h-72 rounded-[45px] bg-zinc-900/95 text-white p-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex items-center justify-between  px-6 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size="0.8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-700" : "bg-green-700"
            } flex justify-center items-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
