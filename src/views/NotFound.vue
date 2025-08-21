<template>
  <div class="not-found-page">
    <div class="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <router-link to="/" class="home-link">Go Home</router-link>
    </div>
  </div>
</template>

<script setup>
// 404 page implementation
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
}

.container {
  text-align: center;
}

h1 {
  font-size: 6rem;
  margin: 0;
  color: #ff0080;
}

h2 {
  font-size: 2rem;
  margin: 1rem 0;
}

.home-link {
  display: inline-block;
  margin-top: 2rem;
  padding: 12px 24px;
  background: linear-gradient(135deg, #ff0080, #d946ef);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.home-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 0, 128, 0.3);
}
</style>