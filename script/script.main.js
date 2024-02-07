btn.addEventListener('click',function(){
    row.removeChild(card)
    row.appendChild(card1)
    card1.append(cardHeader)
    card1.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>64,65,66,67,68,69,70,71,72,73<br>74,75,76,77,78,79,80,81,82,83<br>84,85,86,87,88,89,90,91,92,93<br>94,95,96,97,98,99,100</h4>`
    card1.append(card1BtnRow)
})

egtBtnYes.addEventListener('click',function(){
    row.removeChild(card8)
    row.appendChild(card)
    card.append(cardHeader)
    card.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = '<h4>Think Of Any Number From<br>1 - 100</h4>'
    card.append(btn)
    tryAgain()
})

ninBtnYes.addEventListener('click',function(){
    row.removeChild(card9)
    row.appendChild(card)
    card.append(cardHeader)
    card.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = '<h4>Think Of Any Number From<br>1 - 100</h4>'
    card.append(btn)
    tryAgain()
})


frstBtnYes.addEventListener('click',function(){
    row.removeChild(card1)
    row.appendChild(card2)
    card2.append(cardHeader)
    card2.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>32,33,34,35,36,37,38,39,40,41<br>42,43,44,45,46,47,48,49,50,51<br>52,53,54,55,56,57,58,59,60,61<br>62,63,96,97,98,99,100</h4>`
    card2.append(card2BtnRow)
    mindCalculation(64)
})

frstBtnNo.addEventListener('click',function(){
    row.removeChild(card1)
    row.appendChild(card2)
    card2.append(cardHeader)
    card2.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>32,33,34,35,36,37,38,39,40,41<br>42,43,44,45,46,47,48,49,50,51<br>52,53,54,55,56,57,58,59,60,61<br>62,63,96,97,98,99,100</h4>`
    card2.append(card2BtnRow)
    mindCalculation(0)
})

scndBtnYes.addEventListener('click',function(){
    row.removeChild(card2)
    row.appendChild(card3)
    card3.append(cardHeader)
    card3.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>16,17,18,19,20,21,22,23,24,25<br>26,27,28,29,30,31,48,49,50,51<br>52,53,54,55,56,57,58,59,60,61<br>62,63,80,81,82,83,84,85,86,87<br>88,89,90,91,92,93,94,95</h4>`
    card3.append(card3BtnRow)
    mindCalculation(32)
})

scndBtnNo.addEventListener('click',function(){
    row.removeChild(card2)
    row.appendChild(card3)
    card3.append(cardHeader)
    card3.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>16,17,18,19,20,21,22,23,24,25<br>26,27,28,29,30,31,48,49,50,51<br>52,53,54,55,56,57,58,59,60,61<br>62,63,80,81,82,83,84,85,86,87<br>88,89,90,91,92,93,94,95</h4>`
    card3.append(card3BtnRow)
    mindCalculation(0)
})

thrdBtnYes.addEventListener('click',function(){
    row.removeChild(card3)
    row.appendChild(card4)
    card4.append(cardHeader)
    card4.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>8,9,10,11,12,13,14,15,24,25<br>26,27,28,29,30,31,40,41,42,43<br>44,45,46,47,56,57,60,61,62,63<br>72,73,74,75,76,77,78,79,80,81<br>82,83,84,85,86,87,88,89,90,91<br>92,93,94,95</h4>`
    card4.append(card4BtnRow)
    mindCalculation(16)
})

thrdBtnNo.addEventListener('click',function(){
    row.removeChild(card3)
    row.appendChild(card4)
    card4.append(cardHeader)
    card4.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>8,9,10,11,12,13,14,15,24,25<br>26,27,28,29,30,31,40,41,42,43<br>44,45,46,47,56,57,60,61,62,63<br>72,73,74,75,76,77,78,79,80,81<br>82,83,84,85,86,87,88,89,90,91<br>92,93,94,95</h4>`
    card4.append(card4BtnRow)
    mindCalculation(0)
})

frthBtnYes.addEventListener('click',function(){
    row.removeChild(card4)
    row.appendChild(card5)
    card5.append(cardHeader)
    card5.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>4,5,6,7,11,12,13,14,15,20<br>21,22,23,28,29,30,31,36,37,38<br>39,44,45,46,47,52,53,54,55,60<br>61,62,63,68,69,70,71,78,79,84<br>85,86,87,92,93,94,95,100</h4>`
    card5.append(card5BtnRow)
    mindCalculation(8)
})

frthBtnNo.addEventListener('click',function(){
    row.removeChild(card4)
    row.appendChild(card5)
    card5.append(cardHeader)
    card5.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>4,5,6,7,11,12,13,14,15,20<br>21,22,23,28,29,30,31,36,37,38<br>39,44,45,46,47,52,53,54,55,60<br>61,62,63,68,69,70,71,78,79,84<br>85,86,87,92,93,94,95,100</h4>`
    card5.append(card5BtnRow)
    mindCalculation(0)
})

fivBtnYes.addEventListener('click',function(){
    row.removeChild(card5)
    row.appendChild(card6)
    card6.append(cardHeader)
    card6.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>2,3,6,7,10,11,14,15,18,19<br>22,23,26,27,30,31,34,35,38,39<br>42,43,46,47,50,51,54,55,58,59<br>62,63,66,67,70,71,74,75,76,77<br>78,79,82,83,86,87,90,91,94,95<br>98,99</h4>`
    card6.append(card6BtnRow)
    mindCalculation(4)
})

fivBtnNo.addEventListener('click',function(){
    row.removeChild(card5)
    row.appendChild(card6)
    card6.append(cardHeader)
    card6.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>2,3,6,7,10,11,14,15,18,19<br>22,23,26,27,30,31,34,35,38,39<br>42,43,46,47,50,51,54,55,58,59<br>62,63,66,67,70,71,74,75,76,77<br>78,79,82,83,86,87,90,91,94,95<br>98,99</h4>`
    card6.append(card6BtnRow)
    mindCalculation(0)
})

sixBtnYes.addEventListener('click',function(){
    row.removeChild(card6)
    row.appendChild(card7)
    card7.append(cardHeader)
    card7.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>1,3,5,7,9,11,13,15,17,19<br>21,23,25,27,29,31,33,35,37,39<br>41,43,45,47,49,51,53,55,57,59<br>61,63,65,67,69,71,73,75,77,79<br>81,83,85,87,89,91,93,95,97,99</h4>`
    card7.append(card7BtnRow)
    mindCalculation(2)
})

sixBtnNo.addEventListener('click',function(){
    row.removeChild(card6)
    row.appendChild(card7)
    card7.append(cardHeader)
    card7.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>Click <span style="color:green">Yes</span> If The Number On Your Mind Is In This List Or Click <span style="color:red">No</span><br><span>1,3,5,7,9,11,13,15,17,19<br>21,23,25,27,29,31,33,35,37,39<br>41,43,45,47,49,51,53,55,57,59<br>61,63,65,67,69,71,73,75,77,79<br>81,83,85,87,89,91,93,95,97,99</h4>`
    card7.append(card7BtnRow)
    mindCalculation(0)
})

svnBtnYes.addEventListener('click',function(){
    const result1 = result()
    if(result1 > 0 && result1 <= 100)
    {
    row.removeChild(card7)
    row.appendChild(card8)
    card8.append(cardHeader)
    card8.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>The Number On Your Mind<span style="color:green"><br>${result1}</span> </h4>`
    card8.append(card8BtnRow)
    }
    else
    {
        row.removeChild(card7)
        row.appendChild(card9)
        card9.setAttribute('class','card rounded-5 p-0')
        card9.append(cardHeader)
        card9.append(cardBody)
        cardBody.append(img)
        cardBody.append(textRow)
        textRow.innerHTML = `<h4>Please Think Of Number<span style="color:green"><br>1 - 100</span> </h4>`
        card9.append(card9BtnRow)

    }
    
})

svnBtnNo.addEventListener('click',function(){

   const result1 = result()
    if(result1 > 0 && result1 <= 100)
    {
    row.removeChild(card7)
    row.appendChild(card8)
    card8.append(cardHeader)
    card8.append(cardBody)
    cardBody.append(img)
    cardBody.append(textRow)
    textRow.innerHTML = `<h4>The Number On Your Mind<span style="color:green"><br>${result1}</span> </h4>`
    card8.append(card8BtnRow)
    }
    else
    {
        row.removeChild(card7)
        row.appendChild(card9)
        card9.setAttribute('class','card rounded-5 p-0')
        card9.append(cardHeader)
        card9.append(cardBody)
        cardBody.append(img)
        cardBody.append(textRow)
        textRow.innerHTML = `<h4>Please Think Of Number<span style="color:green"><br>1 - 100</span> </h4>`
        card9.append(card9BtnRow)
           
    }
    
})



let arr = [];

function mindCalculation(temp){
    
    arr.push(temp);
    
}

function result(){
    let result = arr.reduce((arr,num)=>arr+num)
        return result;

}

console.log(arr)

function tryAgain(){
    arr.length = 0 ;
}




