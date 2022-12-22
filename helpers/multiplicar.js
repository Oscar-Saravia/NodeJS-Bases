const fs = require("fs");
const colors = require(`colors`);

const tableMult = async ({ base, list, limit }) => {
  const num = base;
  const separator = `============================\n`;
  let msg = `${separator}\tTabla del: ${num}\n${separator}`;

  try {
    for (let i = 1; i <= limit; i++) {msg += `${num} x ${i} = ${num * i} \n`};

    if (list) console.log(colors.cyan(msg));

    fs.writeFileSync(`./public/Tabla-de-${num}.txt`, msg);

    return `Tabla de ${num}: CREADO`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  tableMult,
};
