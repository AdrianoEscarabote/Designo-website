import GetInTouch from "./GetInTouch.vue"

export default {
  title: "GetInTouch",
  components: GetInTouch
}

const Template = () => ({
  components: { GetInTouch },
  template: `
    <GetInTouch />
  `
})

export const Primary = Template.bind({})