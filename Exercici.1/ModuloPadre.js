
const message = {
    error: "Complete fields please",
    add: "Product Added Succesfully",
    remove: "Product Deleted Succesfully",
}

function alertas(color,texto){
    $("#alerta").removeClass('d-none');
    $("#alerta").addClass(color);
    setTimeout(function(){
    $("#alerta").addClass('d-none');
    $("#alerta").removeClass(color);
    },2000);
    $("#alerta").text(texto);
}

function test(){

        var registreForm = formulari;
        var inputName = registreForm.elements.Name.value;
        var inputPrice = registreForm.elements.Price.value;
        var inputYear = registreForm.elements.Year.value;

        const producte = new Product (inputName, inputPrice, inputYear);

        if (inputName.length == "" && inputPrice.length == "" && inputYear.length == ""){
        producte.empty();
        }

        else{
            console.log (producte.mostrarConsola());
            producte.mostrarTabla(tabla);
            producte.eliminarFila();
            producte.alert();
        }

    };

    class Product{
        constructor(name, price, year){
            this.name = name,
            this.price = price,
            this.year = year
        }

        empty () {
            if (this.name == "" || this.price == "" || this.year == "" ){
                alertas('alert-danger', message.error);
            }
        }

        mostrarConsola(){
            return `
                Name: ${this.name}
                Price: ${this.price}
                Year: ${this.year}
                `;
        }

        mostrarTabla(tabla){
            tabla.innerHTML += `<tr> <td> <b> Product Name:  </b> </td> <td>${this.name} </td>
                                     <td> <b> Product Price: </b> </td> <td>${this.price}</td>
                                     <td> <b> Product Year:  </b> </td> <td>${this.year} </td>
                                     <td> <button id="delete" type="button" class="btn btn-danger btn-sm rounded-pill"> Delete </button> </td> </tr> `;
            }

        eliminarFila(){
            tabla.addEventListener("click", function(e){
                if(e.target.id == "delete"){
                    e.target.parentNode.parentNode.remove();
                }
            });
        }

        alert(){
            contenedor.addEventListener("click", function(e){
                            if(e.target.id == "save" && inputName.length != "" && inputPrice.length != "" && inputYear.length != "" ){
                                alertas('alert-success', message.add);
                            }
                            if(e.target.id == "delete"){
                                alertas('alert-danger', message.remove);
                            }
            });
        }

    }





















