$(document).ready(function(){
  /*
      Contact form
  */
  $('.preventivo-form form').submit(function(e) {
    e.preventDefault();

    var form = $(this);
    var nameLabel = form.find('label[for="contact-name"]');
    var emailLabel = form.find('label[for="contact-email"]');
    var messageLabel = form.find('label[for="contact-message"]');
    
    nameLabel.html('Nome e Cognome');
    emailLabel.html('La tua email');
    messageLabel.html('Breve descrizione');
    
    var postdata = form.serialize();
    
    $.ajax({
      type: 'POST',
      url: 'assets/sendmail.php',
      data: postdata,
      dataType: 'json',
      success: function(json) {
        if(json.nameMessage != '') {
          nameLabel.append(' - <span class="error-label" style="color:red;"> ' + json.nameMessage + '</span>');
        }
        if(json.emailMessage != '') {
          emailLabel.append(' - <span class="error-label" style="color:red;"> ' + json.emailMessage + '</span>');
        }
        if(json.messageMessage != '') {
          messageLabel.append(' - <span class="error-label" style="color:red;"> ' + json.messageMessage + '</span>');
        }
        if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
          form.fadeOut('fast', function() {
              form.parent('.preventivo-form').append('<p><span style="font-size:1.8rem; color:#000;">Grazie per averci contattato!</span> Ricever&agrave; una risposta molto presto.</p>');
          });
        }
      }
    });
  });
});