const app = Vue.createApp({
  data() {
    // always return an object
    // now the the data can be used in html where vue controls
    // this concept is called data interpolation
    return {
      courseGoalA: "Master Vue",
      courseGoalB: "<h1>Learn Vue</h1>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    printGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
