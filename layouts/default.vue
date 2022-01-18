<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.container {
  margin: 0 100px;
  padding: 0 36px;
}
@media (max-width: 700px) {
  .container {
    margin: 0;
    padding: 0 10px;
  }
}
</style>