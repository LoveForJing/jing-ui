# jing-ui 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/LoveForJing/jing-ui.svg?branch=master)](https://travis-ci.org/LoveForJing/jing-ui)
## 介绍
这是我在学习 Vue 的过程中做的一个 UI 库，希望对你有用。
## 开始使用
1. 添加 css 样式

    使用前，请在 css 中开启 border-box

    ```css
    *,*::before,*::after {box-sizing: border-box;}
    ```
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```html
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
2. 安装 jing-ui
    ```npm
    npm i -S jing-ui
    ```
3. 引入 jing-ui
    ```vue
    import {Button} from 'jing-ui'
    import 'jing-ui/dist/index.css'

    export default {
        name: 'app',
        components: {
            'j-button': Button
        }
    }
    ```