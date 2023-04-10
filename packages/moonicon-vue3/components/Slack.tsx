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

const Slack = defineComponent({
  name: 'Slack',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Slack">
          <path d="M9.375 12.531C8.219 12.531 7.281 13.469 7.281 14.625V19.875C7.281 21.031 8.218 21.969 9.375 21.969C10.532 21.969 11.469 21.032 11.469 19.875V14.656C11.469 13.469 10.531 12.531 9.375 12.531ZM2 14.656C2 15.812 2.937 16.75 4.094 16.75C5.251 16.75 6.188 15.813 6.188 14.656V12.562H4.125C2.969 12.531 2 13.469 2 14.656ZM9.375 2C8.219 2 7.281 2.937 7.281 4.094C7.281 5.251 8.218 6.188 9.375 6.188H11.469V4.094C11.469 2.938 10.531 2 9.375 2ZM4.094 11.469H9.344C10.5 11.469 11.438 10.532 11.438 9.375C11.438 8.218 10.5 7.281 9.344 7.281H4.094C2.937 7.281 2 8.219 2 9.375C2 10.531 2.937 11.469 4.094 11.469ZM19.875 7.281C18.719 7.281 17.781 8.219 17.781 9.375V11.469H19.875C21.031 11.469 21.969 10.532 21.969 9.375C21.969 8.218 21.031 7.281 19.875 7.281ZM12.531 4.094V9.375C12.532 10.531 13.469 11.468 14.626 11.468C15.782 11.467 16.718 10.531 16.719 9.375V4.094C16.719 2.937 15.781 2 14.625 2C13.469 2 12.531 2.937 12.531 4.094ZM16.719 19.906C16.719 18.75 15.781 17.812 14.625 17.812H12.531V19.906C12.531 21.062 13.468 22 14.625 22C15.782 22 16.719 21.063 16.719 19.906ZM19.906 12.531H14.625C13.469 12.532 12.532 13.469 12.532 14.626C12.533 15.782 13.469 16.718 14.625 16.719H19.875C21.031 16.719 21.969 15.781 21.969 14.625C22 13.469 21.062 12.531 19.906 12.531Z" fill={$props.fill}/>

        </g>
      </defs>
    )
  }
})

export { Slack }
