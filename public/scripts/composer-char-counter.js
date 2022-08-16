
$(() => {
// $(document).ready(() => {
  $( "#tweet-text ").on( "input", function(e) {
    // console.log($( "#tweet-text" ).val().length);
    const countRemaining = 140 - this.value.length;
    $( ".counter" ).html(countRemaining);

    if (countRemaining < 0) {
      $( ".counter" ).css( "color", "red");
    } else {
      $( ".counter" ).css( "color", "#545149");
    }
  })
});


// document.addEventListener('input', (event) => {
//   console.log(event);
// })