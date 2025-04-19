$(document).ready(function () {
  $('#contactForm').on('submit', function (e) {
    let isValid = true;

    // Nombre
    const name = $('#name');
    if (!/^([A-Za-zÀ-ÿñÑ ]{3,})$/.test(name.val().trim())) {
      name.next('.error-message').show();
      isValid = false;
    } else {
      name.next('.error-message').hide();
    }

    // Email
    const email = $('#email');
    if (!/^\S+@\S+\.\S+$/.test(email.val().trim())) {
      email.next('.error-message').show();
      isValid = false;
    } else {
      email.next('.error-message').hide();
    }

    // Asunto
    const subject = $('#subject');
    if (subject.val() === '') {
      subject.next('.error-message').show();
      isValid = false;
    } else {
      subject.next('.error-message').hide();
    }

    // Mensaje
    const message = $('#message');
    if (message.val().trim().length < 10) {
      message.next('.error-message').show();
      isValid = false;
    } else {
      message.next('.error-message').hide();
    }

    if (!isValid) {
      e.preventDefault();
    } else {
      e.preventDefault();

      // Mostrar spinner
      $('#spinnerContainer').fadeIn();

      // Simular envío con retardo
      setTimeout(function () {
        $('#spinnerContainer').fadeOut();

        // Mostrar modal de confirmación
        $('#confirmationModal').addClass('show').css('display', 'block');
      }, 1500);
    }
  });

  // Cerrar modal
  $('.close, .modal-btn').click(function (e) {
    e.preventDefault();
    $('#confirmationModal').removeClass('show').hide();
  });
});
