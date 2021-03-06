const colors = require('colors');
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("./db/data.json", data, err => {
        if (err) throw err;
        console.log("El archivo fue grabado con exito".blue);
    })
};

const cargarDB = () => {

    try {
        listadoPorHacer = require("../db/data");
    }catch (e) {
        listadoPorHacer = [];
    }

};

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if ( index >=0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    }else {
        return false
    }


};

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >=0) {
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true
    }else {
        return false
    }
};

module.exports = {
     crear,
    getListado,
    actualizar,
    borrar
};
