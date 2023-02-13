<template>
    <div>
        <h1> {{ task.text }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'TaskComponent',
        props: {
            task: {
                type: Object
            }
        }
    }
</script>