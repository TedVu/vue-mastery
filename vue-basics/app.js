const app = Vue.createApp({
  data() {
    // always return an object
    // now the the data can be used in html where vue controls
    // this concept is called data interpolation
    return {
      courseGoal: "Master Vue",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    printGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
  },
});

app.mount("#user-goal");
