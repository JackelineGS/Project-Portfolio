const home = (navigateTo) => { 

    const homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv'; 

    homeDiv.innerHTML = '';
    homeDiv.innerHTML += `
    <header>
    <div class='logoDev'></div>
        <div class='bar'>
            <button class='bHome'>Home</butoon>
            <button class='bAbout'>Sobre mi</butoon>
            <button class='bProject'>Proyectos</butoon>
            <button class='bContact'>Contacto</butoon>
        </div>
    </header>
    <main class='homeMain'>
    <div class='content'>
        <div class='texto'> 
            <h1 class='titleUno'>HOLA, MI NOMBRE ES</h1>
            <h1 class='titleDos'>JACKELINE GARCÍA</h1>
            <h1 class='titleTres'>WEB DEVELOPER</h1> 
            <p class='presentationHome'> Esta es mi página web. Siéntete libre de navegar y saber más sobre mí. </p>
        </div>
        <div class='homeImg'>
            <div class='firstPicture'></div>
            <div class='secondPicture'></div>
            <div class='thirdPicture'></div>
            <div class='fourPicture'></div>
        </div>
    </div>
        
    </main>
    <footer>
    </footer> 
    `;

    const bHome = homeDiv.querySelector('.bHome');
    bHome.addEventListener('click', () => {
        navigateTo('/');
    });

    const aboutMe = homeDiv.querySelector('.bAbout');
    aboutMe.addEventListener('click', () => {
        navigateTo('/about');
    });

    const bProject = homeDiv.querySelector('.bProject');
    bProject.addEventListener('click', () => {
        navigateTo('/project');
    });

    const bContact = homeDiv.querySelector('.bContact');
    bContact.addEventListener('click', () => {
        navigateTo('/contact');
    });


    return homeDiv;
};

export default home;