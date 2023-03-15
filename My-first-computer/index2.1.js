
function sumaADouaNumere () {
    //nu am pus parametrii (mai exact number1 si number2) intre paranteze deoarece le luam direct din DOM
    var number1 = document.form_calculator.variabila1.value;
    var number2 = document.form_calculator.variabila2.value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    return number1 + number2;
}

function diferentaADouaNumere () {
    var number1 = document.form_calculator.variabila1.value;
    var number2 = document.form_calculator.variabila2.value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    return number1 - number2;
}

function inmultireaADouaNumere () {
    var number1 = document.form_calculator.variabila1.value;
    var number2 = document.form_calculator.variabila2.value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    return number1 * number2;
}

function impartireaADouaNumere () {
    var number1 = document.form_calculator.variabila1.value;
    var number2 = document.form_calculator.variabila2.value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    return number1 / number2;
}

function compute(operation) {
    //asta o sa fie la onClick
    
    switch(operation) {
        case "adunare": 
            document.form_calculator.result.value = sumaADouaNumere();
        
        // daca avem mai multe cazuri, atunci se executa toate. 
        // Cand vrem sa se execute doau unul singur, trb sa punem un break dupa fiecare case
        break;

        case "scadere": 
            document.form_calculator.result.value = diferentaADouaNumere();
        break;

        case "inmultire":
            document.form_calculator.result.value = inmultireaADouaNumere();
        break;
        
        case "impartire":
            document.form_calculator.result.value = impartireaADouaNumere();
        break;

        default: 
            console.log("Operation " + operation + " is not supported");
    }
}
//acest if este echivalent cu switch-ul de mai sus
   // if(operation == "adunare") {
   //     var result = sumaADouaNumere();
   //     console.log(result);
   //   else if (operation == "scadere") {
    // etc.....
 // }
//}