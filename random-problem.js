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
  const notSolved = []
  for (let problem = 1; problem <= N; problem++) {
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
  const problem = randomProblem.split("/")[0];
  const language = randomProblem.split("/")[1];
  return { problem, language };
}

(async () => {
  const notSolved = await getNotSolved();
  const randomProblem = getRandomProblem(notSolved);
  console.log(randomProblem);
})();


