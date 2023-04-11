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

const Hoodie = defineComponent({
  name: 'Hoodie',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Hoodie">
          <path d="M17.4167 9.91663V18.4166M17.4167 18.4166V19.3333C17.4167 19.8856 16.969 20.3333 16.4167 20.3333H7.58335C7.03107 20.3333 6.58335 19.8856 6.58335 19.3333V18.4166M17.4167 18.4166H19.3334C19.8856 18.4166 20.3334 17.9689 20.3334 17.4166V7.41417C20.3334 7.14896 20.228 6.8946 20.0405 6.70707L18.3862 5.0528C18.2962 4.96284 18.1899 4.89088 18.073 4.84076L15.522 3.74748C15.3975 3.69413 15.2635 3.66663 15.1281 3.66663H8.87194C8.73652 3.66663 8.6025 3.69413 8.47803 3.74748L5.92703 4.84076C5.8101 4.89088 5.7038 4.96284 5.61384 5.0528L3.95958 6.70707C3.77204 6.8946 3.66669 7.14896 3.66669 7.41417V17.4166C3.66669 17.9689 4.1144 18.4166 4.66669 18.4166H6.58335M6.58335 18.4166V9.91663" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4999 4C14.4999 5.38071 13.3806 6 11.9999 6C10.6192 6 9.49994 5.38071 9.49994 4" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.9999 4.5C16.9999 5.88071 13.3806 8.5 11.9999 8.5C10.6192 8.5 6.99994 5.88071 6.99994 4.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.49994 8V12M14.4999 8V12" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Hoodie }
