
export function guardar(){

    const registreForm = formulari;
    const inputName = registreForm.elements.Name.value;
    const inputPrice = registreForm.elements.Price.value;
    const inputYear = registreForm.elements.Year.value;

    const producte = new Product (inputName, inputPrice, inputYear);

    if (inputName.length == "" && inputPrice.length == "" && inputYear.length == ""){
        producte.alert();
    }

    else{
        console.log (producte.mostrarConsola());
        producte.mostrarTabla(tabla);
        producte.eliminarFila();
        producte.alert();
    }

};