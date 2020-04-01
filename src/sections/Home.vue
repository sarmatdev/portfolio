<template>
  <section class="home">
      <h1 class="home__title">
        Hello ✌🏻, <br />
        I am <span>Sarmat</span>
      </h1>
      <h2 class="home__sub-title">
        A <span>self-taught</span> Front-end developer
      </h2>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
  color: var(--color-white);
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__img {
    position: absolute;
    z-index: -1;
    top: -20%;
    overflow: hidden;
    left: 400px;
    width: 900px;
    // height: 100vh;
    transform: rotate(45deg);
  }

  &__title {
    font-weight: 200;
    font-size: 6rem;
    text-align: center;

    span {
      font-weight: 500;
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
