import express from 'express';


const app= express();   
const students =[
    {
        id:1,
        name:'ahmed'
    },{
        id:2,
        name:'aya'
    },{
        id:3,
        name:'amira'
    },{
        id:4,
        name:'karim'
    },{
        id:5,
        name:'alaa'
    }
]
const fun =(request,response)=>{ 
    let output='<ul>';
      for (let i = 0;i < students.length; i++)
      {
        const student = students[i];
        output +='<li>' + student.name + '</li>'
      }
    output+='</ul>'
response.send(output)
}
app.get('/students',fun) 

app.listen(7000);