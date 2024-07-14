function copyToClipboard(id) {
    var copyText = document.getElementById(id).textContent;
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);
    
    var popup = document.getElementById("popup");
    popup.classList.add("show");
    setTimeout(function() {
        popup.classList.remove("show");
    }, 2000);
}
