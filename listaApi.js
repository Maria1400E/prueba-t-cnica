var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/api/v1/workouts", requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const tablaBody = document.querySelector("#tablaClientes tbody");
  
      tablaBody.innerHTML = ''; // Limpiar el cuerpo de la tabla
  
      data.data.forEach(cliente => {
          const fila = document.createElement("tr");
  
          fila.innerHTML = `
          
              <td>${cliente.nombre}</td>
              <td>${cliente.documento}</td>
              <td>${cliente.email}</td>
              <td>${cliente.telefono}</td>
              <td>${cliente.fecha}</td>
          `;
  
          tablaBody.append(fila);
      });
    })
    .catch(error => console.log('error', error));