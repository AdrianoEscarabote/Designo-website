

<template>
  <footer>
    <div class="container">
      <nav aria-label="footer">
        <router-link to="/" aria-label="Designo - Home">
          <img src="../assets/shared/desktop/logo-light.png" alt="" width="202" height="27" />
        </router-link>
        <ul>
          <li>
            <router-link to="/" aria-label="Designo - Our Company">
              our company
            </router-link>
          </li>
          <li>
            <router-link to="/" aria-label="Designo - Locations">
              locations
            </router-link>
          </li>
          <li>
            <router-link to="/" aria-label="Designo - Contact">
              contact
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="details">
        <div class="col1">
          <p>Designo Central Office
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </p>
        </div>
        <div class="col2">
          <p>Contac US (Central Office)</p>
          <p>P : +1 253-86308967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div class="col3">
          <ul>
            <li>
              <a href="www.facebook.com" target="_blank" aria-label="Facebook">
                <img src="../assets/shared/desktop/icon-facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="www.youtube.com" target="_blank" aria-label="Youtube">
                <img src="../assets/shared/desktop/icon-youtube.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="www.twitter.com" target="_blank" aria-label="Twitter">
                <img src="../assets/shared/desktop/icon-twitter.svg" alt="">
              </a>
            </li>
            <li>
              <a href="www.pinterest.com" target="_blank" aria-label="Pinterest">
                <img src="../assets/shared/desktop/icon-pinterest.svg" alt="">
              </a>
            </li>
            <li>
              <a href="www.instagram.com" target="_blank" aria-label="Instagram">
                <img src="../assets/shared/desktop/icon-instagram.svg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  background-color: #1D1C1E;
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 90rem;
  width: 100%;
  padding: 4.5rem 10.3125rem 4.5rem 10.3125rem;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;
}

nav ul {
  display: flex;
  align-items: center;
  gap: 2.625rem;
}

li a {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.875rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}

.details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 2rem;
  border-top: 0.0625rem solid hsla(0, 0%, 100%, 0.100);
}
.col1,
.col2 {
  max-width: 21.875rem;
  display: flex;
  flex-direction: column;
}
.col1 p,
.col2 p {
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.625rem;
  mix-blend-mode: normal;
  opacity: 0.7;
}
p span {
  font-weight: 400 !important;
}
.col3 {
  display: flex;
  align-items: flex-end;
}
.col3 ul {
  display: flex;
  gap: 1rem;
}

/* tablet */
@media (max-width: 59.375rem) {
  .container {
    padding: 4.5rem 2.4375rem 4.5rem 2.4375rem;
  }
}

/* mobile */
@media (max-width: 41.875rem) {
  .container {
    padding: 5rem 1.5rem 5rem 1.5rem;
  }
  nav {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
  nav img {
    margin-bottom: 2rem;
  }
  nav ul {
    width: 100%;
    border-top: 0.0625rem solid hsla(0, 0%, 100%, 0.100);
    padding-top: 2rem;
    flex-direction: column;
  }
  .details {
    padding-top: unset;
    border: unset;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 3rem;
  }
}
</style>