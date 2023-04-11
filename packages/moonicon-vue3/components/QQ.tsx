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

const QQ = defineComponent({
  name: 'QQ',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="QQ">
          <path d="M19.0833 14.4051C18.7217 13.1835 18.3054 12.1558 17.6652 10.4753C17.7654 6.06089 16.0191 2.48999 11.9997 2.48999C7.93367 2.48999 6.22684 6.13224 6.33522 10.4753C5.69301 12.1579 5.27972 13.1782 4.91708 14.4051C4.14824 17.0079 4.39743 18.0846 4.58686 18.1091C4.99406 18.1613 6.17214 16.1506 6.17214 16.1506C6.17214 17.3157 6.74142 18.8343 7.97621 19.9302C7.37958 20.123 6.03842 20.6405 6.35751 21.2092C6.6148 21.6683 10.7933 21.5021 11.9987 21.3594C13.2041 21.5021 17.3825 21.6683 17.6398 21.2092C17.9589 20.6437 16.6157 20.123 16.0211 19.9302C17.2559 18.8322 17.8252 17.3125 17.8252 16.1506C17.8252 16.1506 19.0033 18.1613 19.4105 18.1091C19.603 18.0824 19.8521 17.0047 19.0833 14.4051Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { QQ }
