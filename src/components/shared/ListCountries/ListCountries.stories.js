import ListCountries from "./ListCountries.vue"
import { RouterLink } from 'vue-router';

export default {
  title: "List Countries",
  components: { 
    ListCountries,
    RouterLink 
  }
}

const Template = () => ({
  components: {
    ListCountries,
    RouterLink
  },
  template: `
    <ListCountries />
  `
})

export const Primary = Template.bind({})