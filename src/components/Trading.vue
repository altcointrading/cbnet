<template>
  <section>
    <div v-for="item in $data.posts" class="container">
      <h2>{{item.title}}</h2>
      <div>
        <vue-markdown :source="item.content"></vue-markdown>
      </div>
      <small>Published {{item.created_at | moment }}, last modified at {{item.modified_at | moment }}</small>
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
    axios.get(`https://api.cosmicjs.com/v1/cbnet/object-type/tradings?pretty=true&hide_metafields=true&locale=pt-BR`)
    .then(response => {
      this.posts = response.data.objects
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>

</style>
