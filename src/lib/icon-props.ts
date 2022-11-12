import { createContext } from "@builder.io/qwik";

export interface IconProps {
  size?: number,
  color?: string,
  strokeWidth?: number,
  strokeLineCap?: string,
  strokeLineJoin?: string,
  class?: string
}

export const IconContext = createContext<IconProps>("icon-context");

export const defaultIconProps: IconProps = {
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  strokeLineCap: "round",
  strokeLineJoin: "round",
  class: ""
};
