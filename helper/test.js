
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: '77c70179',
    apiSecret: 'CwgIztTH1ZmGU3Fh',
  });

// nexmo.verify.request({
//     number: '6285374689896',
//     brand: 'Nexmo',
//     code_length: '4'
//   }, (err, result) => {
//     console.log(err ? err : result)
//   });

nexmo.verify.check({
    request_id: '10958a5d842e465c92dbfd786ed40617',
    code: '1704'
}, (err, result) => {
    console.log(err ? err : result)
});