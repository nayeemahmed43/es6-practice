const greetings = "hello world";
console.log(greetings);

    // greetings = 'hey';
    // console.log(greetings);

const array = [12, 33, 23, 50];
array[2] = 40;
array.push(60);
array[2] = 33;
array.unshift(1);
array[2]='';
//array = [12, 33, 33, 50];
console.log(array);


const object = {
    Name: "Nayeem Ahmed",
    phone: 76432784238
}
object.Name='Samir Ahmed';

//not allowed
// object = {
//     Name: "Shoaib Ahmed",
//     phone: 76432784238
// }
console.log(object);


function printName(){
    
    let name = 'Samira jannat';
    for(let i=0; i<=10; i++){
        console.log(i+'.'+name);
    }
    //console.log(i);
   
}
printName();



