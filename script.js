//Using localStorage to persist balance between page reloads
if (localStorage.getItem('balance') === null) {
    localStorage.setItem('balance', '0');
}

function getpin() {
    let PIN = 9044;
    let newPin = document.getElementById('pin').value;

    if (PIN === parseInt(newPin)) {
        window.location.href = "loginpage.html";
    } else {
        alert("Incorrect PIN.");
    }
}

function deposit() {
    let addBalance = parseFloat(document.getElementById('dep').value);  // Use parseFloat for decimal handling
    if (isNaN(addBalance) || addBalance <= 0) {
        alert("Please enter a valid amount to deposit.");
        return;
    }
    
    let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;  // Default to 0 if no balance exists
    let newBalance = currentBalance + addBalance;
    localStorage.setItem('balance', newBalance);
    
    alert("Amount Deposited. New Balance: " + newBalance);
    window.location.href = "viewbalance.html";
}


function viewBalance() {
    let balance = localStorage.getItem('balance');
    document.getElementById('balance').innerHTML = balance;
}

function withdraw(){
    let withBalance= document.getElementById('with').value
    let currentBalance = parseInt(localStorage.getItem('balance'));
    if(withBalance <= currentBalance){
        
    let newBalance = currentBalance - parseInt(withBalance);
    localStorage.setItem('balance', newBalance);
    alert("Amount Withdrawl. Available Balance: "+newBalance);
    window.location.href = "viewbalance.html";
    }else{
        alert("Insuffient Balance in account")
    }

    
}
