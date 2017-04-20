// create an object to store how much each bill is worth
var money = [
  { name: 'ONE HUNDRED', value: 100.00},
  { name: 'TWENTY', value: 20.00},
  { name: 'TEN', value: 10.00},
  { name: 'FIVE', value: 5.00},
  { name: 'ONE', value: 1.00},
  { name: 'QUARTER', value: 0.25},
  { name: 'DIME', value: 0.10},
  { name: 'NICKEL', value: 0.05},
  { name: 'PENNY', value: 0.01}
  ];


function checkCashRegister(price, cash, cid) {


var change = cash-price;

// reduce the cid array to check how much money is in the register
var register = cid.reduce(function(a,b){
  return a+b[1];
},0.0).toFixed(2);

if(register<change){
  return "Insufficient Funds";
}
else if(register == change){
  return "Closed";
}


cid = cid.reverse();


var result = money.reduce(function(acc, next, index){
  if(change>= next.value){
    var currentValue = 0.00;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while(change>= next.value && cid[index][1]>= next.value){
      currentValue += next.value;
      change -= next.value;
      change = Math.round(change*100)/100;
      cid[index][1]-= next.value;
    }
    acc.push([next.name,currentValue]);
    return acc;
  }
  else{
    return acc;
  }
}, []);
// Here is your change, ma'am.
return result.length >0 && change===0 ? result : "Insufficient Funds" ;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
