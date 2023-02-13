<template>
    <button class="btn"> {{ text }}</button>
</template>

<script>
    export default {
        name: 'ButtonComponent',
        props: {
            text :{
                type: String
            }
        }
    }
</script>