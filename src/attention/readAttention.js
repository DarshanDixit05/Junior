import { processFile } from './processFile.js';
import { processInterfaceSection } from './processInterfaceSection.js';
import { printFolderStructure } from './printFolderStructure.js';

export const readAttention = async (attentionArray = [], attentionRootDir = '.') => {
  try {
    const processedLines = await Promise.all(attentionArray.map(line => {
      const trimmedLine = line.trim();
      if (trimmedLine.endsWith(' iface')) {
        const filePath = trimmedLine.slice(0, -6).trim();
        return processInterfaceSection(attentionRootDir, filePath);
      } else if (trimmedLine.endsWith('/')) {
        return printFolderStructure(attentionRootDir, trimmedLine.slice(0, -1).trim());
      } else {
        return processFile(attentionRootDir, trimmedLine);
      }
    }));
    return processedLines;
  } catch (error) {
    console.warn(error);
    throw new Error("Error processing attention lines!");
  }
};
