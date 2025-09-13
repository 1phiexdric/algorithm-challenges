const RomanNumerals = {
    M: 1000,
    CM:	900,
    D:	500,
    CD:	400,
    C:	100,
    XC:	90,
    L:	50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I:	1,
}

const convertToRoman = (number)=>{
    let resultado = "";
    for(let [letra, valor] of Object.entries(RomanNumerals)){
        while (number >= valor){
            resultado += letra;
            number -= valor
        }
    }
    return resultado
}


convertToRoman()