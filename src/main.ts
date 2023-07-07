import { createApp } from 'vue'
import { Slider } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import '@/assets/style/common.less'
import router from '@/router/index.js'
import Api from '@/api/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import '@/assets/style/element.less'
import { createPinia } from 'pinia'
import '@/assets/iconfont/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(Slider)
app.provide('$api', Api)
// 拖拽指令
app.directive('drag', {
  mounted(el, binding) {
    const addV = (v1, v2) => {
      const x = v1[0] + v2[0]
      const y = v1[1] + v2[1]
      return [x, y]
    }
    const minusV = (v1, v2) => {
      const x = v2[0] - v1[0]
      const y = v2[1] - v1[1]
      return [x, y]
    }
    const formatV = (v, range) => {
      // 限制拖拽范围 如果他们脑子抽非要限制住就解除下面的注释 默认是能拽出去
      let x = v[0]
      let y = v[1]
      x = Math.max(x, range[2])
      x = Math.min(x, range[3])
      y = Math.max(y, range[0])
      y = Math.min(y, range[1])
      return [x, y]
      // return v
    }
    const setTranslatePosition = (transform, v) => {
      return `translate(${v[0]}px, ${v[1]}px)`
    }
    const getPosition = e => {
      if (e instanceof MouseEvent) {
        return [e.pageX, e.pageY]
      }
      const touch = e.touches[0]
      return [touch.pageX, touch.pageY]
    }
    const enableDrag = element => {
      let { outerElement, innerElement } = {}
      let startTransform = window.getComputedStyle(element).transform
      let startPosition = null
      let endPosition = null
      let draggingMoveVectorRange = null
      let draggedMoveVector = [0, 0]
      let draggingMoveVector = [0, 0]
      outerElement = document.body
      innerElement = element
      const onMouseDown = e => {
        e.stopPropagation()
        startPosition = getPosition(e)
        if (outerElement && element) {
          const outerElementRect = outerElement.getBoundingClientRect()
          const elementRect = element.getBoundingClientRect()
          draggingMoveVectorRange = [
            outerElementRect.top - elementRect.top,
            outerElementRect.bottom - elementRect.bottom,
            outerElementRect.left - elementRect.left,
            outerElementRect.right - elementRect.right,
          ]
        }
      }
      const onMouseMove = e => {
        if (startPosition && draggingMoveVectorRange) {
          endPosition = getPosition(e)
          const currentMoveVector = formatV(minusV(startPosition, endPosition), draggingMoveVectorRange)
          draggingMoveVector = addV(draggedMoveVector, currentMoveVector)
          element.style.transform = setTranslatePosition(startTransform, draggingMoveVector)
        }
      }
      const onMouseUp = e => {
        if (startPosition && draggingMoveVectorRange) {
          draggedMoveVector = draggingMoveVector
        }
        startPosition = null
      }
      const addEventListener = () => {
        if (innerElement) {
          innerElement.addEventListener('mousedown', onMouseDown)
          document.addEventListener('mousemove', onMouseMove)
          document.addEventListener('mouseup', onMouseUp)
        }
      }
      const removeEventListener = () => {
        if (innerElement) {
          innerElement.removeEventListener('mousedown', onMouseDown)
          document.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
        }
      }
      addEventListener()
      return removeEventListener
    }
    enableDrag(el)
  },
  unmounted(el, binding, vnode, prevVnode) {
    // el.removeEventListener("mousedown", onMousedown);
  },
})

app.mount('#app')
