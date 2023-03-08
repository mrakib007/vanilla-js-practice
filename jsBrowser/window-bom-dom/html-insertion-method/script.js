let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML + '<h1>Hello</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello Prepend</h1>';
// a.append(div);
a.prepend(div);

a.replaceWith(div);

second.insertAdjacentHTML('beforebegin','<div class="test">Before begin</div>');
second.insertAdjacentHTML('beforeend','<div class="test">Before end</div>');
second.insertAdjacentHTML('afterbegin','<div class="test">After Begin</div>');
second.insertAdjacentHTML('beforeend','<div class="test">After End</div>');

// second.remove();