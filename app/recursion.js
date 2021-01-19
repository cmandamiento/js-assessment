exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const ALL_FILES = [];
    const DIRECTORIES = [];

    const getFiles = (obj) => {
      DIRECTORIES.push(obj.dir);

      obj.files.forEach((file) => {
        if (typeof file === 'string') {
          if (!dirName || DIRECTORIES.includes(dirName)) {
            ALL_FILES.push(file);
          }
        }

        if (typeof file === 'object') {
          getFiles(file);
        }
      });

      DIRECTORIES.pop();
    };
    getFiles(data);
    return ALL_FILES;
  },

  permute: function (arr) {},

  fibonacci: function (n) {},

  validParentheses: function (n) {},
};
