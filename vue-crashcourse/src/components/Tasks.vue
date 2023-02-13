<template>
    <div>
        <div :key="task.id" v-for="task in tasks">
            <TaskComponent :task="task"/>
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
        }
    }
</script>