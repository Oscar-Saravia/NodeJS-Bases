const argv = require(`yargs`)
  .options({
    b: {
      alias: `base`,
      type: `number`,
      demandOption: true,
      description: `Numero base para multiplicar`,
    },
    l: {
      alias: `list`,
      type: `boolean`,
      default: false,
      description: `Listar la tabla de multiplicacion.`,
    },
    h: {
      alias: `limit`,
      type: `number`,
      default: 10,
      description: `Limite para la tabla de multiplicacion.`,
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw `La base debe ser un numero.`;
    }
    if (argv.h <= 0) {
      throw `La limite debe ser mayor a 0.`;
    }
    return true;
  }).argv;

module.exports = argv;
