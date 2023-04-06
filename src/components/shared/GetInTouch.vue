<template>
  <section>
    <div className="container">
      <div className="col1">
        <h3>Let’s talk about your project</h3>
        <p> Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </div>
      <div className="col2">
        <RouterLink to="/contact">Get in touch</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  color: white;
  background: linear-gradient(0deg, #1D1C1E 30%, transparent 30%);
  padding: 0rem 1.25rem;
}
.col1 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.container {
  padding: 4.5rem 6rem 4.5rem 6rem;
  margin: 0 auto;
  max-width: 69.4375rem;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  border-radius: 0.9375rem;
  background: #E7806B url("../../assets/shared/desktop/bg-pattern-call-to-action.svg") no-repeat;
  background-position: right 50%;
  background-size: auto 200%;
}
h3 {
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 2.5rem;
  max-width: 17.375rem;
} 
p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
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
  width: 9.5rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  background-color: white;
  color: #333136;
}
a:hover {
  transition: 0.4s ease-in-out;
  color: #FFFFFF;
  background: #FFAD9B;
}
@media (max-width: 41.875rem) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.625rem;
    padding: 4rem 1.5625rem 4rem 1.5625rem;
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