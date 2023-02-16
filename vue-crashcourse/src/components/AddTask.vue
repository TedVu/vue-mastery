<template>
    <div>
        <label for="name">Task name:</label><br>
        <input type="text" id="name" v-model="taskName"><br>
        <label for="day">Date:</label><br>
        <input type="text" id="day" v-model="taskDate">
        <ButtonComponent @save-task="$emit('save-task', taskName, taskDate)" color="blue" text="Save Task" buttonCode="SAVE"  />
    </div>
</template>


<script>

import ButtonComponent from './Button.vue';

    export default {
        name: "AddTaskComponent",
        components: {
            ButtonComponent
        },
        data(){
            return {
                taskName: '',
                taskDate: ''
            }
        }
    }
</script>
