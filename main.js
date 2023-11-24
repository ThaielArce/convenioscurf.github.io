var convenios = [
    {
        nombre: "OSDE",
        imagen: "logoOSDE.png",
        texto: "OSDE es una obra social que ofrece planes de salud de alta calidad, con una amplia cobertura médica y una red de prestadores de primer nivel. Para acceder a los servicios de la Clínica Universitaria Reina Fabiola, los afiliados a OSDE deben presentar su credencial y el documento de identidad. Los planes que tienen cobertura son: 210, 310, 410, 450 y 510. Para más información, visita la página web de OSDE."
    },
    {
        nombre: "Swiss Medical",
        imagen: "swiss.jpg",
        texto: "Swiss Medical es una obra social que brinda planes de salud integrales, con una atención personalizada y una variedad de beneficios. Para acceder a los servicios de la Clínica Universitaria Reina Fabiola, los afiliados a Swiss Medical deben presentar su credencial y el documento de identidad. Los planes que tienen cobertura son: SMG20, SMG25, SMG30, SMG40, SMG50 y SMG60. Para más información, visita la página web de Swiss Medical."
    },
    {
        nombre: "Medicus",
        imagen: "medicus.jpg",
        texto: "Medicus es una obra social que ofrece planes de salud flexibles, con una atención de excelencia y una propuesta de valor diferencial. Para acceder a los servicios de la Clínica Universitaria Reina Fabiola, los afiliados a Medicus deben presentar su credencial y el documento de identidad. Los planes que tienen cobertura son: Blue, Green, Gold y Platinum. Para más información, visita la página web de Medicus."
    },
    {
        nombre: "Sancor Salud",
        imagen: "sancor.jpg",
        texto: "Sancor Salud es una obra social que dispone de planes de salud adaptados a las necesidades de cada persona, con una cobertura nacional y regional. Para acceder a los servicios de la Clínica Universitaria Reina Fabiola, los afiliados a Sancor Salud deben presentar su credencial y el documento de identidad. Los planes que tienen cobertura son: 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500 y 5000. Para más información, visita la página web de Sancor Salud."
    },
    {
        nombre: "Galeno",
        imagen: "galeno.jpg",
        texto: "Galeno es una obra social que cuenta con planes de salud de alto nivel, con una atención médica de calidad y una red de centros propios y asociados. Para acceder a los servicios de la Clínica Universitaria Reina Fabiola, los afiliados a Galeno deben presentar su credencial y el documento de identidad. Los planes que tienen cobertura son: Oro, Plata, Bronce, Azul, Blanco y Negro. Para más información, visita la página web de Galeno."
    },
    {
        nombre: "Obra Social del Personal de la Sanidad Argentina (OSPSA)",
        imagen: "ospsa.jpg",
        texto: "OSPSA es una obra social que brinda cobertura de salud a los trabajadores del sector de la sanidad en Argentina. Para más información, visita la página web de OSPSA."
    },
    {
        nombre: "OSECAC",
        imagen: "osecac.jpg",
        texto: "OSECAC es la obra social de los empleados de comercio y actividades afines. Ofrece una amplia cobertura médica y beneficios para sus afiliados. Para más información, visita la página web de OSECAC."
    },
    {
        nombre: "DASPU",
        imagen: "daspu.jpg",
        texto: "Es una entidad pública no estatal, constituida de acuerdo con la Ley 24741 de 1996 que crea las Obras Sociales Universitarias. Conserva en su denominación las siglas de la Dirección de Asistencia Social del Personal Universitario (D.A.S.P.U) creada en 1957 como dependencia para la asistencia de la salud de docentes y no docentes de la Universidad Nacional de Córdoba quienes son los afiliados obligatorios de la Obra Social. La Ley faculta a las Obras Sociales Universitarias a admitir afiliados adherentes, y los Estatutos de DASPU así lo posibilitan, incorporando de esa manera la facultad de adhesión de familiares de segundo y tercer grado de parentesco con los agentes universitarios así como de profesionales colegiados y estudiantes universitarios que soliciten su inclusión y sean admitidos según las Normas establecidas. Igualmente son posibles afiliados los Jubilados y pensionados universitarios."
    },
];

var rolesPermitidos = ["secretariado", "facturacion", "centrodecontacto", "convenios"];
var usuarioRol = "convenios"; 

function mostrarConvenio(id) {
    var convenio = convenios[id - 1];
    var content = document.getElementById("content");
    content.innerHTML = "";
    content.classList.remove("editable");
    var h2 = document.createElement("h2");
    h2.textContent = convenio.nombre;
    content.appendChild(h2);
    var p = document.createElement("p");
    p.textContent = convenio.texto;
    content.appendChild(p);

    if (usuarioRol === "convenios") {
        var buttonEditar = document.createElement("button");
        buttonEditar.textContent = "Editar";
        buttonEditar.onclick = function() {
            editarConvenio(id);
        };
        content.appendChild(buttonEditar);

        var buttonAgregar = document.createElement("button");
        buttonAgregar.textContent = "Agregar";
        buttonAgregar.onclick = function() {
            agregarConvenio();
        };
        content.appendChild(buttonAgregar);
    }
}

function agregarConvenio() {
    var content = document.getElementById("content");
    content.innerHTML = "";
    content.classList.add("editable");

    var formulario = document.createElement("form");
    formulario.id = "convenioForm";

    var nombreLabel = document.createElement("label");
    nombreLabel.textContent = "Nombre del convenio:";
    formulario.appendChild(nombreLabel);

    var nombreInput = document.createElement("input");
    nombreInput.type = "text";
    nombreInput.id = "nombreInput";
    nombreInput.style.width = "100%";
    formulario.appendChild(nombreInput);

    var textoLabel = document.createElement("label");
    textoLabel.textContent = "Texto del convenio:";
    formulario.appendChild(textoLabel);

    var textoInput = document.createElement("textarea");
    textoInput.id = "textoInput";
    textoInput.style.width = "100%";
    textoInput.style.height = "200px";
    formulario.appendChild(textoInput);

    var guardarButton = document.createElement("button");
    guardarButton.textContent = "Guardar";
    guardarButton.type = "submit";
    guardarButton.style.marginTop = "10px";
    formulario.appendChild(guardarButton);

    var cancelarButton = document.createElement("button");
    cancelarButton.textContent = "Cancelar";
    cancelarButton.type = "button";
    cancelarButton.style.marginTop = "10px";
    cancelarButton.onclick = function() {
        mostrarConvenio(convenios.length); // Vuelve a mostrar el último convenio agregado
    };
    formulario.appendChild(cancelarButton);

    formulario.onsubmit = function(event) {
        event.preventDefault(); // Evita el envío del formulario
        guardarNuevoConvenio();
    };

    content.appendChild(formulario);
}

function guardarNuevoConvenio() {
    try {
        var nombreInput = document.getElementById("nombreInput");
        var textoInput = document.getElementById("textoInput");

        var nuevoConvenio = {
            nombre: nombreInput.value,
            texto: textoInput.value
        };

        convenios.push(nuevoConvenio);

        // Muestra el nuevo convenio recién agregado
        mostrarConvenio(convenios.length);
    } catch (error) {
        console.error('Error al guardar nuevo convenio:', error);
    }
}

function editarConvenio(id) {
    if (rolesPermitidos.includes(usuarioRol)) {
        var convenio = convenios[id - 1];
        var content = document.getElementById("content");
        content.innerHTML = "";
        content.classList.add("editable");

        var formulario = document.createElement("form");
        formulario.id = "convenioForm";

        var textoInput = document.createElement("textarea");
        textoInput.textContent = convenio.texto;
        formulario.appendChild(textoInput);

        // Mostrar botón Guardar
        var buttonGuardar = document.createElement("button");
        buttonGuardar.textContent = "Guardar";
        buttonGuardar.onclick = function () {
            convenio.texto = textoInput.value;
            mostrarConvenio(id);
        };
        formulario.appendChild(buttonGuardar);

        content.appendChild(formulario);
    }
}

function mostrarFormularioAgregar() {
    var content = document.getElementById("content");
    content.innerHTML = "";
    content.classList.add("editable");

    var formulario = document.createElement("form");
    formulario.id = "convenioForm";

    var nombreLabel = document.createElement("label");
    nombreLabel.textContent = "Nombre del convenio:";
    formulario.appendChild(nombreLabel);

    var nombreInput = document.createElement("input");
    nombreInput.type = "text";
    nombreInput.id = "nombreInput";
    formulario.appendChild(nombreInput);

    var textoLabel = document.createElement("label");
    textoLabel.textContent = "Texto del convenio:";
    formulario.appendChild(textoLabel);

    var textoInput = document.createElement("textarea");
    textoInput.id = "textoInput";
    formulario.appendChild(textoInput);

    var guardarButton = document.createElement("button");
    guardarButton.textContent = "Guardar";
    guardarButton.type = "button";
    guardarButton.onclick = function () {
        guardarNuevoConvenio();
    };
    formulario.appendChild(guardarButton);

    content.appendChild(formulario);
}

function buscarConvenio() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();

    var sidebar = document.querySelector(".sidebar");
    var conveniosList = sidebar.getElementsByTagName("li");

    for (var i = 0; i < conveniosList.length; i++) {
        var convenioNombre = conveniosList[i].textContent

        if (convenioNombre.toUpperCase().indexOf(filter) > -1) {
            conveniosList[i].style.display = "";
        } else {
            conveniosList[i].style.display = "none";
        }
    }
}


function mostrarInputBusqueda() {
    var inputBusqueda = document.getElementById("searchInput");
    inputBusqueda.style.display = "block";
}
