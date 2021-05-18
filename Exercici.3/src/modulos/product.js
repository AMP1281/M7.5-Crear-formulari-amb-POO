export const productos =  new Array();
export class Product{
    constructor(name, price, year){
        this.name = name,
        this.price = price,
        this.year = year
    }

    repetido(){
        productos.length = 0;
        const cells = document.querySelectorAll('td:nth-child(2)');
        cells.forEach(function(cell) {
          productos.push(cell.innerHTML);
        })
        console.log(productos.includes(Name.value));
    }

    mostrarConsola(){
        return `
            Name: ${this.name}
            Price: ${this.price}
            Year: ${this.year}
            `;
    }

    mostrarTabla(tabla){
        tabla.innerHTML += `<tr> <td> <b> Product Name: </b> </td> <td>${this.name}</td>
                                    <td> <b> Product Price: </b> </td> <td>${this.price}</td>
                                    <td> <b> Product Year: </b> </td> <td>${this.year}</td>
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
            exists: "Product already exists",
            add: "Product Added Succesfully",
            remove: "Product Deleted Succesfully",
        }
        contenedor.addEventListener("click", function(e){
            if(e.target.id == "save" && Name.value == "" && Price.value == "" && Year.value == ""){
                alertas('alert-danger', message.error);
            }
            if(e.target.id == "save" && productos.includes(Name.value)){
                alertas('alert-danger', message.exists);
            }
            if(e.target.id == "save" && Name.value != "" && Price.value != "" && Year.value != "" && !productos.includes(Name.value)){
                alertas('alert-success', message.add);
            }
            if(e.target.id == "delete"){
                alertas('alert-danger', message.remove);
            }
        });
    }

}