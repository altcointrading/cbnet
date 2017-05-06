<template>
  <section>
    <div class="hero-unit">
      <h1>Compre bitcoins perto de voce</h1>
      <section class="lbc">
        <iframe allowtransparency="true" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" scrolling="no" width="234" height="60" src="https://localbitcoins.com/affiliate-embed/half-banner?ch=4nq3"></iframe>
      </section>
      <section class="cta">
        <a class="button" href="https://localbitcoins.com/instant-bitcoins/?action=buy&country_code=BR&amount=&currency=BRL&place_country=BR&online_provider=ALL_ONLINE&find-offers=Search?ref=4nq3" rel="nofollow">
          Compre bitcoins no Brasil
        </a>
      </section>
    </div>
    <div class="container">
      <h4 class="post">{{$data.posts.title}}</h4>
      <article>
        <vue-markdown :source="$data.posts.content"></vue-markdown>
      </article>
      <em>Published {{$data.posts.created_at | moment }}, last modified at {{$data.posts.modified_at | moment }}</em>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import apicache from 'apicache'
import VueMarkdown from 'vue-markdown'

let cache = apicache.middleware

export default {
  name: 'home',
  data () {
    return {
      posts: [{'content': 'Carregando...'}]
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
    axios.get(`https://api.cosmicjs.com/v1/cbnet/object/home?pretty=true&hide_metafields=false&locale=pt-BR`, cache('5 minutes'))
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
.hero-unit section {
  text-align: center;
}
.hero-unit section.lbc {
  position: relative;
  top: 52%;
}
.hero-unit section.cta {
  position: relative;
  top: 58%;
}
section.cta a {
    color: #fff;
    border: 1px solid white;
    padding: 5px 10px;
    border-radius: 15px;
    background: #333;
}
</style>
