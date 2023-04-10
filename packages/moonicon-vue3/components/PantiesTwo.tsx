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

const PantiesTwo = defineComponent({
  name: 'PantiesTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PantiesTwo">
          <path d="M4.12051 9.3813C6.65578 10.2649 10.225 12.2729 10.8469 15.505C10.9513 16.0473 11.3888 16.5 11.9411 16.5H12.0588C12.611 16.5 13.0488 16.0457 13.184 15.5102C13.8788 12.7587 17.3243 10.5248 19.9922 9.42026C20.5296 9.19778 20.8094 8.58557 20.5858 8.04864L20.4294 7.67279C20.1806 7.07521 19.4118 6.83221 18.8053 7.05849C17.5138 7.54035 15.2698 8.04906 11.9999 8.04906C9.0178 8.04906 6.48932 7.44051 5.02291 6.93757C4.48706 6.75379 3.8744 6.9905 3.65238 7.51168L3.45893 7.9658C3.21799 8.53141 3.53997 9.17897 4.12051 9.3813Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>

        </g>
      </defs>
    )
  }
})

export { PantiesTwo }
