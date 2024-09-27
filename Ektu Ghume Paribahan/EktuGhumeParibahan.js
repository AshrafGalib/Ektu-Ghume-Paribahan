function press(x){
const getButtonName=document.getElementById(x)
getButtonName.classList.add('bg-green-400')
getButtonName.classList.remove('bg-slate-400')
getButtonName.disabled=true;
const getLeftSeat=document.getElementById('leftSeat')
const leftSeatInInt=parseInt(getLeftSeat.innerText)-1
getLeftSeat.innerText=leftSeatInInt
const getCountButton =document.getElementById('CountButton')
const getCountButtonInInt=parseInt(getCountButton.innerText)+1
getCountButton.innerText=getCountButtonInInt
const getSeatDiv =document.getElementById('getSeat')
const Div =document.createElement('div')
Div.classList.add('w-full','justify-between','flex','mt-2')
const p1 =document.createElement('p')
p1.innerText=getButtonName.innerText
Div.appendChild(p1)
const p2 =document.createElement('p')
p2.innerText='Economy'
Div.appendChild(p2)
const p3=document.createElement('p')
p3.innerText='860'
Div.appendChild(p3)
getSeatDiv.appendChild(Div)
const getTotalTkSpan=document.getElementById('getTotalTK')
const getTotalTkSpanValue =parseInt(getTotalTkSpan.innerText)
getTotalTkSpan.innerText=getTotalTkSpanValue+860
const getGrandTotalTkSpan=document.getElementById('getGrandTotalTK')
const getGrandTotalTkSpanValue=parseInt(getGrandTotalTkSpan.innerText)
getGrandTotalTkSpan.innerText=getGrandTotalTkSpanValue+860
}

function discountPrice (){
    const couponcodes =['NEW15','COUPLE20']
    const CouponCode =document.getElementById('couponCode')
    const getCouponcode =CouponCode.value
    console.log(getCouponcode)
    for(var i=0;i<couponcodes.length;i++){
        if(getCouponcode=='NEW15'){
            if(couponcodes[i]=='NEW15'){
               const getGrandTotalTkSpan=document.getElementById('getGrandTotalTK')
               const getGrandTotalTkSpanValue=parseInt(getGrandTotalTkSpan.innerText)
               getGrandTotalTkSpan.innerText=getGrandTotalTkSpanValue-129
               const getDiscountButton=document.getElementById('DiscountButton')
               getDiscountButton.disabled=true
            }
           
        }
         else if(getCouponcode=='COUPLE20'){
                if(couponcodes[i]=='COUPLE20'){
                    const getGrandTotalTkSpan=document.getElementById('getGrandTotalTK')
                    const getGrandTotalTkSpanValue=parseInt(getGrandTotalTkSpan.innerText)
                    getGrandTotalTkSpan.innerText=getGrandTotalTkSpanValue-172
                    const getDiscountButton=document.getElementById('DiscountButton')
                    getDiscountButton.disabled=true
                }
            }
        else{
            const getAlertDiv =document.getElementById('Alert')
            getAlertDiv.classList.add('pl-6', 'pr-6','pb-6')
            const P =document.createElement('p')
            P.classList.add('text-red-600','font-normal','text-xs')
            P.setAttribute('id','AlertPg')
            P.innerText='Alert : Insert correct coupon code.'
            getAlertDiv.appendChild(P)
        }
           
    }
}
document.getElementById('PhoneNumberInput').addEventListener('keyup',function(event){
    const getInputValue=event.target.value
    const getCountButton =document.getElementById('CountButton')
    const getCountButtonInInt=parseInt(getCountButton.innerText)
    const Number=getInputValue.split('')
    if(Number.length==11 && getCountButtonInInt>0){
        
        const getNextButton=document.getElementById('NextButton')
        getNextButton.removeAttribute('disabled')
    }
    else{
        const getNextButton=document.getElementById('NextButton')
        getNextButton.setAttribute('disabled',true)
    }
})

