document.getElementById('donating-bal').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = document.getElementById('account-bal').innerText;
    const balanceNumber = parseFloat(balance);
    const donateMoney = document.getElementById('donate-bal').value;
    
    if (donateMoney >= 0) {
        console.log('donating-bal');

        const newBalance = document.getElementById('new-bal').innerText;
        
        const newBalanceNumber = parseFloat(newBalance);
        const donateBalanceNumber = parseFloat(donateMoney);

        const totalBalance = newBalanceNumber + donateBalanceNumber;
        console.log(totalBalance);

        const costBalance = balanceNumber - donateBalanceNumber;
        console.log(costBalance);

        document.getElementById('new-bal').innerText = totalBalance;
        document.getElementById('account-bal').innerText = costBalance;
        document.getElementById('donate-bal-update').innerText = donateBalanceNumber;
    }
    else{
        alert('give here positive number')
    }
})