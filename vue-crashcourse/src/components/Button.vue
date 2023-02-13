<template>
    <button @click="onClick()" :style="{background: color}" class="btn"> {{ text }}</button>
</template>

<script>

import ButtonCode from './ButtonCode';
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
                type: ButtonCode
            }
        },
        methods: {
            onClick(){
                if(this.buttonCode === ButtonCode.ADD){
                    // emit add event
                } else if(this.buttonCode === ButtonCode.DELETE){
                    // emit delete event
                }
            }
        }
    }
</script>