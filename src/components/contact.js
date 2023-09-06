const contact = (navigateTo) => {
    
  const contactDiv = document.createElement('div');
  contactDiv.className = 'contactDiv';

  contactDiv.innerHTML = '';
  contactDiv.innerHTML += ` 
  <header>
    <div class='barContact'>
      <button class='bHome'>Home</butoon>
      <button class='bAbout'>About me</butoon>
      <button class='bProject'>Proyectos</butoon>
      <button class='bContact'>Contacto</butoon>
    </div>
  </header>
  <main class='contactMain'>
    <div class='dContact'>
      <div class='divInfo'>
        <p class='request'> Estoy buscando nuevas oportunidades de desarrollo de proyectos o colaboraciones.
        Si tienes un proyecto en mente, estaré encantada de discutir tus necesidades 
        y ver si puedo ayudarte a cumplir tus objetivos. Si te interesa comunicarte conmigo enviame un correo: 
        </p>
        <p class='correo'>jackeline.garcia.serna@gmail.com</p>
        <a class='ancorLink' href='https://www.linkedin.com/in/jackeline-garcia-ramh/' target='_blank'  type='button'>LinkedIn</a>
        <a class='ancorGit' href='https://github.com/JackelineGS' target='_blank' type='button'>GitHub</a>
      </div>
      <div class='contactImg'>
      <img class='imgForest' src='../assets/work_space_purpleTres.png'>
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
  
  