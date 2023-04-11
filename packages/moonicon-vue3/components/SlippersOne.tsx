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

const SlippersOne = defineComponent({
  name: 'SlippersOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SlippersOne">
          <path d="M3.5932 13.7078H20.4033V16.3774H3.5932V13.7078Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.8005 6.63599C10.3474 8.40393 10.3473 11.9398 10.3474 13.7078H18.6512V9.95088C18.6512 9.95088 13.6568 7.51996 11.8005 6.63599Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { SlippersOne }
