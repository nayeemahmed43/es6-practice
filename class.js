class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Ideal School'
    }
}

const student1 = new Student(12,"Karim");
const student2 = new Student(10,"Rahim");
console.log(student1, student2);
