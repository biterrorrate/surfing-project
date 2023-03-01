////Form
const form = document.querySelector('.form');
const submitBtn = document.querySelector('#submit-btn');
const inputBackground = '#F08080'
const body = document.body;

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    if(validateForm(form)) {
        
        const data = {
            name: form.elements.name.value,
            phone: form.elements.phone.value,
            comment: form.elements.comment.value,
            to: 'loft@gmail.com'
        }

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            dataDeliveyMessage = inputMessage(xhr.response.message);
            body.appendChild(dataDeliveyMessage);
            body.style.height = '100%';
            body.style.overflow = 'hidden';
         });

        xhr.addEventListener('error', () => {
            dataDeliveyMessage = inputMessage('Ошибка отправки');
            body.appendChild(dataDeliveyMessage);
            body.style.height = '100%';
            body.style.overflow = 'hidden';
         });
    }

})
//Modal-window
function inputMessage (message) {

    const overlayElement = document.createElement('div');
    overlayElement.classList.add('modal');

    overlayElement.addEventListener('click', e => {
        if(e.target == overlayElement) {
            closeModal.click();
        }
    })

    const containerModal = document.createElement('div');
    containerModal.classList.add('modal__container');

    const contentModal = document.createElement('div');
    contentModal.classList.add('modal__content');
    contentModal.innerHTML = message;

    const closeModal = document.createElement('a');
    closeModal.classList.add('btn', 'btn--theme--yellow');
    closeModal.textContent = 'Закрыть';
    closeModal.href = "#";

    closeModal.addEventListener('click', e => {
        e.preventDefault()
        body.removeChild(overlayElement);
        body.style.height = 'auto';
        body.style.overflow = 'auto';
    })

    overlayElement.appendChild(containerModal);
    containerModal.appendChild(contentModal);
    containerModal.appendChild(closeModal);

    return overlayElement;   
}
//Validation
function validateForm(form) {
    let validate = true;

    if(!validateField(form.elements.name) || Number(form.elements.name.value) == 0) {
        validate = false;
        form.elements.name.style.background = inputBackground; 
    }else{
        form.elements.name.style.background = '#fff'; 
    }
    if(!validateField(form.elements.phone) || Number(form.elements.name.value) == 0) {
        validate = false;
        form.elements.phone.style.background = inputBackground; 
    }else{
        form.elements.phone.style.background = '#fff'; 
    }
    if(!validateField(form.elements.comment) || Number(form.elements.name.value) == 0) {
        validate = false;
        form.elements.comment.style.background = inputBackground; 
    }else{
        form.elements.comment.style.background = '#fff'; 
    }

    return validate;
}

function validateField(field) {
    return field.checkValidity();
}