<template>
    <div class="col" :class="colClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'JCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        },
        computed: {
            colClass() {
                const { span, offset } = this
                return [span && `col-${span}`, offset && `offset-${offset}`]
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        height: 50px;
        background: gray;
        width: 50%;
        border: 1px solid red;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>