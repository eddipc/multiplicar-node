const argv = require('./conf/yargs').argv
const colors = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')

console.log(argv)

let comando = argv._[0]

switch (comando) {
  case 'listar':
  console.log('Listar');
  listarTabla(argv.base, argv.limite)
  .then(tabla => console.log(`Tabla del ${base}: \n ${tabla}`))
  .catch((err) => console.log(err))
  break
  case 'crear':
  console.log('Crear');
  crearArchivo(argv.base, argv.limite)
  .then(archivo => console.log(`Archivo creado: `,  colors.green(archivo)))
  .catch((err) => console.log(err))
  break
  default: 'Comando no reconocido'

}
