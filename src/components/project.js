const project = (navigateTo) => {

  const projectDiv = document.createElement('div');
  projectDiv.className = 'projectDiv';

  projectDiv.innerHTML = '';
  projectDiv.innerHTML += `  
  <header>
    <div class='searchDiv'>
      <input class='search' type='search' data-search='Angular, JavaScript, TypeScript, 
      HTTP, Git, Github, Karma, SASS, Node.js, HTML, Jest, Figma, Firebase'>
      </input>
    </div>
        <div class='barProject'>
            <button class='bHome'>Home</butoon>
            <button class='bAbout'>About me</butoon>
            <button class='bProject'>Proyectos</butoon>
            <button class='bContact'>Contacto</butoon>
        </div>
    </header>
    <main class='projectMain'>
      <div class='aboutProject'>
        <div class='divProject'>
          <h1 class='proTitle'>Cipher</h1>
          <div class='card-oneFront'></div>
          <div class='card-oneBack'>
            <p>Se creó una página web que permite cifrar y descifrar mensajes, para ello se utilizó el método del cifrado César.</p>
            <div class='buttonDiv'>  
              <button class='goDemo'>
                <a href='https://jackelinegs.github.io/DEV005-cipher/src' target='_blank'>Demo</a>
              </button>
              <button class='goCode'>
                <a href='https://github.com/JackelineGS/DEV005-cipher' target='_blank'>Código</a>
              </button>
            </div>
            </div>
          <p class='proDescription'>Tecnologías: HTML, JavaScript, CSS, Git, Github, Jest </p>
        </div>
        <div class='divProject'>
          <h1 class='proTitle'>Data Lovers</h1>
          <div class='card-twoFront'></div>
          <div class='card-twoBack'>
            <p>Se desarrolló una página web para visualizar las películas de Studio Ghibli.</p>
            <div class='buttonDiv'>
              <button class='goDemo'>
                <a href='https://jackelinegs.github.io/DEV005-data-lovers/src/' target='_blank'>Demo</a>
              </button>
              <button class='goCode'>
                <a href='https://github.com/JackelineGS/DEV005-data-lovers' target='_blank'>Código</a>
              </button>
            </div>
          </div>
          <p class='proDescription'>Tecnologías: Figma, HTML, JavaScript, CSS, Git, Github, Node.js, Jest </p>
        </div>
        <div class='divProject'>
          <h1 class='proTitle'>Md-Links</h1>
          <div class='card-threeFront'></div>
          <div class='card-threeBack'>
            <p>Se desarrolló una librería para leer archivos con la extensión .md, verificar sus links y 
            reportar la cantidad total de links, links únicos y links rotos.</p>
            <div class='buttonDiv'>
              <button class='goDemo'>
                <a href='https://www.npmjs.com/package/jg-mdlinks?activeTab=readme' target='_blank'>Demo</a>
              </button>
              <button class='goCode'>
                <a href='https://github.com/JackelineGS/DEV005-md-links' target='_blank'>Código</a>
              </button>
            </div>
          </div>
          <p class='proDescription'>Tecnologías: Figma, HTML, JavaScript, CSS, Git, Github, Node.js, Jest, Firebase </p>
        </div>
        <div class='divProject'>
          <h1 class='proTitle'>Social Network</h1>
          <div class='card-fourFront'></div>
          <div class='card-fourBack'>
            <p>Se desarrolló una red social para conectar a personas apasionadas por las recetas de cocina.</p>
            <div class='buttonDiv'>
              <button class='goDemo'>
                <a href='https://foodmatch-5bf52.web.app/' target='_blank'>Demo</a>
              </button>
              <button class='goCode'>
                <a href='https://github.com/JackelineGS/DEV005-social-network-J#1-food-match' target='_blank'>Código</a>
              </button>
            </div>
          </div>
          <p class='proDescription'>Tecnologías: JavaScript, Git, Github, Node.js, Axios, Jest </p>
        </div>
        <div class='divProject'>
          <h1 class='proTitle'>Burguer Queen</h1>
          <div class='card-fiveFront'></div>
          <div class='card-fiveBack'>
            <p>Se desarrolló una web para hacer pedidos en un restaurante, 
            así como administrar los productos y las credenciales del personal.</p>
            <div class='buttonDiv'>
              <button class='goDemo'>
                <a href='https://www.figma.com/file/uwaMY6AvqrCtRTHbboIwUd/Untitled?type=design&node-id=0-1&mode=design&t=rj3LUCiwRMSRwbPI-0' target='_blank'>Demo</a>
              </button>
              <button class='goCode'>
                <a href='https://github.com/JackelineGS/DEV005-burger-queen-api-client' target='_blank'>Código</a>
              </button>
            </div>  
          </div>
          <p class='proDescription'>Tecnologías: Angular, JavaScript, TypeScript, HTTP, Git, Github, Karma, SASS, Node.js </p>
        </div>
      </div>
    </main>
  `;

 projectDiv.querySelector('.divProject').addEventListener('mouseover', function () {
    this.classList.add('card-fiveBack');
  });

  projectDiv.querySelector('.divProject').addEventListener('mouseout', function() {
    this.classList.remove('card-fiveBack');
  }); 


  const bHome = projectDiv.querySelector('.bHome');
  bHome.addEventListener('click', () => {
      navigateTo('/');
  });
  
  const aboutMe = projectDiv.querySelector('.bAbout');
  aboutMe.addEventListener('click', () => {
      navigateTo('/about');
  });

  const bProject = projectDiv.querySelector('.bProject');
  bProject.addEventListener('click', () => {
      navigateTo('/project');
  });

  const bContact = projectDiv.querySelector('.bContact');
  bContact.addEventListener('click', () => {
      navigateTo('/contact');
  });

  const search = projectDiv.querySelector('.search');

    search.addEventListener('input', function () {
      var searchTerm = this.value.toLowerCase();
      console.log(searchTerm);

      if(search instanceof HTMLElement) {
          var allCards = projectDiv.querySelectorAll('.divProject');
          console.log(allCards);
          
          var filteredCards = Array.from(allCards).filter(function(card) {
            var cardDescription = card.querySelector('.proDescription').textContent.toLowerCase();
          return cardDescription.includes(searchTerm);
        });

        allCards.forEach(function(card) {
          card.style.display = 'none';
        });

        filteredCards.forEach(function(card) {
          card.style.display = 'block';
        });

      } else {
        throw new Error('El elemento projectDiv no es un elemento del DOM');
      }      
    
    });
  

    return projectDiv;
  };
  
export default project;