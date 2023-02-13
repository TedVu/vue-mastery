<template>
    <div     :class="[task.reminder ? 'reminder' : '', 'task']">
        <h1> {{ task.text }}</h1>
        <ButtonComponent color="red" text="Delete Task"/>
    </div>
</template>

<script>

import ButtonComponent from './Button.vue';

    export default {
        name: 'TaskComponent',
        props: {
            task: {
                type: Object
            }
        },
        components:{
          ButtonComponent
        }
    }
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>