async function newFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('input[name="first_name"]').value;
  const last_name = document.querySelector('input[name="last_name"]').value;
  const email = document.querySelector('input[name="email"]').value;


  const response = await fetch(`/api/employees`, {
    method: 'POST',
    body: JSON.stringify({
      first_name,
      last_name,
      email,

      
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-employee-form').addEventListener('submit', newFormHandler);