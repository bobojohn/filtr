const purchases = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 3000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 3000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
        
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 3000, category: 'food'},
    ]},
]
let maxAmoutPurchases =purchases.map(o => ({
    date:o.date,
    value:o.values.length,
})).reduce((a,b) => a.value>b.value ?a:b)
console.log(maxAmoutPurchases)

let maxCountPurchases =purchases.map(o =>({
    date:o.date,
    amount:o.values.reduce((a,b) => a+b.amount,0)
})).reduce((a,b) => a.amount>b.amount ? a : b);
console.log(maxCountPurchases)


let maxPricePurchaseInDay = purchases.map(o =>o.values)
    .flat()
    .reduce((acc,curr) => acc.amount > curr.amount ? acc:curr);
console.log(maxPricePurchaseInDay);


const mapped = purchases.map(o => o.values)
    .flat()
    .reduce((acc, curr) => {
        const existent = acc.find(o => o.category === curr.category);
        if (existent === undefined) {
            acc.push({
                category: curr.category,
                amount: curr.amount,
            });
        } else {
            existent.amount += curr.amount;
        }
        return acc;
    }, []).reduce((acc, curr) => acc.amount > curr.amount ? acc : curr)
;
console.log(mapped);




const minPricePurchaseInDay = purchases.map(o => o.values)
.flat()
.map((o, index, array) => o.amount / array.length
).reduce((acc, curr) => acc + curr)

console.log(minPricePurchaseInDay);


const statisticsForDay = purchases.map(o => ({
    data: o.date,
    amount: o.values.map(o => o.amount).reduce((acc, curr) => acc + curr)
}));

console.log(statisticsForDay);


