document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        bankSteart()
    }
}

let templet = {
    client: `<li class="client">
    <label>id: </label><span>[id]</span><br>
    <label>firstName: </label><span>[firstName]</span><br>
    <label>lastName: </label><span>[lastName]</span><br>
</li>`,
    account: `<li class="account">
    <label>id: </label><span>[id]</span><br>
    <label>clientId: </label><span>[clientId]</span><br>
    <label>balans: </label><span>[balans]</span><br>
</li>`,
    trancsion: `<li class="transaction">
    <label>id: </label><span>[id]</span><br>
    <label>accounId: </label><span>[accounId]</span><br>
    <label>type: </label><span>[type]</span><br>
    <label>amount: </label><span>[amount]</span><br>
</li>`

}


function bankSteart() {
    document.querySelector('.client-list').innerHTML = render(templet.client, clients);
    let allclients = document.querySelectorAll('.client')
    allclients.forEach(cli => {
        cli.onclick = function (ev) {
            let mycli = ev.target.closest('.client')
            let clintId = mycli.querySelector('span').textContent
            let listacc = getAccountById(clintId)
            let listcli = getClaientById(clintId)
            document.querySelector('.accoun-list').innerHTML = render(templet.account, listacc);
            document.querySelector('.hclient').innerHTML = `<h2>account-list for client ${listcli.firstName+" "+listcli.lastName}<h2>`
            init()
        }
    })
}


function init() {
    let allAcaountsDiv = document.querySelectorAll('.account') 
    allAcaountsDiv.forEach(accDiv => {
        accDiv.onclick = function (ev) {
            let myAccDiv = ev.target.closest('.account')
            let accountId = myAccDiv.querySelector('span').textContent
            let listtra = getTransactionByAccounId(accountId)
            document.querySelector('.details-panel').innerHTML = render(templet.trancsion, listtra);
            document.querySelector('.haccoun').innerHTML = `<h2>deteil for account ${accountId}<h2>`
        }
    });
}

