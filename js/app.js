'use strict';

var name = prompt('What is your name?');
console.log('CurrentUserName ' + name);
alert('Hi ' + name + ' Welcome to Our Fun Guessing Game');
alert("Please answer each question with a 'YES'/Y or 'NO'/N" );

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
}else{
    alert('The answer is not valid. Please Enter YES or NO');
    console.log('petOwnedInvalid');
}

var runMileage = prompt('Have I ran over 50 milese in one day?');
runMileage = runMileage.toUpperCase();
console.log('runMileage is ' + runMileage);
if(runMileage === 'YES'|| runMileage === 'Y')
    {
    console.log('yesRegRunMileage ' + runMileage);
    alert('Keep guessing..');
}else if(runMileage === 'NO' || runMileage === 'N')
{
    console.log('negRegRunMileage ' + runMileage);
    alert("That's right I have not yet ran that far");
}else{
    alert('The answer is not valid. Please Enter YES or NO');
    console.log('runMileageInvalid');
}

var myColor = prompt('Do I like the color red?');
myColor = myColor.toUpperCase();
console.log('myColor is ' + myColor);
if(myColor === 'YES'|| myColor === 'Y')
    {
    console.log('yesRegMyColor ' + myColor);
    alert('Not a fan of that color. Keep guessing..');
}else if(runMileage === 'NO' || runMileage === 'N')
{
    console.log('negRegMyColor ' + myColor);
    alert("Red is not my fave but pink is!");
}else{
    alert('The answer is not valid. Please Enter YES/Y or NO/Y');
    console.log('runMileageInvalid');
}

var flightHistory = prompt('Have I ever flown?');
flightHistory = flightHistory.toUpperCase();
console.log('flightHistory is ' + flightHistory);
if(flightHistory === 'YES'|| flightHistory === 'Y')
    {
    console.log('yesRegFlightHIstory ' + flightHistory);
    alert('Yep, I have flown too many times in my life,not a fan.');
}else if(flightHistory === 'NO' || flightHistory === 'N')
{
    console.log('negRegFlightHistory ' + flightHistory);
    alert("Wow, you are way off track. Keep guessing..");
}else{
    alert('The answer is not valid. Please Enter YES/Y or NO/N');
    console.log('flightHistoryInvalid');
}

var tripHistory = prompt('Have I ever ventured to the land of fire and ice?');
tripHistory = tripHistory.toUpperCase();
console.log('tripHistory is ' + tripHistory);
if(tripHistory === 'YES'|| tripHistory === 'Y')
    {
    console.log('yesRegTripHistory ' + tripHistory);
    alert('Yep, I lived there for 2 years');
}else if(tripHistory === 'NO' || tripHistory === 'N')
{
    console.log('negRegTripHistory ' + tripHistory);
    alert("Too bad, you guessed wrong..");
}else{
    alert('The answer is not valid. Please Enter YES/Y or NO/N');
    console.log('tripHistoryInvalid');
}










       
