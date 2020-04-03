<template>
  <Layout id="about">
    <div class="about">
      <h1 class="title">About me</h1>
      <h2 class="sup-title">If you’re wondering who I am…</h2>
      <p class="paragraph">
        I am <span class="highlight">Sarmat</span>, {{ age }} years old
        self-taught <span class="highlight">Front-end developer</span>.
      </p>

      <p class="paragraph">
        In October 2018 after 1 month university studying I did not agree with
        the further state of affairs and I decided to quit him and start my
        <span class="bold">front-end developer journey</span>. Also I developed
        in other directions, such as <span class="bold">electronics</span>,
        <span class="bold">3d printing</span>.
      </p>
      <p class="paragraph">
        During this time, I took many online courses on Udemy and other course
        platforms, read books for developing and also watched ton of YouTube
        videos about JavaScript and related directions.
      </p>
      <p class="paragraph">
        I also did a few personal <span class="highlight">projects</span> with
        the knowledge I gathered from the courses, you can check them on my
        <span class="highlight">portfolio</span>.
      </p>

      <p class="paragraph">
        I <span class="highlight">always</span> want to
        <span class="highlight">learn</span> more,
        <span class="highlight">do</span> more, and
        <span class="highlight">be</span> more. With constant
        <span class="highlight">hunger</span>
        for new challenges and <span class="highlight">learning</span> new
        things.
      </p>
      <p class="paragraph">
        My current stack of
        <span class="highlight">languages/technologies</span> is:
      </p>
      <p class="stack">
        HTML5 • CSS3 • JAVASCRIPT • SASS • WEBPACK • BABEL • VUEJS • VUEX •
        VUE-ROUTER • NUXT • GRIDSOME
      </p>
    </div>
    <Button title="resume" :link="`${$static.metadata.siteUrl}resume.pdf`" />
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import Button from '~/components/Button';
export default {
  components: {
    Button
  },
  computed: {
    age() {
      const diff_ms = Date.now() - new Date(2000, 12, 5).getTime();
      const age_dt = new Date(diff_ms);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  }
};
</script>

<style lang="scss">
.about {
  text-align: center;
}
.paragraph {
  font-size: 2rem;
  font-weight: 200;
  color: var(--color-white);
  text-align: center;
  padding: 1rem 0;
}

.highlight {
  background-color: var(--color-main);
  font-style: italic;
  padding: 0.1rem;
}

.bold {
  font-weight: 500;
}

.stack {
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;
}
</style>
