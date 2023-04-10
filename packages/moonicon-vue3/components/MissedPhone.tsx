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

const MissedPhone = defineComponent({
  name: 'MissedPhone',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MissedPhone">
          <path d="M19.9995 15.9791V18.3877C20.0004 18.6113 19.9545 18.8327 19.8648 19.0375C19.775 19.2424 19.6434 19.4263 19.4783 19.5775C19.3132 19.7286 19.1183 19.8437 18.906 19.9154C18.6938 19.987 18.4689 20.0136 18.2457 19.9935C15.7702 19.725 13.3923 18.8808 11.3031 17.5286C9.35937 16.2959 7.71141 14.6512 6.47627 12.7113C5.11669 10.6168 4.27059 8.23206 4.00653 5.75036C3.98643 5.52834 4.01286 5.30457 4.08416 5.0933C4.15546 4.88203 4.27005 4.6879 4.42065 4.52325C4.57124 4.35861 4.75454 4.22706 4.95886 4.13699C5.16319 4.04691 5.38407 4.00029 5.60744 4.00008H8.02086C8.41128 3.99624 8.78977 4.13422 9.0858 4.3883C9.38182 4.64237 9.57517 4.99521 9.62981 5.38103C9.73168 6.15185 9.92059 6.9087 10.1929 7.63713C10.3012 7.9245 10.3246 8.23682 10.2604 8.53707C10.1963 8.83732 10.0472 9.11292 9.83093 9.33121L8.80925 10.3509C9.95446 12.3609 11.6221 14.0252 13.6361 15.1682L14.6578 14.1485C14.8765 13.9326 15.1527 13.7839 15.4535 13.7198C15.7544 13.6558 16.0673 13.6792 16.3552 13.7872C17.0851 14.059 17.8435 14.2476 18.6158 14.3492C19.0066 14.4042 19.3635 14.6007 19.6186 14.9012C19.8737 15.2017 20.0093 15.5853 19.9995 15.9791Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5L17 7M19 9L17 7M17 7L19 5M17 7L15 9" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { MissedPhone }
