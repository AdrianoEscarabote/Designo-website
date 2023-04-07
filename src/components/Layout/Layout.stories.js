import Header from "../Header/Header.vue"
import Footer from "../Footer/Footer.vue"

export default {
  title: "Layout",
  components: { 
    Header,
    Footer 
  }
}

const Template = () => ({
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isOpen: false,
    }
  },
  template: `
    <Layout>

    </Layout>
  `
})

export const Primary = Template.bind({})