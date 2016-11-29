function display_form() {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.id = "form-container";
    var form = document.createElement("form");
    var input = document.createElement("input");
    var input2 = document.createElement("input");
    div.appendChild(form);
    form.appendChild(input);
    form.appendChild(input2);
    console.log("hello");
}