import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('j-button', Button)
Vue.component('j-icon', Icon)
Vue.component('j-button-group', ButtonGroup)
Vue.component('j-input', Input)
Vue.component('j-row', Row)
Vue.component('j-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: '',
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    }).$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount(div)
    let svg = button.$el.querySelector('svg')
    expect(window.getComputedStyle(svg).order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    }).$mount(div)
    let svg = button.$el.querySelector('svg')
    expect(window.getComputedStyle(svg).order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount()
    let spy = chai.spy(function(){})
    button.$on('click', spy)
    button.$el.click()
    expect(spy).to.have.been.called()
    button.$destroy()
}