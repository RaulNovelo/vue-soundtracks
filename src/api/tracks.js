import request from '@/services/axios' // import service

/**
 * Search tracks by queries
 * @param {String} q Song, artist or album
 * @param {Number} offset Pagination offset (default 0)
 */
export function searchTrack (q, offset = 0) {
  return request({
    url: '/search',
    method: 'GET',
    params: {
      q,
      type: 'track',
      offset
    }
  })
}
