<template>
    <header>
        <h1> {{title}}</h1>
        <ButtonComponent color="green" text="Add Task" :buttonCode="addButtonCode"/>
    </header>
</template>

<script>
import ButtonCode from './ButtonCode';
import ButtonComponent from './Button.vue';
    export default {
        name: 'HeaderComponent',
        props: {
            title: {
                type:String,
                default: 'Hello world'
            },
            addButtonCode: ButtonCode.ADD

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