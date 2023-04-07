import Header from "./Header.vue";
import { RouterLink } from "vue-router";

export default {
  title: 'Header',
  component: {
    Header,
    RouterLink
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      Header,
      RouterLink
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<Header :isOpen="isOpen" />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
};

export const openCart = {
  args: {
    isOpen: true,
  },
};

export const closedCart = {
  args: {
    isOpen: false,
  },
};