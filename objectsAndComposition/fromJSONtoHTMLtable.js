function fromJSONtoHTMLtable(input) {
    let obj = JSON.parse(input);
    console.log('<table>');
    let first = 1;
    for (let curr of obj) {
        let keys = Object.keys(curr);
        let result = '<tr>';
        if (first == 1) {
            for (let key of keys) {
                result += `<th>${key}</th>`;
            }
            result += '</tr>';
            console.log(result);
            result = '<tr>';
            for (let key of keys) {
                result += `<td>${curr[key]}</td>`;
            }
            first++;
        } else {
            for (let key of keys) {
                result += `<td>${curr[key]}</td>`;
            }
        }
        result += '</tr>';
        console.log(result);
    }
    console.log('</table>');
}
fromJSONtoHTMLtable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);