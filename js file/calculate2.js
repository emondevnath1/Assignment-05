document.getElementById('donating-bal-2').addEventListener('click', function (event) {
    event.preventDefault();

    const balance2 = document.getElementById('account-bal').innerText;
    const balanceNumber2 = parseFloat(balance2);
    const donateMoney2 = document.getElementById('donate-bal-2').value;
    
    if (donateMoney2 >= 0) {
        console.log('donating-bal-2');

        const newBalance2 = document.getElementById('new-bal-2').innerText;
        
        const newBalanceNumber2 = parseFloat(newBalance2);
        const donateBalanceNumber2 = parseFloat(donateMoney2);

        const totalBalance2 = newBalanceNumber2 + donateBalanceNumber2;
        console.log(totalBalance2);

        const costBalance2 = balanceNumber2 - donateBalanceNumber2;
        console.log(costBalance2);

        document.getElementById('new-bal-2').innerText = totalBalance2;
        document.getElementById('account-bal').innerText = costBalance2;
    }
    else{
        alert('give here positive number')
    }
})