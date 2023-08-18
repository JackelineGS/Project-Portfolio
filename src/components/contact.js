const contact = (navigateTo) => {
    
  const contactDiv = document.createElement('div');
  contactDiv.className = 'contactDiv';

  contactDiv.innerHTML = '';
  contactDiv.innerHTML += ` 
  <header>
    <div class='barProject'>
      <button class='bHome'>Home</butoon>
      <button class='bAbout'>About me</butoon>
      <button class='bProject'>Proyectos</butoon>
      <button class='bContact'>Contacto</butoon>
    </div>
  </header>
  <main class='contactMain'>
    <div class='dContact'>
      <div class='divInfo'>
        <h1 class='contactTitle'>Enviame un correo</h1>
        <p class='request'>Si te interesa comunicarte conmigo, enviame un correo.</p>
        <h1 class='correo'>jackeline.garcia.serna@gmail.com</h1>
        <h1 class='contactTitle'>Redes sociales</h1>
        <a class='ancorLink' href='https://www.linkedin.com/in/jackeline-garcia-ramh/' target='_blank'>LinkedIn</a>
        <a class='ancorGit' href='https://github.com/JackelineGS' target='_blank'>GitHub</a>
      </div>
      <div class='contactImg'>
        <img class='saludo' src='../assets/conection.png'>
      </div>
    </div>
  </main>
  `; 

  const bHome = contactDiv.querySelector('.bHome');
  bHome.addEventListener('click', () => {
    navigateTo('/');
  });

  const bAbout = contactDiv.querySelector('.bAbout');
  bAbout.addEventListener('click', () => {
    navigateTo('/about');
  });

  const bProject = contactDiv.querySelector('.bProject');
  bProject.addEventListener('click', () => {
    navigateTo('/project');
  });

  const bContact = contactDiv.querySelector('.bContact');
  bContact.addEventListener('click', () => {
    navigateTo('/contact');
  });

    return contactDiv;
  };
  
  export default contact;
  