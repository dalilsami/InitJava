function    display_form() {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.id = "form-container";
    var form = document.createElement("form");
    var label = document.createElement("label");
    var label2 = document.createElement("label");
    var input = document.createElement("input");
    var input2 = document.createElement("input");
    div.appendChild(form);
    form.method = "post";
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(label2);
    form.appendChild(input2);
    var submit = document.createElement("input");
    form.appendChild(submit);
    submit.type = "submit";
    input.type = "text";
    input.name = "login";
    input2.type = "text";
    input2.name = "password";
    label.innerHTML = "Login";
    label2.innerHTML = "Password";
}