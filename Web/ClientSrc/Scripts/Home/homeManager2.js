import { GetNumer } from "../helper";
import users from "../users";


export class HomeManager2{
    constructor(char) {
        this.head = document.querySelector("h1");
        this.char = char;

        console.log(users );

        document.querySelector("button.welcome").addEventListener("click", this.start.bind(this));
    }

    start() {
        this.head.innerText += this.char + "home"  + GetNumer();
    }
}