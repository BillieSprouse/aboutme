'use strict';

var correctAnswersTotal = 0;
var name = '';

function customizePrompt() {
    name = prompt('What is your name?');
    console.log('CurrentUserName ' + name);
    alert('Hi ' + name + ' Welcome to Our Fun Guessing Game');
    alert("Please answer each question with a 'YES'/Y or 'NO'/N" );
    startPetOwned();
}


function startPetOwned() {
   var petOwned = prompt('Do I own a pet dragon?');
    petOwned = petOwned.toUpperCase();
    console.log('petOwned is ' + petOwned);
    if(petOwned === 'YES'|| petOwned === 'Y')
        {
        console.log('yesreg ' + petOwned);
        alert('No, I am not Daenerys');
    }else if(petOwned === 'NO' || petOwned === 'N')
        {
        console.log('petOwnedNeg ' + petOwned);
        alert('Sadly, that is the right answer');
        correctAnswersTotal++;
    }else{
        alert('The answer is not valid. Please Enter YES or NO');
        console.log('petOwnedInvalid');
    }
    startRunMileage();
}
function startRunMileage() {
    prompt('Have I ran over 50 milese in one day?');
    runMileage = runMileage.toUpperCase();
    console.log('runMileage is ' + runMileage);
    if(runMileage === 'YES'|| runMileage === 'Y'){
    console.log('yesRegRunMileage ' + runMileage);
    alert('Keep guessing..');
}else if(runMileage === 'NO' || runMileage === 'N')
    {
    console.log('negRegRunMileage ' + runMileage);
    alert("That's right I have not yet ran that far");
    correctAnswersTotal++;
}else{
    alert('The answer is not valid. Please Enter YES or NO');
    console.log('runMileageInvalid');
}
    startMyColor();
}

function startMyColor() {
    prompt('Do I like the color red?');
    myColor = myColor.toUpperCase();
    console.log('myColor is ' + myColor);
    if(myColor === 'YES'|| myColor === 'Y'){
   
    console.log('yesRegMyColor ' + myColor);
    alert('Not a fan of that color. Keep guessing..');
    }else if(runMileage === 'NO' || runMileage === 'N'){   
        console.log('negRegMyColor ' + myColor);
        alert("Red is not my fave but pink is!");
        correctAnswersTotal++;
    }else{
        alert('The answer is not valid. Please Enter YES/Y or NO/Y');
        console.log('runMileageInvalid');
    }
    startFlightHistory();
}

function startFlightHistory () {
    prompt('Have I ever flown?');
    flightHistory = flightHistory.toUpperCase();
    console.log('flightHistory is ' + flightHistory);
    if(flightHistory === 'YES'|| flightHistory === 'Y'){
        console.log('yesRegFlightHIstory ' + flightHistory);
        alert('Yep, I have flown too many times in my life,not a fan.');
        correctAnswersTotal++;
    }else if(flightHistory === 'NO' || flightHistory === 'N'){
        console.log('negRegFlightHistory ' + flightHistory);
        alert("Wow, you are way off track. Keep guessing..");
    }else{
        alert('The answer is not valid. Please Enter YES/Y or NO/N');
        console.log('flightHistoryInvalid');
    }
    startTripHistory();   
}

function startTripHistory () {
    prompt('Have I ever ventured to the land of fire and ice?');
    tripHistory = tripHistory.toUpperCase();
    console.log('tripHistory is ' + tripHistory);
    if(tripHistory === 'YES'|| tripHistory === 'Y'){
        console.log('yesRegTripHistory ' + tripHistory);
        alert('Yep, I lived there for 2 years');
        correctAnswersTotal++;
    }else if(tripHistory === 'NO' || tripHistory === 'N'){
        console.log('negRegTripHistory ' + tripHistory);
        alert('Too bad, you guessed wrong..');
    }else{
        alert('The answer is not valid. Please Enter YES/Y or NO/N');
        console.log('tripHistoryInvalid');
    }
    startNumberGuess();
}
    

function startNumberGuess() {
    for(var i = 0; i < 4; i ++ ) {
    console.log('trackingVarI ' + i );
    var numberGuess = prompt('How many marathons have I ran?');
    numberGuess = parseInt(numberGuess, 10);
    console.log('beforeIfNumberGuess ' + numberGuess);
    if(numberGuess === 3){
        alert('Awesome! You Guessed Right!');
        correctAnswersTotal++;
        console.log('correctNumberGuess ' + numberGuess);
        break;
    }else if(numberGuess < 3){
        console.log('tooLowNumberGuess ' + numberGuess);
        alert('You are guessing too low, try again');
    
    }else if(numberGuess > 3){
        console.log('tooHighNumberGuess ' + numberGuess);
        alert('You are guessing too high, try again');

    }else{
        alert('Please, try again');
      
        }
    }
    startCountriesVisited();
}

var myAnswers = ['ICELAND', 'JAPAN','SOUTH KOREA','GREECE'];

function startCountriesVisited() {
    for(var i = 0; i < 6; i++ ) {
    console.log('trackingVarI ' + i );
    var countriesVisited= prompt('Name some countries I have visited');
    countriesVisited = countriesVisited.toUpperCase();
    console.log('countriesVisited is ' + countriesVisited);
    for(var j =0; j < myAnswers.length; j++) {
        console.log('incrementVarJ ' + j);
        if(countriesVisited === myAnswers[j] ){
            alert('Yes, you have guessed right I visited ' + myAnswers);
            correctAnswersTotal++;
            i = 6;
            break;
        }
        console.log('index ' + myAnswers[j]);
    }
    if( i >= 5){
        alert('Sorry, you are out guesses. I have visited ' + myAnswers);

    }
    alert('Hi ' + name + ' You have a score of ' + correctAnswersTotal);
    }
 
}

//customizePrompt();
// petOwned();
//runMileage();
//myColor();
//flightHistory();
//tripHistory();




        //alert('Guess Again');
// tripHistory = tripHistory.toUpperCase();
// console.log('tripHistory is ' + tripHistory);
// if(tripHistory === 'YES'|| tripHistory === 'Y')
    // {
    // console.log('yesRegTripHistory ' + tripHistory);
    // alert('Yep, I lived there for 2 years');
// }else if(tripHistory === 'NO' || tripHistory === 'N')
// {
    // console.log('negRegTripHistory ' + tripHistory);
    // alert("Too bad, you guessed wrong..");
// }else{
    // alert('The answer is not valid. Please Enter YES/Y or NO/N');
    // console.log('tripHistoryInvalid');
// }









       
