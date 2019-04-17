$(document).on('click', 'btnCadastrar', function(){
    var dadosCarro = {
    "marca" : $("#marca").val(),
    "modelo" : $("#modelo").val(),
    "ano" : $("#ano").val(),
    "cor" : $("#cor").val(),
    "valor" : $("#valor").val()
    }

      $.ajax({
          type: "POST",
          url: "https://cadastrar-carro-mobile-belisariusmage35k.c9users.io/cadastrar.php",
          data: dadosCarro,
          success: function(data){
          $("#marca").val(""),
          $("#modelo").val(""),
          $("#ano").val(""),
          $("#cor").val(""),
          $("#valor").val(""),
          navigator.notification.alert(data);
          return true;
          },
          error:function(data){
              navigator.notification.alert(data);
              return false
          }
      });
    /*
    if(ajaxFunction() = true){
        document.getElementById('lbResult').innerHTML = "Cadastro feito com êxito";
        document.getElementById("lbResult").style.color = "green";
      }else{
        document.getElementById('lbResult').innerHTML = "O cadastro falhou";
        document.getElementById("lbResult").style.color = "red";
      }
      */
}); 

/* 
        $(document).ready(function(){
            $("#btn").on('click', function(){

                var data = new FormData();
                data.append('fileimagem', $('#fileimagem')[0].files[0]);

                $.ajax({
                    url: 'save.php',
                    data: data,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(data) 
                    {
                        alert(data);
                    }
                });

            });
        });
*/