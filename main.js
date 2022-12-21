let arrayVal=[100,200,300,400,500,600,700,800,900,1000,1500,2000,3500,2900,550,670,678,749,849];
let value=arrayVal.filter(function(price){
   return price>=500 && price<=1000
});
document.write(value);
