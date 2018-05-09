var usernameDetails = ['manoj', 'Vicky', 'Anand', 'Dishen'];

var userDetail = {};

var userDetails = [ 
    { name:"Manoj", age:"", mailId:" ", Nationality:" "},
    { name:"Vicky", age:"", mailId:" ", Nationality:" "},
    { name:"Dishen", age:"", mailId:" ", Nationality:" "},
    { name:"Anand", age:"", mailId:" ", Nationality:" "}
];
var isUserNameValid;
var isUserEmailValid;
var isNumberValid;
var checkUpdate = false;
var isSelectedValueValid;
var percentage = 0, progressBack = 0, selectedValue;
var count = 0, backProgressCount = 0, countUserNameValue = 0, countUserEmailValue = 0, countNumber = 0, countOption = 0;
var initialValue = document.getElementById('select-value');


function progressUpdate() { 
    count++;   
    percentage = 25 * count; 
    console.log(percentage);
    document.getElementById('ProgressBar').style.width = percentage+"%";
    document.getElementById('current-progress').innerHTML = percentage+"%";
}

function progressBackPage() {
    backProgressCount++;
    var progressBackPagePercentage = 50;
    document.getElementById('ProgressBar').style.width = progressBackPagePercentage+"%";
    document.getElementById('current-progress').innerHTML = progressBackPagePercentage+"%";
}

function progressNextPage() {
    var progressNextPagePercentage = 75;
    document.getElementById('ProgressBar').style.width = progressNextPagePercentage+"%";
    document.getElementById('current-progress').innerHTML = progressNextPagePercentage+"%";
}

function progressComplete() {
    var progressCompletePercentage = 100;
    document.getElementById('ProgressBar').style.width = progressCompletePercentage+"%";
    document.getElementById('current-progress').innerHTML = progressCompletePercentage+"%";
}



function validateUserName() {
    var regex = /^[a-zA-Z ]{2,30}$/;
    var userName =  document.getElementById('user-name-value');
    
    if (regex.test(userName.value) ) {
        console.log("legth of details" + userDetails.length);
        for(var i=0; i< userDetails.length; i++) {
            //if((userName.value) === usernameDetails[i]) {
                if((userName.value) === userDetails[i].name) {
                
                document.getElementById('user-name-error').style.display = "block";
                document.getElementById('empty-user-name').style.display = "none";
                isUserNameValid = false;
                break;
            }
            else {
                isUserNameValid = true;
                document.getElementById('user-name-error').style.display = "none";
            }
        }

        while(isUserNameValid && (countUserNameValue === 0)) {
            userDetail.name = userName.value;
            progressUpdate();
            countUserNameValue++;
            break;
        }
    }
    else {
        isUserNameValid = false;
        document.getElementById('empty-user-name').style.display = "block";
        document.getElementById('user-name-error').style.display = "none";
        //return isUserNameValid;
    }
}


function validateUserEmail() {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userEmail = document.getElementById('email-id-value');
    console.log(userEmail.value);

    if(userEmail.value.length == 0){
        isUserEmailValid = false;
        document.getElementById('empty-mail-id').style.display = "block";
        document.getElementById('email-id-error').style.display = "none";
    }
    else if(!emailRegex.test(userEmail.value)) {
        //Email ID is not in valid format
        isUserEmailValid = false;
        document.getElementById('empty-mail-id').style.display = "none";
        document.getElementById('email-id-error').style.display = "block";
    }
    else if(emailRegex.test(userEmail.value) && (countUserEmailValue === 0)) {
        isUserEmailValid = true;
        //console.log("The validity of the user name is" + isUserNameValid);
        progressUpdate();
        countUserEmailValue++;
        userDetail.mailId = userEmail.value;
        document.getElementById('email-id-error').style.display = "none";
        document.getElementById('empty-mail-id').style.display = "none";
 
        // document.getElementById('user-details-screen-one').style.display = "none";
        // document.getElementById('user-details-screen-two').style.display = "block";
    }
}

 function validate() {
     //console.log(isUserNameValid);
     //console.log(isUserEmailValid);

     //var selectedValue = document.getElementById('select-value');
     var userAge = document.getElementById('number-value').value;

     //console.log(userNumber);
     if(selectedValue && userAge) {
        console.log('called here');
        progressComplete();
        document.getElementById('user-details-screen-one').style.display = "none";
        document.getElementById('user-details-screen-two').style.display = "block";
     }

     else if(selectedValue || userAge) {
        progressNextPage();
        document.getElementById('user-details-screen-one').style.display = "none";
        document.getElementById('user-details-screen-two').style.display = "block";
     }
     else if(isUserNameValid && isUserEmailValid) {
        document.getElementById('user-details-screen-one').style.display = "none";
        document.getElementById('user-details-screen-two').style.display = "block";
     }
     else {
        document.getElementById('empty-mail-id').style.display = "block";
     }
 }



function previouspage() {
    document.getElementById('user-details-screen-one').style.display = "block";
    document.getElementById('user-details-screen-two').style.display = "none";
    progressBackPage();
}


//This must be at the top
var initialValue = document.getElementById('select-value').value;

function validateNumber() {
    var numberValue = document.getElementById('number-value').value;
    
    if((numberValue>=0) && (numberValue<=100) && (countNumber === 0)) {
        isNumberValid = true;
        document.getElementById('number-error').style.display = "none"; 
        progressUpdate();
        countNumber++;
        userDetail.age = numberValue;
    }
    else {
       isNumberValid = false;
       document.getElementById('number-error').style.display = "block"; 
    }
}

function validateSelectedValue() {
    selectedValue = document.getElementById('select-value');
    console.log(selectedValue.value);

    if(selectedValue.value && isNumberValid && (countOption === 0))
    {
        progressUpdate();
        countOption++;
        userDetail.Nationality = selectedValue.value;
        document.getElementById('submitButton').disabled = false;
    }
}


function submitData() {
    userDetails.push(userDetail);
    console.log(userDetails);
    
    //document.getElementById('data-saved').style.display = "block";
    document.getElementById('user-details-screen-one').style.display = "none";
    document.getElementById('user-details-screen-two').style.display = "none";
    document.getElementById('view-data').style.display = "block";

    for(var i = userDetails.length-1; i>(userDetails.length-2); i--){
        console.log(userDetails[i]);
        document.getElementById('view-data').value = userDetails[i];
    }
}


function validateScreenTwoData() {
    //console.log('Changing data');
    //var initialValue = document.getElementById('select-value');
    var numberValue = document.getElementById('number-value').value;
    var selectedValue = document.getElementById('select-value');
    //alert( payeeCountry.options[ yourSelect.selectedIndex ].value );
    console.log(initialValue);
    //console.log(selectedValue.value);
        
        if(initialValue.value !== selectedValue.value )
        {
            document.getElementById('submitButton').disabled = false;
        }
    
}