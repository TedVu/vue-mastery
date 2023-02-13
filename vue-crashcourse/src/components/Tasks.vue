<template>
    <div>
        <div :key="task.id" v-for="task in tasks">
            <h3>{{ task.text }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TaskComponent',
        props: {
            tasks: {
                type: Array
            }
        }
    }
</script>