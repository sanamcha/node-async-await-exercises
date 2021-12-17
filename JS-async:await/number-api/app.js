// Part 1: Number Facts
 
//1.

let favoriteNumber = 7;

async function number1() {
    let res = await axios.get(`http://numbersapi.com/${favoriteNumber}?json`)
    console.log(res)
}

number1()

//2.
let favoriteNumber2 = [3, 13, 27];

async function number2() {
    let res = await axios.get(`http://numbersapi.com/${favoriteNumber2}?json`)
    console.log(res)
}
number2()

//3.

async function number3(){
    let res  = await Promise.all(Array.from({length:4}, () => $.getJSON(`http://numbersapi.com/${favoriteNumber}?json`))
    );
    res.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
number3()


