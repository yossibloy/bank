document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        bankSteart()
        init()
    }
}

let templet = {
    account: `<li class="account">
    <label>id: </label><span>[id]</span><br>
    <label>clientId: </label><span>[clientId]</span><br>
    <label>balans: </label><span>[balans]</span><br>
    <label>firstname: </label><span>[firstName]</span><br>
    <label>lastName: </label><span>[lastName]</span><br>
</li>`,
    trancsion: `<li class="transaction">
    <label>id: </label><span>[id]</span><br>
    <label>accounId: </label><span>[accounId]</span><br>
    <label>type: </label><span>[type]</span><br>
    <label>amount: </label><span>[amount]</span><br>
</li>`

}






function bankSteart() {
    let arr = []
    for (let i = 0; i < accounts.length; i++) {
        let c = getClaientById(accounts[i].clientId)
        arr.push(accounts[i])
        arr[i].firstName = c.firstName
        arr[i].lastName = c.lastName

    }
    document.querySelector('.accoun-list').innerHTML = render(templet.account, arr);
}


function init() {
    let allAcaountsDiv = document.querySelectorAll('.account')
    allAcaountsDiv.forEach(accDiv => {
        accDiv.onclick = function (ev) {
            let myAccDiv = ev.target.closest('.account')
            let accountId = myAccDiv.querySelector('span').textContent
            let listtra = getTransactionByAccounId(accountId)
            document.querySelector('.details-panel').innerHTML=render(templet.trancsion, listtra);
         let u=   document.querySelector('.h2').innerHTML=`<h2>deteil for account ${accountId}<h2>`
        }
    });
}

