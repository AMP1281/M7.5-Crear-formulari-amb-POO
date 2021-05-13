"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var message = {
  error: "Complete fields please",
  add: "Product Added Succesfully",
  remove: "Product Deleted Succesfully"
};

function alertas(color, texto) {
  $("#alerta").removeClass('d-none');
  $("#alerta").addClass(color);
  setTimeout(function () {
    $("#alerta").addClass('d-none');
    $("#alerta").removeClass(color);
  }, 2000);
  $("#alerta").text(texto);
}

function test() {
  var registreForm = formulari;
  var inputName = registreForm.elements.Name.value;
  var inputPrice = registreForm.elements.Price.value;
  var inputYear = registreForm.elements.Year.value;
  var producte = new Product(inputName, inputPrice, inputYear);

  if (inputName.length == "" && inputPrice.length == "" && inputYear.length == "") {
    producte.alert();
  } else {
    console.log(producte.mostrarConsola());
    producte.mostrarTabla(tabla);
    producte.eliminarFila();
    producte.alert();
  }
}

;

var Product = /*#__PURE__*/function () {
  function Product(name, price, year) {
    _classCallCheck(this, Product);

    this.name = name, this.price = price, this.year = year;
  }

  _createClass(Product, [{
    key: "mostrarConsola",
    value: function mostrarConsola() {
      return "\n            Name: ".concat(this.name, "\n            Price: ").concat(this.price, "\n            Year: ").concat(this.year, "\n            ");
    }
  }, {
    key: "mostrarTabla",
    value: function mostrarTabla(tabla) {
      tabla.innerHTML += "<tr> <td> <b> Product Name:  </b> </td> <td>".concat(this.name, " </td>\n                                    <td> <b> Product Price: </b> </td> <td>").concat(this.price, "</td>\n                                    <td> <b> Product Year:  </b> </td> <td>").concat(this.year, " </td>\n                                    <td> <button id=\"delete\" type=\"button\" class=\"btn btn-danger btn-sm rounded-pill\"> Delete </button> </td> </tr> ");
    }
  }, {
    key: "eliminarFila",
    value: function eliminarFila() {
      tabla.addEventListener("click", function (e) {
        if (e.target.id == "delete") {
          e.target.parentNode.parentNode.remove();
        }
      });
    }
  }, {
    key: "alert",
    value: function alert() {
      contenedor.addEventListener("click", function (e) {
        e.target.id == "save" && Name.value != "" && Price.value != "" && Year.value != "" ? alertas('alert-success', message.add) : alertas('alert-danger', message.error);

        if (e.target.id == "delete") {
          alertas('alert-danger', message.remove);
        }
      });
    }
  }]);

  return Product;
}();