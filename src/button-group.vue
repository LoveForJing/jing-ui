<template>
    <div class="j-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            for(let node of this.$el.children) {
                let nodeName = node.nodeName.toLowerCase()
                if (nodeName != 'button') {
                    console.warn(`j-button-group 的子元素应该全是 j-button，但是你写的是${nodeName}`);
                }
            }
        }
    }
</script>

<style lang="scss">
    .j-button-group {
        display: inline-flex;
        vertical-align: middle;
        .j-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>

