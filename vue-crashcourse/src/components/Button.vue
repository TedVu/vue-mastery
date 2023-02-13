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
            },
            buttonCode:{
                type: String
            }
        },
        methods: {
            onClick(){
                if(this.buttonCode === "ADD"){
                    // emit add event
                    this.$emit('add-task');
                } else if(this.buttonCode === "DELETE"){
                    // emit delete event
                    this.$emit('delete-task');
                }
            }
        }
    }
</script>