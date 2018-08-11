const fs = require('fs')
const colors = require('colors');
// const express = require('express');
// const proyect = require('./file.js');

let listarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {

    console.log('================='.green)
    console.log(`tabla de ${base}`.green)
    console.log('================='.green)

    for (var i = 0; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`)
    }

  })
}

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor introducido '${base}' no es un numero`)
      return
    }

    let data = ''

    for (var i = 0; i <= limite; i++) {
      data+= `${base} * ${i} = ${base * i}\n`
    }

    let file_name = `tablas/tabla-${base}-al-${limite}.txt`

    fs.writeFile(file_name, data, (err) => {
      if (err)
        reject( err )
      else
        resolve(file_name)
    })

  })
}

module.exports = {
  crearArchivo,
  listarTabla
}
