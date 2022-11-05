const fs = require('fs');
const feather = require('feather-icons');

const capitalize = (name) => {
  const first = name.at(0);
  return first != undefined ? name.replace(first, first.toUpperCase()) : name;
};
const kebabToPascal = kebabName => kebabName.split("-").map(s => capitalize(s)).join("");

const indexFileLineTemplate = name =>
`export { default as ${kebabToPascal(name)}Icon } from "./components/icons/${name}-icon";
`;

const stream = fs.createWriteStream("./src/index.ts", "utf-8");
Object.keys(feather.icons).map(name => {
  stream.write(indexFileLineTemplate(name));
});
stream.write(`export { default as Icon } from "./components/icon";\n`);
stream.close();
