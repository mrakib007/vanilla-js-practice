let table = document.body.firstElementChild.firstElementChild;
console.log(table);
console.log(table.caption);
console.log(table.rows[0].rowIndex);
for (const iterator of table.rows) {
    console.log(iterator)
}