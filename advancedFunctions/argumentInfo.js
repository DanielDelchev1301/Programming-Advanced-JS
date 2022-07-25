function argumentInfo() {
    let obj = {};
    Array.from(arguments)
        .forEach(x => {
            let type = typeof x;
            console.log(`${type}: ${x}`);
            if (!obj.hasOwnProperty(type)) {
                obj[type] = 0;
            }
            obj[type]++;
        });
        let entries = Object.entries(obj);
        entries.sort((a, b) => b[1] - a[1])
            .forEach(x => {
                console.log(`${x[0]} = ${x[1]}`);
            });
        
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });