<template>
    <button @click="onClick()" :style="{background: color}" class="btn"> {{ text }}</button>
</template>

<script>
    export default {
        name: 'ButtonComponent',
        props: {
            text :{
                type: String
            },
            color: {
                type: String
            }
        },
        methods: {
            onClick(){
                console.log('Add button clicked')
            }
        }
    }
</script>