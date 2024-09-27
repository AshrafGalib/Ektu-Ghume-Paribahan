function Clear(){
    const showDiv1=document.getElementById('showDiv')
    const showUl =document.getElementById('showUl1')
    const showDiv2=document.getElementById('showDiv1')
    const showUl1 =document.getElementById('showUl2')
    const getInputField= document.getElementById('InputValue')
    getInputField.value=''
    showDiv1.removeChild(showUl)
    showDiv2.removeChild(showUl1)
}
function getValue1(){
const getInputField= document.getElementById('InputValue')
const getInputFieldValue =getInputField.value
const InputValueInLowerCase =getInputFieldValue.toLowerCase()
const showDiv=document.getElementById('showDiv')
const createH3=document.createElement("h3")
createH3.innerText="Encryption"
createH3.classList.add('text-red-500')
showDiv.appendChild(createH3)
const createLi=document.createElement('ul')
createLi.setAttribute('id','showUl1')
showDiv.appendChild(createLi)
const getInputFieldValueArray =InputValueInLowerCase.split('')
const Alphabets ='abcdefghijklmnopqrstuvwxyz'
const AlphabetsArray=Alphabets.split('')
for(var i=1;i<AlphabetsArray.length;i++){
    const NewArray=[]
    for(var Value of getInputFieldValueArray){
       const C=(AlphabetsArray.indexOf(Value)+i) % 26
        const getNextAlphabet =AlphabetsArray[C]
        NewArray.push(getNextAlphabet)
    }
   NewArray.toString=function(){
    return this.join("")
}
const getUl1=document.getElementById('showUl1')
const createLi=document.createElement('li')
createLi.innerText=i+" shift :  "+NewArray.toString()
getUl1.appendChild(createLi)
}
}

function getValue2(){
    const getInputField =document.getElementById('InputValue')
    const getInputFieldValue =getInputField.value
    const InputValueInLowerCase =getInputFieldValue.toLowerCase()
    const showDiv=document.getElementById('showDiv1')
    const createH3=document.createElement("h3")
createH3.innerText="Decryption"
createH3.classList.add('text-red-500')
showDiv.appendChild(createH3)
const createLi=document.createElement('ul')
createLi.setAttribute('id','showUl2')
showDiv.appendChild(createLi)
const getInputFieldValueArray =InputValueInLowerCase.split('')
const Alphabets ='abcdefghijklmnopqrstuvwxyz'
const AlphabetsArray=Alphabets.split('')
for(var i=1;i<AlphabetsArray.length;i++){
    const NewArray=[]
    for(var Value of getInputFieldValueArray){
       var C=(AlphabetsArray.indexOf(Value)-i) % 26
       if(C<0){
        C=26+C;
       }
        const getNextAlphabet =AlphabetsArray[C]
        NewArray.push(getNextAlphabet)
    }
   NewArray.toString=function(){
    return this.join("")
   }
   const getUl2=document.getElementById('showUl2')
const createLi=document.createElement('li')
createLi.innerText=i+" shift :  "+NewArray.toString()
getUl2.appendChild(createLi)
}
}