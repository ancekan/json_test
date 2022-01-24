//1.variants
//project code by dcode on youtube https://youtu.be/qBg8IB3u28s

// async function loadIntoTable(url, table) {
//     //const tableHead = table.querySelector("thead");
//     const tableBody = table.querySelector("tbody");
//     const response = await fetch(url);
//     const { rows } = await response.json();

//     //Notirit tabulu
//     //tableHead.innerHTML = "<tr></tr>";
//     tableBody.innerHTML = "";

//     //Nolasit tabulas galveni
//     // for (const headerText of headers) {
//     //   const headerElement = document.createElement("th");

//     //   headerElement.textContent = headerText;
//     //   tableHead.querySelector("tr").appendChild(headerElement);
//     // }

//     //Nolasit tabulas rindas
//     for (const row of rows) {
//       const rowElement = document.createElement("tr");

//       //Nolasit rindas elementus
//       for (const cellText of row) {
//         const cellElement = document.createElement("td");

//         cellElement.textContent = cellText;
//         rowElement.appendChild(cellElement);
//       }

//       tableBody.appendChild(rowElement);

//     }
// }

// //funkcijas izsauksana
// loadIntoTable("./data.json", document.querySelector("table"));




//2.variants
//https://youtu.be/FN_ffvw_ksE

function fetchData() {
  fetch("./data2.json").then(response => {
    if (!response.ok) {
      throw Error("Kļūda!");
    }

    return response.json();
  })

  .then(data => {
    const tabula = data.map(persona => {
      return `
          <tr>
            <td>${persona.vards}</td>
            <td>${persona.uzvards}</td>
            <td>${persona.pilseta}</td>
          </tr>
      `;
    })
    .join("");

    document.querySelector('#showdata').innerHTML = tabula;
  })

  .catch(error => {
    console.log(error);
  });
}

fetchData();



