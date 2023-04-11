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

const TimedMessageThree = defineComponent({
  name: 'TimedMessageThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="TimedMessageThree">
          <path d="M20.25 14.75C20.25 15.2362 20.0568 15.7025 19.713 16.0464C19.3692 16.3902 18.9029 16.5833 18.4167 16.5833H7.83088C7.56566 16.5833 7.31131 16.6887 7.12377 16.8762L3.75 20.25V5.58333C3.75 5.0971 3.94315 4.63079 4.28697 4.28697C4.63079 3.94315 5.0971 3.75 5.58333 3.75H18.4167C18.9029 3.75 19.3692 3.94315 19.713 4.28697C20.0568 4.63079 20.25 5.0971 20.25 5.58333V14.75Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 10.3H11.3999C11.3999 10.6314 11.6686 10.9 11.9999 10.9V10.3ZM13.7426 10.9C14.074 10.9 14.3426 10.6314 14.3426 10.3C14.3426 9.96862 14.074 9.69999 13.7426 9.69999V10.9ZM12.5999 8.55734C12.5999 8.22597 12.3313 7.95734 11.9999 7.95734C11.6686 7.95734 11.3999 8.22597 11.3999 8.55734H12.5999ZM11.9999 7.4147C13.1985 7.4147 13.8897 7.90066 14.3013 8.47226C14.7348 9.07446 14.8852 9.81512 14.8852 10.3H16.0852C16.0852 9.62309 15.8871 8.6211 15.2751 7.7711C14.6411 6.8905 13.5896 6.2147 11.9999 6.2147V7.4147ZM14.8852 10.3C14.8852 11.4986 14.3993 12.1897 13.8277 12.6013C13.2255 13.0349 12.4848 13.1853 11.9999 13.1853V14.3853C12.6768 14.3853 13.6788 14.1871 14.5288 13.5751C15.4094 12.9411 16.0852 11.8897 16.0852 10.3H14.8852ZM11.9999 13.1853C10.8014 13.1853 10.1102 12.6993 9.69863 12.1277C9.26504 11.5255 9.11465 10.7849 9.11465 10.3H7.91465C7.91465 10.9769 8.11278 11.9789 8.72479 12.8289C9.35882 13.7095 10.4103 14.3853 11.9999 14.3853V13.1853ZM9.11465 10.3C9.11465 9.10142 9.60061 8.41023 10.1722 7.99868C10.7744 7.56509 11.5151 7.4147 11.9999 7.4147V6.2147C11.323 6.2147 10.3211 6.41283 9.47105 7.02483C8.59045 7.65887 7.91465 8.71032 7.91465 10.3H9.11465ZM11.9999 10.9H13.7426V9.69999H11.9999V10.9ZM12.5999 10.3V8.55734H11.3999V10.3H12.5999Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { TimedMessageThree }
