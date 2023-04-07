<template>
  <section className="grid-items">
    <div className="col1">
      <RouterLink to="/web-design" aria-label="Designo - Web Design">
        <h2>web design</h2>
        <p>view projects <img src="../../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
      </RouterLink>
    </div>
    <div className="col2">
      <RouterLink to="/app-design" class="app" aria-label="Designo - App Design">
        <h2>app design</h2>
        <p>view projects <img src="../../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
      </RouterLink>
      <RouterLink to="/graphic-design" class="graphic" aria-label="Designo - Graphic Design">  
        <h2>graphic design</h2>
        <p>view projects <img src="../../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.grid-items {
  display: flex;
  width: 100%;
  gap: 1.875rem;
  height: 40rem;
  max-width: 69.375rem;
  margin: 10rem auto 0rem auto;
  color: #FFFFFF;
  text-align: center;
}
a {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  mix-blend-mode: normal;
  gap: 1rem;
  border-radius: 0.9375rem;
  color: #FFFFFF;
  text-decoration: none;
}
.grid-items .col1 {
  width: 50%;
  border-radius: 0.9375rem;
} 
.grid-items .col2 {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
}

.grid-items h2 {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3rem;
  letter-spacing: 0.125rem;
}
.grid-items p {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  letter-spacing: 0.3125rem;
  text-transform: uppercase;
}
.grid-items .col1 a {
  background: url("../../assets/home/desktop/image-web-design-large.jpg") no-repeat #00000099;
  background-blend-mode: overlay;
  transition: 0.2s ease-in-out;
}
.grid-items .app {
  background: url("../../assets/home/desktop/image-app-design.jpg") no-repeat #00000099;
  background-blend-mode: overlay;
  transition: 0.2s ease-in-out;
}
.grid-items .graphic {
  background: url("../../assets/home/desktop/image-graphic-design.jpg") no-repeat #00000099;
  background-blend-mode: overlay;
  transition: 0.2s ease-in-out;
}

.grid-items .app:hover,
.grid-items .graphic:hover,
.grid-items .col1 a:hover,
.grid-items .app:focus-visible,
.grid-items .graphic:focus-visible,
.grid-items .col1 a:focus-visible {
  background-color: #e7826b3b;
}
@media (max-width: 45rem) {
  .grid-items {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .grid-items .col1 {
    width: 100%;
    height: 12.5rem;
  }
  .grid-items .col2 {
    width: 100%;
    height: 26.875rem;
  }
  .grid-items .col1 {
    background: #00000099 no-repeat url("../../assets/home/tablet/image-web-design.jpg");
  }
  .grid-items .app {
    background: #00000099 no-repeat url("../../assets/home/tablet/image-app-design.jpg");
  }
  .grid-items .graphic {
    background: #00000099 no-repeat url("../../assets/home/tablet/image-graphic-design.jpg");
  }
}
@media (max-width: 26.25rem) {
  .grid-items a {
    border-radius: 0rem;
  }
}
@media (max-width: 22.5rem) {
  .grid-items .col1 {
    background: #00000099 no-repeat url("../../assets/home/mobile/image-web-design.jpg");
  }
  .grid-items .app {
    background: #00000099 no-repeat url("../../assets/home/mobile/image-app-design.jpg");
  }
  .grid-items .graphic {
    background: #00000099 no-repeat url("../../assets/home/mobile/image-graphic-design.jpg");
  }
}
</style>