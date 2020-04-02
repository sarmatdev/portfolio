<template>
  <header class="header">
    <nav class="nav">
      <g-image src="~/assets/images/srmt.svg" class="nav__logo"> </g-image>
      <ul class="nav__links" :class="{ active: menu }">
        <li class="nav__item">
          <a href="#">About</a>
        </li>
        <li class="nav__item">
          <a href="#">Portfolio</a>
        </li>
        <li class="nav__item">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div @click="showMenu" class="burger" :class="{ toggle: toggle }">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      toggle: false
    };
  },
  methods: {
    showMenu() {
      this.menu = !this.menu;
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  max-width: 100vw;
  height: 7vh;
  top: 0;
  left: 0;
  background: rgba(33, 33, 33, 0.8);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 99;

  .nav {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    &__logo {
      height: 2.5rem;
    }

    &__links {
      display: flex;
      justify-content: space-around;
      width: 30%;
    }

    @media screen and (max-width: 1024px) {
      &__links {
        width: 40%;
      }
    }

    &__item {
      list-style: none;
      padding: 2rem;

      a {
        text-decoration: none;
        color: var(--color-white);
        font-weight: 400;
        font-size: 1.4rem;
        text-transform: uppercase;
        transition: all 0.2s ease;

        &:hover {
          color: var(--color-main);
        }
      }
    }

    .burger {
      display: none;
      cursor: pointer;
      margin-right: 2rem;

      & > div {
        width: 25px;
        height: 3px;
        background-color: var(--color-main);
        margin: 5px;
        transition: all 0.3s ease;
      }
    }

    @media screen and (max-width: 768px) {
      .burger {
        display: block;
      }

      .nav__links {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        max-width: 100vw;
        min-height: 100vh;
        height: 100%;
        background: var(--color-dark);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateX(100%);
        transition: background 0.5s ease-in;
      }

      .toggle {
        .line1 {
          transform: rotate(-45deg) translate(-5px, 6px);
        }
        .line2 {
          opacity: 0;
        }
        .line3 {
          transform: rotate(45deg) translate(-5px, -6px);
        }
      }
    }

    .active {
      transform: translateX(0);
      transition: all 0.2s ease-out;
    }
  }
}
</style>
