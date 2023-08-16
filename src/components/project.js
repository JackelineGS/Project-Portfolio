const project = (navigateTo) => {

  const projectDiv = document.createElement('div');
  projectDiv.className = 'projectDiv';

  projectDiv.innerHTML = '';
  projectDiv.innerHTML += `  
  <header>
    <div class='searchDiv'>
      <input class='search' type='text'>
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
            <p>Se creó una página web que permite cifrar y descifrar mensajes, para ello se utilizó el método del cifrado César</p>
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
            <p>Se desarrolló una página web para visualizar las películas de Studio Ghibli</p>
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
          <div class='card-threeBack'>Proyecto tres</div>
          <p class='proDescription'>Tecnologías: Figma, HTML, JavaScript, CSS, Git, Github, Node.js, Jest, Firebase </p>
        </div>
        <div class='divProject'>
          <h1 class='proTitle'>Social Network</h1>
          <div class='card-fourFront'></div>
          <div class='card-fourBack'>Proyecto cuatro</div>
          <p class='proDescription'>Tecnologías: JavaScript, Git, Github, Node.js, Axios, Jest </p>
        </div>
        <div class='divProject'>
          <h1 class='proTitle'>Burguer Queen</h1>
          <div class='card-fiveFront'></div>
          <div class='card-fiveBack'>Proyecto cinco</div>
          <p class='proDescription'>Tecnologías: Angular, JavaScript, TypeScript, HTTP, Git, Github, Karma, SASS, Node.js </p>
        </div>
      </div>
    </main>
  `;

  projectDiv.querySelector('.divProject').addEventListener('mouseenter', function () {
    this.classList.add('card-oneFront');
  });

  projectDiv.querySelector('.divProject').addEventListener('mouseleave', function() {
    this.classList.remove('card-oneFront');
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

    return projectDiv;
  };
  
export default project;