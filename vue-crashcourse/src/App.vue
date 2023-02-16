<template>
  <div class="container">
    <HeaderComponent title='Task tracker'/>
    <AddTaskComponent/>
    <TasksComponent @delete-task="handleDeleteTask" :tasks="tasks"/>
  </div>
</template> 

<script>

import HeaderComponent from "./components/Header.vue";
import TasksComponent from './components/Tasks.vue';
import AddTaskComponent from './components/AddTask.vue';

export default {
  name: 'App',
  // registering a component here
  components: {
    HeaderComponent,
    TasksComponent,
    AddTaskComponent
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    handleDeleteTask(id){
      if(confirm('Are you sure?')){
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
    }
  },
  created() {
    console.log('created called');
    this.tasks = [
      {
        id: 1,
        text:'Doctor appointment 1',
        day: 'March 1st at 2:30PM',
      },
      {
        id: 2,
        text:'Doctor appointment 2',
        day: 'March 1st at 2:30PM',
      },
      {
        id: 3,
        text:'Doctor appointment 3',
        day: 'March 1st at 2:30PM',
      },
      {
        id: 4,
        text:'Doctor appointment 4',
        day: 'March 1st at 2:30PM',
      }
    ]
  }
} 
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
