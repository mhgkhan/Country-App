  
  
  // loader
  let loading = `<div class="loading"></div>`;

  // variables
  let searchVal = document.getElementById("search"),
    btn = document.getElementById("btn"),
    data = document.querySelector(".data");

  // function to fetch data from an api
  const fetchData = async (arg) => {
    data.innerHTML = " ";
    data.innerHTML = loading;

    try {
      const feth = await fetch(
        ` https://restcountries.com/v3.1/name/${arg}`
      );
      const fetData = await feth.json();

      
      data.innerHTML = " ";

      for (let item of fetData) {
        let ax = Object.values(item.languages);

        data.innerHTML = `
                <div class="info">
                    <div class="head">
                        <h2>${item.name.official}&nbsp; (${item.name.common})</h2>
                        <h3>Capital : ${item.capital[0]} </h3>
                    </div>
                    <div class="flag">
                        <img src="${item.flags.png}" alt="${item.flags.alt}">
                    </div>
                </div>


                <h3>More Info</h3>

                <table>
                    <thead>
                        <tr>
                            <td>Region</td>
                            <td>Currency</td>
                            <td>Symbol</td>
                            <td>Population</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${item.continents[0]}</td>
                            <td>${Object.keys(item.currencies)}</td>
                            <td>${
                              item.currencies[Object.keys(item.currencies)]
                                .symbol
                            }</td>
                            <td>${item.population}</td>
                        </tr>
                    </tbody>
                </table>




                <table >
                    <thead>
                        <tr>
                            <td>Language</td>
                            <td>Timezones</td>
                            <td>start of week </td>
                            <td>Cars</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${ax.map((ele) => ele)}</td>
                            <td>${item.timezones[0]}</td>
                            <td>${item.startOfWeek}</td>
                            <td>${item.car.signs[0]}</td>
                        </tr>
                    </tbody>
                </table>

        `;
      }
    } catch (error) {
      data.innerHTML = `${loading} <br> <h4 style="text-align:center; color:red">No country found Please type correct country name  </h4>`;
    }
  };

  window.addEventListener("load", async (e) => fetchData("pakistan"));

  btn.addEventListener("click", (e) => {
    if (searchVal.value.length < 3) {
      data.innerHTML = `<h2> Please Choose Correct Country Name </h2>`;
      searchVal.value = "";
    } else {
      fetchData(searchVal.value);
    }
  });



  // thanks 
  // please dont forget to start and follow  
