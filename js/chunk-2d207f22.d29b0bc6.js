(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207f22"],{a360:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-1by1",on:{click:function(a){return t.toTrack(t.track)}}},[s("img",{attrs:{src:t.track.album.images[0].url,alt:"Placeholder image"}})])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("img",{attrs:{src:t.track.album.images[0].url,alt:"Placeholder image"}})])]),s("div",{staticClass:"media-content"},[s("strong",[s("a",{staticClass:"title is-6",on:{click:function(a){return t.toTrack(t.track)}}},[t._v(t._s(t.track.name))])]),t._v(" - "),s("a",{staticClass:"subtitle is-6"},[t._v(t._s(t.track.artists[0].name))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t._f("msToMm")(t.track.duration_ms)))])])])]),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item button is-success is-inverted",attrs:{id:"play"},on:{click:function(a){return t.selectTrack(t.track)}}},[t._m(0),s("span",[t._v("Preview")])]),s("a",{staticClass:"card-footer-item is-primary is-inverted button",attrs:{href:t.track.external_urls.spotify,target:"_blank"}},[t._m(1),s("span",[t._v("Go to Spotify")])])])])},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-play"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-spotify"})])}],e={methods:{selectTrack:function(t){t.preview_url&&this.$store.commit("SET_TRACK",t)},toTrack:function(t){this.$store.commit("SET_TRACK",t),this.$router.push({name:"TrackDetail",params:{id:t.id}})}}},r={props:["track"],mixins:[e]},n=r,l=s("2877"),o=Object(l["a"])(n,i,c,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d207f22.d29b0bc6.js.map