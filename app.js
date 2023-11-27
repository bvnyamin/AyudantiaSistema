const url = "http://localhost:1111/proyecto/";
const contenedor = document.querySelector("tbody");
let resultado = "";

const myModal = new bootstrap.Modal(document.getElementById("cuervosCrud"));
const formArticulo = document.querySelector("form");
const idproyecto = document.getElementById("id_proyecto");
const nombreproyecto = document.getElementById("nombre_proyecto");
const numeroestructura = document.getElementById("numero_estructura");
const tipodeconstruccion = document.getElementById("tipo_de_construccion");
const ocupacion = document.getElementById("ocupacion");
const comuna = document.getElementById("comuna");
const posibilidaddesubsidiar = document.getElementById(
  "posibilidad_de_subsidiar"
);
const numeropisos = document.getElementById("numero_pisos");
const numerodehabitaciones = document.getElementById("numero_de_habitaciones");
const numerobaños = document.getElementById("numero_baños");
const estacionamiento = document.getElementById("estacionamiento");
const preciototal = document.getElementById("preciototal");
const rutempresa = document.getElementById("rut_empresa");
const nombredeempresa = document.getElementById("nombre_de_empresa");
const emaildeempresa = document.getElementById("email_de_empresa");
const telefonocontacto = document.getElementById("telefono_contacto");
const rutcliente = document.getElementById("rut_cliente");
const nombrecliente = document.getElementById("nombre_cliente");
const apellidocliente = document.getElementById("apellido_cliente");
const sexo = document.getElementById("sexo");
const telefonocliente = document.getElementById("telefono_cliente");
const emailcliente = document.getElementById("email_cliente");
const fechadepagoestructura = document.getElementById(
  "fecha_de_pago_estructura"
);
const montopagado = document.getElementById("monto_pagado");
const comprobante = document.getElementById("comprobante");
const creditohipotecario = document.getElementById("credito_hipotecario");
const fechasolicitadocreditohipotecario = document.getElementById(
  "fecha_solicitado_credito_hipotecario"
);
const montosolicitadocreditohipotecario = document.getElementById(
  "monto_solicitado_credito_hipotecario"
);
const añosapagar = document.getElementById("años_a_pagar");
const dividendomensual = document.getElementById("dividendo_mensual");
const interescreditohipotecario = document.getElementById(
  "interes_credito_hipotecario"
);
const entidadbancaria = document.getElementById("entidad_bancaria");
const nombrenotaria = document.getElementById("nombre_notaria");
const nombredelnotario = document.getElementById("nombre_del_notario");
const apellidodelnotario = document.getElementById("apellido_del_notario");
const rutdelnotario = document.getElementById("rut_del_notario");
const gastosoperacionales = document.getElementById("gastos_operacionales");
const firmadelcliente = document.getElementById("firma_del_cliente");
const firmainmobiliaria = document.getElementById("firma_inmobiliaria");
const firmanotario = document.getElementById("firma_notario");

var opcion = "";

crear.addEventListener("click", () => {
  idproyecto.value = "";
  nombreproyecto.value = "";
  numeroestructura.value = "";

  myModal.show();
  opcion = "crear";
});

const mostrar = (proyecto) => {
  proyecto.forEach((proyecto) => {
    resultado += `<tr>
            <td>${proyecto.id_proyecto}</td>
            <td>${proyecto.nombre_proyecto}</td>
            <td>${proyecto.numero_estructura}</td>
	        <td>${proyecto.tipo_de_construccion}</td>
	        <td>${proyecto.ocupacion}</td>
            <td>${proyecto.comuna}</td>
            <td>${proyecto.posibilidad_de_subsidiar}</td>
            <td>${proyecto.numero_pisos}</td>
            <td>${proyecto.numero_de_habitaciones}</td>
            <td>${proyecto.numero_baños}</td>
            <td>${proyecto.estacionamiento}</td>
            <td>${proyecto.preciototal}</td>
            <td>${proyecto.rut_empresa}</td>
            <td>${proyecto.nombre_de_empresa}</td>
            <td>${proyecto.email_de_empresa}</td>
            <td>${proyecto.telefono_contacto}</td>
            <td>${proyecto.rut_cliente}</td>
            <td>${proyecto.nombre_cliente}</td>
            <td>${proyecto.apellido_cliente}</td>
            <td>${proyecto.sexo}</td>
            <td>${proyecto.telefono_cliente}</td>
            <td>${proyecto.email_cliente}</td>
            <td>${proyecto.fecha_de_pago_estructura}</td>
            <td>${proyecto.monto_pagado}</td>
            <td>${proyecto.comprobante}</td>
            <td>${proyecto.credito_hipotecario}</td>
            <td>${proyecto.fecha_solicitado_credito_hipotecario}</td>
            <td>${proyecto.monto_solicitado_credito_hipotecario}</td>
            <td>${proyecto.años_a_pagar}</td>
            <td>${proyecto.dividendo_mensual}</td>
            <td>${proyecto.interes_credito_hipotecario}</td>
            <td>${proyecto.entidad_bancaria}</td>
            <td>${proyecto.nombre_notaria}</td>
            <td>${proyecto.nombre_del_notario}</td>
            <td>${proyecto.apellido_del_notario}</td>
            <td>${proyecto.rut_del_notario}</td>
            <td>${proyecto.gastos_operacionales}</td>
            <td>${proyecto.firma_del_cliente}</td>
            <td>${proyecto.firma_inmobiliaria}</td>
            <td>${proyecto.firma_notario}</td>

            <td><button type="button" id='btnEditar' class="btn btn-outline-primary">editar</button><button type="button" id='btnBorrar' class="btn btn-outline-danger">borrar</button></td>


        </tr>`;
    contenedor.innerHTML = resultado;
  });
};

fetch(url)
  .then((res) => res.json())
  .then((datos) => mostrar(datos))
  .catch((error) => console.log(error));

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, "click", "#btnBorrar", (e) => {
  const fila = e.target.parentNode.parentNode;

  const idproyecto = fila.firstElementChild.innerHTML;

  const elimina = () => {
    fetch(url + idproyecto, {
      method: "DELETE",
    }).then(location.reload());
  };

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Deleted!",
        "Your file has been deleted.",
        "success",
        elimina()
      );
    }
  });
});

let rutForm = " ";
on(document, "click", "#btnEditar", (e) => {
  const fila = e.target.parentNode.parentNode;
  rutForm = fila.children[0].innerHTML;
  const idproyecto = fila.firstElementChild.innerHTML;
  const nombreproyecto = fila.children[1].innerHTML;
  const numeroestructura = fila.children[2].innerHTML;

  idproyecto.value = idproyecto;
  nombreproyecto.value = nombreproyecto;
  numeroestructura.value = numeroestructura;
  opcion = "editar";
  myModal.show();
});

formArticulo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (opcion == "crear") {
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_proyecto: idproyecto.value,
        nombre_proyecto: nombreproyecto.value,
        numero_estructura: numeroestructura.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const nuevoProyecto = [];
        nuevoProyecto.push(data);
        mostrar(nuevoProyecto);
        location.reload();
      });
  }
  if (opcion == "editar") {
    fetch(url + rutForm, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_proyecto: idproyecto.value,
        nombre_proyecto: nombreproyecto.value,
        numero_estructura: numeroestructura.value,
        tipo_de_construccion: tipodeconstruccion.value,
        ocupacion: ocupacion.value,
        comuna: comuna.value,
        posibilidad_de_subsidiar: posibilidaddesubsidiar.value,
        numero_pisos: numeropisos.value,
        numero_de_habitaciones: numerodehabitaciones.value,
        numero_baños: numerobaños.value,
        estacionamiento: estacionamiento.value,
        preciototal: preciototal.value,
        rut_empresa: rutempresa.value,
        nombre_de_empresa: nombredeempresa.value,
        telefono_contacto: telefonocontacto.value,
        rut_cliente: rutcliente.value,
        nombre_cliente: nombrecliente.value,
        apellido_cliente: apellidocliente.value,
        sexo: sexo.value,
        telefono_cliente: telefonocliente.value,
        email_cliente: emailcliente.value,
        fecha_de_pago_estructura: fechadepagoestructura.value,
        monto_pagado: montopagado.value,
        comprobante: comprobante.value,
        credito_hipotecario: creditohipotecario.value,
        fecha_solicitado_credito_hipotecario:
          fechasolicitadocreditohipotecario.value,
        monto_solicitado_credito_hipotecario:
          montosolicitadocreditohipotecario.value,
        años_a_pagar: añosapagar.value,
        dividendo_mensual: dividendomensual.value,
        interes_credito_hipotecario: interescreditohipotecario.value,
        entidad_bancaria: entidadbancaria.value,
        nombre_notaria: nombrenotaria.value,
        nombre_del_notario: nombredelnotario.value,
        apellido_del_notario: apellidodelnotario.value,
        rut_del_notario: rutdelnotario.value,
        gastos_operacionales: gastosoperacionales.value,
        firma_del_cliente: firmadelcliente.value,
        firma_inmobiliaria: firmainmobiliaria.value,
        firma_notario: firmanotario.value,
      }),
    }).then(() => location.reload());
  }
  myModal.hide();
});
