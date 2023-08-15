import data from '~/assets/data/covid.json' assert { type: 'json' }

export default defineEventHandler((event) => {
  return data
})
