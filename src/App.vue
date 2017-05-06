<template>
  <div id="app">
    <nav class="nav">
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/compre">compre bitcoins online</router-link></li>
        <li><i class="logo"></i></li>
        <li><router-link to="/compre">compre altcoins online</router-link></li>
        <li><router-link to="/trading">bitcoin trading</router-link></li>
      </ul>
    </nav>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
     <div class="footer-notes">
      <div class="col" style="float:left;width:60%;">
        <div style="margin-bottom:20px;"><router-link to="/">home</router-link></div>
        <div style="margin-bottom:20px;"><router-link to="/compre">compre bitcoins</router-link></div>
        <div style="margin-bottom:20px;"><router-link to="/trading">bitcoin trading</router-link></div>
      </div>
      <div class="col" style="float:left;width:40%;">
        <div style="margin-bottom:20px;">&copy; {{ new Date().getFullYear() }} comprebitcoins.net</div>
        <div style="margin-bottom:20px;"><a href="https://altcointrading.net" target="_blank">altcointrading.net</a></div>
        <div style="margin-bottom:20px;"><a href="https://news.altcointrading.net" target="_blank">altcointrading news</a></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/style.css"></style>

<style>
.footer {
  background-color: #333;
  color: #fff;
  font-size: 18px;
  width: 100%;
}
.footer-notes {
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;
  padding-bottom: 60px;
  padding-top: 40px;
}
</style>
