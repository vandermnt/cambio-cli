const command = {
  name: 'calculator',
  run: async toolbox => {
    var https = require('https')
    const { print, parameters } = toolbox

    print.info('\n' + ' 💰 ' + 'Taxas de Cambio' + ' 💰 ')

    var nation1 = parameters.array[0];
    var nation2 = parameters.array[1];

    https
    .get('https://api.exchangeratesapi.io/latest?base='+nation1+'&symbols='+nation1+','+nation2, function(res){
      var data = ''

      res.on('data', function(newData){
        data = newData

        var location = JSON.parse(data)

        if(location.error){
          print.error('\n ' + "  ERROR - Entrada de dados incorreta!" + '\n')
        }else{
          print.info('\n' + ' 1 ' + nation1 + ' = ' + location.rates[nation2].toFixed(2) + ' ' + nation2 + '\n')
        }
      });
    })
  }
}

module.exports = command
