<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'JRow',
    }
</script>
<style scoped lang="scss">
    .row{
        display: flex;
        flex-wrap: wrap;
    }
</style>