

/* Alerta al apretar "Enviar por correo" */
$(document).ready(function () {
    $('#enviarCorreo').click(function (){
        alert("El correo fue enviado correctamente...");
});


/* Estilo Tooltip enviar por correo + enviar por correo*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* Cambio a color rojo para titulos "Ingredientes" y "Preparación" */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        })

    $('b').on("dblclick",function (){
        $(this).css('color', 'red');
    });


    /* mostrar y ocultar resumen de tarjeta */
    $("#panq").click(function(){
        $('#rec1').toggle(1000,function() {
        });
    });
    $("#tira").click(function(){
        $('#rec2').toggle(1000,function() {
        });
    });
    $("#plate").click(function(){
        $('#rec3').toggle(1000,function() {
        });
    });
});