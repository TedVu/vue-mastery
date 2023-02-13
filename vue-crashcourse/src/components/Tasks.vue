<template>
    <div>
        <div :key="task.id" v-for="task in tasks">
            <TaskComponent @delete-task="$emit('delete-task', task.id)" :task="task"/>
        </div>
    </div>
</template>

<script>
import TaskComponent from './Task.vue';

    export default {
        name: 'TasksComponent',
        props: {
            tasks: {
                type: Array
            }
        },
        components: {
            TaskComponent
        },
        emits: ['delete-task']

    }
</script>