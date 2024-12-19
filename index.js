let user = {
    mood: `happy`,
    hobby: 'lego', 
    premium: `true`, 
};

let { mood, hobby, premium } = user;
hobby = `skydiving`;
premium = `false`;

for (let key of Object.keys({ mood, hobby, premium })) {
    console.log(`${key}: ${key === 'mood' ? mood : key === 'hobby' ? hobby : premium}`);
}


let user = {
    mood: `happy`,
    hobby: 'lego', 
    premium: `true`, 
}
function countProps({ mood, hobby, premium }) {
    let keys = ['mood', 'hobby', 'premium'];
    return keys.length;
}
console.log(countProps(user));


let user = [
    {name: `Dima`, timeWork: 2000},
    {name: `Roman`, timeWork: 4000},
    {name: `Oleh`, timeWork: 200},
]
function findBestEmployee(employees){
    const userWork = employees.filter(employees => employees.timeWork > 1000);
    return userWork;
}
console.log(findBestEmployee(user));


let user = {
    Dima: 2000,
    Roman: 3000,
    Oleh: 200,
};
function countTotalSalary(employees) {
    let sum = 0;
    for (const salary of Object.values(employees)) {
        sum += salary;
    }
    return sum;
}
console.log(countTotalSalary(user));


let user = [ 
    {name: 'Dima', prop: 2000}, 
    {name: 'Roman', prop: 4000}, 
    {name: 'Oleh', prop: 200}, 
]; 
function getAllPropValues(arr, prop) { 
    let getText = arr.map(obj => obj[prop]).filter(value => value !== undefined); 
    return getText; 
} 
console.log(getAllPropValues(user, 'prop')); 
console.log(getAllPropValues(user, 'name'));


let users = [
    { name: 'Apple', price: 30, quantity: 3 },
    { name: 'Banana', price: 10, quantity: 5 },
    { name: 'Orange', price: 20, quantity: 2 }
];
function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(({ name }) => name === productName);
    if (product) {
        const { price, quantity } = product;
        return price * quantity;
    }
    return 0;
}
console.log(calculateTotalPrice(users, 'Apple'));
console.log(calculateTotalPrice(users, 'Banana'));
console.log(calculateTotalPrice(users, 'Orange'));


let balance = 0;
let transaction = [];
const deposit = (amount) => {
    balance += amount;
    transaction.push({ type: 'deposit', amount });
};
const withdraw = (amount) => {
    if (amount <= balance) {
        balance -= amount;
        transaction.push({ type: 'withdraw', amount });
    } else {
        console.log('Недостатньо коштів!');
    }
};
const toBalans = () => balance;
const toTransIstoria = () => transaction;
deposit(1000);
withdraw(500);
console.log(`На балансі залишилось: ${toBalans()}`);
console.log(toTransIstoria());
