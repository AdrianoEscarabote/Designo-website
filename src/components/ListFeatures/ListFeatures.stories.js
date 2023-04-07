import ListFeatures from "./ListFeatures.vue"

export default {
  title: "List Features",
  components: {
    ListFeatures
  }
}

const Template = () => ({
  components: {
    ListFeatures
  },
  template: `
    <ListFeatures />
  `
})

export const Primary = Template.bind({})