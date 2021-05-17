let categoryBox = document.querySelector(".category-box");
// 待有資料後會改為foreach寫法
for (let i = 1; i <= 10; i++) {
    let categoryCard = document.createElement("div");
    categoryCard.setAttribute('class', 'category-card');
    let a = document.createElement("a");
    a.href = "#";
    let h2 = document.createElement("h2");
    h2.innerText = "主類別";

    a.appendChild(h2);
    categoryCard.appendChild(a);

    let button = document.createElement("button");
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#category-${i}`);
    button.setAttribute('aria-expanded', 'false');
    button.innerText = "主類別";
    categoryCard.appendChild(button);

    let ul = document.createElement("ul");
    ul.setAttribute('class', 'sub-category-list collapse');
    ul.id = `category-${i}`;

    let max = Math.floor(Math.random() * 10) + 2;
    for (let j = 1; j <= max; j++) {
        let li = document.createElement("li");
        li.setAttribute('class', 'category-item');

        let a = document.createElement("a");
        a.setAttribute('class', 'category-link');
        a.href = "#";
        a.innerText = "子類";
        li.appendChild(a);
        ul.appendChild(li);
    }
    categoryCard.appendChild(ul);
    categoryBox.appendChild(categoryCard);
}