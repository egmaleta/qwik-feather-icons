import { component$ } from "@builder.io/qwik";
import { IconContentMap } from "./icons-content";
import { IconProps } from "./icons/icon-props";

interface NamedIconProps extends IconProps {
  name: string;
}

export default component$((props: NamedIconProps) => {
  const size = props.size ?? 24;
  const color = props.color ?? "currentColor";
  const strokeWidth = props.strokeWidth ?? 2;
  const strokeLineCap = props.strokeLineCap ?? "round";
  const strokeLineJoin = props.strokeLineJoin ?? "round";

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap={strokeLineCap}
    stroke-linejoin={strokeLineJoin}
    class={`feather feather-${props.name}`}
    dangerouslySetInnerHTML={IconContentMap[props.name]}
    ></svg>
  );
});
