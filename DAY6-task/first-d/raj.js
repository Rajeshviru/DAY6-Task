// Print the total population of countries using reduce function

var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    console.log(data)
    let result=data.reduce((accu,curr)=>accu+curr.population,0)

        console.log(result)
}
    
