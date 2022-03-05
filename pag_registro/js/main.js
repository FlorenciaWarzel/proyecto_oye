function validar(registro) {

    if (registro.nombre.value.trim().length == 0) {
        alert("Nombre obligatorio");
        return false;
    }

    if (registro.contrasena.value.trim().length == 0) {
        alert("Contraseña obligatoria");
        return false;
    }

    if (registro.contrasena.value.trim().length <8) {
        alert("Contraseña demasiado corta. Debe tener 8 caracteres o más");
        return false;
    }

    if (registro.contrasena.value != registro.confirmacion.value) {
        alert("La contraseña no coincide");
        return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(registro.email.value)) {
        alert("Email invalido");
        return false
    }

    if (registro.edad.value == "") {
        alert("Edad obligatoria");
        return false;
    }

    if (registro.genero.value == "") {
        alert("Género obligatorio");
        return false;
    }

    if (!registro.check.checked) {
        alert("Debe aceptar los términos y condiciones");
        return false;
    }

    alert("Tu registro ha sido exitoso. ¡Disfruta de OYE!")
}