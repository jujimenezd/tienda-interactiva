// Accedemos al elemento "select" con el id "search"
const products_form = document.getElementById("search");
//console.log(products_form.options);

// Funcion que "filtra" los productos añadiendole un borde y aumentandole su escala
function filtrarProductos(e) {
  // Obtenemos el value de cada option dentro del select
  const value = e.target.value;
  console.log(value);

  // Condicional que evita que se mantengan los estilos de la anterior card seleccionada al momento de cambiar a otro producto. Basicamente por cada evento "change" se ejecuta este condicional
  if (value) {
    cards.forEach((card) => {
      card.classList.remove("border-primary", "shadow");
      card.style.transform = "scale(1)";
    });
  }

  // Accedemos al producto que se selecciono en el select en el catalogo de productos
  const cardSelected = document.getElementById("producto" + value);

  // Añadimos un borde y aumentamos su escala
  cardSelected.classList.add("border-primary", "shadow");
  cardSelected.style.transform = "scale(1.05)";
  cardSelected.style.transition = "transform 0.3s ease";
  console.log(cardSelected);
}

// Evento que se ejecuta cuando se selecciona un producto en el select usando la funcion de filtrarProductos
products_form.addEventListener("change", filtrarProductos);

// Accedemos a todos los elementos con la clase card
const cards = document.querySelectorAll(".card");
//console.log(cards);

// lista vacia para guardar los nombres del producto que hay en cada card
products_name = [];

// for que itera sobre cada card
for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  // Accedemos al elemento "h5" que es donde esta el nombre del producto con la clase "card-title"
  title = element.querySelector(".card-title").textContent; //
  products_name.push(title); // agregamos el texto al final del array
}

//console.log(products_name);

// Funcion que crea las opciones dentro del "select" en base a las cards que se agreguen
function createSelects() {
  for (let i = 0; i < products_name.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.text = products_name[i];
    products_form.add(option);
  }
}
// Ejecucion de la funcion
createSelects();
