import Layout from "../Layout/Layout.vue"

export default {
  title: "Layout",
  components: { 
    Layout
  }
}

const Template = () => ({
  components: {
    Layout
  },
  data() {
    return {
      isOpen: false,
    }
  },
  template: `
    <Layout />
  `
})

export const Primary = Template.bind({})