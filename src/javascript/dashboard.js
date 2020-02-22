//Card details variables
const cardName=document.querySelector('#cardName');
const cardNo=document.querySelector('#cardNo');
const expire=document.querySelector('#expirydate');
const code=document.querySelector('#securitycode');
const logo=document.querySelector('#paylogo');
const submitCard=document.querySelector('#submitcard');
const warn=document.querySelector('.warning');
const cards=document.querySelector('#card');
const bitcoin=document.querySelector('#bit');
const pal=document.querySelector('#pay-pal');

//Edit profile variables
const edithPhoto=document.querySelector('#edit');
const selectImage=document.querySelector('#image-file');
const picture=document.querySelector('.files'); //upload button
const fName=document.querySelector('#firstName');
const lName=document.querySelector('#lastName');
const mail=document.querySelector('#email');
const phoneNo=document.querySelector('#phone')
const shopNo=document.querySelector('#shop');
const city=document.querySelector('#city');
const state=document.querySelector('#state');
const street=document.querySelector('#street');
const save=document.querySelector('#changes-btn');


//complaints variables
const send=document.querySelector('.btn-send');
const firstName=document.querySelector('#mFName');
const lastName=document.querySelector('#mLName');
const email=document.querySelector('#mEmail');
const phone=document.querySelector('#mPhone');
const message=document.querySelector('#message');



//Main code section
//Code for Card details and validation modules
submitCard.addEventListener('click',(e)=>{
    const namePattern=/^[a-z]+$/i;
    const numbPattern=/^[0-9]+$/;
    const datePattern=/^[0-9]{2}\/[0-9]{2}$/;
    e.preventDefault();

    let html='<label><span id="spin" class="spinner-border float-right" role="status" aria-hidden="true"></span>Processing...</label>';
    submitCard.innerHTML=html;
    setTimeout(() => {
        if(cards.checked ||bitcoin.checked||pal.checked){
       
            if(!cardName.value.match(namePattern)||!cardNo.value.match(numbPattern)||!expire.value.match(datePattern)||!code.value.match(numbPattern))
            {
                warn.innerHTML='Wrong Input';
                warn.style.fontWeight='bold';
                warn.style.fontSize='1.2em';
                warn.style.marginTop='0';
                warn.style.color='red';
                submitCard.innerHTML='Submit';
            }else if(code.value.length>3||expire.value.length>5){
                warn.innerHTML='Wrong Input format!\nEnsure Card expiry date and CVC number are in correct format.';
                warn.style.fontWeight='bold';
                warn.style.fontSize='1.2em';
                warn.style.marginTop='0';
                warn.style.color='blue';
                cardName.style.width='350px';
                submitCard.innerHTML='Submit';
            }else{
                setTimeout(e=>{
                    alert('Transaction Successfull.');
                    cardName.value='';
                    cardNo.value='';
                    expire.value='';
                    code.value='';
                    logo.src='';
                    logo.style.display='none'; //hides the card logo
                    submitCard.innerHTML='Submit';
                },4000);
                warn.innerHTML='';
               // submitCard.innerHTML='Submit';
            }
    
        }else{
            warn.innerHTML='Please Select Payment Method First.';
            warn.style.fontWeight='bold';
            warn.style.fontSize='1.5em';
            warn.style.marginTop='0';
            warn.style.color='red';
            submitCard.innerHTML='Submit';
        }    
        
    }, 3000);
   
    
})
//code to display users card type using its cvc number entered.
cardNo.addEventListener('keyup',()=>{
    logo.style.width='48px';
    logo.style.heigth='48px';
    logo.style.display='block';
    if(cardNo.value.startsWith(4)){
        logo.src='/src/images/visa.png';
        cardNo.style.width='300px';
    }else if(cardNo.value.startsWith(5)){
        logo.src='/src/images/master.png';
        cardNo.style.width='300px';
    }else{
        logo.src='';
        logo.style.display='none';
        cardNo.style.width='328px';
    }
})

//Section of code for Edit profile modules
//profile picture edit
edithPhoto.addEventListener('click',(e)=>{
    e.preventDefault();
    selectImage.style.display='block';
    edithPhoto.style.display='none';
})
picture.addEventListener('click',(e)=>{
    e.preventDefault();
    let html='<label><span id="spin" class="spinner-border float-right" role="status" aria-hidden="true"></span>Loading...</label>';
    picture.innerHTML=html;
    setTimeout((e)=>{
        alert('Image uploaded successfully.');
        edithPhoto.style.display='block';
        selectImage.style.display='none';
        picture.innerHTML='Upload Photo';
    },4000);
})
save.addEventListener('click',(e)=>{
    e.preventDefault();
    const namePattern=/^[a-z]+$/i;
    const numbPattern=/^[0-9]+$/;
    const shopPattern=/^[a-zA-Z]{1}[0-9]+$/;
    const streetPattern=/^\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/;
    const mailPattern=/\S+@\S+\.\S+/;
    const states=/\s+/;
    let error=document.querySelector('.error');
    let success=document.querySelector('.successMessage');
    let html='<label><span id="spin" class="spinner-border float-right" role="status" aria-hidden="true"></span>Loading...</label>';

    save.innerHTML=html;
    setTimeout(() => {
        if(fName.value.match(namePattern) && lName.value.match(namePattern)&&
        mail.value.match(mailPattern) &&phoneNo.value.match(numbPattern) &&
        street.value.match(streetPattern)&& shopNo.value.match(shopPattern)&& 
        city.value.match(namePattern)&&state.value.match(states)){
        
        setTimeout(() => {
           alert('Changes saved successfully.');
           error.innerHTML='';
           success.innerHTML='Profile Updated with Success';
           success.style.color='green';
           save.innerHTML='Save Changes';
        }, 4000);
    }else{
        error.innerHTML='Incorrect Data Entry.'
        error.style.color='red';
        save.innerHTML='Save Changes';
    }

    }, 2000);
})
//Compliant logic code section
send.addEventListener('click',(e)=>{
    e.preventDefault();

    const namePattern=/^[a-z]+$/i;
    const numbPattern=/^[0-9]+$/;
    const mailPattern=/\S+@\S+\.\S+/;
    const states=/\s+/;
    let html='<label><span id="spin" class="spinner-border float-right" role="status" aria-hidden="true"></span>Loading...</label>';
    
    send.innerHTML=html;
    setTimeout(() => {
        if(firstName.value.match(namePattern)&&
        lastName.value.match(namePattern)&&email.value.match(mailPattern)&&
        phone.value.match(numbPattern)&&message.value.match(states))
    {
        alert('Message Sent.');
        send.innerHTML='Send Message';
    }else{
        alert('Message failed');
        send.innerHTML='Send Message';
    }
    }, 3000);
   
})