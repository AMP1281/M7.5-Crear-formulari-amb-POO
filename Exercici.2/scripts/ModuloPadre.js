
function test(){

    var registreForm = formulari;
    var inputName = registreForm.elements.Name.value;
    var inputPrice = registreForm.elements.Price.value;
    var inputYear = registreForm.elements.Year.value;

    var productos =  new Array(); 

    const producte = new Product (inputName, inputPrice, inputYear);

    producte.arrayProduct()

    if (inputName.length == "" && inputPrice.length == "" && inputYear.length == ""){
        producte.alert();
    }

    else if (productos.includes(Name.value)){
        producte.alert();
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

    arrayProduct(){
        var cells = document.querySelectorAll('td:nth-child(2)');
        cells.forEach(function(cell) {
          productos.push(cell.innerHTML);
        })
    }

    mostrarConsola(){
        return `
            Name: ${this.name}
            Price: ${this.price}
            Year: ${this.year}
            `;
    }

    mostrarTabla(tabla){
        tabla.innerHTML += `<tr> <td> <b> Product Name:  </b> </td> <td  id="tName">${this.name} </td>
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
        function alertas(color,texto){
            $("#alerta").removeClass('d-none');
            $("#alerta").addClass(color);
            setTimeout(function(){
            $("#alerta").addClass('d-none');
            $("#alerta").removeClass(color);
            },2000);
            $("#alerta").text(texto);
        }
        const message = {
            error: "Complete fields please",
            add: "Product Added Succesfully",
            remove: "Product Deleted Succesfully",
        }
        contenedor.addEventListener("click", function(e){
            if(e.target.id == "save" && Name.value != "" && Price.value != "" && Year.value != ""){
                alertas('alert-success', message.add);
            }
            if(e.target.id == "save" && Name.value == "" && Price.value == "" && Year.value == ""){
                alertas('alert-danger', message.error);
            }
            if(e.target.id == "delete"){
                alertas('alert-danger', message.remove);
            }
        });
    }

}





















