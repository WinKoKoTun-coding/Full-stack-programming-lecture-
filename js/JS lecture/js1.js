const { escape } = require("lodash");


let display = document.getElementById('display');

function dis(content) {
    let p = document.createElement('p');
    p.textContent = content;
    p.style.border = '1px solid black';
    p.style.padding = '5px';
    p.style.margin = '5px 0';
    display.appendChild(p);
}
function getData(data) {
    data.forEach(item => {
        //  dis(`Id: ${item.id}, Title: ${item.title}, Price: ${item.price}`);
        // display.textContent += `Id: ${item.id}, Title: ${item.title}, Price: ${item.price}\n`;
        dis(`Id: ${item.id}, UserId: ${item.userId}, Date: ${item.date}, Products: ${JSON.stringify(item.products)} `);
        
    });
}


// let allcookie = allcookies.split(',');

// console.log(allcookie)
// for (let i = 1; i < allcookie.length; i++){
//    console.log(allcookie[i].id)
// }

// console.log()

async function fetchData() {
    try {
        let responses = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fetch('https://fakestoreapi.com/carts'));
            }, 3000);
        });
        
        let data = await responses.json();
       
        
        getData(data);

    }catch (error) {
        console.log('Error fetching data:', error);
    }
}

fetchData();

// const findsum = (p1, p2, callback) => {
//     if (!p1 || !p2) {
//         return callback(new Error("Missing Dependices..."),null)
//     }

//     const sum = p1 + p2;
//     const msg = 'the result is :' + sum;
//     return callback(null, sum, msg);
// }
// function promiseControl(func) {
//     return (...args) => {
//         return new Promise((resolve, reject) => {
//             function cc(err, ...data) {
//                 if (err) {
//                 return reject(err)
//             }
//                return resolve(data)
//             }
//             args.push(cc)
//             func.call(this, ...args)
//         })
        
//     }
     
// }
// const getSumFunc = promiseControl(findsum)
// getSumFunc(4, 5).then(message => console.log(message))




