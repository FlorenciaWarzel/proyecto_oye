function validar(sesion) {

    if (sesion.contrasena.value.trim().length == 0) {
        alert("Contraseña obligatoria");
        return false;
    }

    if (sesion.contrasena.value.trim().length <8) {
        alert("La contraseña es demasiado corta.");
        return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(sesion.email.value)) {
        alert("Email invalido");
        return false;
    }

    alert("¡Bienvenido/a!");
}