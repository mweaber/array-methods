const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionairs')
const sortBtn = document.getElementById('sort')
const calculateBtn = document.getElementById('calculate-wealth')

let data = [];

getRandUser();
getRandUser();
getRandUser();

// Fetch random user and add money 
async function getRandUser() {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }
    addData(newUser);
}

//Add new obj to array
function addData(obj) {
    data.push(obj)
    updateDOM();
}

//Update DOM 
function updateDOM(providedData = data){
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>'

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');

        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element)
    })
}

//format money 
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Doubles money for users
function doubleMoney() {
    data = data.map(user => { 
        return {...user, money: user.money * 2} 
    });
    updateDOM()
}

//Sort richest 
function sortRichest() {
    data.sort((a,b) => b.money - a.money);
    updateDOM();
}

//show millionaires
function showMillis() {
    data.filter(milli => milli > )
}

//Event listeners
addUserBtn.addEventListener('click', getRandUser)
doubleBtn.addEventListener('click', doubleMoney)
sortBtn.addEventListener('click', sortRichest)
showMillionairesBtn.addEventListener('click', showMillis)