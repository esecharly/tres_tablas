$(document).ready(function() {
    $('#btnRegistrar1').click( ()=>{
        let nombre = $('#insertarNombre').val();
        $.ajax({
            type:"POST",
            data: "nombre=" + nombre,
            url: "./control/control_registro.php",
            success: (r)=> {
                console.log(r);
                if(r == 1){
                    swal("Registrado con éxito","","success");
                } else {
                    swal("Fallo al registrar","","error");
                }
                
            }
        });
    });
    $('#btnRegistrar2').click( ()=>{
        let nombre = $('#insertarNombre').val();
        $.ajax({
            type:"POST",
            data: "nombre=" + nombre,
            url: "./control/control_registro2.php",
            success: (r)=> {
                console.log(r);
                if(r == 1){
                    swal("Registrado con éxito","","success");
                } else {
                    swal("Fallo al registrar","","error");
                }
                
            }
        });
    });
    $('#btnRegistrar3').click( ()=>{
        let nombre = $('#insertarNombre').val();
        $.ajax({
            type:"POST",
            data: "nombre=" + nombre,
            url: "./control/control_registro3.php",
            success: (r)=> {
                console.log(r);
                if(r == 1){
                    swal("Registrado con éxito","","success");
                } else {
                    swal("Fallo al registrar","","error");
                }
                
            }
        });
    });
});