
document.getElementById('submit').addEventListener('click', 
    function(event){event.preventDefault(myFunction())});

function myFunction(){
    document.getElementById('message').style.display = 'block';
}