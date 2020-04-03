<template>
  <a :href="link" target="_blank" class="button">
    {{ title }}
  </a>
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
  display: flex;
  width: 10rem;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--color-main);
  color: var(--color-white);
  border-radius: 2rem;
  transition: all 0.1s ease;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
}
</style>
