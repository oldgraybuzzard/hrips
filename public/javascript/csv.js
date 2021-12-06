async function newFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('input[name="first_name"]').value;
  const last_name = document.querySelector('input[name="last_name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const manager_id = document.querySelector('input[name="manager_id"]').value;
  const role_id = document.querySelector('input[name="role_id]').value;


  const response = await fetch(`/api/csv`, {
    method: 'POST',
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      manager_id,
      role_id
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

// document.querySelector('.new-employee-form').addEventListener('submit', newFormHandler);