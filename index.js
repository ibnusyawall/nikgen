const needle = require('needle')

var url = 'https://tangy-encouraging-hose.glitch.me/api/reza'

const getDb = (callback) => {
  needle(url, (err, resp, body) => {
    if (err) throw err;
    callback(undefined, {
      nik: body.nik,
      kk: body.kk
    })
  })
}

getDb((error, {nik, kk} = {}) => {
  console.log('NIK:', nik)
  console.log('KK :', kk)
})
