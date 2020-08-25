
    storage();
    
    document.getElementById("search").addEventListener("click",function(){
        search();
    })
    function search(){
        let topic = document.getElementById("input").value;
        window.open(`https://www.google.com/search?q=${topic}`, '_blank');
    }


    document.getElementById("addNew").addEventListener("click",function(){
        addNew();
    })
    function addNew(){
        let inputNote = [];
        inputNote.push(document.getElementById("note").value);
        document.getElementById("note").value = "";

        const existingNote = JSON.parse(localStorage.getItem('myNote'));
        if(existingNote !== null){
            const addNew = inputNote.concat(existingNote);
            localStorage.setItem('myNote', JSON.stringify(addNew));
        }
        else if(inputNote !== null){
            localStorage.setItem('myNote', JSON.stringify(inputNote));
        }
        storage();
    }

    document.getElementById("clearAll").addEventListener("click",function(){
        clearAll();
    })
    const clearAll = () => {
        const cnf = confirm("Do you want clear all notes ?")
        if(cnf){
            window.localStorage.clear();
            document.getElementById("list-item").innerHTML = "";
        }
        storage();
    }

    function storage(){
        const existingNote = JSON.parse(localStorage.getItem('myNote'));
        //console.log(existingNote);
        if(existingNote){
            let data = existingNote;
            let ul = document.getElementById("list-item");
            ul.innerHTML = "";
            console.log(data);
            data.forEach(element => {
                if(element){
                    let item = `<li>${element}</li>`;
                    ul.innerHTML += item;
                    console.log(element);
                }
            });
        }
    }

