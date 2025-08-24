
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert('Thank you for your message!');
});