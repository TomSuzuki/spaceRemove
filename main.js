
function remove_space(id_input, id_output) {
    let text = document.getElementById(id_input).value;

    text = replaceAll(text, "\n", "");
    text = replaceAll(text, "\r", "");
    text = replaceAll(text, " ", "");

    document.getElementById(id_output).innerText = text;
}

function replaceAll(string, target, replacement) {
    for (var i in target) {
        var a = "";
        while (true) {
            a = string.replace(target[i], replacement);
            if (a == string) break;
            string = a;
        }
        string = a;
    }
    return a;
}