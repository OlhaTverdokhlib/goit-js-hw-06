const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  if (!email.value.length || !password.value.length) {
    return alert('Заповни обовʼязкові поля!');
  }
  console.log(data);
  form.reset();
}
