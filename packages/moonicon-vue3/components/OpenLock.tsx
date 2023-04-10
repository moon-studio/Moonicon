import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'

const props = {
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  },
  // stroke color
  stroke: {
    type: String as PropType<string>,
    default: '#333'
  },
  // recommended value 1.2
  strokeWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 1.2
  }
}

const OpenLock = defineComponent({
  name: 'OpenLock',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="OpenLock">
          <path d="M13.2143 10.7692V7.69231C13.2143 5.6531 14.8452 4 16.8571 4C18.869 4 20.5 5.6531 20.5 7.69231V10.7692M5.32143 20H13.8214C14.8274 20 15.6429 19.1734 15.6429 18.1538V12.6154C15.6429 11.5958 14.8274 10.7692 13.8214 10.7692H5.32143C4.31548 10.7692 3.5 11.5958 3.5 12.6154V18.1538C3.5 19.1734 4.31548 20 5.32143 20Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { OpenLock }
