$(document).ready(function(){
  

    $(".ajaxForm :submit").attr("disabled",false);
    $(document).on("submit",".ajaxForm",function(){
        var form=this;
        if(!form.submitting){
            form.submitting=true;
            $(form).find(":submit").attr("disabled",true);
            $(form).append("<div class='ajaxLoader'>Cargando</div>");
            var ajaxLoader=$(form).find(".ajaxLoader");
            $(ajaxLoader).css({
                left: ($(form).width()/2 - $(ajaxLoader).width()/2)+"px", 
                top: ($(form).height()/2 - $(ajaxLoader).height()/2)+"px"
                });
            $.ajax({
                url: form.action,
                data: $(form).serialize(),
                type: form.method,
                dataType: "json",
                success: function(response){
                    if(response.validacion){
                        if(response.redirect){
                            window.location=response.redirect;
                        }else{
                            var f=window[$(form).data("onsuccess")];
                            f(form);
                        }
                    }
                    else{
                        form.submitting=false;
                        $(ajaxLoader).remove();
                        $(form).find(":submit").attr("disabled",false);
                        
                        $(".validacion").html(response.errores);
                        $('html, body').animate({
                            scrollTop: $(".validacion").offset().top-10
                        });
                    }
                },
                error: function(){
                    form.submitting=false;
                    $(ajaxLoader).remove();                
                    $(form).find(":submit").attr("disabled",false);
                }
            });
        }
        return false;
    });
    
    
});