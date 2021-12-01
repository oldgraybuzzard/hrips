async function newFormHandler(event) {
  event.preventDefault();

  const employeeFirstName = document.querySelector('input[name="first_name"]').value;

  const response = await fetch(`/api/employees`, {
    method: 'POST',
    body: JSON.stringify({
      employeeFirstName,
      
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/employee-dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-employee-form').addEventListener('submit', newFormHandler);