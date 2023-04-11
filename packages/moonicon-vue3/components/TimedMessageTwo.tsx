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

const TimedMessageTwo = defineComponent({
  name: 'TimedMessageTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="TimedMessageTwo">
          <path d="M20.25 11.5417C20.2532 12.7516 19.9705 13.9451 19.425 15.025C18.7782 16.3191 17.7839 17.4076 16.5535 18.1685C15.3231 18.9295 13.9051 19.3328 12.4583 19.3334C11.2485 19.3365 10.0549 19.0538 8.975 18.5084L3.75 20.25L5.49167 15.025C4.94619 13.9451 4.66351 12.7516 4.66667 11.5417C4.66723 10.095 5.07056 8.67697 5.83149 7.44653C6.59242 6.21609 7.6809 5.2218 8.975 4.57503C10.0549 4.02955 11.2485 3.74687 12.4583 3.75003H12.9167C14.8273 3.85544 16.632 4.66189 17.985 6.01498C19.3381 7.36807 20.1446 9.17271 20.25 11.0834V11.5417Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 11.5H11.9C11.9 11.8314 12.1686 12.1 12.5 12.1V11.5ZM14.2502 12.1C14.5816 12.1 14.8502 11.8314 14.8502 11.5C14.8502 11.1686 14.5816 10.9 14.2502 10.9V12.1ZM13.1 9.74976C13.1 9.41839 12.8314 9.14976 12.5 9.14976C12.1686 9.14976 11.9 9.41839 11.9 9.74976H13.1ZM12.5 8.59951C13.7046 8.59951 14.3996 9.08801 14.8135 9.66278C15.2493 10.2681 15.4005 11.0126 15.4005 11.5H16.6005C16.6005 10.8206 16.4016 9.81478 15.7873 8.96161C15.151 8.07785 14.0957 7.39951 12.5 7.39951V8.59951ZM15.4005 11.5C15.4005 12.7046 14.912 13.3996 14.3372 13.8135C13.7319 14.2493 12.9874 14.4005 12.5 14.4005V15.6005C13.1794 15.6005 14.1852 15.4016 15.0384 14.7873C15.9222 14.151 16.6005 13.0957 16.6005 11.5H15.4005ZM12.5 14.4005C11.2954 14.4005 10.6004 13.912 10.1865 13.3372C9.75067 12.7319 9.59951 11.9874 9.59951 11.5H8.39951C8.39951 12.1794 8.5984 13.1852 9.21269 14.0384C9.849 14.9222 10.9043 15.6005 12.5 15.6005V14.4005ZM9.59951 11.5C9.59951 10.2954 10.088 9.60036 10.6628 9.18653C11.2681 8.75067 12.0126 8.59951 12.5 8.59951V7.39951C11.8206 7.39951 10.8148 7.5984 9.96161 8.21269C9.07785 8.849 8.39951 9.90425 8.39951 11.5H9.59951ZM12.5 12.1H14.2502V10.9H12.5V12.1ZM13.1 11.5V9.74976H11.9V11.5H13.1Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { TimedMessageTwo }
