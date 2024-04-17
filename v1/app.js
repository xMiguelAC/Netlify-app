console.log('Conectado a la base de datos de la FLDSMDFR!')

let translateMode = false;
let traducir = document.querySelector("#translate");

let body = document.querySelector("body");
let puesto = document.querySelector(".titles h2");
let welcome = document.querySelector("#bienvenida");


let profile = document.querySelector(".profile .subheader p");
let birth = document.querySelectorAll(".profile .row .column .list-profile ul li")[0];
let address = document.querySelectorAll(".profile .row .column .list-profile ul li a")[0];
let idnumber = document.querySelectorAll(".profile .row .column .list-profile ul li")[2];
let cellphone = document.querySelectorAll(".profile .row .column .list-profile ul li")[3];
let datebirth = document.querySelectorAll(".profile .row .column .list-profile ul li")[6];
let country = document.querySelectorAll(".profile .row .column .list-profile ul li a")[3];
let cv = document.querySelectorAll(".profile .row .column .list-profile ul a")[4];

let education = document.querySelector(".education .subheader p");
let bachiller = document.querySelectorAll(".education .row p")[0];
let itla = document.querySelectorAll(".education .row p")[1];
let programming = document.querySelectorAll(".education  .row .column .list-profile ul li")[0];
let database = document.querySelectorAll(".education  .row .column .list-profile ul li")[1];
let webdesign = document.querySelectorAll(".education  .row .column .list-profile ul li")[2];
let network = document.querySelectorAll(".education  .row .column .list-profile ul li")[3];

let experience = document.querySelector(".experience .subheader p");
let laborBRRD2 = document.querySelectorAll(".experience .row .exp-info p")[0];
let laborDISA = document.querySelectorAll(".experience .row .exp-info p")[2];
let laborBRRD1 = document.querySelectorAll(".experience .row .exp-info p")[4];
let fulltime = document.querySelector(".experience .row .exp-info a .ft");
let pasantia = document.querySelectorAll(".experience .row .exp-info b")[2];
let pasantias = document.querySelectorAll(".experience .row .exp-info b")[3];
let expmsg1 = document.querySelectorAll(".experience .row .exp-info .quote")[0];
let expmsg2 = document.querySelectorAll(".experience .row .exp-info .quote")[1];
let expmsg3 = document.querySelectorAll(".experience .row .exp-info .quote")[2];

let know = document.querySelector(".knowledge .subtitle");
let english = document.querySelectorAll(".knowledge .row .box-name p")[0];

let courses = document.querySelector(".cursos .subtitle");
let ccoffice = document.querySelectorAll(".cursos ul li")[0];
let ccgraphic = document.querySelectorAll(".cursos ul li")[1];
let cceng = document.querySelectorAll(".cursos ul li")[2];
let ccaux = document.querySelectorAll(".cursos ul li")[6];

let area = document.querySelector(".area .subtitle");

let schedule = document.querySelector(".horario .subtitle");
let scfulltime = document.querySelectorAll(".horario ul li")[0];
let week = document.querySelectorAll(".horario ul li")[1];
let exampel = document.querySelectorAll(".horario ul li")[2];
let weekend = document.querySelectorAll(".horario ul li")[3];
let sat2sun = document.querySelectorAll(".horario ul li")[4];

let ref = document.querySelector(".referencias .subtitle");
let milagros = document.querySelectorAll(".referencias .ref-personal ul li .institucion")[0];
let yulidia = document.querySelectorAll(".referencias .ref-personal ul li .institucion")[1];



window.onload = function(){ 
    welcome.click();
    let bgmodal = document.querySelectorAll(".close-modal")[0];
    setTimeout(() => {bgmodal.click()}, 7000)
}

console.log(address)


traducir.addEventListener("click", function translateDocument(){
    translateMode = !translateMode;

    if(translateMode == true){
        puesto.innerText = "Software Development Technician";

		profile.innerHTML = "Profile";
        birth.innerHTML = "<b>Birth:</b>";
        address.innerHTML = "<b>Address:</b>";
        idnumber.innerHTML = "<b>ID Number:</b>";
        cellphone.innerHTML = "<b>Cellphone:</b>";
        datebirth.innerHTML = "Dec / 20 / 1999";
        country.innerHTML = "Santo Domingo, Dominican Republic.";
        cv.attributes[0].value = "./assets/CV Actual English [Abril2024] Digital.pdf";

        education.innerHTML = "Education";
        bachiller.innerHTML = "<b>Computer Science Technical Bachelor (Professional Technical Module)</b>";
        itla.innerHTML = "<b>ITLA: Software Development Technician</b>";
        programming.innerHTML = "a)Programming";
        database.innerHTML = "c)Data Base";
        webdesign.innerHTML = "b)Web Design";
        network.innerHTML = "d)Networks";

        experience.innerHTML = "Work Experience";
        laborBRRD2.innerHTML = "Robotic Application Development Engineer";
        laborDISA.innerHTML = "Jr. Developer";
        laborBRRD1.innerHTML = "Technical Support Assistant in IT Infrastructure Support";
        fulltime.innerHTML = "<b>Full time</b>";
        pasantia.innerHTML = "<b>Internship</b>";
        pasantias.innerHTML = "<b>Internship</b>";
        expmsg1.innerHTML = "In <b>Automation Anywhere,</b> I specialized in automating various processes such as `Pre-approved Credit Cards` where we achieved the goal of 1 million cards per year. I was also responsible for maintaining new and/or existing processes that encountered any errors. <u><b>See More...</b></u>";
        expmsg2.innerHTML = "Here, we were tasked with extracting and displaying data from an API, and then presenting it through tables using ASP.net technology.";
        expmsg3.innerHTML = "As an assistant, they taught me various methods support methods for both part: Software and Hardware.";
        
        know.innerHTML = "Knowledge";
        english.innerHTML = "Advanced English";

        courses.innerHTML = "Courses";
        ccoffice.innerHTML = "(2009) Microsoft Office";
        ccgraphic.innerHTML = "(2010) Graphic Design: Photoshop";
        cceng.innerHTML = "<u><b>English - KOE:</b></u>";
        ccaux.innerHTML = "(2017) Sales Assistant";
        
        area.innerHTML = "Interest";

        schedule.innerHTML = "Schedules";
        scfulltime.innerHTML = "Full time";
        week.innerHTML = "Monday - Friday";
        exampel.innerHTML = "(8 hours, ex.: 8am – 5pm)";
        weekend.innerHTML = "Weekend";
        sat2sun.innerHTML = "(Saturday, Sunday)";

        ref.innerHTML = "References";
        milagros.innerHTML = "Businessman";
        yulidia.innerHTML = "Teacher";
        
    } else {
        puesto.innerText = "Tecnico en Desarrollo de Software";
        
        profile.innerHTML = "Datos Personales";
        birth.innerHTML = "<b>Fecha de Nacimiento:</b>";
        address.innerHTML = "<b>Direccion:</b>";
        idnumber.innerHTML = "<b>Cedula:</b>";
        cellphone.innerHTML = "<b>Telefono Cel.:</b>";
        datebirth.innerHTML = "20 / Dic / 1999";
        country.innerHTML = "Santo Domingo, Republica Dominicana.";
        cv.attributes[0].value = "./assets/CV Actual [Abril2024] Digital.pdf";
        
        education.innerHTML = "Formacion Academica";
        bachiller.innerHTML = "<b>Bachiller Tecnico Informatica (Modulo Tecnico Profesional)</b>";
        itla.innerHTML = "<b>ITLA: Tecnologo en Desarrollo de Software</b>";
        programming.innerHTML = "a)Programacion";
        database.innerHTML = "c)Base de Datos";
        webdesign.innerHTML = "b)Diseño Pagina Web";
        network.innerHTML = "d)Redes";
        
        experience.innerHTML = "Experiencia Laboral";
        laborBRRD2.innerHTML = "Ingeniero en Desarrollo de Aplicaciones Robotizadas";
        laborDISA.innerHTML = "Programador Junior";
        laborBRRD1.innerHTML = "Ayudante en Soporte Tecnico en Soporte Infraestructura TI";
        fulltime.innerHTML = "<b>Jornada Completa</b>";
        pasantia.innerHTML = "<b>Pasantia</b>";
        pasantias.innerHTML = "<b>Pasantia</b>";
        expmsg1.innerHTML = "En <b>Automation Anywhere</b> me dedicaba a automatizar diferentes procesos como Tarjetas de Credito Preaprobadas el cual llegamos a la meta de 1 millon de tarjetas al año. Tambien me encargaba de darle mantenimiento a los procesos nuevos y/o existentes que presentaban algun error. <b><u>Click para leer mas!</u></b>";
        expmsg2.innerHTML = "Aquí nos encargaban la tarea de extraer y mostrar datos de una API, para luego plasmarla mediante tablas utilizando la tecnología de ASP.net";
        expmsg3.innerHTML = "Como ayudante me enseñaron los diferentes metodos de soporte tanto para software como para hardware.";
        
        know.innerHTML = "Conocimientos";
        english.innerHTML = "Ingles Avanzado";
        
        courses.innerHTML = "Cursos";
        ccoffice.innerHTML = "(2009) Manejo Paquete Office";
        ccgraphic.innerHTML = "(2010) Diseño grafico: Photoshop";
        cceng.innerHTML = "<u><b>Ingles - KOE:</b></u>";
        ccaux.innerHTML = "(2017) Auxiliar de Venta";
        
        area.innerHTML = "Interest";
        
        schedule.innerHTML = "Disponibilidad de Horario";
        scfulltime.innerHTML = "Jornada Completa";
        week.innerHTML = "Lunes a Viernes";
        exampel.innerHTML = "(8 hrs, ejemplo: 8am - 5pm)";
        weekend.innerHTML = "Fines de Semana";
        sat2sun.innerHTML = "(Sabados, Domingo)";
        
        ref.innerHTML = "Referencias";
        milagros.innerHTML = "Comerciante";
        yulidia.innerHTML = "Maestra";
    }
})