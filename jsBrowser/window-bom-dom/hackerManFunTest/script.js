const black = () => {
    document.body.style.background ='black';
}
document.onload = black();

const a = [
    'Your device is being scanned',
    'Device Scanning done',
    'Facebook password is being scanned',
    '200000 password has been tried',
    'Your facebook password is found',
    'Facebook hack done...',
];

async function processArray() {
    for (let i = 0; i < a.length; i++) {
      await delay();
      text.innerText = a[i];
    }
}
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    });
}

processArray();