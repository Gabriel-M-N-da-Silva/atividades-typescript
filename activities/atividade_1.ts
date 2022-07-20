// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

//---------- SOLUÇÃO ----------

interface employee {
    code:number,
    name:string,
}

let employee1 = {
    code: 10,
    name: "John",
};
