
// fGet form Data

import Store from "./src/Store.js";

const form_data_add = document.getElementById('form_data_add');

form_data_add.addEventListener('submit', function(e){
    e.preventDefault();

    let form_data_object    = new FormData( e.target );
    let data                = Object.fromEntries(form_data_object.entries());

    let { name, location, skill, photo } = data;    

    Store.setData('devs', data );
    
});

