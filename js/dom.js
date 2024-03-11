export const fixtitle = () => {
    const title = document.getElementById('header');
    const titleContent = title.innerText;
    if(titleContent === 'Movie app')
        return
    else {
        title.innerHTML = 'Movie app';
    }
};
 export const addParagraph = () => {
    const title = document.getElementById("header");
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Indiana Jones';




    title.appendChild(paragraph);
};

