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

const ShowFoloder = defineComponent({
  name: 'ShowFoloder',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ShowFoloder">
          <path d="M12.1001 16.1001C14.5854 16.1001 16.6001 13.1001 16.6001 13.1001C16.6001 13.1001 14.5854 10.1001 12.1001 10.1001C9.6148 10.1001 7.6001 13.1001 7.6001 13.1001C7.6001 13.1001 9.6148 16.1001 12.1001 16.1001Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/><path d="M12.1001 14.1001C12.6524 14.1001 13.1001 13.6524 13.1001 13.1001C13.1001 12.5478 12.6524 12.1001 12.1001 12.1001C11.5478 12.1001 11.1001 12.5478 11.1001 13.1001C11.1001 13.6524 11.5478 14.1001 12.1001 14.1001Z" fill={$props.fill}/><path d="M4.0835 5.33333C4.0835 4.8731 4.45659 4.5 4.91683 4.5H9.91683L12.0002 7H19.0835C19.5437 7 19.9168 7.37308 19.9168 7.83333V18.6667C19.9168 19.1269 19.5437 19.5 19.0835 19.5H4.91683C4.45659 19.5 4.0835 19.1269 4.0835 18.6667V5.33333Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ShowFoloder }
