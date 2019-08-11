<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"/>
        <span v-if="error" class="errorMessage">{{error}}</span>
    </div>
</template>

<script>
    export default {
       props: {
           value: {
               type: String
           },
           disabled: {
               type: Boolean,
               default: false
           },
           error: {
               type: String
           }
       }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: .5em;
        }
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                outline: none;
                box-shadow: inset 1px 3px $box-shadow-color;
            }
            &:disabled {
                cursor: not-allowed;
                border-color: #bbb;
                color: #888;
            }
        }
        &.error {
            > input {
                border-color: $red;
                &:focus {
                    outline: none;
                    box-shadow: inset 1px 3px $red;
                }
            }
            .errorMessage {
                color: $red;
            }
        }
    }
</style>

