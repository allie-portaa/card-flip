console.log('this works')

const url = 'https://dog.ceo/api/breeds/image/random'


//card 1

let button_one = document.getElementById ("box-one-front");

async function getData_1 (event) {
    // event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {
        let image_1 = document.getElementById('box-one-back')
        image_1.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_one.addEventListener('click', getData_1)

//card 2

let button_two = document.getElementById ("box-two-front")

async function getData_2 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_2 = document.getElementById('box-two-back')
        image_2.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_two.addEventListener('click', getData_2)

//card 3

let button_three = document.getElementById ("box-three-front")

async function getData_3 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_3 = document.getElementById('box-three-back')
        image_3.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_three.addEventListener('click', getData_3)

//card 4

let button_four = document.getElementById ("box-four-front")

async function getData_4 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_4 = document.getElementById('box-four-back')
        image_4.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_four.addEventListener('click', getData_4)

//card 5

let button_five = document.getElementById ("box-five-front")

async function getData_5 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_5 = document.getElementById('box-five-back')
        image_5.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_five.addEventListener('click', getData_5)

//card 6

let button_six = document.getElementById ("box-six-front")

async function getData_6 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_6 = document.getElementById('box-six-back')
        image_6.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_six.addEventListener('click', getData_6)

//card 7

let button_seven = document.getElementById ("box-seven-front")

async function getData_7 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_7 = document.getElementById('box-seven-back')
        image_7.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_seven.addEventListener('click', getData_7)

// card 8

let button_eight = document.getElementById ("box-eight-front")

async function getData_8 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_8 = document.getElementById('box-eight-back')
        image_8.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_eight.addEventListener('click', getData_8)

//card 9

let button_nine = document.getElementById ("box-nine-front")

async function getData_9 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_9 = document.getElementById('box-nine-back')
        image_9.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_nine.addEventListener('click', getData_9)

//card 10

let button_ten = document.getElementById ("box-ten-front")

async function getData_10 (event) {
    event.preventDefault()

    fetch(url)
    .then(res => {
        return res.json()
    })

    .then(res => {

        let image_10 = document.getElementById('box-ten-back')
        image_10.src = res.message

        console.log('success', res)
    })

    .catch (err =>{
        console.log('error', err)
    })

}

button_ten.addEventListener('click', getData_10)

// Card Flip

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
