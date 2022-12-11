import { component$, useContext } from "@builder.io/qwik";
import { IconContentMap } from "../lib/icons-content";
import { IconProps, IconContext, defaultIconProps } from "../lib/icon-props";

interface NamedIconProps extends IconProps {
  name: string;
}

export default component$(({name, ...props}: NamedIconProps) => {
  const fallbackProps = useContext(IconContext, defaultIconProps);

  const {
    size,
    color,
    strokeWidth,
    strokeLineCap,
    strokeLineJoin,
    ...restProps
  } = { ...fallbackProps, ...props };
  
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
      {...restProps}
      class={`feather feather-${name} ${restProps.class ?? ''}`}
      dangerouslySetInnerHTML={IconContentMap[name]}
    ></svg>
  );
});
