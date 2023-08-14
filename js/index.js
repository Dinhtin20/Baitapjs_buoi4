//Exercise 1 

document.getElementById('Integer').onclick = 
function(){
    const number1 = +document.getElementById('num1').value;
    const number2 = +document.getElementById('num2').value;
    const number3 = +document.getElementById('num3').value;
    let result;

    if(number1 <= number2 && number1 <= number3){
        if(number1 <= number3){
            result = number1 + "," + number2 + "," + number3;
        } else{
            result = number1 + "," + number3 + "," + number2;
        }
    }else if(number2 <= number1 && number2 <= number3){
        if(number1 <= number3){
            result = number2 + "," + number1 + "," + number3;
        } else{
            result = number2 + "," + number3 + "," + number1;
        }
    } else{
        if (number1 <= number2){
            result = number3 + "," + number1 + "," + number2;
        } else{
            result = number3 + "," + number2 + "," + number1;
        }
    }

    document.getElementById('result').innerText = ` 👉 ${result}`;

}

//Exercise 2

document.getElementById('Greeting').onclick = 
function(){
    const Name = document.getElementById('name').value;
    let result2;

    if(Name == 'B' || Name == 'b'){
        result2 = "Chào Ba"
    } else if (Name == 'M' || Name == 'm'){
        result2 = "Chào Mẹ"
    } else if (Name == 'A' || Name == 'a'){
        result2 = "Chào Anh Trai"
    }else{
        result2 = "Chào Em Gái"
    }

    document.getElementById('result2').innerText=`👉 ${result2}`;
}

//Exercise 3

document.getElementById('Even').onclick = 
function(){
    const Num1 = +document.getElementById('even1').value;
    const Num2 = +document.getElementById('even2').value;
    const Num3 = +document.getElementById('even3').value;
    let count = 0;
    let countEven = 0;

    Num1 % 2 === 0 ? countEven++ : count++;
    Num2 % 2 === 0 ? countEven++ : count++;
    Num3 % 2 === 0 ? countEven++ : count++;

    document.getElementById('result3').innerText=`
    👉 Số chẳn ${countEven}, Số lẻ ${count}`;
}

//Exercise 4 

document.getElementById('Triangle').onclick = 
function(){
    const Length1 = +document.getElementById('length1').value;
    const Length2 = +document.getElementById('length2').value;
    const Length3 = +document.getElementById('length3').value;
    let result4;

    if(Length1 + Length2 > Length3 && Length1 + Length3 > Length2 && Length2 + Length3 > Length1){
        if(Length1 === Length2 && Length2 === Length3){
            result4 = "Là tam giác đều";
        }else if (Length1 * Length1 + Length2 * Length2 === Length3 * Length3 || Length1 * Length1 + Length3 * Length3 === Length2 * Length2 || Length2 * Length2 + Length3 * Length3 === Length1 *Length1){
            result4 = "Là tam giác vuông";
        } else if (Length1 === Length2 || Length1 === Length3 || Length2 === Length3){
            result4 = "Là tam giác cân";
        } else{
            result4 = "Là tam giác thường";
        }
    } else{
        result4 = "Đây không phải là tam giác";
    }

    document.getElementById('result4').innerText =`👉 ${result4}`;
}
