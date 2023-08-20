<script>
  import '../app.css'
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<main>
  <slot />
</main>

<style>
  nav {
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }

  main {
    margin-top: 4rem;
    text-align: center;
  }
</style>