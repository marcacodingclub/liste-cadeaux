
let cadeaux_dict = [
    {
        "item": "Crocs des fêtes",
        "prix": 14
    },
    {
        "item": "Une tuque des fêtes",
        "prix": 42
    },
    {
        "item": "Un chandail laid des fêtes",
        "prix": 25
    }
]

function sum_total() {
    let sum = 0;

    cadeaux_dict.forEach(element => {
        sum += element.prix;
    });

    return sum;
}

function ajouter() {
    
    let list_cadeaux = document.getElementById("listcadeax");

    let desc = document.getElementById("description").value;
    let price = document.getElementById("valeurestimmer").value;
    let total = document.getElementById("totalp")

    
    if(desc !== "" || price !== "") {
        // setup list item
        let listitem = document.createElement("li");
        listitem.setAttribute("class", "list-group-item");
        listitem.innerHTML = desc;

        // badge
        let pricebaddge = document.createElement("span");
        pricebaddge.setAttribute("class", "badge rounded-pill text-bg-success");
        pricebaddge.setAttribute("style", "float: right;");
        pricebaddge.innerHTML = parseInt(price, 10)+"$";

        // add badge to listitem
        listitem.appendChild(pricebaddge);
        // add list item to list
        list_cadeaux.appendChild(listitem);

        cadeaux_dict.push({
            item: desc,
            prix: parseInt(price, 10)
        });

        total.innerHTML = "Total: "+sum_total()+"$";
        console.log(sum_total());
    }
    
    
}

{
    let btnAjouter = document.getElementById("ajouter");
    let btnAnnuler = document.getElementById("supprimer");
    let btnRecommencer = document.getElementById("recommencer");
    let btnConfirmer = document.getElementById("envoyer")

    btnAjouter.addEventListener("click", ajouter)

    btnAnnuler.addEventListener("click", function () {
        let desc = document.getElementById("description");
        let price = document.getElementById("valeurestimmer");
        desc.value = "";
        price.value = "";
    });

    btnRecommencer.addEventListener("click", function () {
        location.reload();
    });
}