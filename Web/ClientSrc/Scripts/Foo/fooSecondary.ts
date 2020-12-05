import {GetNumer, ComputeNumber} from "../myCommon"
export default class FooClass{
    
public execute(){

    let a : string = "Its string in FooClass!";
    console.log(a + GetNumer());


    console.log(ComputeNumber(10)); 
}

}