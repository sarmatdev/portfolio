<template>
  <div>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Home from '~/sections/Home';
import About from '~/sections/About';
import Portfolio from '~/sections/Portfolio';
export default {
  components: {
    Navbar,
    Home,
    About,
    Portfolio
  }
};
</script>

<style></style>
