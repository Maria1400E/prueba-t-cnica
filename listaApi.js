$(document).ready(function () {
    cargarDatos();
});

function cargarDatos() {

    $.ajax({
        url: "http://localhost:3000/api/v1/workouts",
        dataType: "json",
        success: function (data) {
            const tablaBody = $("#tablaClientes tbody");

            tablaBody.empty();

            $.each(data.data, function (index, cliente) {
                const fila = $("<tr>");

                fila.append($("<td>").text(cliente.id));
                fila.append($("<td>").text(cliente.nombre));
                fila.append($("<td>").text(cliente.documento));
                fila.append($("<td>").text(cliente.email));
                fila.append($("<td>").text(cliente.telefono));
                fila.append($("<td>").text(cliente.fecha));

                tablaBody.append(fila);
            });
        },
        error: function (error) {
            console.log("Error al cargar los datos de la API: " + error);
        }
    });
}
