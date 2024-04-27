function display(data, callback){
    let randInt = Math.random() * (10 - 1) + 1;
    let err = randInt > 5? new Error("Ошибка выполнения. randInt больше 5"): null;

    setTimeout(function(){
        callback(err, data);
    }, 0);
}

console.log("Начало работы программы");
console.log("Завершение работа программы");

display("Обработка данных...", function(err, data){
    
    if(err) throw err;  //проброс ошибки
    console.log(data);
});