<template>
  <header class="header">
    <h1 class="header__title">
      SRMT
    </h1>
    <nav class="nav">
      <a class="nav__item" href="#">About</a>
      <a class="nav__item" href="#">Portfolio</a>
      <a class="nav__item" href="#">Contact</a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  width: 100vw;
  height: 7rem;
  background: rgba(33, 33, 33, 0.5);
  display: flex;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: space-between;
  position: fixed;

  &__title {
    font-size: 4rem;
    font-weight: 200;
  }

  .nav {
    &__item {
      text-transform: uppercase;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 600;
      padding: 1.5rem;
      color: var(--color-white);
      cursor: pointer;
      transition: all .2s ease;

      &:hover {
        color: var(--color-main);
      }
    }
  }
}
</style>
