import { component$, useContext } from "@builder.io/qwik";
import { IconContentMap } from "../lib/icons-content";
import { IconProps, IconContext, defaultIconProps } from "../lib/icon-props";

interface NamedIconProps extends IconProps {
  name: string;
}

export default component$((props: NamedIconProps) => {
  const fallbackProps = useContext(IconContext, defaultIconProps);
  const size = props.size ?? fallbackProps.size;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ?? fallbackProps.color}
      stroke-width={props.strokeWidth ?? fallbackProps.strokeWidth}
      stroke-linecap={props.strokeLineCap ?? fallbackProps.strokeLineCap}
      stroke-linejoin={props.strokeLineJoin ?? fallbackProps.strokeLineJoin}
      class={`feather feather-${props.name} ${props.class ?? fallbackProps.class}`}
      dangerouslySetInnerHTML={IconContentMap[props.name]}
    ></svg>
  );
});
