// Get all the countries with a population of less than 2 lakhs using Filter function

var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    
    let result=data.filter((element)=>{
        if(element.population<200000){
            return (element.name.common)
        }
        
    })

    result.forEach((element) => {
        console.log(element.name.common);
    });
}

