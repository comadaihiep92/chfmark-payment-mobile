// // // stork
$('.pay-details').on('click', function () {

    $('.cvv-field').css('display', 'none');
    $('#paytm-pay').prop('checked', false);
    $('.error-amt').hide();

    $('.vpa-section').removeClass('show');
    $('.upi-container .upi-card').removeClass('selected');
    $('.upi-container .upi-card .button-check').removeClass('show');
    $('.vpa-section input').val('');

    $('.saved_cards_check').prop('checked', false);
    if ($(this).attr('data-isactive') == 'true') {
      //              console.log($(this).attr('data-isactive'));
      var flag = $(this).find('.pay-arrow img').hasClass('rotate');

      if (flag == true) {
        $('.pay-section').removeClass('show');
        $('.pay-arrow img').removeClass('rotate');
      } else {
        $('.pay-arrow img').removeClass('rotate');
        $('.pay-section').removeClass('show');
        $(this).find('.pay-arrow img').addClass('rotate');
        //            $('.pay-arrow img').css('transform','rotate(180deg)');
        $(this).parent().find('.pay-section').addClass('show');
      }

      // if($(this).hasClass('paytm')){
      //     console.log('hiii');
      //     if($('.pay-section.paytm').hasClass('show')){
      //
      //     }
      // }
    } else {
      var error_msg = $(this).attr('data-msg');
      if (error_msg != "") {
        //                  console.log(error_msg);
        // li_fn.checkout.checkoutMsg('error', error_msg);
      }
    }

  });

  $(document).on('click', '.check-payment', function (e) {
    e.stopImmediatePropagation();
    if (this.checked == true) {
      //              console.log('go on payment');
      $('.check-payment').prop('checked', false);
      $('#paytm-pay').prop('checked', false);
      $(this).prop('checked', true);
      $('.error-amt').hide();

      $('.vpa-section').removeClass('show');
      $('.upi-container .upi-card').removeClass('selected');
      $('.upi-container .upi-card .button-check').removeClass('show');
      $('.vpa-section input').val('');


      if ($(this).hasClass('sub-method')) {
        $('.bank-name-select').html('Select Bank')
        $('.order').attr('data-pay_source', $(this).attr('data-paysource'));
      }

      if ($(this).hasClass('check-method')) {
        var method = $(this).attr('data-paymethod');
        var methodname = $(this).attr('data-methodname');
        //                    li_fn.checkout.PaymentMethodevent(method)
        $('.order').removeAttr('data-pay_source');
        $('.order').attr('data-method', method);
        $('.order').attr('data-method', methodname);
        if ($(this).attr('data-savemethod') == 'true') {
          localStorage.setItem('savemethod', true);
        } else {
          localStorage.setItem('savemethod', false);
        }
      }

      if ($('.saved_cards_check').is(':checked') == true) {
        $('.cvv-number').val('');
        $('.cvv-field').css('display', 'none');
        $('.pay-section').removeClass('show');
        $('.pay-arrow img').removeClass('rotate');
        $(this).parents('.options').find('.cvv-field').css('display', 'block');
        if (Number(localStorage.getItem('final_amt')) <= 0 && !(!!sub_prog_id && sub_prog_id !==
            "")) {
          $('#lic_wallet').prop('checked', false);
          $('.order').attr('data-l_wallet', false);
          var total_amount = Number(localStorage.getItem("final_amt")),
            usable_wallet = Number(localStorage.getItem("payable_wallet_amt")),
            payable = 0;
          $('.order').removeAttr('data-l_wallet');
          localStorage.setItem("wallet_used", 0)
          payable = Number(total_amount + usable_wallet);
        //   fn.paypalPaymentHandler(payable);
          $('.pay-amount').html(Number(Number(payable).toFixed(2)));
          $('.value-total').html(Number(Number(payable).toFixed(2)));
          $('.order').attr('data-payable_amount', Number(payable));
          localStorage.setItem("final_amt", Number(payable));
          $('.payment-charges').find('.L_wallet').html(0);
          localStorage.setItem('l_wallet_used_amount', 0)
          // $('.tap-method').text('');
        }
        // li_fn.checkout.PaymentMethodevent("Card")
      } else {
        $('.cvv-number').val('');
        $('.cvv-field').css('display', 'none');
      }

      if ($('#pod').is(':checked') == true) {
        var total_amount = Number(localStorage.getItem("final_amt")),
          usable_wallet = Number(localStorage.getItem("payable_wallet_amt")),
          payable = 0;
        if ($('#lic_wallet').is(':checked') == true) {
          $('#lic_wallet').prop('checked', false);
          $('.order').attr('data-l_wallet', false);
          $('.order').removeAttr('data-l_wallet');
          localStorage.setItem("wallet_used", 0)
          payable = Number(total_amount + usable_wallet);
        //   fn.paypalPaymentHandler(payable);
          $('.pay-amount').html(Number(Number(payable).toFixed(2)));
          $('.value-total').html(Number(Number(payable).toFixed(2)));
          $('.order').attr('data-payable_amount', Number(payable));
          localStorage.setItem("final_amt", Number(payable));
          $('.payment-charges').find('.L_wallet').html(0);
          localStorage.setItem('l_wallet_used_amount', 0)
          // $('.tap-method').text('');
        //   li_fn.checkout.checkoutMsg('error', 'You can use Licious wallet later while paying online on delivery');
        }

      }

      if ($('#cod').is(':checked') == true) {
        var total_amount = Number(localStorage.getItem("final_amt")),
          usable_wallet = Number(localStorage.getItem("payable_wallet_amt")),
          payable = 0;
        if ($('#lic_wallet').is(':checked') == true) {
          $('#lic_wallet').prop('checked', false);
          $('.order').attr('data-l_wallet', false);
          $('.order').removeAttr('data-l_wallet');
          localStorage.setItem("wallet_used", 0)
          payable = Number(total_amount + usable_wallet);
        //   fn.paypalPaymentHandler(payable);
          $('.pay-amount').html(Number(Number(payable).toFixed(2)));
          $('.value-total').html(Number(Number(payable).toFixed(2)));
          $('.order').attr('data-payable_amount', Number(payable));
          localStorage.setItem("final_amt", Number(payable));
          $('.payment-charges').find('.L_wallet').html(0);
          localStorage.setItem('l_wallet_used_amount', 0)
          // $('.tap-method').text('');
        //   li_fn.checkout.checkoutMsg('error', 'You can use Licious wallet later while paying cash on delivery');
        }

      }

    } else {
      $('.order').removeAttr('data-pay_source');
      $('.cvv-field').css('display', 'none');
    }
  });


  $('.licious_wallet').on('click', function (e) {
    var total_amount = Number(localStorage.getItem("final_amt")),
      usable_wallet = Number(localStorage.getItem("payable_wallet_amt")),
      payable = 0;

    if (this.checked == true) {
      $('.order').attr('data-l_wallet', true);
      $('.pay-method.cod').removeClass('show');
      $('.pay-method.pod').removeClass('show');
      $('.pay-section').removeClass('show');
      $('.pay-arrow img').removeClass('rotate');

      $('#pod').prop('checked', false);
      $('#cod').prop('checked', false);
      // $('.tap-method').text('Licious Wallet');
      //                  localStorage.setItem('licious_wallet_used', "true");
      var payable_wallet = Number(localStorage.getItem('payable_wallet_amt'));
      var amount_payable = (payable_wallet > total_amount) ? 0 : total_amount - payable_wallet;
      localStorage.setItem("wallet_used", Number(payable_wallet))
      payable = Number(total_amount - usable_wallet);
    //   fn.paypalPaymentHandler(payable);
      $('.pay-amount').html(Number(Number(amount_payable).toFixed(2)));
      $('.value-total').html(Number(Number(amount_payable).toFixed(2)));
      $('.order').attr('data-payable_amount', Number(amount_payable));
      localStorage.setItem("final_amt", Number(payable));
      var used_licious_amount = (payable_wallet > total_amount) ? total_amount : payable_wallet;
      localStorage.setItem('l_wallet_used_amount', used_licious_amount)
      $('.payment-charges').find('.L_wallet').html('-' + Number(used_licious_amount));

      // $('.pay-method.pod').hide();
      // $('.pay-method.cod').hide();

      if (payable <= 0) {
        $('.check-payment').prop('checked', false);
        $('#paytm-pay').prop('checked', false);
        $('.cvv-field').hide();
        $('.error-amt').hide();
        $('.order').attr('data-method', '');
        $('.order').attr('data-methodname', 'l_wallet');
        $('.vpa-section').removeClass('show');
        $('.upi-container .upi-card').removeClass('selected');
        $('.upi-container .upi-card .button-check').removeClass('show');
        $('.vpa-section input').val('');

      }
      // li_fn.checkout.PaymentMethodevent("Licious Wallet");


    } else {
      $('.order').removeAttr('data-l_wallet');
      // $('.pay-method.cod').addClass('show');
      // $('.pay-method.pod').addClass('show');

      //                  localStorage.setItem('licious_wallet_used', "false");
      localStorage.setItem("wallet_used", 0)
      payable = Number(total_amount + usable_wallet);
    //   fn.paypalPaymentHandler(payable);
      $('.pay-amount').html(Number(Number(payable).toFixed(2)));
      $('.value-total').html(Number(Number(payable).toFixed(2)));
      $('.order').attr('data-payable_amount', Number(payable));
      localStorage.setItem("final_amt", Number(payable));
      $('.payment-charges').find('.L_wallet').html(0);
      localStorage.setItem('l_wallet_used_amount', 0)
      // $('.tap-method').text('');
      // $('.pay-method.pod').show();
      // $('.pay-method.cod').show();
    }
  });

  $('#paytm-pay').on('click', function (e) {
    var total_amount = Number(localStorage.getItem("final_amt")),
      usable_wallet = Number(localStorage.getItem("payable_wallet_amt")),
      payable = 0;

    $('.pay-section').removeClass('show');
    $('.pay-arrow img').removeClass('rotate');
    $('.vpa-section').removeClass('show');
    $('.upi-container .upi-card').removeClass('selected');
    $('.upi-container .upi-card .button-check').removeClass('show');
    $('.vpa-section input').val('');
    if (this.checked == true) {
      $('.check-payment').prop('checked', false);
      $('.order').attr('data-method', $(this).attr('data-method'));
      $('.order').attr('data-methodname', $(this).attr('data-methodname'));
      $('.order').attr('data-amount', $(this).attr('data-paytm_balance'));
      $('.order').attr('data-mobile', $(this).attr('data-mobile'));
      var pay_amount = Number(localStorage.getItem('final_amt'));
      if (pay_amount <= 0) {
        $('#lic_wallet').prop('checked', false);
        $('.order').attr('data-l_wallet', false);
        $('.order').removeAttr('data-l_wallet');
        // $('.pay-method.cod').addClass('show');
        // $('.pay-method.pod').addClass('show');

        //                  localStorage.setItem('licious_wallet_used', "false");
        localStorage.setItem("wallet_used", 0)
        payable = Number(total_amount + usable_wallet);
        // fn.paypalPaymentHandler(payable);
        $('.pay-amount').html(Number(Number(payable).toFixed(2)));
        $('.value-total').html(Number(Number(payable).toFixed(2)));
        $('.order').attr('data-payable_amount', Number(payable));
        localStorage.setItem("final_amt", Number(payable));
        $('.payment-charges').find('.L_wallet').html(0);
        localStorage.setItem('l_wallet_used_amount', 0)
        // $('.tap-method').text('');
        // $('.pay-method.pod').show();
        // $('.pay-method.cod').show();
      }
      var paytm_balance = Number(localStorage.getItem('paytm_amt'));
      var pay_amount_left = Number(localStorage.getItem('final_amt'));
      if (pay_amount_left > paytm_balance) {
        $('.error-amt').show();
      } else {
        $('.error-amt').hide();
      }

      // li_fn.checkout.PaymentMethodevent('Paytm')
    } else {
      $('.error-amt').hide();
      $('.order').removeAttr('data-method');
      $('.order').removeAttr('data-amount');
      $('.order').removeAttr('data-mobile');
      $('.order').removeAttr('data-methodname');
    }
  });
  // stork
  $(document).on('click', '.upi-container .upi-card', function (e) {
    var total_amount = Number(localStorage.getItem("final_amt")),
      usable_wallet = Number(localStorage.getItem("payable_wallet_amt")),
      payable = 0;

    // var index_scroll = $(this).attr('data-index')*120+12;
    $('.upi-container').animate({
        scrollLeft: $(this).offset().left - 20
      },
      'slow');
    $('.user-vpa').focus();
    var position = $(".pay-method.razorpay-upi").offset().top;
    document.getElementsByTagName('body').scrollTop = Number(position - 50);
    $('.vpa-section').removeClass('show');
    $('.upi-container .upi-card').removeClass('selected');
    $('.upi-container .upi-card .button-check').removeClass('show');
    $('.vpa-section input').val('');
    $('#paytm-pay').prop('checked', false);
    $('.error-amt').hide();
    $('.pay-section').removeClass('show');
    $('.pay-arrow img').removeClass('rotate');

    if ($(this).attr('data-enabled') == 'true') {
      $(this).addClass('selected');
      $(this).find('.button-check').addClass('show');
      $('.vpa-section').addClass('show');
    //   li_fn.checkout.PaymentMethodevent('UPI')
    }
    if ($(this).hasClass('selected')) {
      $('.check-payment').prop('checked', false);
      $('.order').attr('data-method', $(this).attr('data-method'));
      $('.order').attr('data-methodname', $(this).attr('data-methodname'));
      var pay_amount = Number(localStorage.getItem('final_amt'));
      if (pay_amount <= 0) {
        $('#lic_wallet').prop('checked', false);
        $('.order').attr('data-l_wallet', false);
        $('.order').removeAttr('data-l_wallet');

        localStorage.setItem("wallet_used", 0)
        payable = Number(total_amount + usable_wallet);
        // fn.paypalPaymentHandler(payable);
        $('.pay-amount').html(Number(Number(payable).toFixed(2)));
        $('.value-total').html(Number(Number(payable).toFixed(2)));
        $('.order').attr('data-payable_amount', Number(payable));
        localStorage.setItem("final_amt", Number(payable));
        $('.payment-charges').find('.L_wallet').html(0);
        localStorage.setItem('l_wallet_used_amount', 0)
      }
    } else {
      $('.order').removeAttr('data-method');
      $('.order').removeAttr('data-methodname');
    }
  });

$('.choose-bank').on('click', function () {
    $('.down-info').addClass('lock-screen');
    // fn.msite.home.noScroll();
    // $('.payment-alert').show();
  });



  $('.pay-method.razorpay_netbanking').on('click', '.bank-list li', function () {
    $('.down-info').removeClass('lock-screen');
    console.log("called5")

    // fn.msite.home.bodyScroll();
  });

  $('.down-info').on('click', function () {
    $('.down-info').removeClass('lock-screen');
    console.log("called6")
    // fn.msite.home.bodyScroll();
  });

if ($(this).hasClass('sub-method')) {
    $('.bank-name-select').html('Select Bank')
    $('.order').attr('data-pay_source', $(this).attr('data-paysource'));
  }

  $(document).on('click', '.sub-method', function () {
    $('.imp-banks').prop('checked', false);
    $('.sub-method.o_wallet').prop('checked', false);
    $('.bank-name-select').html($(this).attr('data-bankname'));
    $('.order').attr('data-pay_source', $(this).attr('data-paysource'));
  });