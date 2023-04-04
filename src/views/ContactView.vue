<script>
import Layout from '../components/Layout.vue';
import ListCountries from '../components/shared/ListCountries.vue';

export default {
  name: "Designo Contact",
  mounted() {
    document.title = "Designo - Contact"
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
            <form novalidate>
              <fieldset>
                <legend className="sr-only">Enter your information in all fields</legend>

                <label for="name">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </label>

                <label for="email">
                  <input type="email" name="email" id="email" placeholder="Email Address" />
                </label>

                <label for="phone">
                  <input type="tel" name="phone" id="phone" placeholder="Phone" />
                </label>

                <label for="message">
                  <input type="text" name="message" id="message" placeholder="Your Message" />
                </label>

                <button type="submit">submit</button>

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
  padding: 0px 165px;
}

.form {
  background: #E7816B url("../assets/contact/desktop/bg-pattern-hero-desktop.svg") no-repeat;
  border-radius: 15px;
  background-position: bottom left;
  color: #fff;
  max-width: 1110px;
  margin: 0 auto;
  height: 480px;
  padding: 0px 95px;
  display: flex;
  justify-content: space-between;
}

.col1 {
  max-width: 445px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
}

.col1 h1 {
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
}

.col1 p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.col2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 380px;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 380px;
}

fieldset {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: unset !important;
  gap: 24px;
}

input,
label {
  width: 100% !important;
}

input {
  outline: transparent;
  border: unset;
  background: transparent;
  border-bottom: 1px solid #FFFFFF;
  color: #fff;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.500);
}

input::-moz-placeholder {
  color: rgba(255, 255, 255, 0.500);
}

input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.500);
}

input#name,
input#email,
input#phone {
  height: 38px;
}

input#message {
  height: 102px;
}

button {
  align-self: flex-end;
  width: 152px;
  height: 56px;
  background: #FFFFFF;
  border-radius: 8px;
  border: transparent;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333136;
}

@media (max-width: 1140px) {
  .container {
    padding: 0px 20px;
  }
}
</style>