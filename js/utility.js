// document.getElementById('donate-now-btn'){
//     const inputValueAmount = document.getElementById(ID).value
//     const getDonationAmount = document.getElementById(ID).innerText;
//     const getCurrentDonationAmount = document.getElementById(ID).innerText;

//     const s = inputValueAmount + getDonationAmount
//     document.getElementById(ID).innerText = s;

//     
//     document.getElementById(ID).innerText = B
// }
document.getElementById('donation-form')
    .addEventListener('scroll', function () {
        document.getElementById('navbar').classList.add(' backdrop-blur-md')
    })
document.getElementById('donate-now-btn')
    .addEventListener('click', function () {

        document.getElementById('Congrates-form').classList.remove('hidden')
        const inputValueAmount = document.getElementById('input-get-amount').value;
        const inputValueAmountP = parseFloat(inputValueAmount)
        // console.log(typeof inputValueAmountP)

        if (inputValueAmountP < 0) {
            alert('Validate the donation amount')
        }
        if (inputValueAmountP === inputValueAmountP) {

            const getDonationAmount = document.getElementById('get-total-bdt').innerText
            const getDonationAmountP = parseFloat(getDonationAmount)
            // console.log(typeof getDonationAmountP)

            // console.log(typeof inputValueAmountP)
            const s = inputValueAmountP + getDonationAmountP;
            const newBalance = parseFloat(s)
            document.getElementById('get-total-bdt').innerText = newBalance;

            const getCurrentDonationAmount = document.getElementById('get-current-amount').innerText;
            const getCurrentDonationAmountP = parseFloat(getCurrentDonationAmount)
            const B = getCurrentDonationAmountP - inputValueAmountP;
            
            const historyDetails =  document.getElementById('history-form')
           historyDetails.append(div);
            if (B <= 0) {
                alert('Do not enough Balance! Please earn Money.')
            }

            document.getElementById('get-current-amount').innerText = B
            // history set----------------------------------------------
            const div = document.createElement('div')
            div.innerHTML = `
            <h1 class = font-bold text-xl mb-4>${newBalance} Taka is Donated for Flood at Noakhali, Bangladesh </h1>
            <p>Date:${new Date}</p>
            `
            console.log(div)
           
        }
        else {
            alert('Validate the donation amount!')
        }

        document.getElementById('close-config')
            .addEventListener('click', function () {
                document.getElementById('Congrates-form').classList.add('hidden')
                
            })

    })