<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        © 2019 - Kuenaimaku
        <a
          class="button is-small is-white"
          href="https://www.twitter.com/kuenaimaku"
          target="_blank"
        >
          <span class="icon">
            <b-icon icon="twitter" />
          </span>
        </a>
        <a
          class="button is-small is-white"
          href="https://github.com/Kuenaimaku/league-recorder"
          target="_blank"
        >
          <span class="icon">
            <b-icon icon="github-face" />
          </span>
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 0rem;
}
a.button {
  margin: 0rem 0.5rem;
}
</style>
