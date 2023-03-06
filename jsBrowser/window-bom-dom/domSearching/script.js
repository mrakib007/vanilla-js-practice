// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const alert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     alert('Nice, you triggered this alert message!', 'success')
//   })
// }

// let cardTitle = document.getElementsByClassName('.card-title');
// cardTitle.style.color = "green";
const cardId = document.getElementById('firstCardTitle');
// cardId.style.color = "gray";

let cTitle = document.querySelectorAll(".card-title"); 
cTitle[0].style.color = "green";
cTitle[1].style.color = "blue";
cTitle[2].style.color = "red";

document.querySelector(".this").style.color = "cyan";
document.querySelector(".this").style.background = "green";

console.log(document.getElementsByTagName('a')); 
console.log(document.querySelector('.card').getElementsByTagName('a')); 
console.log(document.getElementsByName("search"));