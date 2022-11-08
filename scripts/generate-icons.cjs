const fs = require('fs');
const feather = require('feather-icons');

const iconTemplate = icon =>
`// THIS FILE WAS GENERATED
import { component$ } from "@builder.io/qwik";
import { IconProps } from "./icon-props";

export default component$((props: IconProps) => {
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
      class={\`${icon.attrs.class} \${props.class ?? ""}\`}
    >${icon.contents}</svg>
  );
});
`;

Object.keys(feather.icons).map(name => {
  fs.writeFileSync(`./src/components/icons/${name}-icon.tsx`, iconTemplate(feather.icons[name]), "utf-8")
});
