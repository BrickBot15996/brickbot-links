import { BoxProps } from "./interactive-box";

export default function Box({
  children,
  highlighted = false,
  className = "",
  style = {},
}: BoxProps) {
  return (
    <div
      className={`border-[0.125rem] rounded-[1.25rem] ${className}`}
      style={{
        ...style,
        background: highlighted ? "#2D2B22" : "#1A1A1A",
        borderColor: highlighted ? "#9E9563" : "#363636",
      }}
    >
      {children}
    </div>
  );
}
