$(document).ready(function() {
    var campos = {
        'nome': '',
        'email': '',
        'telefone': '',
        'pais': '',
        'estado': '',
        'cidade': '',
        'mensagem': '',
        'curriculo': '',
    }

    $('select').chosen();

    $('.link-menu-mobile').on('click', function(e) {
        e.preventDefault();
        
        $('.menu-desk').toggle();
    });
    
    $('#select_estado').on('change', function(e) {
        e.preventDefault();

        $('#select_cidade').prop('disabled', 'disabled');

        var estado = $('#select_estado').val();
        
        $.ajax({
            type: "POST",
            url: "/popula-cidades/",
            cache: false,
            data: {estado:estado}
        }).done(function(dados) {
            $('#select_cidade').html(dados);
            $('#select_cidade').prop('disabled', false);
            $('#select_cidade').trigger('chosen:updated');
        });    
    });

    $('#form-emprego').submit(function(e) {
        e.preventDefault();

        if ( validaForm($('#form-emprego'), campos) ) {
            var botao = $('#botao-trabalheconosco');
            botao.prop('disabled', 'disabled');
            botao.html('Enviando...');

            $.ajaxFileUpload({
                url: '/envia-formulario/',
                secureuri: false,
                fileElementId: 'fileToUpload',
                dataType: 'json',
                data: {
                    nome: $("[name='nome']").val(),
                    email: $("[name='email']").val(),
                    telefone: $("[name='telefone']").val(),
                    pais: $("[name='pais']").val(),
                    estado: $("[name='estado']").val(),
                    cidade: $("[name='cidade']").val(),
                    mensagem: $("[name='mensagem']").val(),
                    curriculo: $("[name='curriculo']").val(),
                },
                success: function (dados, status) {
                    alert( dados.mensagem );

                    if ( dados.erro == 0 ) {
                        window.location.href = window.location.href;
                    } else {
                        botao.prop('disabled', false);
                        botao.html('Enviar Informações');
                    }
                }
            });
        }
    });
});

function validaForm(form, campos){
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var valid = true;

    $.each(campos, function(name, msg) {
        var campo = form.find($("[name='"+name+"']"));
        
        if (name == 'pais' || name == 'estado' || name == 'cidade' || name == 'assunto') {
            if ( campo.val() == 'pais' || campo.val() == 'estado' || campo.val() == 'cidade' || campo.val() == 'assunto' ) {
                form.find('#select_'+name+'_chosen').addClass('invalid');

                valid = false;
            } else {
                form.find('#select_'+name+'_chosen').removeClass('invalid');
            };
            
        }

        if (campo.val() == '') {
            form.find($("[name='"+name+"']")).addClass('invalid');

            $('#input-'+name).addClass('invalid')

            valid = false;
        } else {
            form.find($("[name='"+name+"']")).removeClass('invalid');

            $('#input-'+name).removeClass('invalid')
        }

        if (name == 'curriculo' && campo.val() != '') {
            var filename = campo.val();
            var type = /(\.doc|\.docx|\.pdf)$/i;
            
            if (!type.exec(filename)) {
                alert('Tipo não permitido, somente .doc, .docx ou .pdf');

                valid = false;
            }
        }
    });

    return valid;
};
