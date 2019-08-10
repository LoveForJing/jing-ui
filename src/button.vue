<template>
    <button class="j-button">按钮</button>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .j-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--border-bg);
        &:hover {
        border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>

