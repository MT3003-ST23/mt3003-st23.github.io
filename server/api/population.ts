import data from '~/assets/data/population2022.json' assert { type: 'json' }

export default defineEventHandler((event) => {
  return data
})
