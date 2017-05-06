<template>
  <section>
    <div class="hero-unit">
      <h1>Compre Bitcoins perto de voce</h1>
    </div>
    <div class="container">
      <h4 class="post">{{$data.posts.title}}</h4>
      <article>
        <vue-markdown :source="$data.posts.content">Carregando....</vue-markdown>
      </article>
      <em>Published {{$data.posts.created_at | moment }}, last modified at {{$data.posts.modified_at | moment }}</em>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'home',
  data () {
    return {
      posts: []
    }
  },
  components: {
    'vue-markdown': VueMarkdown
  },
  filters: {
    moment: function (str) {
      var d = new Date(str)
      if (moment(d).isValid()) {
        return moment(d).format('MMMM Do \'YY, h:mm a')
      } else {
        return '...'
      }
    }
  },
  created () {
    axios.get(`https://api.cosmicjs.com/v1/cbnet/object/home?pretty=true&hide_metafields=true&locale=pt-BR`)
    .then(response => {
      this.posts = response.data.object
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
.hero-unit {
  background: linear-gradient(140deg,#FC354C 10%, #0ABFBC 90%) center/cover no-repeat;
}
</style>
