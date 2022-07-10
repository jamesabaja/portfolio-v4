const getPeoplePages = () => [
  {
    module: "james",
    path: `james`,
    componentPath: `./src/components/People/index.js`,
    context: {
      seoTitle: "Hi, James!",
      password: "FortunaMajor!",
      name: "James",
      content: `<div class="is-size-5">Never change.</div>`,
    },
  },
  {
    module: "eddy",
    path: `eddy`,
    componentPath: `./src/components/People/CustomPeople/Eddy.js`,
    context: {
      seoTitle: "-",
      password: "wildflour",
      name: "Eddy",
      content: ``,
    },
  },
]

module.exports = { getPeoplePages }
