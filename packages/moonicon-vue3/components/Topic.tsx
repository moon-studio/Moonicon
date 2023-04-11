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

const Topic = defineComponent({
  name: 'Topic',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Topic">
          <path d="M4.29903 15.1898L4.85327 14.96L4.85326 14.96L4.29903 15.1898ZM5.07026 16.63L5.56885 16.2963L5.56885 16.2963L5.07026 16.63ZM4.50008 19.5001L3.9213 19.3419C3.86452 19.5497 3.9235 19.772 4.07582 19.9243C4.22813 20.0767 4.45042 20.1356 4.65821 20.0789L4.50008 19.5001ZM7.37012 18.9299L7.03629 19.4285L7.03637 19.4285L7.37012 18.9299ZM8.81033 19.7011L9.04016 19.1469L9.04013 19.1469L8.81033 19.7011ZM12.0001 20.9334C16.9338 20.9334 20.9334 16.9338 20.9334 12.0001H19.7334C19.7334 16.2711 16.2711 19.7334 12.0001 19.7334V20.9334ZM20.9334 12.0001C20.9334 7.06634 16.9338 3.06675 12.0001 3.06675V4.26675C16.2711 4.26675 19.7334 7.72908 19.7334 12.0001H20.9334ZM12.0001 3.06675C7.06634 3.06675 3.06675 7.06634 3.06675 12.0001H4.26675C4.26675 7.72908 7.72908 4.26675 12.0001 4.26675V3.06675ZM3.06675 12.0001C3.06675 13.2102 3.30769 14.3656 3.74479 15.4197L4.85326 14.96C4.47553 14.0491 4.26675 13.0497 4.26675 12.0001H3.06675ZM3.74479 15.4197C3.97039 15.9637 4.24812 16.4805 4.57167 16.9638L5.56885 16.2963C5.28868 15.8777 5.04837 15.4305 4.85327 14.96L3.74479 15.4197ZM4.57167 16.9638C4.52792 16.8985 4.511 16.8416 4.50479 16.8175C4.49787 16.7906 4.49661 16.7737 4.49654 16.7728C4.49649 16.7722 4.49778 16.7935 4.49353 16.8466C4.48517 16.951 4.46101 17.1135 4.4152 17.3441C4.32434 17.8015 4.1609 18.465 3.9213 19.3419L5.07887 19.6582C5.3207 18.7731 5.493 18.0773 5.5922 17.578C5.64141 17.3302 5.67587 17.1151 5.68969 16.9424C5.69653 16.8571 5.69981 16.7651 5.69265 16.6763C5.68726 16.6095 5.67061 16.4483 5.56885 16.2963L4.57167 16.9638ZM4.65821 20.0789C5.53516 19.8393 6.19869 19.6758 6.65603 19.585C6.88665 19.5391 7.04918 19.515 7.15352 19.5066C7.20663 19.5024 7.22795 19.5037 7.22733 19.5036C7.22644 19.5036 7.20955 19.5023 7.18266 19.4954C7.15855 19.4892 7.10164 19.4722 7.03629 19.4285L7.70396 18.4314C7.55195 18.3296 7.39067 18.3129 7.32392 18.3075C7.23513 18.3004 7.14312 18.3036 7.05772 18.3105C6.88506 18.3243 6.66993 18.3588 6.4222 18.408C5.92287 18.5072 5.22704 18.6795 4.34195 18.9213L4.65821 20.0789ZM7.03637 19.4285C7.51966 19.752 8.03644 20.0298 8.58053 20.2554L9.04013 19.1469C8.56964 18.9518 8.12242 18.7115 7.70388 18.4313L7.03637 19.4285ZM8.5805 20.2554C9.63458 20.6925 10.79 20.9334 12.0001 20.9334V19.7334C10.9505 19.7334 9.95108 19.5246 9.04016 19.1469L8.5805 20.2554Z" fill={$props.fill}/><path d="M8.91846 10.2583H15.9098" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M11.1027 8.55737L9.88867 15.4425" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M14.0195 8.55737L12.8054 15.4425" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M8.08521 13.6667H15.0766" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Topic }
