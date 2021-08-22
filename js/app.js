// // function getInput(isTrue,iD,val) {
  
// //     const mCost = document.getElementById(iD +'-cost');
// //     const mCostTxt = mCost.innerText;
// //     let mVal = parseInt(mCostTxt);
// //     if(mVal<val && isTrue){
      
// //     mVal = mVal + val;
// //     console.log(mVal);
// // }else if(isTrue==false && mVal>0){
    
// //     mVal = mVal - val;
// // }
// // mCost.innerText = mVal;
// // const total = document.getElementById('total-cost');
// // const totalTxt = total.innerText;
// // const totalTxtVal = parseInt(totalTxt);
// // total.innerText = totalTxtVal + mVal;
// // }

// function getInput(iD,val) {
//     debugger;
// const mCost = document.getElementById(iD);
// let mCostTxt = mCost.innerText;
// const mCostVal = val;
// mCost.innerText =  mCostVal;
// return mCostVal;
// }

// function Total(inputVal,isTrue) {
//     const total = document.getElementById('total-cost');
//     const totalTxt = total.innerText;
//     let totalTxtVal = parseInt(totalTxt);
//     if (isTrue) {
//         totalTxtVal = totalTxtVal +  inputVal;
//     }else if (isTrue==false && totalTxtVal>1299) {
//         totalTxtVal = totalTxtVal - inputVal;
//     }
//     total.innerText = totalTxtVal;
// }



// document.getElementById('16gb').addEventListener('click',function () {
//     const res = getInput('memory-cost',180)
//         Total(180,true);

// })
// document.getElementById('8gb').addEventListener('click',function () {
//     const res = getInput('memory-cost',0);
//         Total(180,false);
// })


// document.getElementById('1tb').addEventListener('click',function () {
//     getInput('storage-cost',180);
//     Total(180,true);
// })
// document.getElementById('512gb').addEventListener('click',function () {
//     getInput('storage-cost',100);
//     Total(100,true);
// })
// document.getElementById('256gb').addEventListener('click',function () {
//     getInput('storage-cost',0);
//     Total(180,false);
// })



// document.getElementById('friday-charge').addEventListener('click',function () {
//     getInput('delivery-cost',20);
//     Total(20,true);
// })
// document.getElementById('friday-free').addEventListener('click',function () {
//     getInput('delivery-cost',0);
//     Total(20,false);
// })