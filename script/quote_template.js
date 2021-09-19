const composeQuote = (author,avatarLink, quote) =>{
    const root = document.createElement("div");
    const composedTemplate = `
    <div class="polygon">
        <div class="fold-wraper">
            <div class="fold"></div>
        </div>
        <span class="title gradient">Quote Composer</span>
        <div class="main-content">
            <img id="avatar-img" class="avatar" alt="avatar" src="${avatarLink}" crossorigin="user-credentials"/>
            <div class="bubble tip gradient">${quote}</div>
        </div>
        <div class="footer gradient">- ${author}</div>
    </div>`
    root.setAttribute("id", "root");
    root.setAttribute("class","polygon-wrapper");
    root.innerHTML = composedTemplate;
    return root;
};