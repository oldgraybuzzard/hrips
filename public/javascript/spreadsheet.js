const { GoogleSpreadsheet } = require('google-spreadsheet');

const creds = require('../../client_secret.json');

const doc = new GoogleSpreadsheet('1MSytQDbuL2k3WcA_xm_jRhFkLQQcKJOy2kPNpGTS_Zw');

function printEmployee(employee) {
  console.log(`Name: ${employee.first_name} ${employee.last_name}`);
  console.log(`Email: ${employee.email}`);
  console.log(`Manager ID: ${employee.manager_id}`);
  console.log(`Role ID: ${employee.role_id}`);
  console.log('-----------------------');
}

async function accessSpreadsheet() {
  
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  await doc.getInfo();
  const sheet = doc.sheetsByIndex[0];
  
  const rows = await sheet.getRows({
    offset: 0
  });

  rows.forEach(row => {
    printEmployee(row);
  })

  

};

accessSpreadsheet();