import {Product} from "./modulos/product";

import {productos} from "./modulos/product";

save.addEventListener("click", function(e){

        const registreForm = formulari;
        const inputName = registreForm.elements.Name.value;
        const inputPrice = registreForm.elements.Price.value;
        const inputYear = registreForm.elements.Year.value;

        const producte = new Product (inputName, inputPrice, inputYear);

        producte.repetido()

        if (Name.value == "" && Price.value == "" && Year.value == ""){
            producte.alert();
        }

        else if(productos.includes(Name.value)){
            producte.alert();
        }

        else{
            console.log (producte.mostrarConsola());
            producte.mostrarTabla(tabla);
            producte.eliminarFila();
            producte.alert();
        }

});


