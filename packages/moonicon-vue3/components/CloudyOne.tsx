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

const CloudyOne = defineComponent({
  name: 'CloudyOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CloudyOne">
          <path d="M3.60004 14.4607C3.60004 16.312 4.85803 17.822 6.43521 17.9002C6.43605 17.9003 6.43673 17.901 6.43673 17.9018C6.43673 17.9027 6.43744 17.9034 6.43832 17.9034L10.7976 17.8998L14.7332 17.9034C14.7343 17.9034 14.7351 17.9026 14.7351 17.9015C14.7351 17.9006 14.7359 17.8997 14.7369 17.8997C16.08 17.8218 17.1484 16.5321 17.1484 14.9526C17.1484 13.3228 16.0111 12.0017 14.6081 12.0017C14.5949 12.0018 14.5839 11.9917 14.5826 11.9786C14.363 9.77661 12.7521 8.06723 10.7976 8.06723C9.30852 8.06723 8.01892 9.05943 7.39206 10.5057C7.2535 10.8254 6.91217 11.0181 6.56374 11.0181C4.92693 11.0181 3.60004 12.5594 3.60004 14.4607Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M18.786 15.7552C19.7523 15.3367 20.4407 14.2532 20.4407 12.9853C20.4407 11.3556 19.3034 10.0345 17.9004 10.0345V10.0345C17.8873 10.0345 17.8762 10.0245 17.8749 10.0114C17.6553 7.80939 16.0445 6.10001 14.0899 6.10001C13.4468 6.10001 12.8409 6.28508 12.3095 6.61189" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { CloudyOne }
