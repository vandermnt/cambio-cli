const command = {
  name: 'help',
  run: async toolbox => {
    var https = require('https')
    const { print, parameters } = toolbox

    print.info('\n' + ' 💰 ' + 'Taxas de Cambio' + ' 💰 ')

    print.warning('\n' + ' Opções: ' + '\n')
    print.info(' Listar todas as taxas - ' + 'cambio list-all')
    print.info(' Calcular taxa de cambio - ' + 'cambio calculator FIRST_COUNTRY SECOND_COUNTRY')
    print.info(' Calcular taxa de cambio com valores - ' + 'cambio calculator-value VALUE FIRST_COUNTRY SECOND_COUNTRY' + '\n')

  }
}

module.exports = command
