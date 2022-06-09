function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("array precisa ser do tipo object");
    
        if(typeof num !== 'number') throw new TypeError("num precisa ser do tipo number");
    
        if(arr.length !== num) throw new RangeError("tamanho invalido");
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("este erro é um referenceError!");
            console.log(e.name);
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("este erro é um typeError!");
            console.log(e.name);
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log("este erro é um rangeError!");
            console.log(e.name);
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(validaArray(5, 5));