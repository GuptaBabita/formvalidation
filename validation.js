var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var minNumberofChars = 6;
  var maxNumberofChars = 16;
  var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var namereg =/^([a-zA-Z0-9_\.\-])+$/;

var button = document.getElementById('submitButton');
var mydata = [];
button.onclick = function(e) {
e.preventDefault();
var valid = true;
  var inputs = document.getElementsByClassName('form-control');
  var errors = document.getElementsByClassName('alert');


    for(var i = 0; i< inputs.length;i++){

      if(inputs[i].value == "" ){
        errors[i].style.display = "block";
        valid = false;

      }

      if(!namereg.test(inputs[i].value) && (inputs[i].name)  == "name") {
    errors[0].style.display = "block";
        valid = false;
    }

      if (!filter.test(email.value)) {
        errors[1].style.display = "block";
        valid = false;
      }
      if (regex.test(inputs[2].value) == false){
          errors[2].style.display = "block";
            valid = false;
        }

     if(inputs[3].value.length < minNumberofChars || inputs[3].value.length > maxNumberofChars){
                  errors[3].style.display = "block";
                    valid = false;
             }

             if(!regularExpression.test(inputs[3].value)) {
                      errors[3].style.display = "block";
                        valid = false;
                 }

    else {
          errors[i].style.display = "none";
        console.log(inputs[i].value);
    }
  }
if(valid){
  var data = {
     name: inputs[0].value,
     email:inputs[1].value,
     phone: inputs[2].value,
     password: inputs[3].value
     }
   mydata.push(data);
  // console.log(mydata);
  render();
}

}
var table = document.getElementById('table');
function render(){
var HTMLstring = "";
var index = 0;
  mydata.forEach(function(element) {

    HTMLstring +=  "<tr> <td>"+ element.name+" </td> <td>"+ element.email+" </td> <td>"+element.phone+" </td> <td>"+ element.password+" </td> <td>  <button type='button' id='myBtn' onclick='myFunctionbutton("+index+")'>Delete</button> </td> <td> <button type='button' id='editBtn' onclick='myFunctionedit("+index+")'>Edit</button> </td> </tr>";
    //console.log(element);
    index++;
      });

table.innerHTML= HTMLstring;
}

function myFunctionbutton(index) {
    mydata.splice(index, 1);
  //console.log("delete");

  render();
}
function myFunctionedit(index){
var row = table.getElementsByTagName('tr');
//console.log(row);
var inputstring = "<td> <input type ='text' value='"+ mydata[index].name+ "' name='name'> <div class='alert alert-danger'><strong>Error!</strong> Please enter the name.</div></td> <td><input type ='text'  value='"+ mydata[index].email+ "' name='email'> <div class='alert alert-danger'><strong>Error!</strong> Please enter the email.</div></td><td><input type ='text'   value='"+ mydata[index].phone+ "'name='phone'> <div class='alert alert-danger'><strong>Error!</strong> Please enter the phone.</div></td><td><input type ='text'  value='"+ mydata[index].password+ "' name='password'><div class='alert alert-danger'><strong>Error!</strong> Please enter the password.</div> <td>  <button type='button'  disabled>Delete</button> </td> <td> <button type='button' id='saveBtn' onclick='myFunctionsave("+index+")'>save</button> </td></td>"
//console.log(inputstring);
row[index].innerHTML= inputstring;
}

function myFunctionsave(index){

var row = table.getElementsByTagName('tr');
var tablecel = row[index].getElementsByTagName('td');
 mydata[index].name = tablecel[0].getElementsByTagName('input')[0].value;
 mydata[index].email= tablecel[1].getElementsByTagName('input')[0].value;
 mydata[index].phone = tablecel[2].getElementsByTagName('input')[0].value;
 mydata[index].password = tablecel[3].getElementsByTagName('input')[0].value;
var errors = row[index].getElementsByClassName('alert');
//console.log(errors);
var valid = true;
 if(mydata[index].name == "" ){

   errors[0].style.display = "block";
   console.log(errors[0]);
   valid = false;

 }
 else {
     errors[0].style.display = "none";

 }


 if(mydata[index].email == "" ){
  errors[1].style.display = "block";
   console.log(errors[1]);
   valid = false;
}

 if (!filter.test(mydata[index].email)) {
   errors[1].style.display = "block";
   valid = false;
 }



 else {
     errors[1].style.display = "none";

 }


 if(mydata[index].phone == "" ){

   errors[2].style.display = "block";
  valid = false;

 }

 if (regex.test(mydata[index].phone) == false){
     errors[2].style.display = "block";
       valid = false;
   }

else {
     errors[2].style.display = "none";

 }


 if(mydata[index].password == "" ){

   errors[3].style.display = "block";
  valid = false;

 }
 if(mydata[index].password < minNumberofChars || mydata[index].password > maxNumberofChars){
              errors[3].style.display = "block";
                valid = false;
         }

         if(!regularExpression.test(mydata[index].password)) {
                  errors[3].style.display = "block";
                    valid = false;
             }
 else {
     errors[3].style.display = "none";

 }

 if(valid){
     render();
 }
}
