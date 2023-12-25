

document.getElementById('request').addEventListener('click', function() {
    showBurgerAlert('599.88$');
  });


document.getElementById('request2').addEventListener('click', function() {
    showBurgerAlert('599.88$');
  });


  function showBurgerAlert(amount) {
    // Using SweetAlert2 to create a customized alert
    Swal.fire({
      title: 'Request Sent!',
      html: `<progress></progress><p>Amount: ${amount}</p><img src="img/done.jpg" alt="Burger Photo" style="max-width:100%;">`,
      confirmButtonText: 'Done!',
              position: 'center',

      customClass: {
        container: 'my-swal', // Apply the custom style to the SweetAlert2 modal only
      },
    });
  }
