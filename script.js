const lines = document.querySelectorAll(".line");
const button = document.getElementsByClassName("btn")[0];
let Save = true;

const SaveEdit = () => {
    if(Save) {
        button.innerHTML = 'Edit';
        Save = false;
    }else {
        button.innerHTML = 'Save';
        Save = true;
    }

    button.classList.toggle("edit-btn")
    lineControls();
}
const lineControls = () => {
    lines.forEach(line => {
        if(!Save){
            line.setAttribute("disabled", true);
        }else{
            line.removeAttribute("disabled");
        }
    });
}

const setLinesMaxWidth =  () => {
    lines.forEach(line => {
        line.setAttribute("maxlength", line.offsetWidth/12);
    });
}
setLinesMaxWidth();


button.addEventListener("click", SaveEdit);
window.addEventListener("resize", setLinesMaxWidth)
