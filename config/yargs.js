const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    },
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'crea en la consola la tabla de multiplicar', opciones)
    .argv;

module.exports = {
    argv: argv
}