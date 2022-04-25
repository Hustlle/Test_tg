const Rand_str = () =>{
    let text = "";
    let text_1 = "";
    let text_2 = "";
    let text_3 = "";
    let simv = "abdefghijklmnoqrtuvwyzABDEFGHIJKLMNOQRTUVWYZ0123456789+-_$~"
    let letters = "abdefghijklmnoqrtuvwyzABDEFGHIJKLMNOQRTUVWYZ";
    let numbers = "0123456789"
    let symbols_numbers = "0123456789+-_$~"
    let symbols = "+-_$~"
    let ne_zamena = 0;


    let length = prompt("Введите длинну")
    let str_user = prompt("Введиет первый символ")
    let numb = prompt('Введите второй символ')
    for(let i = 0;i<length;i++){
        text += simv.charAt(Math.random() * simv.length);
    }
    alert(`Случайное слово: ${text}`)
    for(let j = 0;j < text.length; j++){
        for(let h = 0; h < letters.length;h++){
            if(letters.charAt(h) == text.charAt(j) ){
                text_1 += str_user

            } else if(symbols_numbers.charAt(h) == text.charAt(j)) {
                text_1 += text.charAt(j)
            }
        }
    }
    alert(`Замена букв: ${text_1}`)
    for(let j = 0;j < text.length; j++){
        for(let h = 0; h < letters.length;h++){
            if(numbers.charAt(h) == text.charAt(j)) {
                text_2 += numb
            } else if(letters.charAt(h) == text.charAt(j)|| symbols.charAt(h) == text.charAt(j) ){
                text_2 += text.charAt(j)
            }
        }
    }
    alert(`Замена цифр: ${text_2}`)

    for(let j = 0;j < text.length; j++){
        for(let h = 0; h < letters.length;h++){
            if(numbers.charAt(h) == text.charAt(j)) {
                text_3 += numb
                
            } else if(letters.charAt(h) == text.charAt(j) ){
                text_3 += str_user
            
            } else if(symbols.charAt(h) == text.charAt(j) ){
                text_3 += text.charAt(j)
                ne_zamena++;
            }
        }
    }
    alert(`Замена цифры и буквы: ${text_3}`)
    alert(`Количество символов, которые не были заменены: ${ne_zamena}`)
}
Rand_str()
