function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}

function br_create(){
    var break_ele = document.createElement("br")
    return break_ele;
}

function input_create(tagname,attrname,attrvalue,attrname1,attrvalue1){
var input_ele = document.createElement(tagname);
input_ele.setAttribute(attrname,attrvalue);
input_ele.setAttribute(attrname1,attrvalue1)
return input_ele;
}

var Firstname = label_create("label","for","Firstname","Firstname")
var line_break1 = br_create();
var Firstname_input = input_create("input","type","text","name","Firstname");

var line_break2 = br_create();

var Middelname = label_create("label","for","Middelname","Middelname")
var line_breakq = br_create();
var Middel_input = input_create("input","type","text","name","Middelname");

var line_break3 = br_create();

var Lastname = label_create("label","for","Lastname","Lastname")
var line_breakw = br_create();
var Last_input = input_create("input","type","text","name","Lastname");

var line_break4 = br_create();

var email = label_create("label","for","Email","email")
var line_breake = br_create();
var email_input = input_create("input","type","email","name","email");


document.body.append(Firstname,line_break1,Firstname_input,line_break2,Middelname,line_breakq,Middel_input,line_break3,Lastname,line_breakw,Last_input,line_break4,email,line_breake,email_input);
