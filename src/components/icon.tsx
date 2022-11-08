import { component$ } from "@builder.io/qwik";
import { IconContentMap } from "./icons-content";
import { IconProps } from "./icons/icon-props";

interface NamedIconProps extends IconProps {
  name: string;
}

export default component$((props: NamedIconProps) => {
  const size = props.size ?? 24;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ?? "currentColor"}
      stroke-width={props.strokeWidth ?? 2}
      stroke-linecap={props.strokeLineCap ?? "round"}
      stroke-linejoin={props.strokeLineJoin ?? "round"}
      class={`feather feather-${props.name} ${props.class ?? ""}`}
      dangerouslySetInnerHTML={IconContentMap[props.name]}
    ></svg>
  );
});
