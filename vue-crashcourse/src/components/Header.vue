<template>
    <header>
        <h1> {{title}}</h1>
        <ButtonComponent @add-task="$emit('add-task')" color="green" text="Add Task" buttonCode="ADD"/>
    </header>
</template>

<script>
import ButtonComponent from './Button.vue';
    export default {
        name: 'HeaderComponent',
        props: {
            title: {
                type:String,
                default: 'Hello world'
            },
        },
        components: {
            ButtonComponent
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>