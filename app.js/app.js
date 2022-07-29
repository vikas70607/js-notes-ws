console.log("Hello world");
shownotes();

let addbtn = document.getElementById('addBtn');




addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    
    notesobj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesobj));

    addtxt.value = "";
    // console.log(notesobj);
    
    shownotes();
})



function shownotes() {
    let notes = localStorage.getItem('notes');
    
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="card my-3 mx-3 notecard" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Notes ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="delnote(this.id)" href="#" class="btn btn-primary">Delete note</button>
        </div>
        </div>`
    });
    // console.log(html);
    
    let noteselm = document.getElementById('notes');
    
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML = `<i>Empty here! :(  add quickly</i<>`
    }
}

function delnote(index){
    console.log("working",index);

    let notes = localStorage.getItem('notes');
    
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesobj));
     shownotes();
}

let search = document.getElementById('search');

search.addEventListener('input', function(){
    let inputVal = search.value;
    let card = document.getElementsByClassName('notecard')
    Array.from(card).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(inputVal)) {
            element.style.display = 'block';
        }
        else{
        element.style.display = 'none';
        }
    })
})