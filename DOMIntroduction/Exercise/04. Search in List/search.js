function search() {
    let search = document.getElementById('searchText').value;
    let townElements = Array.from(document.querySelectorAll('li'));
    let result = document.getElementById('result');
    let counter = 0;
    for (let town of townElements) {
        if (town.textContent.includes(search)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            counter++;
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    }
    result.textContent = `${counter} matches found`;
}