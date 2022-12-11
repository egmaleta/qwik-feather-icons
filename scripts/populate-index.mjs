import { createWriteStream } from 'fs';
import { icons } from 'feather-icons';

const capitalize = (name) => {
  const first = name.at(0);
  return first != undefined ? name.replace(first, first.toUpperCase()) : name;
};
const kebabToPascal = kebabName => kebabName.split("-").map(s => capitalize(s)).join("");

const indexFileLineTemplate = name =>
`export { default as ${kebabToPascal(name)}Icon } from "./components/icons/${name}-icon";
`;

const stream = createWriteStream("./src/index.ts", "utf-8");
Object.keys(icons).map(name => {
  stream.write(indexFileLineTemplate(name));
});
stream.write(`export { default as Icon } from "./components/icon";\n`);

stream.write(`export { type IconProps, IconContext } from "./lib/icon-props";\n`);

stream.close();
