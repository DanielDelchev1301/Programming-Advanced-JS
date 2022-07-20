function encodeAndDecodeMessages() {
    let textBeforeEncodeElement = document.querySelector('textarea[placeholder="Write your message here..."]');
    let textAfterEncodeElement = document.querySelector('textarea[placeholder="No messages..."]');
    let beforeButtonElement = textBeforeEncodeElement.parentElement.querySelector('button');
    let afterButtonElement = textAfterEncodeElement.parentElement.querySelector('button');
    beforeButtonElement.addEventListener('click', encode);
    afterButtonElement.addEventListener('click', decode);

    function encode() {
        let result = [];
        let text = textBeforeEncodeElement.value.split('');
        for (let char of text) {
            let code = char.charCodeAt();
            code++;
            let newChar = String.fromCharCode(code);
            result.push(newChar);
        }
        textAfterEncodeElement.value = result.join('');
        textBeforeEncodeElement.value = '';
    }

    function decode() {
        let result = [];
        let text = textAfterEncodeElement.value.split('');
        for (let char of text) {
            let code = char.charCodeAt();
            code--;
            let newChar = String.fromCharCode(code);
            result.push(newChar);
        }
        textAfterEncodeElement.value = result.join('');
    }
}