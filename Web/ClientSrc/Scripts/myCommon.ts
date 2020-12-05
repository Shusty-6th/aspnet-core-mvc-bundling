import num from "numeral";

export const GetNumer = () => {
    const input2 = (document.getElementById("input2") as HTMLInputElement);
    input2.value = "myCommon.ts Works!";

    return "Commonn!" + 2.677.toFixed();
}

export function ComputeNumber(n : number) : number{
    let myNumeral = num(n);
    myNumeral.divide(3.33);

    return myNumeral.value();
}