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
            <div class='aboutDescription'>
                <div class='firstAbout'>
                    <h1 class='firstTitle'>Sobre me</h1>
                    <p class='pDescription'>Yo soy Jackeline García, 
                    web developer de Perú con una 
                    gran pasión por la creación de 
                    websites y el aprendizaje en tecnología.</p>
                </div>
                <div class='secundExpe'>
                    <h1 class='secondTitle'>Experiencia</h1>
                    <p class='pExperiencia'>Asistente de investigación - IPOPS (2021-2023) </p>
                </div>
                <div class='skillBar'>
                    <h1 class='titleSkill'>Skills</h1>
                    <div class='allSkills'>
                        <p class='skillDes'>JavaScript | HTML | CSS | Angular | TypeScript | SASS | Git | GitHub | R | Firebase | Figma</p>
                    </div>
                </div>
            </div>
            <div class='dimg'>
                <div class='imgDiv'>
                <img class='dimagen' src='../assets/Jackeline_Garcia.jpg'>
                </div>
            </div>
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

