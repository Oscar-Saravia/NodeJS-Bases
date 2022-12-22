const { tableMult } = require(`./helpers/multiplicar`);
const argv = require(`./config/yargs`);
const colors = require(`colors`);

console.clear();
console.log(argv);
// const number = argv.b;

// Acceder a los argumentos de la linea de comandos
// const [, , arg3 = `base=0`] = process.argv;
// const [, base = 0] = arg3.split(`=`);
// console.log(base);

tableMult(argv)
  .then((msg) => console.log(colors.rainbow(msg)))
  .catch((error) => console.log(colors.red(error)));
