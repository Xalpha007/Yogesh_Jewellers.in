let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


function sendmail() {
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var message = $('#Message').val();

    var Body='Name: '+name+'<br>Email: '+email+'<br>Message: '+message;
}
Email.send({
    Host : "smtp.gmail.com",
    Username : "username",
    To : 'kumarnverma2002@gmail.com',
    From : "kumarnverma2002@gmail.com",
    Subject : "New mail on Contact Form From:"+name,
    Body : Body
}).then(
    message => {
        if(message== 'OK'){
            alert("Your Mail Has Been Send. <br> Thankyou for connecting...")
        }
        else{
            console.error (message);
            alert("There is Error at sending message.")
        }
    }
);


