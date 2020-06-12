// Change Umbrella Colour 
$(document).ready(function () {

  $('.color-choose input').on('click', function() {
      var umbrellaColor = $(this).attr('data-image');

      $('.active').removeClass('active');
    $('.left-column img[data-image = ' + umbrellaColor + ']').addClass('active');
    $(this).addClass('active');

    $('.left-column img[id = ' + "logo" + ']').addClass('active');
  });

});

// Add Custom Logo
function previewFile() {
  var preview = document.getElementById("logo");
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
  $('.left-column img[id = ' + "logo" + ']').addClass('active');
}