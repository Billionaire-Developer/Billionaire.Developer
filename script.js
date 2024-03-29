let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('heder nav a[href*' + id + '=]').classList.add('active');
            })
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    //remove toggle icon and navbar when click navbar links(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
}

function sendMail(){
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_l7t6rhs";
const templateID = "template_1edf83k";

emailjs.send("service_l7t6rhs","template_1edf83k", params)
.then(function (res){
    alert("success! " + res.status);
})

}