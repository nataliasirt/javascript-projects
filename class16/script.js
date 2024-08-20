window.addEventListener("load", () => {
    const form = document.getElementById("form");
  
    form.addEventListener("submit", (event) => {
      const searchTerm = document.getElementById("search-term");
      event.preventDefault();
      // console.log(searchTerm);
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.value}`).then(
        (response) => {
          response.json().then((json) => {
            const content = document.getElementById("content");
            content.innerHTML = `
                      <h2>${json.name}</h2>
                      <img src='${json.sprites.front_default}' />
                      <p>Id:<b>${json.id}</b></p>
                    `;
          });
        }
      );
    });
  });