let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML + '<h1>Hello</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello Prepend</h1>';
// a.append(div);
a.prepend(div);

// a.replaceWith(div);