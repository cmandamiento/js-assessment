exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 10);
    });
  },

  manipulateRemoteData: function (url) {
    return fetch(url)
      .then((response) => response.json())
      .then(({ people }) => people.map((person) => person.name).sort());
  },
};
