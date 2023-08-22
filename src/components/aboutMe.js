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
                <div class='skillBar'>
                    <h1 class='titleSkill'>Skills</h1>
                    <div class='allSkills'>
                        <p class='skillDes'>JavaScript </p>
                        <p class='skillDes'> HTML </p>
                        <p class='skillDes'> CSS </p>
                        <p class='skillDes'> Angular </p>
                        <p class='skillDes'> TypeScript </p>
                        <p class='skillDes'> SASS </p>
                        <p class='skillDes'> Git </p>
                        <p class='skillDes'> GitHub </p>
                        <p class='skillDes'> R </p>
                        <p class='skillDes'> Firebase </p>
                        <p class='skillDes'> Figma</p>
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

