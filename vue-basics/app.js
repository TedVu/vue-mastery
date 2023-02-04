const app = Vue.createApp({
  data() {
    // always return an object
    // now the the data can be used in html where vue controls
    return {
      courseGoal: "Master Vue",
    };
  },
});

app.mount("#user-goal");
