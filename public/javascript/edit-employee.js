async function editFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('input[name="first_name"]').value;
  const last_name = document.querySelector('input[name="last_name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/employees/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
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

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
