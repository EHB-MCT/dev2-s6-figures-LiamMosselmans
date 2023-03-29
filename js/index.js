"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {

    },
    init() {
        document.getElementById("select").addEventListener("change", this.changeSelect);
        document.getElementById("form").addEventListener("submit", this.submitForm);
        console.log('Form init!');
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {
        e.preventDefault();
        console.log("Form submitted!");

        const rect = new Rectangle("unos", 50, 10);
        console.log(rect.innerHtml);

        document.querySelector('#results').innerHTML = rect.innerHtml;
    }
};

form.init();    