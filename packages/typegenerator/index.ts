import { parseYmlFile } from "./yml";

export async function generateTypes(
  notionSchemaYml: string,
  outputJsFile: string
) {
  const config = await parseYmlFile(notionSchemaYml);
  console.log(config);
}
