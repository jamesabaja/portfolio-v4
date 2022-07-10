const getPeoplePages = () => [
  {
    module: "james",
    path: `james`,
    componentPath: `./src/components/People/index.js`,
    context: {
      seoTitle: "Hi, James!",
      password: "FortunaMajor!",
      name: "James",
      content: `<div class="is-size-6">Never change.</div>`,
    },
  },
]

module.exports = { getPeoplePages }
