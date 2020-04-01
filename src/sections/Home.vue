<template>
  <div>
    <Navbar />
    <div class="section">
      <section class="home">
        <h1 class="home__title">
          Hello ✌🏻, <br />
          I am <span>Sarmat</span>
        </h1>
        <h2 class="home__sub-title">
          A <span>self-taught</span> Front-end developer
        </h2>
        <g-image
          class="home__img"
          src="~/assets/images/srmt.png"
          alt=""
        ></g-image>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
.home {
  color: var(--color-white);
  position: relative;

  &__img {
    position: absolute;
    z-index: -1;
    top: -15%;
    overflow: hidden;
    left: 400px;
    width: 900px;
    // height: 100vh;
    transform: rotate(45deg);
  }

  &__title {
    font-weight: 200;
    font-size: 6rem;

    span {
      font-weight: 600;
      color: var(--color-main);
    }
  }

  &__sub-title {
    font-size: 2rem;
    font-weight: 200;

    span {
      font-weight: 400;
      color: var(--color-main);
    }
  }
}
</style>
