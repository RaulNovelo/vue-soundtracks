import Vue from 'vue'
import Vuex from 'vuex'
import { searchTrack } from '@/api/tracks'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tracks: [],
    currentTrack: {}
  },
  // syncronouslly functions
  mutations: {
    SET_TRACKS (state, tracks) {
      state.tracks = tracks
    },
    SET_TRACK (state, track) {
      state.currentTrack = track
    }
  },
  // asyncronouslly functions
  actions: {
    getTracks ({ commit }, q) {
      return new Promise(resolve => {
        searchTrack(q)
          .then(res => res.data.tracks) // return ..
          .then(tracks => {
            commit('SET_TRACKS', tracks.items)
            resolve(tracks.total)
          })
      })
    }
  },
  modules: {}
})
