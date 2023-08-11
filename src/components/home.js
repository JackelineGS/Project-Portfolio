const home = (navigateTo) => { 

    const homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv'; 

    homeDiv.innerHTML = '';
    homeDiv.innerHTML += `
    <header>
        <div class='bar'>
            <button class='bHome'>Home</butoon>
            <button class='bAbout'>About me</butoon>
            <button class='bProject'>Proyectos</butoon>
            <button class='bContact'>Contacto</butoon>
        </div>
        <button class='language'></button>
    </header>
    <main>
    <div class='content'>
        <div class='texto'> 
            <h1 class='titleUno'>HOLA, MI NOMBRE ES</h1>
            <h1 class='titleDos'>JACKELINE GARCÍA</h1>
            <h1 class='titleTres'>WEB DEVELOPER</h1> 
            <p> Hola, esta es mi página web. Siéntete libre de navegar y saber más sobre mí. </p>
        </div>
        <div class='homeImg'>
            <img class='imgPort' src="../assets/Expain.png">
        </div>
    </div>
        
    </main>
    <footer>
        <div class='footRed'>
            <a href='https://www.linkedin.com/in/jackeline-garcia-ramh/' title='Ir a LinkedIn' target='_blank'>
                <img src='../assets/LinkedIn-Logos/LI-In-Bug.png' alt='LinkedIn' class='in'>
            </a>
            <a href='https://github.com/JackelineGS' title='Ir a GitHub' target='_blank'>
                <img src='../assets/github-mark/github-mark.png' alt='GitHub' class='gitHub'>
            </a>
        </div>
    </footer> 
    `;

    const aboutMe = homeDiv.querySelector('.bAbout');
    aboutMe.addEventListener('click', () => {
        navigateTo('/about');
    });
    
    const bHome = homeDiv.querySelector('.bHome');
    bHome.addEventListener('click', () => {
        navigateTo('/');
    });

    const bProject = homeDiv.querySelector('.bProject');
    bProject.addEventListener('click', () => {
        navigateTo('/project');
    });


    return homeDiv;
};

export default home;