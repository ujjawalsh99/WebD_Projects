function extractData(event){
    const file = event.target.files[0];
    if(file){ 
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e)=> {
            console.log(typeof e.target.result);
            document.getElementsByClassName('image')[0].style.display = 'block';
            document.getElementsByClassName('image')[0].src = e.target.result;
        }
    }
}