document.getElementById('donating-bal-3').addEventListener('click', function (event) {
    event.preventDefault();

    const balance3 = document.getElementById('account-bal').innerText;
    const balanceNumber3 = parseFloat(balance3);
    const donateMoney3 = document.getElementById('donate-bal-3').value;
    
    if (donateMoney3 >= 0) {
        console.log('donating-bal-3');

        const newBalance3 = document.getElementById('new-bal-3').innerText;
        
        const newBalanceNumber3 = parseFloat(newBalance3);
        const donateBalanceNumber3 = parseFloat(donateMoney3);

        const totalBalance3 = newBalanceNumber3 + donateBalanceNumber3;
        console.log(totalBalance3);

        const costBalance3 = balanceNumber3 - donateBalanceNumber3;
        console.log(costBalance3);

        document.getElementById('new-bal-3').innerText = totalBalance3;
        document.getElementById('account-bal').innerText = costBalance3;
        document.getElementById('donate-bal-update3').innerText = donateBalanceNumber3;
    }
    else{
        alert('give here positive number')
    }
})