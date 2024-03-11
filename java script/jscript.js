function myfunction() {
    document.getElementById('navigation').style.transition = '1s';
    document.getElementById('navigation').style.display = 'block';
    document.getElementById('btn').innerHTML = 'x';
    //document.getElementById('btn').title='hover me to navigate menu bar';
}
 

function closefun() {
    document.getElementById('btn').innerHTML = '&apid;';
    document.getElementById('navigation').style.display = 'none';
}


function changeimage() {
    document.getElementById('changeimag').innerHTML = "<img class='footer-image' src='images/peace.jpg' style='border-radius: 10px;' width='100px'    height = '100px' alt = 'image not found because of some thing!' ></img > ";
}