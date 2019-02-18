let promise = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = "data.json";

    request.open("GET",url);
    request.addEventListener("load", function(){
        if(request.status === 200){
            resolve(request.responseText);
        }else {
            reject("Ошибки сервера "+ request.status);
        }
    },false);

    request.addEventListener("error", function(){
        reject("Не могу создать ajax объект");
    },false);

    request.send();
})
/*
   при создание объекта типа promise в конструткор нужно передать 
   функцию coolback выполняющий асинхронную операцию 
   excuter - исполнитесь 
   должен принять  coolback 1-resolve 2-reject
   resolve - в случаи успеха операции 
   reject - в случаи неудачи
   при успешном выполнении асинхронной операции если ответ имеется
   он будет передан resolve если ошибка то в reject
*/