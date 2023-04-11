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

const SuccessMessageThree = defineComponent({
  name: 'SuccessMessageThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SuccessMessageThree">
          <path d="M20.25 14.75C20.25 15.2362 20.0568 15.7025 19.713 16.0464C19.3692 16.3902 18.9029 16.5833 18.4167 16.5833H7.83088C7.56566 16.5833 7.31131 16.6887 7.12377 16.8762L3.75 20.25V5.58333C3.75 5.0971 3.94315 4.63079 4.28697 4.28697C4.63079 3.94315 5.0971 3.75 5.58333 3.75H18.4167C18.9029 3.75 19.3692 3.94315 19.713 4.28697C20.0568 4.63079 20.25 5.0971 20.25 5.58333V14.75Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.30005 10.5L10.5442 11.7442C10.9533 12.1532 11.623 12.1309 12.0039 11.6956L14.8 8.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { SuccessMessageThree }
