const shopId=document.querySelector("#shopID");
const pay=document.querySelector("#payBtn");
const spin=document.querySelector('#spin');
const pattern=/^[a-zA-Z]{1}[0-9]+$/;


pay.addEventListener('click',e=>{
    e.preventDefault;
    let html='<label><span id="spin" class="spinner-border float-right" role="status" aria-hidden="true"></span>Loading...</label>';
    pay.innerHTML=html;
    setTimeout(()=>{
        if(shopId.value.match(pattern)){
            alert('You can proceed to payment');
            shopId.value="";
            //$('#taxmodal').modal('hide');//hides the modal element
            setTimeout(()=>{
                window.location.href='/dashboard.html' //Navigates to dashboard
            },3000);
           
        }else{
            alert('Wrong input method.\nEnsure the shop number is correct!');
            shopId.value="";
            pay.innerHTML='Proceed to Payment';
        }
       
    },300);
})
