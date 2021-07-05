$(document).ready(function () {});

$("#btn_iniciar").on("click", function () {
  event.preventDefault();
  const usuario = $("#user").val();
  const contraseña = $("#pass").val();
  sendContraseña(usuario, contraseña);
});

const sendContraseña = (user, pass) => {
  let param = { user: user, pass: pass, opc: 2 };
  console.log(param);
  // $.ajax({
  //   beforeSend: function () {
  //     console.log("Trayendo");
  //   },
  //   data: param,
  //   url: "CuentaController",
  //   type: "POST",
  //   success: function (response) {
  //     alert(response);
  //     limpiar();
  //   },
  //   error: function (jqXHR, estado, error) {
  //     console.log(estado);
  //     console.log(error);
  //   },
  //   complete: function (jqXHR, estado) {
  //     console.log(estado);
  //   },
  // });
};

const limpiar = () => {
  $("#user").val("");
  $("#pas").val("");
};
