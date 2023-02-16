<template>
  <form>
    <label for="name">Task name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="day">Date:</label><br>
    <input type="text" id="day" name="day">
    <ButtonComponent color="blue" text="Save Task" buttonCode="SAVE"  />

</form>
</template>


<script>

import ButtonComponent from './Button.vue';

    export default {
        name: "AddTaskComponent",
        components: {
            ButtonComponent
        }
    }
</script>
