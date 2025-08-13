"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import Box from "./box";
import { motion } from "framer-motion";

export type BoxProps = {
  children: ReactNode;
  highlighted?: boolean;
  className?: string;
  style?: CSSProperties;
  onClickAction?: () => void;
  onWheelAction?: () => void;
};

export default function InteractiveBox({
  children,
  highlighted = false,
  className = "",
  style = {},
  onClickAction,
  onWheelAction,
}: BoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isWheeled, setIsWheeled] = useState(false);
  const pressType = useRef<"left" | "middle" | null>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (event.button === 1) {
      setIsClicked(false);
      setIsWheeled(true);
      pressType.current = "middle";
    } else if (event.button === 0) {
      setIsClicked(true);
      setIsWheeled(false);
      pressType.current = "left";
    }
    attachGlobalReleaseListener();
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (isHovered && pressType.current) {
      if (pressType.current === "left") {
        onClickAction?.();
      } else if (pressType.current === "middle") {
        onWheelAction?.();
      }
    }
    resetPressState();
  };

  const handleTapStart = () => {
    setIsClicked(true);
    attachGlobalReleaseListener();
  };

  const resetPressState = () => {
    setIsClicked(false);
    setIsWheeled(false);
    pressType.current = null;
  };

  const attachGlobalReleaseListener = () => {
    const handleRelease = () => resetPressState();

    window.addEventListener("mouseup", handleRelease, { once: true });
    window.addEventListener("touchend", handleRelease, { once: true });
    window.addEventListener("touchcancel", handleRelease, { once: true });
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetPressState();
      }}
      onMouseDown={handleMouseDown}
      onTapStart={handleTapStart}
      onMouseUp={handleMouseUp}
      onWheel={() => {
        if (onWheelAction) onWheelAction();
        else if (onClickAction) onClickAction();
      }}
      initial={{ scale: 1.0 }}
      animate={isClicked || isWheeled ? { scale: 0.93 } : { scale: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative w-fit h-fit cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isClicked || isWheeled
            ? { opacity: 0.2 }
            : isHovered
            ? { opacity: 0.1 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full rounded-[1.25rem] border-[0.125rem] border-white bg-white"
      />
      <Box
        highlighted={highlighted}
        className={className}
        style={style}
      >
        {children}
      </Box>
    </motion.div>
  );
}
