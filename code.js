// Add your own API here... 
// Store it in a variable. I am using weatherAPI. 
function searchfinder(event){
    if(event.keyCode == 13){
        console.log(search.value)
    }
}

const search = document.querySelector('input');
search.addEventListener('keypress', searchfinder);


