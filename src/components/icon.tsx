import { component$ } from "@builder.io/qwik";
import { IconContentMap } from "./icons-content";
import { IconProps, DefaultIconProps } from "../lib/icon-props";

interface NamedIconProps extends IconProps {
  name: string;
}

export default component$((props: NamedIconProps) => {
  const size = props.size ?? DefaultIconProps.size;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ?? DefaultIconProps.color}
      stroke-width={props.strokeWidth ?? DefaultIconProps.strokeWidth}
      stroke-linecap={props.strokeLineCap ?? DefaultIconProps.strokeLineCap}
      stroke-linejoin={props.strokeLineJoin ?? DefaultIconProps.strokeLineJoin}
      class={`feather feather-${props.name} ${props.class ?? DefaultIconProps.class}`}
      dangerouslySetInnerHTML={IconContentMap[props.name]}
    ></svg>
  );
});
