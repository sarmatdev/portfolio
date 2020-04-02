<template>
  <div class="section">
    <slot />
  </div>
</template>



<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
