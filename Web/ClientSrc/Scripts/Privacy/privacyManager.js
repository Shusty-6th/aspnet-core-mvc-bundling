import { GetNumer } from "../helper"
import users from "../users";
import numeral from "numeral"

export class PrivacyManager{
    constructor(char) {
        this.head = document.querySelector("h1");
        this.char = char;

        console.log(users[0]);

        let myNumeral = numeral(150.08);
        myNumeral.add(200);

        let sum = 150.08 + 200;
        console.log(`Numeral:${myNumeral.value()}  normal sum: ${sum}`);
    }

    start() {
        this.head.innerText += this.char + "priv" + GetNumer();
    }
}