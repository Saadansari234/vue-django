import { createApp } from 'vue'
import { components } from './components'

document.querySelectorAll('[data-component]').forEach(el => {
  const componentName = el.dataset.component
  const props = el.dataset.props ? JSON.parse(el.dataset.props) : {}

  const component = components[componentName]
  if (component) {
    createApp(component, props).mount(el)
  } else {
    console.warn(`Component "${componentName}" not found.`)
  }
})