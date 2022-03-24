const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async function () {
  try {
    const first = await readFile("./components/first.txt", "utf-8");
    const second = await readFile("./components/second.txt", "utf-8");
    await writeFile(
      "./components/result-sync.txt",
      `THIS IS AWESOME: ${first}, ${second}`
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// const getText = function (path) {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", function (err, data) {
//       if (!err) {
//         resolve(data);
//       } else {
//         reject(data);
//       }
//     });
//   });
// };
