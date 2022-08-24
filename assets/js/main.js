function dark() {
    let body = document.querySelector("body")
    body.style.background = "#D691A0";

    let h1 = document.querySelector("h1")
    h1.style.background = "#C45F90";

    let header = document.querySelector("header")
    header.style.background = "#FADCDC";

    let nav = document.querySelector("nav")
    nav.style.setProperty('background-color', '#D691A0', 'important')


    let div = document.querySelector("div")
    div.style.background = "#4D4C60";

    let buttons = document.querySelectorAll("button")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "#4D4C60";
    }

    let ul = document.querySelector("ul")
    ul.style.background = "#4D4C60";

    let li = document.querySelector("li")
    li.style.background = "#4D4C60";

    let h2 = document.querySelector("h2")
    h2.style.background = "#4D4C60";

    let article = document.querySelector("article")
    article.style.background = "#C45F90";

    let titles = document.querySelectorAll("h3")
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.background = "#4D4C60";
    }
    document.querySelector(".footer-dark").style.backgroundColor = "#C45F90";
    document.querySelector("footer").style.backgroundColor = "#C45F90";
}
function traduction() {
    let navItem = document.querySelectorAll(".nav-link")
    let tabTradNav = ["About", "Journey & Skills", "Contact"]
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].innerText = tabTradNav[i]
    }
    let nameItem = document.querySelectorAll("#name")
    let tabTradName = ["Name: Adriana TINT", "Age : 43 years", "Current City: Marseille", "Hobbies: web-design, footing, reading, cooking"]
    for (let i = 0; i < nameItem.length; i++) {
        nameItem[i].innerText = tabTradName[i];  
    }
    let footerItem = document.querySelectorAll("#footer")
    let tabTradfooter = ["Various", "Mastery", "Address", "Contact information"]
    for (let i = 0; i < footerItem.length; i++) {
        footerItem[i].querySelector("h3").innerText = tabTradfooter[i]
    }
   
    document.querySelector("#title-index").innerText = "Web Developer";
    document.querySelector("#presentation").innerText = "About me";
    document.querySelector("#welcome").innerText = "Welcome";
    document.querySelector("#roumain").innerText = "Romanian / English";
    document.querySelector("#paragraphe").innerText = "Junior web developer, I am looking for a job after having spent 9 months in training in the RI7 training center. This training was completed by a 3-month internship in a company which allowed me to apply the knowledge acquired. After spending 15 years as an accounting assistant, I chose to retrain professionally as a web developer. Eager to learn and always looking for new technologies in terms of coding as well as innovation and creation, I take up the challenge of satisfying customer demand by putting all my knowledge and my know-how at your disposal. Autonomous by nature, I can work alone or in a group, also being able to adapt to an environment that I do not know. Code optimization is one of my priorities.";
    document.querySelector("#compet").innerText = "Skills";
    document.querySelector("#journey").innerText = "Journey";
    document.querySelector("#button").innerText = "Contact me";
    document.querySelector("#cv").innerText = "Download my resume";
    document.querySelector("#modif").innerText = "Language spoken: Romanian";
    document.querySelector("#voiture").innerText = "Permit B";
    document.querySelector("#phone").innerText = "Phone number: 06.12.31.08.74";
    document.querySelector("#mail").innerText = "E-mail: adrianasaroux@yahoo.com";
   
}






