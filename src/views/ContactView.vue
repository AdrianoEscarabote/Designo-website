<script>
import Layout from '../components/Layout.vue';
import ListCountries from '../components/shared/ListCountries.vue';

export default {
  name: "Designo Contact",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      name_error: false,
      email_error: "", 
      phone_error: "",
      message_error: false,
      formIsValid: false
    }
  },
  mounted() {
    document.title = "Designo - Contact"
  },
  methods: {
    handleChange(element) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /\s*(?:\+?(\d{1,3}))?[\W\D\s]^|()*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d[\W\D\s]*?\d)(?: *x(\d+))?\s*$/;

      const {name, value} = element

      switch(name) {
        case "name":
          if (!value) { 
            this.name_error = true
          } else if (!value.trim()) {
            this.name_error = true
          } else {
            this.name_error = false
          }
        break
        case "email":
          if (!value) {
            this.email_error = "Can’t be empty"
          } else if (!emailRegex.test(value)) {
            this.email_error = "Wrong format"
          } else {
            this.email_error = false
          }
        break
        case "phone":
          if (!value) {
            this.phone_error = "Can’t be empty"
          } else if (!phoneRegex.test(value)) {
            this.phone_error = "Wrong format"
          } else {
            this.phone_error = false
          }
        break
        case "message":
          if (!value) {
            this.message_error = "Can’t be empty"
          } else {
            this.message_error = ""
          }
        break
      }
      const isNameValid = (this.name.length > 1 && this.name.trim())
      const isEmailValid = emailRegex.test(this.email)
      const isPhoneValid = phoneRegex.test(this.phone)
      const isMessageValid = (this.message.length > 1 && this.message.trim())
      this.formIsValid = isNameValid && isMessageValid && isEmailValid && isPhoneValid 
    },
    cleanForm() {
      this.name = ""
      this.email = ""
      this.phone = ""
      this.message = ""
      this.formIsValid = false
    },
    handlePhoneChange(event) {
      this.phone = event.target.value.replace(/[^0-9\s\(\)\-\+]/g, '');
      this.handleChange(event.target)
    }
  },
  watch: {
    formIsValid(newVal) {
      this.formIsValid = newVal;
    }
  },
  components: {
    Layout,
    ListCountries,
  }
}
</script>

<template>
  <Layout>
    <main>
      <div class="container">
        <section class="form">
          <div class="col1">
            <h1>Contact Us</h1>
            <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
          </div>
          <div class="col2">
            <form @submit.prevent="submitForm">
              <fieldset>
                <legend className="sr-only">Enter your information in all fields</legend>

                <label for="name">
                  <input type="text" name="name" id="name" v-model="name" @input="handleChange($event.target)" placeholder="Name" />
                  <span v-if="name_error" v-bind:class="{ 'span_error' : name_error }">
                    Can’t be empty
                    <img src="../assets/contact/desktop/icon-error.svg" />
                  </span>
                </label>

                <label for="email">
                  <input type="email" name="email" id="email" @input="handleChange($event.target)" v-model="email" placeholder="Email Address" />

                  <span v-if="email_error" v-bind:class="{ 'span_error' : email_error }">
                    {{ email_error }}
                    <img src="../assets/contact/desktop/icon-error.svg" />
                  </span>
                </label>

                <label for="phone">
                  <input type="tel" name="phone" id="phone" @input="handlePhoneChange" v-model="phone" placeholder="Phone" />
                  <span v-if="phone_error" v-bind:class="{ 'span_error' : phone_error }" >
                    {{ phone_error }}
                    <img src="../assets/contact/desktop/icon-error.svg" />
                  </span>
                </label>

                <label for="message">
                  <textarea type="text" name="message" id="message" @input="handleChange($event.target)" v-model="message
                  " placeholder="Your Message"></textarea>
                </label>

                <button type="button" @click="cleanForm" :class="{ 'disabled': !formIsValid }">submit</button>

              </fieldset>
            </form>
          </div>
        </section>
      </div>
      <ListCountries />
    </main>

  </Layout>
</template>

<style scoped>
.container {
  padding: 0rem 10.3125rem;
}
.form {
  background: #E7816B url("../assets/contact/desktop/bg-pattern-hero-desktop.svg") no-repeat;
  border-radius: 0.9375rem;
  background-position: bottom left;
  color: #fff;
  max-width: 69.375rem;
  margin: 0 auto;
  height: 30rem;
  padding: 0rem 5.9375rem;
  display: flex;
  justify-content: space-between;
}
.col1 {
  max-width: 27.8125rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}
.col1 h1 {
  font-weight: 500;
  font-size: 3rem;
  line-height: 3rem;
}
.col1 p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
}
.col2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 23.75rem;
  width: 100%;
}
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 23.75rem;
}
fieldset {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: unset !important;
  gap: 1.5rem;
}
input,
label {
  position: relative;
  width: 100% !important;
}
input {
  outline: transparent;
  border: unset;
  background: transparent;
  border-bottom: 0.0625rem solid #FFFFFF;
  color: #fff;
}
input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.500);
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: rgba(255, 255, 255, 0.500);
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.500);
}
textarea {
  max-width: 380px;
  width: 100%;
  min-height: 102px;
  max-height: 120px;
  background: transparent;
  outline: transparent;
  border: transparent;
  color: #fff;
  border-bottom: 0.0625rem solid #FFFFFF;
}
label span {
  display: none;
}
input#name,
input#email,
input#phone {
  height: 2.375rem;
}
input#message {
  height: 6.375rem;
}
button {
  cursor: pointer;
  align-self: flex-end;
  width: 9.5rem;
  height: 3.5rem;
  background: #FFFFFF;
  border-radius: 0.5rem;
  border: transparent;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  text-align: center;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  color: #333136;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.span_error {
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
  display: flex !important;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff8a;
}
@media (max-width: 71.25rem) {
  .container {
    padding: 0rem 1.25rem;
  }
}
@media (max-width: 50rem) {
  .form {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 2.5rem;
    padding: 4.375rem 2.5rem;
  }
  form,
  fieldset,
  .col2 {
    max-width: 27.8125rem; 
  }
}
@media (max-width: 23.4375rem) {
  .container {
    padding: 0rem;  
  }
  .form {
    border-radius: 0rem !important;
  }
  .col1 {
    text-align: center;
  }
  h1 {
    font-size: 2rem !important;
    line-height: 2.25rem !important;
  }
  button {
    align-self: center;
  }
}
</style>