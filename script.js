/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map((student)=>{
      if(student.marks>=50){
        console.log(student);
      }
    })
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((student)=>{
      if(student.marks>=50){
        console.log(student);
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const newstudent={id:4,name:"susan",age:"20",marks:45}
    arr.push(newstudent);
    console.log(newstudent);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let res=arr.filter((student)=>{
      if(student.marks<50){
        return false;
      }else{
        return true;
      }
    })
    console.log(res);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newarr=[
      {id:5,name:"salik",age:"25",marks:55},
      {id:6,name:"rahul",age:"25",marks:80},
      {id:7,name:"samina",age:"20",marks:66}
    ];
    let concatarr=[];
    arr.forEach((student)=>{
      concatarr.push(student);
    });
    newarr.forEach((student)=>{
      concatarr.push(student);
    });
    console.log(concatarr);
  }