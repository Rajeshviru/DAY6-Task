// Print the following details name, capital, flag using forEach function


var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    console.log(data)
    let result=data.forEach((element)=>{
        var datas=element.name.common
        var datas1=element.capital
        var datas2=element.flag
        console.log("name= "+datas)
        console.log("capital= "+datas1)
        console.log("flag= "+datas2)
    })
}