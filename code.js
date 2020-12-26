const search = document.querySelector('input');
search.addEventListener('keypress', searchfinder);

function searchfinder(event){
    if(event.keyCode == 13){
        console.log(search.value)
    }
}
