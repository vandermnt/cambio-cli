const command = {
  name: 'calculator-value',
  run: async toolbox => {
    var https = require('https')
    const { print, parameters } = toolbox

    print.info('\n' + ' 💰 ' + 'Taxas de Cambio' + ' 💰 ')

    var value = parameters.array[0];
    var nation2 = parameters.array[1];
    var nation3 = parameters.array[2];

    https
    .get('https://api.exchangeratesapi.io/latest?base='+nation2+'&symbols='+nation2+','+nation3, function(res){
      var data = ''

      res.on('data', function(newData){
        data = newData

        var location = JSON.parse(data)

        if(location.error){
          print.error('\n ' + "  ERROR - Entrada de dados incorreta!" + '\n')
        }else{
          // var taxa_calculada = nation1 *
          var taxa_calculada = value * location.rates[nation3];

          // print.info(taxa_calculada)

          print.info('\n ' + value + ' ' + nation2 + ' = ' + taxa_calculada.toFixed(2) + ' ' + nation3 + '\n')
        }
      });
    })
  }
}

module.exports = command
