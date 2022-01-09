//project code by dcode on youtube https://youtu.be/qBg8IB3u28s

async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { headers, rows } = await response.json();

    //Notirit tabulu
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //Nolasit tabulas galveni
    for (const headerText of headers) {
      const headerElement = document.createElement("th");

      headerElement.textContent = headerText;
      tableHead.querySelector("tr").appendChild(headerElement);
    }

    //Nolasit tabulas rindas
    for (const row of rows) {
      const rowElement = document.createElement("tr");

      //Nolasit rindas elementus
      for (const cellText of row) {
        const cellElement = document.createElement("td");

        cellElement.textContent = cellText;
        rowElement.appendChild(cellElement);
      }

      tableBody.appendChild(rowElement);

    }
}

loadIntoTable("./data.json", document.querySelector("table"));