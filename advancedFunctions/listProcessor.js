function listProcessor(input) {
    let result = [];
    let object = {
        add(string) {
            result.push(string);
        },
        remove(string) {
            result = result.filter(x => x !== string);
        },
        print() {
            console.log(result.join(','));
        }
    };
    input.forEach(element => {
        if (element !== 'print') {
            let [state, string] = element.split(' ');
            object[state](string);
        } else {
            object.print();
        }
    });
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);