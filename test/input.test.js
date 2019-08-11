const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'


Vue.config.productionTip = false
Vue.config.devtools = false


describe('Input', () => {
     it('存在.', () => {
         expect(Input).to.be.ok
     })
     describe('props', () => {
        it('可以设置value.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
               propsData: {
                   value: '12345'
               }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('12345')
            vm.$destroy()
        })
        it('可以设置disabled.', () => {
           const Constructor = Vue.extend(Input)
           const vm = new Constructor({
              propsData: {
               disabled: true
              }
           }).$mount()
           const inputElement = vm.$el.querySelector('input')
           expect(inputElement.disabled).to.equal(true)
           vm.$destroy()
       })
       it('可以设置error.', () => {
           const Constructor = Vue.extend(Input)
           const vm = new Constructor({
              propsData: {
               error: '姓名不能少于两个字'
              }
           }).$mount()
           const spanElement = vm.$el.querySelector('span')
           expect(spanElement.innerText).to.equal('姓名不能少于两个字')
           vm.$destroy()
       })
     })
     describe('事件', () => {
         it('支持 change 事件', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('change', callback)
            let event = new Event('change')
            Object.defineProperty(event, 'target', {
                value: {value: 'hi'},
                enumerable: true
            })
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hi')
            vm.$destroy()
         })
         it('支持 input 事件', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('input', callback)
            let event = new Event('input')
            Object.defineProperty(event, 'target', {
                value: {value: 'hi'},
                enumerable: true
            })
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hi')
            vm.$destroy()
         })
         it('支持 focus 事件', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('focus', callback)
            let event = new Event('focus')
            Object.defineProperty(event, 'target', {
                value: {value: 'hi'},
                enumerable: true
            })
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hi')
            vm.$destroy()
         })
         it('支持 blur 事件', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('blur', callback)
            let event = new Event('blur')
            Object.defineProperty(event, 'target', {
                value: {value: 'hi'},
                enumerable: true
            })
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hi')
            vm.$destroy()
         })
     })
})