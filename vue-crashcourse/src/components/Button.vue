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

                switch(this.buttonCode) {
                    case 'ADD':
                        this.$emit('add-task');
                        break;
                    case 'DELETE':
                        this.$emit('delete-task');
                        break;
                    case 'SAVE':
                        this.$emit('save-task');
                        break;
                }
            }
        }
    }
</script>