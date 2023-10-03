// Get all the countries from Asia continent /region using Filter function

var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    
    let result=data.filter((element)=>element.region==="Asia")
        console.log(result)

        
    result.forEach((element)=>{
        console.log(element.name.common)
    })
  
}










