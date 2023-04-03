<template>
  <section class="grid-items">
    <div class="col1">
      <RouterLink to="/web-design" aria-label="link to web design page">
        <h2>web design</h2>
        <p>view projects <img src="../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
      </RouterLink>
    </div>
    <div class="col2">
      <RouterLink to="/app-design" class="app" aria-label="link to app design">
        <h2>app design</h2>
        <p>view projects <img src="../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
      </RouterLink>
      <RouterLink to="/graphic-design" class="graphic" aria-label="link to graphic design">  
        <h2>graphic design</h2>
        <p>view projects <img src="../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>

.grid-items {
  display: flex;
  width: 100%;
  gap: 30px;
  height: 640px;
  max-width: 1110px;
  margin: 160px auto 0px auto;
  color: #FFFFFF;
  text-align: center;
}

.grid-items a {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  mix-blend-mode: normal;
  gap: 16px;
  border-radius: 15px;
  color: #FFFFFF;
  text-decoration: none;
}

.grid-items .col1 {
  width: 50%;
  border-radius: 15px;
} 

.grid-items .col2 {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.grid-items .col1 {
  background: url("../assets/home/desktop/image-web-design-large.jpg") no-repeat #000000;
}

.grid-items h2 {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 2px;
}

.grid-items p {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.grid-items .app {
  background: url("../assets/home/desktop/image-app-design.jpg") no-repeat #000000;
}

.grid-items .graphic {
  background: url("../assets/home/desktop/image-graphic-design.jpg") no-repeat #000000;
}

@media (max-width: 720px) {
  .grid-items {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .grid-items .col1 {
    width: 100%;
    height: 200px;
  }

  .grid-items .col2 {
    width: 100%;
    height: 430px;
  }

  .grid-items .col1 {
    background: #000000 no-repeat url("../assets/home/tablet/image-web-design.jpg");
  }

  .grid-items .app {
    background: #000000 no-repeat url("../assets/home/tablet/image-app-design.jpg");
  }

  .grid-items .graphic {
    background: #000000 no-repeat url("../assets/home/tablet/image-graphic-design.jpg");
  }
}

@media (max-width: 360px) {
  .grid-items .col1 {
    background: #000000 no-repeat url("../assets/home/mobile/image-web-design.jpg");
  }

  .grid-items .app {
    background: #000000 no-repeat url("../assets/home/mobile/image-app-design.jpg");
  }

  .grid-items .graphic {
    background: #000000 no-repeat url("../assets/home/mobile/image-graphic-design.jpg");
  }
}
</style>