const { readdir } = require("fs/promises");
const { join } = require("path");

const ROOT_FOLDER = "./solutions";
const N = 100;
const LANGUAGES = [
  "go",
  "js",
  "py",
  "sh",
  "ts",
];

const listFilesAndFolders = async (folderPath) => {
  try {
    const items = await readdir(folderPath, { withFileTypes: true });
    return items.map(item => ({
      name: item.name,
      isFile: item.isFile(),
      isDirectory: item.isDirectory(),
    }));
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

const getSolved = async () => {
  const folders = await listFilesAndFolders(ROOT_FOLDER);
  const files = [];
  for (const folder of folders) {
    if (folder.isDirectory) {
      const folderFiles = await listFilesAndFolders(join(ROOT_FOLDER, folder.name));
      files.push(...folderFiles.map(file => join(folder.name, file.name.split('.')[1])));
    }
  }
  return files;
}

const getNotSolved = async () => {
  const solved = await getSolved();
  const notSolved = [];
  const args = process.argv.slice(2); // Remove first two default entries
  let n = N;
  if (args.length > 0) {
    n = parseInt(args[0]);
  }
  for (let problem = 1; problem <= n; problem++) {
    for (const language of LANGUAGES) {
      if (!solved.includes(`${problem}/${language}`)) {
        notSolved.push(`${problem}/${language}`);
      }
    }
  }
  return notSolved;
}

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const getRandomProblem = (notSolved) => {
  const randomProblem = getRandomElement(notSolved);
  if (!randomProblem) {
    console.log("All problems are solved");
    process.exit(0);
  }
  const problem = randomProblem.split("/")[0];
  const language = randomProblem.split("/")[1];
  return { problem, language };
}

(async () => {
  const notSolved = await getNotSolved();
  const randomProblem = getRandomProblem(notSolved);
  console.log(randomProblem);
})();


