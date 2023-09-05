const about = (navigateTo) => {

    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'aboutDiv';

    aboutDiv.innerHTML = '';
    aboutDiv.innerHTML += `
    <header>
        <div class='barAbout'>
            <button class='bHome'>Home</butoon>
            <button class='bAbout'>About me</butoon>
            <button class='bProject'>Proyectos</butoon>
            <button class='bContact'>Contacto</butoon>
        </div>
    </header>
    <main class='aboutMain'>
        <div class='dAbout'>
        <div class='dimg'>
            <div class='imgDiv'>
            <img class='dimagen' src='../assets/Jackeline_García-remove_v3.jpg'>
            </div>
        </div>
            <div class='aboutDescription'>
                <div class='firstAbout'>
                    <h1 class='firstTitle'>SOBRE ME</h1>
                    <p class='pDescription'>Bienvenidos a mi página web, mi nombre es Jackeline García, 
                    web developer front-end. Me apasiona participar en el desarrollo de proyectos de tecnología que permitan
                    mejorar el bienestar de las personas, así mismo estoy muy interesada en el aprendizaje de nuevas
                    tecnologías.
                   </p>  
                </div>
                <div class='skillBar'>
                    <h1 class='titleSkill'>SKILLS</h1>
                    <div class='allSkills'>
                        <div class='skillDesOne'></div>
                        <div class='skillDesTwo'></div>
                        <div class='skillDesThree'></div>
                        <div class='skillDesFour'></div>
                        <div class='skillDesFive'></div>
                        <div class='skillDesSix'></div>
                        <div class='skillDesSeven'></div>
                        <div class='skillDesEight'></div>
                        <div class='skillDesNine'></div>
                        <div class='skillDesTen'></div>
                        <div class='skillDesEleven'></div>
                        <div class='skillDesTwelve'></div>
                    </div>
                </div>
            </div
        </div>
    </main>
    `;

    const bHome = aboutDiv.querySelector('.bHome');
    bHome.addEventListener('click', () => {
        navigateTo('/');
    });

    const aboutMe = aboutDiv.querySelector('.bAbout');
    aboutMe.addEventListener('click', () => {
        navigateTo('/about');
    });

    const bProject = aboutDiv.querySelector('.bProject');
    bProject.addEventListener('click', () => {
        navigateTo('/project');
    });

    const bContact = aboutDiv.querySelector('.bContact');
    bContact.addEventListener('click', () => {
        navigateTo('/contact');
    });

    return aboutDiv; 
}

export default about;

