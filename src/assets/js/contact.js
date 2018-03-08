(function(window){

  var captchaIsAccepted = false;

  $(document).ready(function() {
    // Motivo
    var motivo = [
      { value: 'Consulta' },
      { value: 'Reclamo' },
      { value: 'Solicitud' },
      { value: 'Felicitaciones' }
    ];

    $('.motivo-select').selectize({
      options: motivo,
      labelField: 'value',
      valueField: 'value',
      searchField: 'value',
      persist: false,
      allowEmptyOption: true,
      onInitialize: function() {
          this.$control_input.attr('readonly', true);
      },
      onChange: function(){
          validateSelect("motivo");
      },
      onBlur: function(){
          validateSelect("motivo");
      }
    });

    // Servicio y producto
    var servicio = [
      { value: 'Envío de documentos' },
      { value: 'Envío de encomiendas' },
      { value: 'Envío de dinero' },
      { value: 'Envíos On-line' },
      { value: 'Retiros' },
      { value: 'Recarga telefónica' },
      { value: 'Recaudaciones' },
      { value: 'Servicios urbanos' }
    ];

    $('.servicio-select').selectize({
      options: servicio,
      labelField: 'value',
      valueField: 'value',
      searchField: 'value',
      persist: false,
      allowEmptyOption: true,
      onInitialize: function() {
          this.$control_input.attr('readonly', true);
      },
      onChange: function(){
          validateSelect("servicio");
      },
      onBlur: function(){
          validateSelect("servicio");
      }
    });

    function validateSelect(name){
        $("select[name='"+name+"']").valid();
    }

    // collapse type user
    $('.type-client input[type="radio"]').on('click', function(e) {
        if ($(this).is(':checked')) {
            $('ul.type-client').toggleClass('is-checked');
            $('ul.type-client li').removeClass('activate');
            $(this).parent().addClass('activate');
            $('ul.type-client li input').attr('checked', false);
            $(this).attr('checked', true);
        }
        var tab = $(this).attr('id');
        $('.faq-panel').removeClass('is-active');
        $('.faq-panel.' + tab + '-tab').addClass('is-active');
    });

    // collapse type user
    $('ul.type-client input[type="radio"]').on('click', function(e) {
      if ($(this).is(':checked')) {
        $('ul.type-client').toggleClass('is-checked');
        $('ul.type-client li').removeClass('activate');
        $(this).parent().addClass('activate');
        $('ul.type-client li input').attr('checked', false);
        $(this).attr('checked', true);
      }
      var tab = $(this).attr('id');
      $('.faq-panel').removeClass('is-active');
      $('.faq-panel.' + tab + '-tab').addClass('is-active');
    });

    $("#contactForm .selectized").show();

    // contact form
    $("#contactForm").validate({
      rules: {
        servicio: {
          required: true
        },
        motivo: {
          required: true
        },
        rut: {
          required: true,
          rutRegister: true,
          minlength: 7
        },
        email: {
          required: true,
          email: true
        },
        name: {
          required: true
        },
        firstName: {
          required: true
        },
        lastName: {
          required: true
        },
        phone: {
          required: false,
          minlength: 8,
          number: true
        },
        comentarios: {
          required: true
        }
      },
      messages: {
        servicio: {
          required: "Este campo es <strong>obligatorio</strong>"
        },
        motivo: {
          required: "Este campo es <strong>obligatorio</strong>"
        },
        rut: {
          required: "Este campo es <strong>obligatorio</strong>",
          rutRegister: "Debes ingresar un <strong>RUT válido</strong>",
          minlength: "Debes ingresar un <strong>RUT válido</strong>"
        },
        email: {
          required: "Este campo es <strong>obligatorio</strong>",
          email: "Debe ingresar un <strong>email válido</strong>"
        },
        name: {
          required: "Este campo es <strong>obligatorio</strong>"
        },
        firstName: {
          required: "Este campo es <strong>obligatorio</strong>"
        },
        lastName: {
          required: "Este campo es <strong>obligatorio</strong>"
        },
        phone: {
          number: "Número de teléfono inválido",
          minlength: "Tu teléfono debe ser de al menos <strong>8 números</strong>"
        },
        comentarios: {
          required: "Este campo es <strong>obligatorio</strong>"
        }
      },
      errorPlacement: function(error, element) {
        if (element.attr("name") == "phone") {
          error.appendTo(element.parents(".form-group"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function(element) {
        console.log("not valid");
        $(element).addClass('is-error');
        $(element).parents(".form-group").find('.icon-circle-check, .icon-circle-alert').remove();
        $(element).parents(".form-group").append('<span class="icon-circle-alert"></span>');
        validateForm();
      },
      unhighlight: function(element) {
        $(element).parents(".form-group").find('.icon-circle-check, .icon-circle-alert').remove();
        $(element).removeClass('is-error');
        if ($(element).val() == "") {
          $('#phone-error').hide();
        } else {
          $(element).parents(".form-group").append('<span class="icon-circle-check"></span>');
        }
        validateForm();
      },
      submitHandler: function(form) {
        $.ajax({
          // url: form.action,
          // type: form.method,
          data: $(form).serialize(),
          success: function(response) {
            goTop();
            $('.contact-tabs .step-form').removeClass('is-active');
            $('.contact-tabs .step-message').addClass('is-active');
            $('.faq-panel').removeClass('is-active');
            // console.log(response);
          }
        });
      }
    });

    $('.step-message .foot .link').on('click', function(e) {
      e.preventDefault();
      location.reload();
    });

  });

  function validateForm(){
    var diference =  ($("#contactForm input[name='phone']").val() != "" ? 1 : 0) + ($("#contactForm input[name='orden']").val() != "" ? 1 : 0);
    if(captchaIsAccepted && $("#contactForm .icon-circle-check").length === (8 + diference)){
        $('#contactForm .cxp-btn').removeAttr('disabled');
    }else{
        $('#contactForm .cxp-btn').prop('disabled', true);
    }
  }

  function captcha_contact(response) {
    if (response.length > 1) {
        captchaIsAccepted = true;
        validateForm();
    }
  }

  window.captcha_contact = captcha_contact;

})(window);
