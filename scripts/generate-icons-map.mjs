import { createWriteStream } from 'fs';
import { icons } from 'feather-icons';

const lineTemplate = icon =>
`  "${icon.name}": \`${icon.contents}\`,\n`;

const stream = createWriteStream("./src/lib/icons-content.ts", "utf-8");
stream.write("// THIS FILE WAS GENERATED\n");
stream.write("export const IconContentMap: {[iconName: string]: string} = {\n");
Object.keys(icons).map(name => {
  stream.write(lineTemplate(icons[name]));
});
stream.write("};\n");
