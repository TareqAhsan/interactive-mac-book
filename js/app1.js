const div1 = document.getElementById('8gb');
const div2 = document.getElementById('16gb');
const div3 = document.getElementById('256gb');
const div4 = document.getElementById('512gb');
const div5 = document.getElementById('1tb');

// shipping element 
const free = document.getElementById('friday-free');
const charge = document.getElementById('friday-charge');

// all cost field;
const Memory = document.getElementById('memory-cost');
const SSD  = document.getElementById('storage-cost');
const deliveryField = document.getElementById('delivery-cost');

 const basePrice = document.getElementById('base-price');
 const TotalCost = document.getElementById('total-cost');
 
//  bonus part 
const bonusField = document.getElementById('bonus');
const PromoText = document.getElementById('promo-text');
const promoBtn = document.getElementById('promo-btn');


// total function= 
function updateTotal() {
    const baseP = parseInt(basePrice.innerText);
    const deliveryCharge = parseInt(deliveryField.innerText)
    const momoryCharge = parseInt(Memory.innerText);
    const SSDCharge = parseInt(SSD.innerText);
    const total =baseP + deliveryCharge + momoryCharge + SSDCharge;
    TotalCost.innerText = total;
    bonusField.innerText = total;
    return total;
}

PromoText.addEventListener('keyup',function (event) {
    const Code = event.target.value;
    promoBtn.addEventListener('click',function () {
        if (Code == 'stevekaku') {
            const result = updateTotal();
            bonusField.innerText = result - (result*.2);
        }
    })
})

div1.addEventListener('click',function () {
    Memory.innerText = "0";
    updateTotal()
});

div2.addEventListener('click',function () {
    Memory.innerText = "180";
    updateTotal()
})




// SSD field update 
div3.addEventListener('click',function () {
    SSD.innerText = "0";
    updateTotal()
})
div4.addEventListener('click',function () {
    SSD.innerText = "100";
    updateTotal()
})
div5.addEventListener('click',function () {
    SSD.innerText = "180";
    updateTotal()
})

// delivey field update 

free.addEventListener('click',function () {
    deliveryField.innerText = "0";
    updateTotal()
})

charge.addEventListener('click',function () {
    deliveryField.innerText = "20";
    updateTotal()
})