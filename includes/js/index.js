


        ScrollReveal({
            reset: true,
            distance: '60px',
            duration: '2000',
            delay: '300'
        });
        ScrollReveal().reveal('.personal_info , .development_div ,.left_port', { delay: 100, origin: 'left' });
        ScrollReveal().reveal('.work_info, .page_info ,.template_cart', { delay: 300, origin: 'bottom' });
        ScrollReveal().reveal('.nav_cart ,.data_div ,.right_port', { delay: 200, origin: 'right' });
        ScrollReveal().reveal('.about_contents  ,.desing_div ,.portfolio1',{delay: 350, origin: 'top'});



let main=document.getElementById("navigate");
let hide=document.getElementById("def_nav");
let show=document.getElementById("nav_item");
let theme= document.querySelector(":root")

function Open(){
    hide.style.display="block"
    hide.style.transition="none"
    hide.style.transform="none"
    show.style.display="none"
}

function Close(){
    hide.style.display="none"
    show.style.display="block"
}

function SendEmail() {
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("clint-message").value;
    let phone  = document.getElementById("phone").value;
    let company = document.getElementById("budjet").value;
    let purpose = document.getElementById("Select-Subject").value;
    let finalmessage = ` Hi Nivas. 
    
                        I am ${name} We are calling From ${company} Your Shortlist in ${purpose} on our company are you intrested to work with us send your resume to this mail id ${email} or contact  to mobile ${phone}......... ${message} `
    // Email.send({
    //     From : "santhananivas9894@gmail.com",
    //     Subject : "Mail from website",
    //     Body : finalmessage
    // }).then(
    //   message => alert(message)
    // );

    // console.log(name)
    // console.log(email)
    // console.log(message)
    // console.log(phone)
    // console.log(budjet)
    // console.log(purpose)

    if (name <= 0){
        document.getElementById("name_tag").style.color="red";
        alert('Please Enter Your Name')
    }

    else if (email <=0 ){
        document.getElementById("email_tag").style.color="red"
        alert('Please Enter Your Email')
    }

    else if (phone <=0 ){
        document.getElementById("phone_tag").style.color="red"
        alert('Please Enter Your Phone Number')
    }

    else if (budjet <=0 ){
        document.getElementById("budjet_tag").style.color="red"
        alert('Please Enter Your Budjet')
    }

    else if (message <=0 ){
        document.getElementById("message_tag").style.color="red"
        alert('Please Enter Your Message')
    }
    
    else{
        window.open(`mailto:santhananivas9894@gmail.com?subject=HII NIVAS JOB-OFFER&body=${finalmessage}`);
    }
}

function ChangeTheme(val){
    theme.style.setProperty('--color',val);
}
