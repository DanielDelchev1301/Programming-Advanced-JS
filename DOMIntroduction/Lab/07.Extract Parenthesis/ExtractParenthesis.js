function extract(content) {
    let contentElement = document.querySelector(`#${content}`);
    let pattern = /\((.[^()]+)\)/g;
    let result = [];
    let match = pattern.exec(contentElement.textContent);
    while (match !== null) {
        result.push(match[1]);
        match = pattern.exec(contentElement.textContent);
    }
    return result.join('; ');
}