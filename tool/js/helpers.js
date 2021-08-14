function qselect(selector) {
    if (selector.includes('#') && !selector.includes(' ')) {
        return document.querySelector(selector);
    }

    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;



}

function dothree(list, father, child) {
    let f = document.createElement(father);

    list.forEach((item, index) => {
        let cd = document.createElement(child);
        cd.innerHTML = item;
        f.appendChild(cd);
    });

    document.body.append(f);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}


function create(element, text) {
    let el = document.createElement(element);
    if (text !== null && text !== undefined && text.length > 0) {
        el.innerText = text;
    }

    return el;
}

export { qselect, dothree, getRandom, create }