let body = document.body
let father = document.createElement('div')
father.classList.add('father')


let arr = [
    //left
    'Why invest in SpiderShiba Inu?',
    'in case you have lived in a cave in the last few months we will give you a brief summary of what happened in crypto industry',
    'Learn more about SpiderShiba',

    //right
    'Massive trend',
    'Shiba inu has invaded the market with an infinity of other meme coins that collect thousands of BNB and after the launch they make mind-boggling numbers!',
    '100% of value, 0% of memecoin!',
    'We took the best from this trend and have decided to ride this tremendous wave success in Shiba Inu tokens, not only by launching a coin, but by creating a real NFT game p2e',
]

//создание левой части 
let left = document.createElement('div')
let h3_left = document.createElement('h1')
let p_left = document.createElement('p')
let buttton_left = document.createElement('button')

//офоррмление
left.classList.add('left')

h3_left.classList.add('h3_left')
h3_left.innerHTML = arr[0]

p_left.classList.add('p_left')
p_left.innerHTML = arr[1]

buttton_left.classList.add('button_left')
buttton_left.innerHTML = arr[2]


//создание середины
let cent = document.createElement('div')
let img = document.createElement('img')
let up = document.createElement('img')
let strelka = document.createElement('img')

let img_two = document.createElement('img')

//офоррмление
cent.classList.add('cent')

img.src = './img.SVG'
img.classList.add('img')

img_two.src = './img.SVG'
img_two.classList.add('img_two')



//создание правой части 
let right = document.createElement('div')
let h3_right = document.createElement('h3')
let p_right = document.createElement('p')
let h3_right_two = document.createElement('h3')
let p_right_two = document.createElement('p')

//офоррмление
right.classList.add('right')

h3_right.innerHTML = arr[3]
h3_right.classList.add('h3_right')

p_right.innerHTML = arr[4]
p_right.classList.add('p_right')

h3_right_two.innerHTML = arr[5]
h3_right_two.classList.add('h3_right')

p_right_two.innerHTML = arr[6]
p_right_two.classList.add('p_right')


body.append(father)
father.append(left, cent, right)

left.append(h3_left, p_left, buttton_left)
cent.append(img, img_two)
right.append(h3_right, p_right, h3_right_two, p_right_two)