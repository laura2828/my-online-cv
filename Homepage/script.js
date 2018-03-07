document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
    
    const buttonHome = document.getElementsByClassName('home');
    const buttonAbout = document.getElementsByClassName('about');
    const buttonSkills = document.getElementsByClassName('skills');
    const buttonContact = document.getElementsByClassName('contact');
    
    buttonHome.addEventListener('click', () => window.location.href = "index.html");
    buttonAbout.addEventListener('click', () => window.location.href = "../About/index-about.html");
    buttonSkills.addEventListener('click', () => window.location.href = "../index-skills.html");
    buttonContact.addEventListener('click', () => window.location.href = "../index-contact.html");
}
