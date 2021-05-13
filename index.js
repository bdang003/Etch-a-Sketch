const maxDimensions = 16;
const main = document.querySelector('#main');
for(let i = 0; i < maxDimensions; i++){
    const row = document.createElement('div');
    row.classList = "row";
    
    for(let i = 0; i < maxDimensions; i++){
        const item = document.createElement('div');
        item.classList = "item";
        item.innerHTML = i;
        row.appendChild(item);
    }

    main.appendChild(row);
}