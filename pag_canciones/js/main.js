inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("inputSearch");

document = getElementById("inputSearch").addeEventListener("keyup", buscador_interno);

function buscador_interno() {

    filter = inputSearch.value.toUpperCase();
    div = box_search.getElementsByTagName("resultado");
// 
    //Recorriendo elementos a filtrar mediante los h5

    for (i = 0; i < div.length; i++) {

        h5 = div[i].getElementsByTagName("h5")[0];
        textValue = h5.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {

            div[i].style.display = "";

        } else {
            div[i].style.display = "none";
        }
    }
    return true;
}