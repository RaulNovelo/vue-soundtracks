<template>
  <div>
    <nav
      class="navbar is-right"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../assets/logos_adc.png" width="auto" height="auto" />
        </a>
        <a
          class="navbar-burger burger is-active"
          role="button"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end"></div>
      </div>
    </nav>
    <section class="hero is-success is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Vue Soundtrack</h1>
          <h2 class="subtitle">Canciones que están Vue-nísimas!!</h2>
        </div>
      </div>
    </section>
    <Search />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>VueSoundtrack</strong>
          &copy; 2020 by
          <a href="https://github.com/RaulNovelo">RaulNovelo</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
    Search: () => import('@/components/Search')
  }
}
</script>
