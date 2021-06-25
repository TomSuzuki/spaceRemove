
function remove_space(id_input, id_output) {
    let text = document.getElementById(id_input).value;

    text = replace_all(text, ["\n", "\r", " "], "");

    document.getElementById(id_output).innerText = text;
}

function replace_all(text, targets, replacement) {
    for (let i in targets) {
        let temp = "";
        while (true) {
            temp = text.replace(targets[i], replacement);
            if (temp == text) break;
            text = temp;
        }
    }
    return text;
}