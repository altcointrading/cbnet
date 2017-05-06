# CompreBitcoins

> Frontend for [comprebitcoins.net](https://comprebitcoins.net).

> Design theme inspired by https://nuxt-website.cosmicapp.co/ and http://www.pixelsbyrick.com/

> Gradients by https://uigradients.com/

## LBC

```
<h2>localbitcoins: </h2>
<div v-for="item in $data.lbc">
  <p>{{item.profile.name}}</p>
</div>
<a class="buttons" href="https://localbitcoins.com/?ref=4nq3">Comprar ahora</a>
```

```
axios.get(`https://localbitcoins.com/buy-bitcoins-with-cash/18654/12200-000-br/.json`)
.then(response => {
  this.lbc = response.data
})
```


https://localbitcoins.com/ad/299252/purchase-bitcoin-bank-bb-itaucaixa-bradesco-brazil


## Additional packages

```
"moment":"^2.18.1",
"axios":"^0.16.1",
"vue-markdown":"^2.1.3",
```

## ~~Search Engine Optimization~~

Not ready for Vue 2 yet

[https://www.npmjs.com/package/vue-seo](https://www.npmjs.com/package/vue-seo)

```
<seo-lang code="pt-BR" url="https://comprebitcoins.net" current></seo-lang>
<seo-title v-if="$data.posts.metadata.seotitle" v-bind:value="$data.posts.metadata.seotitle"></seo-title>
<seo-description v-if="$data.posts.metadata.description" v-bind:value="$data.posts.metadata.description"></seo-description>
```

## Build Setup

``` bash
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
