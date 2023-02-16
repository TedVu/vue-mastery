<template>
    <div     :class="[task.reminder ? 'reminder' : '', 'task']">
        <h1> {{ task.text }}</h1>
        <h2> {{ task.day }}</h2>
        <ButtonComponent @delete-task="$emit('delete-task', task.id)" color="red" text="Delete Task" buttonCode="DELETE" />
    </div>
</template>

<script>


import ButtonComponent from './Button.vue';

    export default {
        name: 'TaskComponent',
        props: {
            task: {
                type: Object
            },        },
        components:{    
          ButtonComponent
        },
        emits: ['delete-task']
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