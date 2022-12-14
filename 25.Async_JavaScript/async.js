// CALLBACK HELL
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('olive', 1000, () => {
//     delayedColorChange('teal', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('magenta', 1000, () => {
//                 delayedColorChange('purple', 1000, () => {
//                     delayedColorChange('black', 1000);
//                 });
//             });
//         });
//     });
// });

// PROMISES INTRO
// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//This not much better
// const request = 
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('It WORKED!!!')
//         fakeRequestPromise('yelp.com/api/coffee/page1')
//             .then(() => {
//                 console.log("It worked on page 2")
//             })
//             .catch(() => {
//                 console.log('Oh no ERROR on page 2!!')
//             })
//     })
//     .catch(() => {
//         console.log('Oh no ERROR!!')
//     })

// This is MUCH BETTER
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('It WORKED!!! (page1)')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page1')
//     })
//     .then((data) => {
//         console.log('It WORKED!!! (page2)')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log('It WORKED!!! (page3)')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .catch((error) => {
//         console.log("Oh no the request failed :(", error)
//     })

// CREATING PROMISES
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("Your fake data here");
            }
            reject('Request ERROR 404!!')
        }, 3000)
    })
}

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("Done with request!! ", data)
//     })
//     .catch((error) => {
//         console.log("OH NO!!!!! ", error)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => {
//         return delayedColorChange('orange', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('yellow', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('lightGreen', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('violet', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('purple', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('pink', 1000)
//     })
//     //or
//     .then(() => delayedColorChange('blue', 1000)) // implemented return or sum.
//     .then(() => delayedColorChange('lightBlue', 1000))
//     .then(() => delayedColorChange('gray', 1000))
//     .then(() => delayedColorChange('black', 1000))
//     .then(() => delayedColorChange('whiteSmoke', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('red', 1000))

// ASYNC FUNCTIONS
// async function hello(){
//     //alwais returns a promise...
// }

const sing = async () => {
    return 'LALALALALA'
}

// IF A PROMISE RETURNS A VALUE, THE PROMISE WILL BE RESOLVED WITH THAT VALUE...

// PROMISE IS REJECTED WITH AN ERROR IN THE ASYNC FUNCTION

// const sing = async () => {
//    dkalsjlkaldkd.log
//     return 'LALALALALA'
// }

// const sing = async () => {
//    throw dkalsjlkaldkd.log"
//     return 'LALALALALA'
// }

// sing().then((data) => {
//     console.log("Promise resolved with:", data)
// })
// .catch((error) => {
//     console.log("OH NO, PROMISE REJECTED...");
//     console.log(error);
// })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'Welcome'
    throw 'Invalid Password'
}

login('asadasdasda', 'corgifeetarecute')
    .then((msg) => {
        console.log("LOGGED IN!!!")
        console.log(msg)
    })
    .catch((err) => {
        console.log(err)
    })

// AWAIT KEYWORD

// Odzgorej mas to funkcijo!!!!!!!!!!!!!!! ==>>
// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }


async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('lightGreen', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('lightBlue', 1000)
    await delayedColorChange('blue', 1000)
}

rainbow().then(() => console.log("END OF RAINBOW!"))


//CHEKNI GOR FUNKCIJO ===>
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 2000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }

}



