<template>
  <button class="button">
    <a :href="link" target="_blank" class="button__link">
      {{ title }}
    </a>
  </button>
</template>

<script>
export default {
  props: ['title', 'link']
};
</script>

<style lang="scss">
.button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  margin-right: 1rem;
  appearance: none;
  width: 10rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--color-main);
  border-radius: 2rem;
  transition: all 0.1s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  &__link {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-decoration: none;
    color: var(--color-white);
    text-transform: uppercase;
  }
}
</style>
