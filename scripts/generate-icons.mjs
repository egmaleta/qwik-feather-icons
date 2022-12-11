import { mkdirSync, writeFileSync } from 'fs';
import { icons } from 'feather-icons';

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
      class={\`${icon.attrs.class} \${restProps.class ?? ''}\`}
    >${icon.contents}</svg>
  );
});
`;

mkdirSync('./src/components/icons/', {recursive: true});
Object.keys(icons).map(name => {
  writeFileSync(`./src/components/icons/${name}-icon.tsx`, iconTemplate(icons[name]), "utf-8")
});
