export function alertas(color,texto){
    $("#alerta").removeClass('d-none');
    $("#alerta").addClass(color);
    setTimeout(function(){
    $("#alerta").addClass('d-none');
    $("#alerta").removeClass(color);
    },2000);
    $("#alerta").text(texto);
}