
function validate() {
    let a = document.forms["form-1"]["fname"].value;
    if (a == "") {
        alert("First Name must be filled out");
        return false;
    }
    let b = document.forms["form-1"]["lname"].value;
    if (b == "") {
        alert("Last Name must be filled out");
        return false;
    }
    let c = document.forms["form-1"]["subject"].value;
    if (c == "") {
        alert("Subject must be filled out");
        return false;
    }
}