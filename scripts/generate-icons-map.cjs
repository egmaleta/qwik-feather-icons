const fs = require('fs');
const feather = require('feather-icons');

const lineTemplate = icon =>
`  "${icon.name}": \`${icon.contents}\`,\n`;

const stream = fs.createWriteStream("./src/lib/icons-content.ts", "utf-8");
stream.write("// THIS FILE WAS GENERATED\n");
stream.write("export const IconContentMap: {[iconName: string]: string} = {\n");
Object.keys(feather.icons).map(name => {
  stream.write(lineTemplate(feather.icons[name]));
});
stream.write("};\n");
