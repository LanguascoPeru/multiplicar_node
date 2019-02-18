 const argv = require('./config/yargs.js').argv;
 const mult = require('./Multiplicar/multiplicar.js');
 var colors = require('colors');

 let base = 10;
 let comando = argv._[0];

 switch (comando) {
     case 'listar':
         mult.listar_tabla(argv.base, argv.limite)
             .then((res) => {
                 console.log('listar_tabla' + res);
             }, (error) => {
                 console.log(error);
             })
             .catch((er) => {
                 console.log(er);
             })
         break;
     case 'crear':
         mult.crear_archivo(argv.base, argv.limite)
             .then((resultado) => {
                 console.log(resultado);
             }, (error) => {
                 console.log(error);
             })
         break;
     default:
         console.log('comando no reconocido');
         break;
 }

 ///console.log(argv.limite);

 //  mult.crear_archivo(base)
 //      .then((resultado) => {
 //          console.log(resultado);
 //      }, (error) => {
 //          console.log(error);
 //      })