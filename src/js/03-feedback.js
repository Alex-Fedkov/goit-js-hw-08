import { load, save, clear } from "./local-storage";
const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = "feedback-form-state";

const textValue = load(LOCALSTORAGE_KEY) || "";

const inputEmail = document.querySelector("input[name='email']");
const inputMessage = document.querySelector("textarea[name='message']");
const form = document.querySelector(".feedback-form");

if (textValue) {
    const { email, message } = JSON.parse(textValue);
    inputEmail.value = email;
    inputMessage.value = message;
}

const onInput = event => {
    const email = inputEmail.value; 
    const message = inputMessage.value; 
    save(LOCALSTORAGE_KEY, JSON.stringify({ email, message }));
}

inputEmail.addEventListener("input", throttle(onInput, 1000));
inputMessage.addEventListener("input", throttle(onInput, 1000));

form.addEventListener("submit", event => {
    event.preventDefault();
    // console.log("submit")
    const email = inputEmail.value; 
    const message = inputMessage.value; 
    console.log({ email, message });
    inputEmail.value = "";
    inputMessage.value = "";
    clear();
})