const form = document.forms['login-form'];
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const body = Object.fromEntries(new FormData(form));

    const result = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const jsonResult = await result.json();
    if (jsonResult.message !== 'ok') {
      document.querySelector('.error').innerHTML = jsonResult.message;
    } else {
      window.location.assign('/profile');
    }
  });
}
