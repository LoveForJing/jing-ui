<template>
    <button class="j-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <j-icon class="icon" :name="icon" v-if="icon && !loading"></j-icon>
        <j-icon class="loading icon" name="loading" v-if="loading"></j-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        components: {
            'j-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .j-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--border-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
        border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>

