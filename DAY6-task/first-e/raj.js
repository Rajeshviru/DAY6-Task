// // Print the country which uses US Dollars as currency.

    

var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
    var data = JSON.parse(req.response);
    console.log(data);
    var result=data.filter((element)=>{

        for(let item in element.currencies){
            
             if(element.currencies[item].name==="United States dollar")
                
                 console.log(element.name.common)
         }
             
        
     })          
};

