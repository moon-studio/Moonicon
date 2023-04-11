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

const Thunderstorm = defineComponent({
  name: 'Thunderstorm',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Thunderstorm">
          <path d="M7.34994 15.9V15.9C7.34994 15.8982 7.34848 15.8967 7.34664 15.8966C5.48477 15.8131 3.99994 14.2169 3.99994 12.26C3.99994 10.2497 5.56694 8.62 7.49994 8.62V8.62C7.91682 8.62 8.32059 8.39141 8.50747 8.01877C9.25816 6.52192 10.7643 5.5 12.4999 5.5C14.8072 5.5 16.7089 7.3059 16.9695 9.63273C16.9712 9.64823 16.9843 9.66007 16.9999 9.66V9.66C18.6568 9.66 19.9999 11.0569 19.9999 12.78C19.9999 14.4495 18.7391 15.8127 17.1538 15.896C17.1516 15.8961 17.1499 15.8979 17.1499 15.9V15.9" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M10.3903 13.3L8.39032 18.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M16.3105 13.3L14.3105 18.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M13.0311 13.3L12.1276 14.6L11.4429 15.5852C11.3507 15.7179 11.4459 15.8996 11.6075 15.8993L13.0722 15.8968C13.2378 15.8966 13.3319 16.0862 13.2317 16.2179L11.4953 18.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Thunderstorm }
