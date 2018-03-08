$(document).ready(function() {
  cxpValidations();
});


//$(document).ready(function() {
var cxpValidations=function(){
  // validate select toolbox and active button
  var national = [
    { value: 'Arica', data: 'arc' },
    { value: 'Antofagasta', data: 'ant' },
    { value: 'Calama', data: 'calm' },
    { value: 'Copiapó', data: 'cppo' },
    { value: 'Iquique', data: 'iqiq' },
    { value: 'La Serena', data: 'srna' },
    { value: 'Santiago', data: 'stgo' },
    { value: 'San Esteban', data: 'sneb' },
    { value: 'Osorno', data: 'osrn' },
    { value: 'Vallenar', data: 'vall' },
    { value: 'Puerto Montt', data: 'pmont' }
  ];
  var international = [
    { value: 'Argentina', data: 'ar' },
    { value: 'Brasil', data: 'br' },
    { value: 'Bolivia', data: 'bo' },
    { value: 'Colombia', data: 'col' },
    { value: 'Ecuador', data: 'ec' },
    { value: 'Estados Unidos', data: 'usa' },
    { value: 'Paraguay', data: 'par' },
    { value: 'Uruguay', data: 'uru' },
    { value: 'Venezuela', data: 'ven' },
    { value: 'Perú', data: 'pe' }
  ];

  // setup selectize function pulling from currencies[] array
  $('.national-select').selectize({
    options: national,
    labelField: 'value',
    valueField: 'data',
    searchField: 'value',
    persist: false,
    allowEmptyOption: true,
    onInitialize: function() {
        this.$control_input.attr('readonly', true);
    },
  });

  $('.international-select').selectize({
    options: international,
    labelField: 'value',
    valueField: 'data',
    searchField: 'value',
    persist: false,
    allowEmptyOption: true,
    onInitialize: function() {
        this.$control_input.attr('readonly', true);
    }
  });
  // end selectize


  //change national or international
  $(".toolbox-send-type").on('change', function() {
    var valor = $(this).val();
    var $next = $(this).parents('form');
    if (valor == 'internationalValue') {
      // console.log('inter');
      $next.find('.is-national').hide(0);
      $next.find('.is-international').fadeIn(200);
    } else if (valor == 'nationalValue') {
      // console.log('local');
      $next.find('.is-international').hide(0);
      $next.find('.is-national').fadeIn(200);
    }
    for (var i = 0; i < $next.find('select').length; i++) {
      $next.find('select')[i].selectize.clear();
    }
    $next.find(".isAccept").removeAttr("checked").removeClass("check-in");

  });

  // send package
  $(".form-send-package").each(function() {
    var $form = $(this);

    $form.find('input.isAccept').click(function(e) {
      $(this).toggleClass('check-in');
      formValidation();
    });

    $form.find('select').on('change', function() {
      formValidation();
    });

    function formValidation() {
      var i = 0;
      var x = 0;
      var isInternational = $form.find(".toolbox-send-type:checked").val() === "internationalValue";

      $form.find('select').each(function() {
        if (($(this).val() != '') && ($(this).val() != '0')) {
          i++;
        }
      });
      $form.find('input.check-in').each(function() {
        x++;
      });
      if (isInternational && $form.find(".is-international .sizes-select").val() === "7") {
        $form.find(".more-70kg").addClass("active");
        $form.find('.total.is-international .price').text(0);
        $form.find(".isAccept").attr("disabled", true).removeAttr("checked");
      } else {
        $form.find(".more-70kg").removeClass("active");
        $form.find(".isAccept").removeAttr("disabled");

        if (i >= 3) {
          if (isInternational) {
            var initPrice = 100000,
              endPrice = 999999;
            $form.find('.total.is-international .price').eq(0).text(initPrice.toLocaleString(
              undefined, { minimumFractionDigits: 0 }
            ).replace(',', '.'));
            $form.find('.total.is-international .price').eq(1).text(endPrice.toLocaleString(
              undefined, { minimumFractionDigits: 0 }
            ).replace(',', '.'));
          } else {
            var price = 10000000;
            $form.find('.total.is-national .price').text(price.toLocaleString(
              undefined, { minimumFractionDigits: 0 }
            ).replace(',', '.'));
          }
          if (x >= 1) {
            $form.find('button.btn').prop('disabled', false);
            $form.find('button.btn').addClass('active');
          } else {
            $form.find('button.btn').prop('disabled', 'disabled');
            $form.find('button.btn').removeClass('active');
          }
        } else {
          $form.find('.total .price').html('0');
          $form.find('button.btn').prop('disabled', 'disabled');
          $form.find('button.btn').removeClass('active');
        }
      }
    }
  });

  //send document
  $(".form-send-document").each(function() {
    var $form = $(this);

    $form.find('input.isAccept').click(function(e) {
      $(this).toggleClass('check-in');
      formValidation();
    });

    $form.find('select').on('change', function() {
      formValidation();
    });

    function formValidation() {
      var i = 0;
      var x = 0;
      var isInternational = $form.find(".toolbox-send-type:checked").val() === "internationalValue";
      $form.find('select').each(function() {
        if (($(this).val() != '') && ($(this).val() != '0')) {
          i++;
        }
      });
      $form.find('input.check-in').each(function() {
        x++;
      });
      if (i >= 3) {
        if (isInternational) {
          var initPrice = 100000,
            endPrice = 999999;
          $form.find('.total.is-international .price').eq(0).text(initPrice.toLocaleString(
            undefined, { minimumFractionDigits: 0 }
          ).replace(',', '.'));
          $form.find('.total.is-international .price').eq(1).text(endPrice.toLocaleString(
            undefined, { minimumFractionDigits: 0 }
          ).replace(',', '.'));
        } else {
          var price = 10000000;
          $form.find('.total.is-national .price').text(price.toLocaleString(
            undefined, { minimumFractionDigits: 0 }
          ).replace(',', '.'));
        }
        if (x >= 1) {
          $form.find('button.btn').prop('disabled', false);
          $form.find('button.btn').addClass('active');
        } else {
          $form.find('button.btn').prop('disabled', 'disabled');
          $form.find('button.btn').removeClass('active');
        }
      } else {
        $form.find('button.btn').prop('disabled', 'disabled');
        $form.find('button.btn').removeClass('active');
        $form.find('.total .price').html('0');
      }
    }
  });

  // send money
  $(".form-send-money").each(function() {
    var $form = $(this);

    $form.find("input.only-prices").keyup(function() {
      this.value = this.value.replace(/[^\d\.\-]/g, '');
      if (this.value.match(/[0-9]/g) != null) {
        var valor = this.value.replace(/,/g, "");
        valor = valor.replace(/\./g, '');
        this.value = valor.replace(/\-/g, '');
      }
    });

    $form.find('select').on('change', function() {
      formValidation()
    });
    $form.find('input').on('keyup', function() {
      formValidation();
    });
    $form.find('input.isAccept').click(function(e) {
      $(this).toggleClass('check-in');
      formValidation();
    });

    //custom functions for toolbox
    function formValidation() {
      var flag = $form.find('select').val();
      var form = $('#thirdForm');
      var path = 'assets/img/flags/flag-icon-';
      var money = form.find('.form-control').val();
      var valor = $form.find('input').val();
      if (money == '') {
        money = 0;
      }
      if (valor.length < 3) {

        if (valor != '') {
          $form.find('input').focus();
        }
      }


      // en esta parte esperamos que lleguen todos los países por que no tenemos todas las banderas
      //osea que esta condición se debe eliminar luego ****
      if (flag == 'cl') {
        form.find('.flag-icons').attr('src', path + flag + '.png');
        //add value of nationality
        form.find('.money-change').html('CLP ' + numberWithDot(money));
      } else {
        form.find('.flag-icons').attr('src', path + 'usa.png');
        //add value of nationality
        money = money / 637;
        form.find('.money-change').html('USD ' + money.toFixed(2));
      }
      var i = 0;
      var x = 0;
      $form.find('select').each(function() {
        if (($(this).val() != '') && ($(this).val() != '0')) {
          i++;
        }
      });
      $form.find('input.form-control').each(function() {
        if (($(this).val() != '') && ($(this).val() != '0')) {
          i++;
        }
      });
      $form.find('input.check-in').each(function() {
        x++;
      });
      if (i >= 2) {
        //example price
        var price = 10000000;
        var value = price.toLocaleString(
          undefined, { minimumFractionDigits: 0 }
        );
        var total = value.replace(',', '.');
        $form.find('.total .price').text(total.replace(',', '.'));
        if (x >= 1) {
          $form.find('button.btn').prop('disabled', false);
          $form.find('button.btn').addClass('active');
        } else {
          $form.find('button.btn').prop('disabled', 'disabled');
          $form.find('button.btn').removeClass('active');
        }
      } else {
        $form.find('button.btn').prop('disabled', 'disabled');
        $form.find('button.btn').removeClass('active');
        $form.find('.total .price').html('0');
      }
    }
  });

  function numberWithDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }


  ///====================================================
  // tabs change login
  $('.login-register [data-step]').on('click', function(e) {
    e.preventDefault;
    var target = $(this).data('step');
    var arrow = $(this).parents('form').find('.back-arrow a');
    $('.steps').hide();
    $('.step-' + target).fadeIn();
    arrow.toggleClass('hide');

    goTop();
  });

  //Login and Register validation
  var prefixes = [
    { value: 'Mobile', prefix: '+56 9' },
    { value: 'Fijo', prefix: '+56 2' }
  ];
  $('.prefix-select').selectize({
    options: prefixes,
    labelField: 'prefix',
    valueField: 'value',
    searchField: 'value',
    persist: false,
    allowEmptyOption: true,
    onInitialize: function() {
      $('.prefix-select').next('.selectize-control').find('input').attr('disabled', 'disabled');
    }
  });
  $('.step-1 input').on('keyup blur', function() {
    var i = 0;
    $('.step-1 span.icon-circle-check').each(function() {
      i++;
    });
    if (i >= 4) {
      $('.step-1 .cxp-btn').prop('disabled', false);
    } else {
      $('.step-1 .cxp-btn').prop('disabled', 'disabled');
    }
  });
  $('.step-2 input').on('keyup blur', function() {
    var i = 0;
    $('.step-2 span.icon-circle-check').each(function() {
      if ($(this).prop('name') != 'phone') {
        i++;
      }
    });
    var x = 0;
    $('.step-2 .captcha-true').each(function() {
      x = 1;
    })
    if ($('input#name').val() != '' && $('input#firstName').val() != '' && $('input#lastName').val() != '' && x == 1) {
      $('.step-2 .cxp-btn').prop('disabled', false);
    } else {
      $('.step-2 .cxp-btn').prop('disabled', 'disabled');
    }
  });
  $('#input-phone-contain').on('keydown', 'input', function(e) {
    -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || /65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault()
  });

  $("#registerForm").validate({
    rules: {
      rut: {
        required: true,
        rutRegister: true,
        minlength: 7
      },
      email: {
        required: true,
        email: true
      },
      pass: {
        required: true,
        minlength: 6
      },
      confirmPass: {
        equalTo: "#pass",
        required: true,
        minlength: 6
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
      }
    },
    messages: {
      //paso 1
      rut: {
        required: "Este campo es <strong>obligatorio</strong>",
        rutRegister: "Debes ingresar un <strong>RUT válido</strong>",
        minlength: "Debes ingresar un <strong>RUT válido</strong>"
      },
      email: {
        required: "Este campo es <strong>obligatorio</strong>",
        email: "Debe ingresar un <strong>email válido</strong>"
      },
      pass: {
        required: "Este campo es <strong>obligatorio</strong>",
        minlength: "Tu contraseña debe ser de al menos <strong>6 caracteres</strong>"
      },
      confirmPass: {
        required: "Este campo es <strong>obligatorio</strong>",
        equalTo: "Ambas contraseñas deben coincidir"
      },
      //paso 2
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
      }
    },
    onkeyup: function(element) {
      var element_id = $(element).attr('id');
      if (this.settings.rules[element_id].onkeyup !== false) {
        $.validator.defaults.onkeyup.apply(this, arguments);
        $(element).parents(".form-group").find('.error').remove();
        $(element).removeClass('is-error');
      }

      if ($(element).attr("name") != "phone" && $(element).attr("name") != "email" && $(element).attr("name") != "pass" && $(element).attr("name") != "confirmPass") {
        if ($(element).attr("name") == "rut") {
          if ($(element).val().length >= 8) {
            $(element).valid();
          }
        } else if ($(element).attr("name") == "pass" || $(element).attr("name") == "confirmPass") {
          if ($(element).val().length >= 6) {
            $(element).valid();
          }
        } else {
          if ($(element).val().length >= 3) {
            $(element).valid();
          }
        }
      } else if ($(element).attr("name") != "email") {
        if ($(element).val().length >= 6) {
          $(element).valid();
        }
      }
      if ($(element).attr("name") == "email") {
        if ($(element).val().indexOf('@') >= 0) {
          $(element).valid();
        }
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
      $(element).addClass('is-error');
      $(element).parents(".form-group").find('span').remove();
      $(element).parents(".form-group").append('<span class="icon-circle-alert"></span>');
    },
    unhighlight: function(element) {
      $(element).parents(".form-group").find('span').remove();
      $(element).removeClass('is-error');
      if ($(element).val() == "") {
        $('#phone-error').hide();
      } else {
        $(element).parents(".form-group").append('<span class="icon-circle-check"></span>');
      }
    },
    submitHandler: function(form) {
      $.ajax({
        // url: form.action,
        // type: form.method,
        data: $(form).serialize(),
        success: function(response) {
          $('.steps, .back-arrow').hide();
          $('.step-3').fadeIn();
          goTop();
          // console.log(response);
        }
      });
    }
  });

  // forgot passrword
  $('#resendEmail').on('click', function() {
    $("#forgotForm").submit();
  });
  $("#forgotForm").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Este campo es <strong>obligatorio</strong>",
        email: "Debe ingresar un <strong>email válido</strong>"
      }
    },
    onkeyup: function(element) {
      var element_id = $(element).attr('id');
      if (this.settings.rules[element_id].onkeyup !== false) {
        $.validator.defaults.onkeyup.apply(this, arguments);
        $(element).parents(".form-group").find('.error').remove();
        $(element).removeClass('is-error');
      }

      if ($(element).val().match('.cl')) {
        $(element).valid();
      } else if ($(element).val().match('.com')) {
        $(element).valid();
      } else if ($(element).val().match('.org')) {
        $(element).valid();
      } else if ($(element).val().match('.net')) {
        $(element).valid();
      }
    },
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    },
    highlight: function(element) {
      $(element).addClass('is-error');
      $(element).parents(".form-group").find('span').remove();
      $(element).parents(".form-group").append('<span class="icon-circle-alert"></span>');
      $('#forgotForm .cxp-btn').prop('disabled', 'disabled');
    },
    unhighlight: function(element) {
      $(element).parents(".form-group").find('span').remove();
      $(element).removeClass('is-error');
      if ($(element).val() == "") {
        $('#phone-error').hide();
      } else {
        $(element).parents(".form-group").append('<span class="icon-circle-check"></span>');
        $('#forgotForm .cxp-btn').prop('disabled', false);
      }
    },
    submitHandler: function(form) {
      $.ajax({
        // url: form.action,
        // type: form.method,
        data: $(form).serialize(),
        success: function(response) {
          goTop();
          // $(form).find('.cxp-btn.btn-login').hide();
          $('.tab-start').hide();
          $('.tab-finish').fadeIn();
          console.log('response');
        }
      });
    }
  });
  $('#forgotForm input').on('keyup blur', function() {
    var i = 0;
    $('#forgotForm .form-group span.icon-circle-check').each(function() {
      i++;
    });
    if (i == 1) {
      $('#forgotForm .cxp-btn').prop('disabled', false);
    } else {
      $('#forgotForm .cxp-btn').prop('disabled', 'disabled');
    }
  });

  //Recovery password
  $("#recoveryForm").validate({
    rules: {
      pass: {
        required: true,
        minlength: 6
      },
      confirmPass: {
        equalTo: "#pass",
        required: true,
        minlength: 6
      }
    },
    messages: {
      pass: {
        required: "Este campo es <strong>obligatorio</strong>",
        minlength: "Tu contraseña debe ser de al menos <strong>6 caracteres</strong>"
      },
      confirmPass: {
        required: "Este campo es <strong>obligatorio</strong>",
        equalTo: "Ambas contraseñas deben coincidir",
        minlength: "Tu contraseña debe ser de al menos <strong>6 caracteres</strong>"
      }
    },
    onkeyup: function(element) {
      var element_id = $(element).attr('id');
      if (this.settings.rules[element_id].onkeyup !== false) {
        $.validator.defaults.onkeyup.apply(this, arguments);
        $(element).parents(".form-group").find('.error').remove();
        $(element).removeClass('is-error');
      }
      if ($('input[name=pass]').val().length >= 6) {
        $('input[name=pass]').valid();
      }
      if ($('input[name=confirmPass]').val().length >= 6) {
        var valido = $('input[name=confirmPass]').valid();
        if (valido) {
          $('#recoveryForm .cxp-btn').prop('disabled', false);
        } else {
          $('#recoveryForm .cxp-btn').prop('disabled', 'disabled');
        }
      }
      // console.log($(element).valid());
    },
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    },
    highlight: function(element) {
      $(element).addClass('is-error');
      $(element).parents(".form-group").find('span').remove();
      $(element).parents(".form-group").append('<span class="icon-circle-alert"></span>');
    },
    unhighlight: function(element) {
      $(element).parents(".form-group").find('span').remove();
      $(element).removeClass('is-error');
      if ($(element).val() == "") {
        $('#phone-error').hide();
      } else {
        $(element).parents(".form-group").append('<span class="icon-circle-check"></span>');
      }
    },
    submitHandler: function(form) {
      $.ajax({
        // url: form.action,
        // type: form.method,
        data: $(form).serialize(),
        success: function(response) {
          goTop();
          $('.tab-start').hide();
          $('.tab-finish').fadeIn();
          console.log('change');
        }
      });
    }
  });
  $('#recoveryForm input').on('keypress', function() {
    var i = 0;
    $('#recoveryForm .form-group span.icon-circle-check').each(function() {
      i++;
    });
    if (i == 2) {
      $('#recoveryForm .cxp-btn').prop('disabled', false);
    } else {
      $('#recoveryForm .cxp-btn').prop('disabled', 'disabled');
    }
  });

  //jquery validate and jquery rut to run
  $.validator.addMethod("rutRegister", function(value, element) {
    return this.optional(element) || $.Rut.validar(value);
  }, "Debes ingresar un <strong>RUT válido</strong>");

  $('#confirmPass').on('keyup', function() {
    if ($(this).val() == '') {
      $('#registerForm .cxp-btn').prop('disabled', 'disabled');
    } else {
      if ($(this).val().length >= 6) {
        if ($(this).valid()) {
          var i = 0;
          $('.step-1 span.icon-circle-check').each(function() {
            i++;
          });
          if (i >= 4) {
            $('.step-1 .cxp-btn').prop('disabled', false);
          } else {
            $('.step-1 .cxp-btn').prop('disabled', 'disabled');
          }
        }
      }
    }
  });


  //Login
  $('.input-rut').Rut();
  $('#loginUser').on('blur', function() {
    var valor = $(this).val();
    var dv = valor.slice(-1);
    if ($.Rut.validar(valor)) {
      var nuevo = $.Rut.formatear(valor, dv);
      $(this).val(nuevo);
    } else {}
  });
  $("#loginForm").validate({
    rules: {
      loginUser: {
        required: true,
        minlength: 6,
        rutLogin: function(element) {},
        email: function(element) {
          var valor = $(element).val();
          if (!$.Rut.validar(valor)) {
            $(element).Rut({
              format: false
            });
            return true;
          }
        },

      },
      loginPass: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      loginUser: {
        minlength: "Debes ingresar un <strong>email o RUT válido</strong>",
        required: "Este campo es <strong>obligatorio</strong>",
        email: "Debes ingresar un <strong>email o RUT válido</strong>",
        rutLogin: "Debes ingresar un <strong>email o RUT válido</strong>",
      },
      loginPass: {
        required: "Este campo es <strong>obligatorio</strong>",
        minlength: "Tu contraseña debe ser de al menos <strong>6 caracteres</strong>"
      }
    },
    onkeyup: function(element) {
      var element_id = $(element).attr('id');
      if (this.settings.rules[element_id].onkeyup !== false) {
        $.validator.defaults.onkeyup.apply(this, arguments);
        $(element).parents(".form-group").find('.error').remove();
        $(element).append('<span class="icon-padlock"></span>')
        $(element).removeClass('is-error');
      }
      if ($('input[name=loginPass]').val().length >= 6) {
        var valido = $('input[name=loginPass]').valid();
        if (valido) {
          $('#loginForm .cxp-btn').prop('disabled', false);
        } else {
          $('#loginForm .cxp-btn').prop('disabled', 'disabled');
        }
      }
      // console.log($(element).valid());
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") == "loginPass") {
        console.log('error en pass');
      } else {}
      error.insertAfter(element);
    },
    highlight: function(element) {
      $(element).addClass('is-error');
      $(element).parents(".form-group").find('span').remove();
      $(element).parents(".form-group").append('<span class="icon-circle-alert"></span>');
    },
    unhighlight: function(element) {
      $(element).parents(".form-group").find('span').remove();
      $(element).removeClass('is-error');
      if ($(element).val() == "") {
        $('#phone-error').hide();
      } else {
        $(element).parents(".form-group").append('<span class="icon-circle-check"></span>');
      }
    },
    submitHandler: function(form) {
      $.ajax({
        // url: form.action,
        // type: form.method,
        data: $(form).serialize(),
        success: function(response) {
          var user = $(form).find('input#loginUser').val();
          var pass = $(form).find('input#loginPass').val();
          var close = $(form).find('.alert').find('.close');
          if (user == 'example@error.cl') {
            $(form).find('.alert-warning').fadeIn();
            close.on('click', function() {
              $(form).find('.alert-warning').fadeOut();
            })
            console.log('error');
          } else {
            $('#ModalLogin').modal('show');
            console.log('enviando...');
          }
        }
      });
    }
  });
  // validar
  $('#loginForm input').on('keyup blur', function() {
    var i = 0;
    $('#loginForm span.icon-circle-check').each(function() {
      i++;
    });
    if (i == 2) {
      $('#loginForm .cxp-btn').prop('disabled', false);
    } else {
      $('#loginForm .cxp-btn').prop('disabled', 'disabled');
    }
  });
  $('#loginForm input[name="loginPass"].is-error').on('keyup', function() {
    // if ($(this).val().length > 5) {
    //   // $(this).valid();
    // }
    if ($(this).val() == '') {
      $('#loginForm .cxp-btn').prop('disabled', 'disabled');
    } else {
      $(this).valid();
      $('#loginForm .cxp-btn').prop('disabled', false);
    }
  });
  // Validar el rut en jquery validate
  $.validator.addMethod("rutLogin", function(value, element) {
    return this.optional(element) || $.Rut.validar(value);
  }, "Debes ingresar un <strong>email o RUT válido</strong>");

  var getKeyCode = function(str) {
    return str.charCodeAt(str.length);
  };

  var optionWidth = $(".entry-options .option").width();
  $(".entry-options .option").height(optionWidth);

  $(window).load(function() {
    if ($(window).width() <= 768) {
      $("input.only-prices").prop('type', 'number');
    }
  });

}
//});

function goTop() {
  $('body,html').animate({
    scrollTop: $("body").offset().top - 0
  }, 400);
  return false;
}

function captcha_callback(response) {
  if (response.length > 1) {
    $('.step-2').append('<span class="hide captcha-true"></span>');
    if ($('input#name').val() != '' && $('input#firstName').val() != '' && $('input#lastName').val() != '') {
      $('.step-2 .cxp-btn').prop('disabled', false);
    }
  }

}
