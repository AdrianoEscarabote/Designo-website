import ListDesigns from "./ListDesigns.vue"

export default {
  title: "List Designs",
  components: {
    ListDesigns,
  }
}

const Template = () => ({
  components: {
    ListDesigns
  },
  template: `
    <ListDesigns />
  `
})

export const Primary = Template.bind({})