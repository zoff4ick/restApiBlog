// function applyForVisa(documents, resolve, reject) {
//     console.log('Обрабка заяви');
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             Math.random() > 0 ? resolve({}) : reject('У візі відмовленно:нестача документів');
//         }, 2000);

//     });
//     return promise;
// }

// function getVisa(visa) {
//     console.info('Віза отримана')
//     return new Promise(function (resolve, reject) {
//         resolve(visa);
//     });
// };

// function bookHotel(visa) {
//     console.log(visa);
//     return new Promise(function (resolve, reject) {
//         reject('Немає місць');
//     });
// }

//     function bookTickets(booking) {
//         console.log('buying');
//         console.log("booking" + booking);
//     }

//     applyForVisa({})
//         .then(getVisa)
//         .then(bookHotel)
//         .then(bookTickets)
//         .catch(err => console.error(err)