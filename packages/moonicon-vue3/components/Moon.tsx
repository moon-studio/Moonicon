import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
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

const Moon = defineComponent({
  name: 'Moon',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Moon">
          <path d="M20.2499 12.7242C20.1057 14.2845 19.5201 15.7715 18.5617 17.0112C17.6032 18.2509 16.3115 19.192 14.8377 19.7243C13.3639 20.2567 11.7689 20.3583 10.2395 20.0173C8.71004 19.6762 7.30935 18.9067 6.20131 17.7986C5.09328 16.6906 4.32372 15.2899 3.98269 13.7605C3.64166 12.231 3.74326 10.6361 4.27561 9.16227C4.80796 7.68847 5.74903 6.39675 6.98872 5.43827C8.2284 4.47979 9.71542 3.8942 11.2758 3.75C10.3622 4.98591 9.92263 6.50866 10.0369 8.0413C10.1512 9.57393 10.8118 11.0146 11.8986 12.1014C12.9853 13.1881 14.426 13.8487 15.9586 13.963C17.4913 14.0773 19.014 13.6377 20.2499 12.7242Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Moon }
