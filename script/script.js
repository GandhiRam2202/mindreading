const conatFluid = document.createElement('div')
conatFluid.setAttribute('class','text-center')
document.body.append(conatFluid)

const h1Tag = document.createElement('h1')
h1Tag.innerText = 'Mind Reading'
conatFluid.append(h1Tag)

const cont = document.createElement('div')
cont.setAttribute('class','container')
document.body.append(cont)

const row = document.createElement('div')
row.setAttribute('class','row d-flex justify-content-center')
cont.append(row)

const card = document.createElement('div')
card.setAttribute('class','card rounded-5 p-0 fw-bolder')
row.append(card)

const cardHeader = document.createElement('div')
cardHeader.setAttribute('class','card-header text-center fw-bolder rounded-top-5 ')
cardHeader.innerText = 'Im Going To Find The Number You Think'
card.append(cardHeader)

const cardBody = document.createElement('div')
cardBody.setAttribute('class','card-body text-center')
card.append(cardBody)


const img = document.createElement('img')
img.setAttribute('class','card-img')
img.setAttribute('src','./images/fortune-teller-1024x640-1024x585-removebg-preview.png')
cardBody.append(img)


const textRow = document.createElement('div')
textRow.setAttribute('class','card-text')
cardBody.append(textRow)
textRow.innerHTML = '<h4>Think Of Any Number From<br>1 - 100</h4>'

const btn = document.createElement('button')
btn.innerHTML = '<h4>Ok</h4>'
btn.setAttribute('class','Ok border rounded-bottom-5')
card.append(btn)

const card1 = document.createElement('div')
card1.setAttribute('class','card rounded-5 p-0')

const card1BtnRow = document.createElement('div')
card1BtnRow.setAttribute('class','card-footer d-flex p-0')


const frstBtnYes = document.createElement('button')
frstBtnYes.setAttribute('class','Yes border')
frstBtnYes.innerHTML = '<h4>YES</h4>'
card1BtnRow.append(frstBtnYes)

const frstBtnNo = document.createElement('button')
frstBtnNo.setAttribute('class','No border')
frstBtnNo.innerHTML = '<h4>NO</h4>'
card1BtnRow.append(frstBtnNo)

const card2 = document.createElement('div')
card2.setAttribute('class','card rounded-5 p-0')

const card2BtnRow = document.createElement('div')
card2BtnRow.setAttribute('class','card-footer d-flex p-0')


const scndBtnYes = document.createElement('button')
scndBtnYes.setAttribute('class','Yes border')
scndBtnYes.innerHTML = '<h4>YES</h4>'
card2BtnRow.append(scndBtnYes)

const scndBtnNo = document.createElement('button')
scndBtnNo.setAttribute('class','No border')
scndBtnNo.innerHTML = '<h4>NO</h4>'
card2BtnRow.append(scndBtnNo)



const card3 = document.createElement('div')
card3.setAttribute('class','card rounded-5 p-0')

const card3BtnRow = document.createElement('div')
card3BtnRow.setAttribute('class','card-footer d-flex p-0')


const thrdBtnYes = document.createElement('button')
thrdBtnYes.setAttribute('class','Yes border')
thrdBtnYes.innerHTML = '<h4>YES</h4>'
card3BtnRow.append(thrdBtnYes)

const thrdBtnNo = document.createElement('button')
thrdBtnNo.setAttribute('class','No border')
thrdBtnNo.innerHTML = '<h4>NO</h4>'
card3BtnRow.append(thrdBtnNo)

const card4 = document.createElement('div')
card4.setAttribute('class','card rounded-5 p-0')

const card4BtnRow = document.createElement('div')
card4BtnRow.setAttribute('class','card-footer d-flex p-0')


const frthBtnYes = document.createElement('button')
frthBtnYes.setAttribute('class','Yes border')
frthBtnYes.innerHTML = '<h4>YES</h4>'
card4BtnRow.append(frthBtnYes)

const frthBtnNo = document.createElement('button')
frthBtnNo.setAttribute('class','No border')
frthBtnNo.innerHTML = '<h4>NO</h4>'
card4BtnRow.append(frthBtnNo)

const card5 = document.createElement('div')
card5.setAttribute('class','card rounded-5 p-0')

const card5BtnRow = document.createElement('div')
card5BtnRow.setAttribute('class','card-footer d-flex p-0')


const fivBtnYes = document.createElement('button')
fivBtnYes.setAttribute('class','Yes border')
fivBtnYes.innerHTML = '<h4>YES</h4>'
card5BtnRow.append(fivBtnYes)

const fivBtnNo = document.createElement('button')
fivBtnNo.setAttribute('class','No border')
fivBtnNo.innerHTML = '<h4>NO</h4>'
card5BtnRow.append(fivBtnNo)

const card6 = document.createElement('div')
card6.setAttribute('class','card rounded-5 p-0')

const card6BtnRow = document.createElement('div')
card6BtnRow.setAttribute('class','card-footer d-flex p-0')


const sixBtnYes = document.createElement('button')
sixBtnYes.setAttribute('class','Yes border')
sixBtnYes.innerHTML = '<h4>YES</h4>'
card6BtnRow.append(sixBtnYes)

const sixBtnNo = document.createElement('button')
sixBtnNo.setAttribute('class','No border')
sixBtnNo.innerHTML = '<h4>NO</h4>'
card6BtnRow.append(sixBtnNo)

const card7 = document.createElement('div')
card7.setAttribute('class','card rounded-5 p-0')

const card7BtnRow = document.createElement('div')
card7BtnRow.setAttribute('class','card-footer d-flex p-0')


const svnBtnYes = document.createElement('button')
svnBtnYes.setAttribute('class','Yes border')
svnBtnYes.innerHTML = '<h4>YES</h4>'
card7BtnRow.append(svnBtnYes)

const svnBtnNo = document.createElement('button')
svnBtnNo.setAttribute('class','No border')
svnBtnNo.innerHTML = '<h4>NO</h4>'
card7BtnRow.append(svnBtnNo)

const card8 = document.createElement('div')
card8.setAttribute('class','card rounded-5 p-0')

const card8BtnRow = document.createElement('div')
card8BtnRow.setAttribute('class','card-footer d-flex p-0')


const egtBtnYes = document.createElement('button')
egtBtnYes.setAttribute('class','Yes border rounded-bottom-5')
egtBtnYes.innerHTML = '<h4>Try Again</h4>'
card8BtnRow.append(egtBtnYes)

const card9 = document.createElement('div')
card8.setAttribute('class','card rounded-5 p-0')

const card9BtnRow = document.createElement('div')
card9BtnRow.setAttribute('class','card-footer d-flex p-0')


const ninBtnYes = document.createElement('button')
ninBtnYes.setAttribute('class','Yes border rounded-bottom-5')
ninBtnYes.innerHTML = '<h4>Try Again</h4>'
card9BtnRow.append(ninBtnYes)

