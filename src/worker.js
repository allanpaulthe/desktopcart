const workercode = () => {

    let onmessage = function () {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                postMessage(this.responseText)
            }
        };
        xhttp.open("GET", "http://10.7.50.88:4000/user/cart", true);
        xhttp.send();

    };
};

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker = URL.createObjectURL(blob);

export default worker;

