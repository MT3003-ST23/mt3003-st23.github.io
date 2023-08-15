import data from '~/assets/data/country_data.json' assert { type: 'json' }

export default defineEventHandler((event) => {
  return data
})
