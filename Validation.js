var userDetail = {};
var userDetails = [ 
    { name:"Manoj", age:"", mailId:" ", Nationality:" "},
    { name:"Vicky", age:"", mailId:" ", Nationality:" "},
    { name:"Dishen", age:"", mailId:" ", Nationality:" "},
    { name:"Anand", age:"", mailId:" ", Nationality:" "}
];
var isUserNameValid, isUserEmailValid, isNumberValid, isSelectedValueValid;
var checkUpdate = false;
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
        
        for(var i=0; i< userDetails.length; i++) {
            
            if((userName.value) === userDetails[i].name) {
                document.getElementById('user-name-error').style.display = "block";
                document.getElementById('user-name-value').style.borderColor="#FF0000";
                document.getElementById('empty-user-name').style.display = "none";
                isUserNameValid = false;
                break;
            }
            else {
                isUserNameValid = true;
                document.getElementById('user-name-error').style.display = "none";
                document.getElementById('empty-user-name').style.display = "none";
                document.getElementById('user-name-value').style.borderColor="grey";
            }
        }

        while(isUserNameValid && (countUserNameValue === 0)) {
            userDetail.name = userName.value;
            document.getElementById('user-name-error').style.display = "none";
            document.getElementById('empty-user-name').style.display = "none";    
            progressUpdate();
            countUserNameValue++;
            break;
        }
    }
    else {
        isUserNameValid = false;
        document.getElementById('empty-user-name').style.display = "block";
        document.getElementById('user-name-value').style.borderColor="#FF0000";
        document.getElementById('user-name-error').style.display = "none";
    }
}


function validateUserEmail() {
    
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userEmail = document.getElementById('email-id-value');
    
    if(userEmail.value.length === 0) {
        isUserEmailValid = false;
        document.getElementById('email-id-value').style.borderColor="#FF0000";
        document.getElementById('empty-mail-id').style.display = "block";
        document.getElementById('email-id-error').style.display = "none";
    }
    else if(!emailRegex.test(userEmail.value)) {
        isUserEmailValid = false;
        document.getElementById('empty-mail-id').style.display = "none";
        document.getElementById('email-id-error').style.display = "block";
        document.getElementById('email-id-value').style.borderColor="#FF0000";
    }
    else if(emailRegex.test(userEmail.value) && (countUserEmailValue === 0)) {
        isUserEmailValid = true;
        progressUpdate();
        countUserEmailValue++;
        userDetail.mailId = userEmail.value;
        document.getElementById('email-id-error').style.display = "none";
        document.getElementById('empty-mail-id').style.display = "none";
        document.getElementById('email-id-value').style.borderColor="lightgrey";
    }
    else if((emailRegex.test(userEmail.value))) {
        isUserEmailValid = true;
        userDetail.mailId = userEmail.value;
        document.getElementById('email-id-error').style.display = "none";
        document.getElementById('empty-mail-id').style.display = "none";
        document.getElementById('email-id-value').style.borderColor="lightgrey";
    }
}

 function validate() {
     
     var userAge = document.getElementById('number-value').value;

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
     else if((!isUserNameValid) && (!isUserEmailValid)) {
        document.getElementById('empty-user-name').style.display = "block";
        document.getElementById('user-name-value').style.borderColor="#FF0000";
        document.getElementById('empty-mail-id').style.display = "block";
        document.getElementById('email-id-value').style.borderColor="#FF0000";
        //document.getElementById('empty-mail-id').style.display = "block";
     }

     else if(!isUserNameValid) {
        document.getElementById('empty-user-name').style.display = "block";
        document.getElementById('user-name-value').style.borderColor="#FF0000";
     }
     else if(!isUserEmailValid) {
        document.getElementById('empty-mail-id').style.display = "block";
        document.getElementById('email-id-value').style.borderColor="#FF0000";
    }
}

function previouspage() {
    document.getElementById('user-details-screen-one').style.display = "block";
    document.getElementById('user-details-screen-two').style.display = "none";
    progressBackPage();
}

function validateNumber() {
    
    var numberValue = document.getElementById('number-value').value;
    
    if((numberValue>=0) && (numberValue<=100) && (countNumber === 0)) {
        isNumberValid = true;
        document.getElementById('number-error').style.display = "none"; 
        document.getElementById('number-value').style.borderColor="lightgrey";
        progressUpdate();
        countNumber++;
        userDetail.age = numberValue;
    }
    else if((numberValue>=0) && (numberValue<=100)) {
        isNumberValid = true;
        document.getElementById('number-error').style.display = "none"; 
        document.getElementById('number-value').style.borderColor="lightgrey";
        userDetail.age = numberValue;
    }
    else {
       isNumberValid = false;
       document.getElementById('number-error').style.display = "block"; 
       document.getElementById('number-value').style.borderColor="#FF0000";
    }
}

function validateSelectedValue() {
    
    selectedValue = document.getElementById('select-value');
    
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


