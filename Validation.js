//This object will hold the user submitted data.
var userDetail = {};

//Array of objects, containing the data of existing users.
var userDetails = [ 
    { name:"Manoj", age:"", mailId:" ", Nationality:" "},
    { name:"Vicky", age:"", mailId:" ", Nationality:" "},
    { name:"Dishen", age:"", mailId:" ", Nationality:" "},
    { name:"Anand", age:"", mailId:" ", Nationality:" "}
];

//Declaration of global variables.
var isUserNameValid, isUserEmailValid, isNumberValid, isSelectedValueValid;
var checkUpdate = false;

//Initialisation of global variables.
var percentage = 0, progressBack = 0, selectedValue;
var count = 0, backProgressCount = 0, countUserNameValue = 0, countUserEmailValue = 0, countNumber = 0, countOption = 0;

//initialValue which holds the value of the selected option.
var initialValue = document.getElementById('select-value');


/* This function is called, once the fields are validated, which are filled by the user.
Every field counts 25 percent of the whole progress bar */
function progressUpdate() { 
    count++;   
    percentage = 25 * count; 
    console.log(percentage);
    document.getElementById('ProgressBar').style.width = percentage+"%";
    document.getElementById('current-progress').innerHTML = percentage+"%";
}

/* This function is called, when the user goes back to the previous screen.
So, this function eventually reduces the percent of the progress bar. */
function progressBackPage() {
    backProgressCount++;
    var progressBackPagePercentage = 50;
    document.getElementById('ProgressBar').style.width = progressBackPagePercentage+"%";
    document.getElementById('current-progress').innerHTML = progressBackPagePercentage+"%";
}

/* This function is called, when the user moves back again to the next screen, 
from the previous screen. When only one field in the screen 2 is validated, the overall percentage is 75 */
function progressNextPage() {
    var progressNextPagePercentage = 75;
    document.getElementById('ProgressBar').style.width = progressNextPagePercentage+"%";
    document.getElementById('current-progress').innerHTML = progressNextPagePercentage+"%";
}

/* This function is called, when the user moves back again to the next screen 
from the previous screen. When both the fields in the screen 2 are validated, the percentage is 100 */
function progressComplete() {
    var progressCompletePercentage = 100;
    document.getElementById('ProgressBar').style.width = progressCompletePercentage+"%";
    document.getElementById('current-progress').innerHTML = progressCompletePercentage+"%";
}

//This function is called, when the user moves back to the previous screen.
function previouspage() {
    document.getElementById('user-details-screen-one').style.display = "block";
    document.getElementById('user-details-screen-two').style.display = "none";
    progressBackPage();
}


/* Once the user fills the username field, this function is called, and this validates the input given
by the user. */
function validateUserName() {
    
    var regex = /^[a-zA-Z ]{2,30}$/;
    var userName =  document.getElementById('user-name-value');
    
    //Checks whether the input value is empty
    if(userName.value.length === 0) {
        isUserNameValid = false;
        document.getElementById('empty-user-name').style.display = "block";
        document.getElementById('user-name-value').style.borderColor="#FF0000";
    }
    
    //Checks whether the input value matches the regex.
    else if(regex.test(userName.value) ) {
        
        for(var i=0; i< userDetails.length; i++) {
            //Checks whether the input is available
            if((userName.value) === userDetails[i].name) {
                document.getElementById('user-name-error').style.display = "block";
                document.getElementById('user-name-value').style.borderColor="#FF0000";
                document.getElementById('empty-user-name').style.display = "none";
                isUserNameValid = false;
                break;
            }
            //When the input isn't already in the server, then the value is valid and stored in a variable.
            else {
                isUserNameValid = true;
                document.getElementById('user-name-error').style.display = "none";
                document.getElementById('empty-user-name').style.display = "none";
                document.getElementById('user-name-value').style.borderColor="grey";
            }
        }

        /*Checks whether the input is valid and the count value is checked, inorder to avoid calling the 
        progressUpdate method twice for the same field */
        while(isUserNameValid) {
            if((countUserNameValue === 0)) {
                userDetail.name = userName.value;
                document.getElementById('user-name-error').style.display = "none";
                document.getElementById('empty-user-name').style.display = "none";    
                progressUpdate();
                countUserNameValue++;
            }
            else {
                userDetail.name = userName.value;
            }
            break;
    }

        
    }
    
    //When the input value doesn't match the regex, then the error message is displayed
    else {
        isUserNameValid = false;
        document.getElementById('empty-user-name').style.display = "block";
        document.getElementById('user-name-value').style.borderColor="#FF0000";
        document.getElementById('user-name-error').style.display = "none";
    }
}

/* Once the user fills the mail Id field, this function is called, and this validates the input given
by the user. */
function validateUserEmail() {
    
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userEmail = document.getElementById('email-id-value');
    
    //Checks for empty value of the UserEmail
    if(userEmail.value.length === 0) {
        isUserEmailValid = false;
        document.getElementById('email-id-value').style.borderColor="#FF0000";
        document.getElementById('empty-mail-id').style.display = "block";
        document.getElementById('email-id-error').style.display = "none";
    }

    //Checks whether the input value doesn't match the regex
    else if(!emailRegex.test(userEmail.value)) {
        isUserEmailValid = false;
        document.getElementById('empty-mail-id').style.display = "none";
        document.getElementById('email-id-error').style.display = "block";
        document.getElementById('email-id-value').style.borderColor="#FF0000";
    }

    /* Checks whether the input value matches the regex and the count value is checked, inorder to avoid calling the 
       progressUpdate method twice for the same field */
    else if(emailRegex.test(userEmail.value) && (countUserEmailValue === 0)) {
        isUserEmailValid = true;
        progressUpdate();
        countUserEmailValue++;
        userDetail.mailId = userEmail.value;
        document.getElementById('email-id-error').style.display = "none";
        document.getElementById('empty-mail-id').style.display = "none";
        document.getElementById('email-id-value').style.borderColor="lightgrey";
    }

    /* Checks whether the re-entered input value is correct, and updates the value, without calling the
     progressupdate twice */
    else if((emailRegex.test(userEmail.value))) {
        isUserEmailValid = true;
        userDetail.mailId = userEmail.value;
        document.getElementById('email-id-error').style.display = "none";
        document.getElementById('empty-mail-id').style.display = "none";
        document.getElementById('email-id-value').style.borderColor="lightgrey";
    }
}

/* This function is called, when the next buton is clicked by the user
 This validaes all the entered fields and moves to the next page, if the validation was successfull*/
function validate() {
     
     var userAge = document.getElementById('number-value').value;

     //Checks whether the userName field is not valid and displays the error message
     if(!isUserNameValid) {
        document.getElementById('empty-user-name').style.display = "block";
        document.getElementById('user-name-value').style.borderColor="#FF0000";
     } 

     //Checks whether the userEmail field is not valid and displays the error message
     else if(!isUserEmailValid) {
        document.getElementById('empty-mail-id').style.display = "block";
        document.getElementById('email-id-value').style.borderColor="#FF0000";
     }
     //Checks whether both the user entered values are correct
     else if(isUserNameValid && isUserEmailValid) {
        document.getElementById('user-details-screen-one').style.display = "none";
        document.getElementById('user-details-screen-two').style.display = "block";
     }
     //Checks whether both fields fail
     else if((!isUserNameValid) && (!isUserEmailValid)) {
        document.getElementById('empty-user-name').style.display = "block";
        document.getElementById('user-name-value').style.borderColor="#FF0000";
        document.getElementById('empty-mail-id').style.display = "block";
        document.getElementById('email-id-value').style.borderColor="#FF0000";
     }
     //Check whether both the values are validated correctly. If so, it moves the next screen.
     else if(selectedValue && userAge) {
        console.log('called here');
        progressComplete();
        document.getElementById('user-details-screen-one').style.display = "none";
        document.getElementById('user-details-screen-two').style.display = "block";
     }
     //Checks whether any one of the value is valid
     else if(selectedValue || userAge) {
        progressNextPage();
        document.getElementById('user-details-screen-one').style.display = "none";
        document.getElementById('user-details-screen-two').style.display = "block";
     }
}


/* This function validates the age value, a field value entered by the user in the screen 2 */
function validateNumber() {
    
    var numberValue = document.getElementById('number-value').value;
    
    //Checks whether the entered value is between 0 and 100 and also checks the count.
    if((numberValue>=0) && (numberValue<=100) && (countNumber === 0)) {
        isNumberValid = true;
        document.getElementById('number-error').style.display = "none"; 
        document.getElementById('number-value').style.borderColor="lightgrey";
        progressUpdate();
        countNumber++;
        userDetail.age = numberValue;
    }
    //Checks whether the entered value is between 0 and 100, and this accounts for the re-entered value
    else if((numberValue>=0) && (numberValue<=100)) {
        isNumberValid = true;
        document.getElementById('number-error').style.display = "none"; 
        document.getElementById('number-value').style.borderColor="lightgrey";
        userDetail.age = numberValue;
    }
    //When the above consitions fail, this condition is called, displaying the error message.
    else {
       isNumberValid = false;
       document.getElementById('number-error').style.display = "block"; 
       document.getElementById('number-value').style.borderColor="#FF0000";
    }
}


/* This function validates the selected option value, 
a field value entered by the user in the screen 2 */
function validateSelectedValue() {
    
    selectedValue = document.getElementById('select-value');
    
    /* Checks whtheer the selected value is valid, numberfield is valid and count value
    Then it calls the progressUpdate method, and the Submit button is abled*/
    if(selectedValue.value && isNumberValid && (countOption === 0))
    {
        progressUpdate();
        countOption++;
        userDetail.Nationality = selectedValue.value;
        document.getElementById('submitButton').disabled = false;
    }
}

/* This function is called and executed when the user submits the data.
All the user submitted data is stored in the userDetail object and that object is pushed to the array.
From the array, we get the submitted data and display in the last screen */
function submitData() {
    userDetails.push(userDetail);
    
    document.getElementById('user-details-screen-one').style.display = "none";
    document.getElementById('user-details-screen-two').style.display = "none";
    document.getElementById('view-user-details').style.display = "block";

    for(var i = userDetails.length-1; i>(userDetails.length-2); i--){
        console.log(userDetails[i]);
        console.log(userDetails[i].name);
        document.getElementById('data-userName').innerHTML = userDetails[i].name;
        document.getElementById('data-userMailID').innerHTML = userDetails[i].mailId;
        document.getElementById('data-userAge').innerHTML = userDetails[i].age;
        document.getElementById('data-userNationality').innerHTML = userDetails[i].Nationality;
    }
}


