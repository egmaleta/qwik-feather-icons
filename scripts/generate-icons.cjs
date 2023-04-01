const fs = require('fs');
const feather = require('feather-icons');

const capitalize = (name) => {
  const first = name.at(0);
  return first != undefined ? name.replace(first, first.toUpperCase()) : name;
};

const iconTemplate = icon =>
`// THIS FILE WAS GENERATED
import { component$, useContext } from "@builder.io/qwik";
import { IconProps, IconContext, defaultIconProps } from "../../lib/icon-props";

export default component$((props: IconProps) => {
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
      class={\`${icon.attrs.class} \${props.class ?? fallbackProps.class}\`}
      aria-label="${[...icon.name.split("-").map(s => capitalize(s))].join(" ")} Icon"
    >${icon.contents}</svg>
  );
});
`;

fs.mkdirSync('./src/components/icons/', { recursive: true });

Object.keys(feather.icons).map(name => {
  fs.writeFileSync(`./src/components/icons/${name}-icon.tsx`, iconTemplate(feather.icons[name]), "utf-8")
});
