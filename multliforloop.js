

var currencyList = [{
    currencyId: 11,
    currencyName: "BTC",
    Amount: "1000"
}, {
    currencyId: 12,
    currencyName: "BNB",
    Amount: "2000"
}, {
    currencyId: 13,
    currencyName: "TRX",
    Amount: "3000"
}, {
    currencyId: 14,
    currencyName: "BUSD",
    Amount: "4000"
}, {
    currencyId: 15,
    currencyName: "USDT",
    Amount: "5000"
}]


var currencyOwnerName = [{
    currencyId: 11,
    ownerName: "david",
}, {
    currencyId: 12,
    ownerName: "john",
}, {
    currencyId: 13,
    ownerName: "vikram",
}, {
    currencyId: 14,
    ownerName: "varun",
}, {
    currencyId: 15,
    ownerName: "vishal",
}]

var currencySymbol = [{
    currencyId: 11,
    currencySymbol: "bit coin",
}, {
    currencyId: 12,
    currencySymbol: "binance coin",
}, {
    currencyId: 13,
    currencySymbol: "tether",
}, {
    currencyId: 14,
    currencySymbol: "busd coin",
}, {
    currencyId: 15,
    currencySymbol: "usdt coin",
}]



async function multiforLoop() {
    currencyList.map((element) => {
        for (const currencyOwnerObj of currencyOwnerName) {
            if (element.currencyId === currencyOwnerObj.currencyId) {
                element.ownerName = currencyOwnerObj.ownerName
                for (const currencySymbolObj of currencySymbol) {
                    if (element.currencyId === currencySymbolObj.currencyId) {
                        element.currencySymbol = currencySymbolObj.currencySymbol
                        return element
                    }
                }
            }
        }
    })
    console.log('--------------------------> getDetails  >> ', currencyList);

}

multiforLoop()

