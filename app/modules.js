exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function (greeting, name) {
    return {
      greeting,
      name,
      sayIt: function () {
        return `${this.greeting}, ${this.name}`;
      },
    };
  },
};
