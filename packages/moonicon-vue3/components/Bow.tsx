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

const Bow = defineComponent({
  name: 'Bow',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Bow">
          <path d="M4.77538 7.31414C6.80012 7.7168 8.96679 9.18555 10.3822 10.9548C10.3822 15.3843 7.31733 16.4702 5.06089 16.7189C4.44514 16.7867 4.03969 16.1351 4.28889 15.5679C4.89272 14.1936 5.3822 12.7461 5.3822 11.7881C5.3822 10.7918 4.588 9.53068 4.05469 8.21584C3.85091 7.71347 4.24365 7.20843 4.77538 7.31414Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3223 7.31414C17.2976 7.7168 15.1309 9.18555 13.7155 10.9548C13.7155 15.3843 16.7804 16.4702 19.0368 16.7189C19.6526 16.7867 20.058 16.1351 19.8088 15.5679C19.205 14.1936 18.7155 12.7461 18.7155 11.7881C18.7155 10.7918 19.5097 9.53068 20.043 8.21584C20.2468 7.71347 19.8541 7.20843 19.3223 7.31414Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.7156 10.8715H10.3823V13.3715H13.7156V10.8715Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Bow }
