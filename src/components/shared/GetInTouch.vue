<template>
  <section>
    <div class="container">
      <div class="col1">
        <h3>Let’s talk about your project</h3>
        <p> Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </div>
      <div class="col2">
        <a href="/">Get in touch</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  color: white;
  background: linear-gradient(0deg, #1D1C1E 30%, rgba(255,255,255,1) 30%);
  padding: 0px 20px;
}
.col1 {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.container {
  padding: 72px 96px 72px 96px;
  margin: 0 auto;
  background-color: #E7806B;
  max-width: 1111px;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  border-radius: 15px;
}
h3 {
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  max-width: 278px;
} 
p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}
.col2 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
a {
  text-decoration: none;
  display: grid;
  place-content: center;
  width: 152px;
  height: 56px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: white;
}
@media (max-width: 670px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 42px;
    padding: 64px 25px 64px 25px;
  }
  .col1 {
    display: flex;
    align-items: center;
  }
  section {
    background: linear-gradient(0deg, #1D1C1E 50%, rgba(255,255,255,1) 50%);
  }
}

</style>