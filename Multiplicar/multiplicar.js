const fs = require('fs');
var colors = require('colors');

let creando_archivo = (base, crear_limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero, verifique..')
            return;
        }

        let data = '';
        for (let index = 1; index <= crear_limite; index++) {
            data += base + 'x' + index + '=' + base * index + '\n';
        }

        fs.writeFile('../Hola/Archivos/tabla' + base + ' al ' + crear_limite + '.txt', data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('El archivo ha sido creado : ! tabla  del ' + base + ' al ' + crear_limite + '.txt');
            }
        });
    })
}

let listando_tabla = async(base, limite) => {
    let tabla = '';

    console.log('==================================================');
    console.log('============"Tabla de multiplicar"================'.green);
    console.log('==================================================');

    for (let index = 1; index <= limite; index++) {
        tabla += base + '*' + index + ' = ' + (base * index) + '\n';
    }
    console.log(tabla);
}

module.exports = {
    crear_archivo: creando_archivo,
    listar_tabla: listando_tabla
}