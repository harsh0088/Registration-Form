let fname = document.getElementById('firstName');
fname.setAttribute('onfocusout' , 'nameval()');
let nameregex = /^[a-z ,.'-]+$/i;
let namespan = document.getElementById('name');

console.log(namespan);

function nameval() {
    if(nameregex.test(fname.value))
    {
        console.log(nameregex.test(fname.value));
        namespan.innerHTML =" Approved";
    }
    else
    {
        namespan.innerHTML=" Invalid";
    }
    
};


//Last name validation


let lastname = document.getElementById('lastName');
lastname.setAttribute('onfocusout' , 'lastval()');
let lnameregex = /^[a-z ,.'-]+$/i;
let  spanlast = document.getElementById('lastspan');
console.log(spanlast);

function lastval() {
    if(lnameregex.test(lastname.value))
    {
        spanlast.innerHTML = 'Approved';
    }
    else
     {
         spanlast.innerHTML = 'Invalid';
     }
}


//Phone Validation
 
let phoneNum = document.getElementById('phoneNumber');
phoneNum.setAttribute('onfocusout' , 'phoneval()');
let phoneregex = /^\d{10}$/;
let spanphone = document.getElementById('phones');
console.log(phoneNum);
console.log(phoneregex.test(phoneNum.value));

function phoneval() {
    if (phoneregex.test(phoneNum.value)) {
    
       spanphone.innerHTML = 'Correct Phone Number';
   }
   else
   {
       spanphone.innerHTML ='Incorrect Phone Number';
   }
}


//Email validation

let mailId = document.getElementById('email');
mailId.setAttribute('onfocusout' , 'mailval()');
let mailspan = document.getElementById('mails');
console.log(mailspan);
let mailreg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
console.log(mailreg.test());
function mailval() {
        
    if (mailreg.test(mailId.value))
    {
        console.log(mailId.value);
        console.log(mailreg.test(mailId.value));
            mailspan.innerHTML ='Email is Approved';
      
    }
    else
    {
        
        mailspan.innerHTML ="Email is not approved";
    }
    //   alert("You have entered an invalid email address!")
    //   return (false)
}

// Password Validation

let password = document.getElementById('password');
password.setAttribute('type' , 'password');
password.setAttribute('onfocusout' ,'fpass()');
let passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let spanpass =document.getElementById('pass1');


function fpass() {
    if (passregex.test(password.value)) {

       spanpass.innerHTML = 'Approved';
   }
   else
   {
       spanpass.innerHTML ='Not Valid';
   }
}

// Confirm password validation


let confirmPassword = document.getElementById('confirmPass');
confirmPassword.setAttribute('type' , 'password');
confirmPassword.setAttribute('onfocusout' , 'lpass()');

let confirmspan = document.getElementById('conpas');


function lpass() {
    if(password.value == confirmPassword.value)
    {
        confirmspan.innerHTML ="Aprroved";
    }
    else
    {
        confirmspan.innerHTML='Invalid';
    }
}



//button span
let buttonspan = document.getElementById('submit');
buttonspan.setAttribute('type' , 'submit');