function Upload() {
        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var table = document.createElement("table");
                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        if (cells.length > 1) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }
                    var dvCSV = document.getElementById("dvCSV");
                    dvCSV.innerHTML = "";
                    dvCSV.appendChild(table);
                }
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
    }




// async function newFormHandler(event) {
//   event.preventDefault();

//   const first_name = document.querySelector('input[name="first_name"]').value;
//   const last_name = document.querySelector('input[name="last_name"]').value;
//   const email = document.querySelector('input[name="email"]').value;
//   const manager_id = document.querySelector('input[name="manager_id"]').value;
//   const role_id = document.querySelector('input[name="role_id]').value;


//   const response = await fetch(`/api/csv`, {
//     method: 'POST',
//     body: JSON.stringify({
//       first_name,
//       last_name,
//       email,
//       manager_id,
//       role_id
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// }

// // document.querySelector('.new-employee-form').addEventListener('submit', newFormHandler);