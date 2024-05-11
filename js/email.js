let form = document.querySelector(".email-form");
let formSubmit = document.querySelector(".email-form__btn");
let email = document.querySelector(".email-form__input");

let popupSuccess = document.querySelector(".js-popup-success");
let popupSuccessX = document.querySelector(".js-popup-success .popup-body__x");
let popupSuccessClose = document.querySelector(".js-popup-success .popup-body__close");

let popupFailure = document.querySelector(".js-popup-failure");
let popupFailureX = document.querySelector(".js-popup-failure .popup-body__x");
let popupFailureClose = document.querySelector(".js-popup-failure .popup-body__close"); 


popupSuccessClose.onclick = function() {
    popupSuccess.style.display = "none";
}

popupSuccessX.onclick = function() {
    popupSuccess.style.display = "none";
}

popupFailureClose.onclick = function() {
    popupFailure.style.display = "none";
}

popupFailureX.onclick = function() {
    popupFailure.style.display = "none";
}


function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLocaleLowerCase());
}



function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}

formSubmit.addEventListener('click', (elem) => {
    elem.preventDefault();
    if(!isValidEmail(email.value)){
        email.classList.add('error');
        popupFailure.style.display = "block";
    }else {
        email.classList.remove('error')
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const data = {mail:email.value };
        postData(url, data)
            .then(response => {
                console.log(response);
                popupSuccess.style.display = "block";
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    })



