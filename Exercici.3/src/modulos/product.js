export class Product{
    constructor(name, price, year){
        this.name = name,
        this.price = price,
        this.year = year
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
            (e.target.id == "save" && Name.value != "" && Price.value != "" && Year.value != "")? alertas('alert-success', message.add):alertas('alert-danger', message.error);
            if(e.target.id == "delete"){
                alertas('alert-danger', message.remove);
            }
        });
    }

}