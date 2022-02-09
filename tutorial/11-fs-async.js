const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", function (err, results) {
  if (err) {
    console.log(err);
    return null;
  }
  const first = results;
  readFile("./content/second.txt", "utf-8", function (err, res) {
    if (err) {
      console.log(err);
      return null;
    }
    const second = res;
    writeFile(
      "./content/results-sync.txt",
      `Here is the results: ${first}, ${second}`,
      function (err, results) {
        if (err) {
          console.log(err);
          return null;
        }
      }
    );
  });
});
