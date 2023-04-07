import Footer from "./Footer.vue";
import { RouterLink } from "vue-router";

export default {
  title: "Footer",
  components: {
    Footer,
    RouterLink
  }
}

const Template = (args, {...argTypes}) => ({
  components: {
    Footer,
    RouterLink,
  },
  template: `
    <Footer />
  `
})

export const Primary = Template.bind({})

