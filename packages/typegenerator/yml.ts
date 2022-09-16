import fs from "fs/promises";
import YAML from "yaml";

/**
 *
 * @param filePath a string of the full filepath to th eyaml schema
 * @returns the parsed yaml file
 */
export async function parseYmlFile(filePath: string): Promise<any> {
  //Read the file
  const file = await fs.readFile(filePath, "utf-8");
  //parse the file
  return YAML.parse(file);
}
