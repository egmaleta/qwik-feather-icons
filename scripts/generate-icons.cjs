const fs = require('fs');
const feather = require('feather-icons');

const iconTemplate = icon =>
`// THIS FILE WAS GENERATED
import { component$ } from "@builder.io/qwik";
import { IconProps, DefaultIconProps } from "./icon-props";

export default component$((props: IconProps) => {
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
      class={\`${icon.attrs.class} \${props.class ?? DefaultIconProps.class}\`}
    >${icon.contents}</svg>
  );
});
`;

Object.keys(feather.icons).map(name => {
  fs.writeFileSync(`./src/components/icons/${name}-icon.tsx`, iconTemplate(feather.icons[name]), "utf-8")
});
