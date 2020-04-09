<template>
  <section class="section">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input is-large"
          v-model="searchQuery"
          type="text"
          placeholder="Search songs..."
        />
      </div>
      <p class="control">
        <a class="button is-large is-info" @click="search">
          <span class="icon is-large">
            <i class="fas fa-search"></i>
          </span>
        </a>
      </p>
      <p class="control">
        <a class="button is-large is-danger">
          <span class="icon is-large">
            <i class="fas fa-times"></i>
          </span>
        </a>
      </p>
    </div>
    <p>
      <!-- <small>{{ searchMessage }}</small><br> -->
      <small>{{ results | toLocaleString }}</small>
    </p>
    <br>
    <div class="columns is-multiline">
      <div
        v-for="track in tracks"
        :key="track.id"
        class="column is-one-quarters"
      >
        <track-detail :track="track"></track-detail>
      </div>
    </div>
  </section>
</template>

<script>
import { searchTrack } from '@/api/tracks'
export default {
  data () {
    return {
      searchQuery: 'rock',
      tracks: [],
      results: 0
    }
  },
  // lifecycle hook
  created () {
    this.search()
  },
  // local filter
  filters: {
    toLocaleString (results) {
      return `${results.toLocaleString()} results`
    }
  },
  components: { TrackDetail: () => import('./TrackDetail') },
  methods: {
    search () {
      searchTrack(this.searchQuery).then(res => {
        console.log(res.data)
        this.results = res.data.tracks.total
        this.tracks = res.data.tracks.items
      })
    }
  }
}
</script>
