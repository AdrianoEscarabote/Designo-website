<template>
  <section>
    <ul>
      <li>
        <img src="../assets/home/desktop/illustration-passionate.svg" alt="" />
        <h3>passionate</h3>
        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
      </li>
      <li>
        <img src="../assets/home/desktop/illustration-resourceful.svg" alt="" />
        <h3>resourceful</h3>
        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
      </li>
      <li>
        <img src="../assets/home/desktop/illustration-friendly.svg" alt="" />
        <h3>friendly</h3>
        <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  padding: 10rem 10.3125rem 10rem 10.3125rem;
  color: #333136;
}

ul {
  width: 100%;
  max-width: 69.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li {
  max-width: 21.875rem;
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
  align-items: center;
  text-align: center;
  position: relative;
}

li::before {
  content: "";
  position: absolute;
  width: 12.625rem;
  height: 12.625rem;
  background: url("../assets/shared/desktop/bg-pattern-small-circle.svg");
}

h3 {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.625rem;
  text-transform: uppercase;
  letter-spacing: 0.3125rem;
}

p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
}
@media (max-width: 86.875rem) {
  section {
    padding: 10rem 1.25rem 10rem 1.25rem;
  }
  ul {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.625rem;
  }
}

</style>