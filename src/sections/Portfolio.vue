<template>
  <Layout id="portfolio">
    <h1 class="title">Portfolio</h1>
    <h2 class="sup-title">Go check what I've been doing lately!</h2>

    <section class="portfolio-wrap">
      <div
        class="project"
        v-for="edge in $static.allPortfolio.edges"
        :key="edge.id"
      >
        <h1 class="project__name">{{ edge.node.title }}</h1>
        <main>
          <g-image class="project__img" :src="edge.node.image"> </g-image>
          <div class="project__description">
            <div class="project__content" v-html="edge.node.content"></div>
            <p class="project__stack">{{ edge.node.stack }}</p>
            <div class="project__links">
              <Button title="live" :link="edge.node.live" />
              <Button title="source" :link="edge.node.source" />
            </div>
          </div>
        </main>
      </div>
    </section>
  </Layout>
</template>

<static-query>
{
  allPortfolio {
    edges {
      node {
        id
        title
        content
        live
        source
        stack
        image (width: 500, quality: 50)
      }
    }
  }
}
</static-query>

<script>
import Button from '~/components/Button';
export default {
  components: {
    Button
  }
};
</script>

<style scoped lang="scss">
.project {
  margin-top: 10rem;

  main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    padding: 2rem;

    @media screen and (max-width: 110rem) {
      flex-wrap: wrap;
    }
  }

  &__img {
    max-width: 50rem;
    border-radius: 0.5rem;
    margin: 3rem;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 30rem) {
      width: 30rem;
    }
  }

  &__description {
    max-width: 60rem;
    font-weight: 300;
    margin-top: 2rem;
    width: 100%;
  }

  &__name {
    font-size: 3rem;
    font-style: italic;
    font-weight: 400;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--color-main);
  }

  &__content {
    color: var(--color-white);
  }

  &__stack {
    font-weight: 500;
    font-size: 2rem;
  }

  &__links {
    display: flex;
    align-items: center;
  }
}
</style>
