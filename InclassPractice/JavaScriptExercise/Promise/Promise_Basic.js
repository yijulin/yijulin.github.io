// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Success");
//     }, 3000);
// });

// promise1
//     .then(result => {
//         console.log(result);
//     })
//     .catch(ex => {
//         console.log("失敗原因 : " + ex);
//     })
//     .finally(() => {
//         console.log("Promise finally 完成");
//     });

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Success");
        reject("ERROR");
    }, 3000);
});

promise3.then(function (result) {
    console.log("Success");
}, function (ex) {
    console.log("失敗原因 : " + ex);
});
console.log(promise3);