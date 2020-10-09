const command = {
  name: 'list-all',
  run: async toolbox => {
    var https = require('https')
    const { print, parameters } = toolbox

    print.info('\n' + ' 💰 ' + 'Taxas de Cambio' + ' 💰 ')

    https
    .get('https://api.exchangeratesapi.io/latest', function(res){
      var data = ''

      res.on('data', function(newData){
        data = newData
      });

      res.on('end', function(){
        var location = JSON.parse(data)

        print.info("   CAD: " + location.rates.CAD.toFixed(2).replace('.', ','))
        print.info("   ISK: " + location.rates.ISK.toFixed(2).replace('.', ','))
        print.info("   PHP: " + location.rates.PHP.toFixed(2).replace('.', ','))
        print.info("   DKK: " + location.rates.DKK.toFixed(2).replace('.', ','))
        print.info("   CZK: " + location.rates.CZK.toFixed(2).replace('.', ','))
        print.info("   AUD: " + location.rates.AUD.toFixed(2).replace('.', ','))
        print.info("   RON: " + location.rates.RON.toFixed(2).replace('.', ','))
        print.info("   SEK: " + location.rates.SEK.toFixed(2).replace('.', ','))
        print.info("   IDR: " + location.rates.IDR.toFixed(2).replace('.', ','))
        print.info("   INR: " + location.rates.INR.toFixed(2).replace('.', ','))
        print.info("   BRL: " + location.rates.BRL.toFixed(2).replace('.', ','))
        print.info("   RUB: " + location.rates.RUB.toFixed(2).replace('.', ','))
        print.info("   HRK: " + location.rates.HRK.toFixed(2).replace('.', ','))
        print.info("   JPY: " + location.rates.JPY.toFixed(2).replace('.', ','))
        print.info("   THB: " + location.rates.THB.toFixed(2).replace('.', ','))
        print.info("   CHF: " + location.rates.CHF.toFixed(2).replace('.', ','))
        print.info("   SGD: " + location.rates.SGD.toFixed(2).replace('.', ','))
        print.info("   PLN: " + location.rates.PLN.toFixed(2).replace('.', ','))
        print.info("   BGN: " + location.rates.BGN.toFixed(2).replace('.', ','))
        print.info("   TRY: " + location.rates.TRY.toFixed(2).replace('.', ','))
        print.info("   CNY: " + location.rates.CNY.toFixed(2).replace('.', ','))
        print.info("   NOK: " + location.rates.NOK.toFixed(2).replace('.', ','))
        print.info("   NZD: " + location.rates.NZD.toFixed(2).replace('.', ','))
        print.info("   ZAR: " + location.rates.ZAR.toFixed(2).replace('.', ','))
        print.info("   USD: " + location.rates.USD.toFixed(2).replace('.', ','))
        print.info("   MXN: " + location.rates.MXN.toFixed(2).replace('.', ','))
        print.info("   USD: " + location.rates.USD.toFixed(2).replace('.', ','))
        print.info("   ILS: " + location.rates.ILS.toFixed(2).replace('.', ','))
        print.info("   GBP: " + location.rates.GBP.toFixed(2).replace('.', ','))
        print.info("   KRW: " + location.rates.KRW.toFixed(2).replace('.', ','))
        print.info("   MYR: " + location.rates.MYR.toFixed(2).replace('.', ','))
      })
    })
  }
}

module.exports = command
