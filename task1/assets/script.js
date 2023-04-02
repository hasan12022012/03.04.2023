"use strict";

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let btnsort = document.getElementById('btnsort');
let btndelete = document.getElementById('btndelete');
let todo = [];


function add() {

    if (inp.value == '') {
        alert('olmaz')
    }
    else {
        todo.push(inp.value);
        inp.value = '';
        display();
    }

}

function display() {
    let data = ''
    let btndelete=''
    for (let item of todo) {
        data += `<li class="list-group-item">${item}</li>`
    }

    list.innerHTML = data;
    console.log(todo);
}

function addSort() {
    console.log(todo.sort());
}

function addSplice() {

    console.log(todo.splice());
}

btn.addEventListener('click', add)

btnsort.addEventListener('click', () => {
    todo.sort(function (a, b) { return a - b; });
    display();
})

btndelete.addEventListener('click', () => {
    todo.splice(0,1);
    display();
})
