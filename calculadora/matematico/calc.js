function calcular(){
    var a, b, r, result, item, mdc;
    a = document.getElementById('avalue').value;
    b = document.getElementById('bvalue').value;
    result = document.getElementById('resultado');
    result.innerHTML="";
    
   do{
    r = a % b;
    div = (a-r) / b; 
    item = document.createElement("li");
    item.textContent = a +' / '+b+' = '+div+' resto total : '+ r;
    result.appendChild(item);
    a = b;
    mdc = b;
    b = r;
    }while(r > 0);
    item = document.createElement("li");
    item.textContent = 'MDC = ' + mdc;
    result.appendChild(item);
   }
