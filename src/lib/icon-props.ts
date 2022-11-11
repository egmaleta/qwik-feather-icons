export interface IconProps {
  size?: number,
  color?: string,
  strokeWidth?: number,
  strokeLineCap?: string,
  strokeLineJoin?: string,
  class?: string
}

export const DefaultIconProps: IconProps = {
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  strokeLineCap: "round",
  strokeLineJoin: "round",
  class: ""
};
