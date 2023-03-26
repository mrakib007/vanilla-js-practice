// sessionStorage.setItem('name','Rakib');
// sessionStorage.getItem('name');
// sessionStorage.removeItem('name');
// sessionStorage.clear();

window.onstorage = (e) =>{
    alert('Changed');
    console.log(e);
}