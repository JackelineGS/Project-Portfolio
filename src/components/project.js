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
        <div class='divOne'>
          <h1 class='proTitle'>Cipher</h1>
          <div class='projectOne'></div>
          <p class='proDescription'>Tecnologías: HTML, JavaScript, CSS, Git, Github, Jest </p>
        </div>
        <div class='divTwo'>
          <h1 class='proTitle'>Data Lovers</h1>
          <div class='projectTwo'></div>
          <p class='proDescription'>Tecnologías: Figma, HTML, JavaScript, CSS, Git, Github, Node.js, Jest </p>
        </div>
        <div class='divThree'>
          <h1 class='proTitle'>Md-Links</h1>
          <div class='projectThree'></div>
          <p class='proDescription'>Tecnologías: Figma, HTML, JavaScript, CSS, Git, Github, Node.js, Jest, Firebase </p>
        </div>
        <div class='divFour'>
          <h1 class='proTitle'>Social Network</h1>
          <div class='projectFour'></div>
          <p class='proDescription'>Tecnologías: JavaScript, Git, Github, Node.js, Axios, Jest </p>
        </div>
        <div class='divFive'>
          <h1 class='proTitle'>Burguer Queen</h1>
          <div class='projectFive'></div>
          <p class='proDescription'>Tecnologías: Angular, JavaScript, TypeScript, HTTP, Git, Github, Karma, SASS, Node.js </p>
        </div>
      </div>
    </main>
  `;

  
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