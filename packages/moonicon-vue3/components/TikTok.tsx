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

const TikTok = defineComponent({
  name: 'TikTok',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="TikTok">
          <path d="M12.4034 3.0153C13.408 3 14.4062 3.0072 15.4034 3C15.4651 4.1475 15.8868 5.3175 16.746 6.1275C17.6051 6.96 18.8178 7.3425 19.9992 7.4703V10.4925C18.8942 10.4547 17.7819 10.2297 16.7763 9.7653C16.339 9.57 15.932 9.3225 15.5332 9.0678C15.5259 11.2575 15.5406 13.4481 15.5176 15.6306C15.4559 16.6809 15.1032 17.7231 14.4817 18.5853C13.4762 20.0253 11.7349 20.9631 9.94669 20.9928C8.84909 21.0531 7.7524 20.7606 6.81594 20.2206C5.26621 19.3278 4.17597 17.6934 4.01483 15.9384C3.99918 15.5631 3.99181 15.1887 4.00746 14.8206C4.14559 13.3959 4.86658 12.0306 5.98721 11.1009C7.26069 10.0209 9.04153 9.5034 10.7064 9.8112C10.722 10.9209 10.676 12.0315 10.676 13.1412C9.9163 12.9009 9.02588 12.9684 8.35829 13.4184C7.87487 13.7262 7.50654 14.1987 7.31502 14.7306C7.15387 15.1131 7.19991 15.5334 7.20728 15.9384C7.39144 17.1687 8.60415 18.2037 9.89328 18.0912C10.7524 18.084 11.5738 17.5962 12.0185 16.8834C12.164 16.6359 12.3251 16.3812 12.3334 16.0887C12.4099 14.7459 12.3795 13.4112 12.3868 12.0684C12.3951 9.0453 12.3804 6.0303 12.4034 3.0153Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { TikTok }
