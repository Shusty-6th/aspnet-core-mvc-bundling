import { GetNumer } from "../helper";
import users from "../users";
import numeral from "numeral"


export class HomeManager{
    constructor(char) {
        this.head = document.querySelector("h1");
        this.char = char;

        console.log(users);

        var myNumeral = numeral(1000);
        console.log(myNumeral.value());

        document.querySelector("button.welcome").addEventListener("click", this.start.bind(this));
    }

    start() {
        this.head.innerText += this.char + "home"  + GetNumer(); 
    }
}