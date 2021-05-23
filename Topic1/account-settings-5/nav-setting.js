//===== 偏好設定與個人化 =====
document.getElementById("nav-setting-tab").onclick = function () {
    showSetting();
    //document.getElementById("nav-payment").innerHTML = "";
    document.getElementById("nav-purchase").innerHTML = "";
};
//=====   =====
document.getElementById("nav-payment-tab").onclick = function () {
    //showSetting();
    //document.getElementById("nav-setting").innerHTML = "";
    //document.getElementById("nav-purchase").innerHTML = "";
};
//===== 購買紀錄 =====
document.getElementById("nav-purchase-tab").onclick = function () {
    showPurchase();
    //document.getElementById("nav-payment").innerHTML = "";
    document.getElementById("nav-setting").innerHTML = "";

};

//===== 偏好設定與個人化 =====
function showSetting() {
    // -------動態生成---------
    let settingBox = document.getElementById("nav-setting");
    settingBox.innerHTML = "";

    //#nav-setting>h1
    let h1 = document.createElement("h1");
    h1.innerText = "偏好設定與個人化";
    settingBox.appendChild(h1);

    //#nav-setting>form
    let form = document.createElement("form");
    form.setAttribute('class', 'w-100');

    //#nav-setting>form>div
    let form_div = document.createElement("div");
    //#nav-setting>form>div>div
    let form_div_div = document.createElement("div");

    //----姓名輸入框----
    nameInput("inputLName", "名字");
    nameInput("inputFName", "姓氏");
    function nameInput(inputId, labelText) {
        //#nav-setting>form>div>div>label
        let label_name = document.createElement("label");
        label_name.setAttribute('for', `${inputId}`);
        label_name.setAttribute('class', 'form-label');
        label_name.innerText = `${labelText}`;
        form_div_div.appendChild(label_name);

        //#nav-setting>form>div>div>div
        let inputbox_name = document.createElement("div");
        inputbox_name.setAttribute('class', 'inputbox');

        //#nav-setting>form>div>div>div>input
        let input_name = document.createElement("input");
        input_name.type = "text";
        input_name.setAttribute('class', 'form-control');
        input_name.setAttribute('id', `${inputId}`);
        inputbox_name.appendChild(input_name);
        form_div_div.appendChild(inputbox_name);

    }

    //----單選項目盒----
    inputradioBox(form_div_div, null, "性別", "Sex",
        "Sex_M", "M", "男", "Sex_F", "F", "女");
    form_div.appendChild(form_div_div);

    //#nav-setting>form>div>div
    let form_div_div2 = document.createElement("div");
    inputradioBox(form_div_div2, null, "顯示成人 (18+) 內容", "RestrictedLevel",
        "RL_Y", "true", "是，顯示成人內容",
        "RL_N", "false", "否，隱藏成人內容");

    let p = "取得關於最新電子書、優惠活動和應用程式更新的資訊。";
    inputradioBox(form_div_div2, p, "電子郵件更新", "EmailSub",
        "Sub_Y", "true", "好的",
        "Sub_N", "false", "不，謝謝");
    form_div.appendChild(form_div_div2);

    function inputradioBox(
        fatherBox, paragraph, legendText, inputName,
        inputId1, inputValue1, labelText1,
        inputId2, inputValue2, labelText2
    ) {
        //#nav-setting>form>div>div>fieldset
        let fieldset = document.createElement("fieldset");
        fieldset.setAttribute('class', 'w-100 my-4');

        //#nav-setting>form>div>div>fieldset>legend
        let legend = document.createElement("legend");
        legend.innerText = `${legendText}`;
        fieldset.appendChild(legend);

        if (paragraph != null) {
            let p = document.createElement("p");
            p.innerText = paragraph;
            fieldset.appendChild(p);
        }

        //#nav-setting>form>div>div>fieldset>div
        let raidobox = document.createElement("div");
        raidobox.setAttribute('class', 'raidobox d-flex');

        //----單選項目----
        inputradio(inputId1, inputName, inputValue1, labelText1);
        inputradio(inputId2, inputName, inputValue2, labelText2);
        function inputradio(inputId, inputName, inputValue, labelText) {
            //#nav-setting>form>div>div>fieldset>div>div
            let formcheck = document.createElement("div");
            formcheck.setAttribute('class', 'form-check');
            //#nav-setting>form>div>div>fieldset>div>div>input
            let inputradio = document.createElement("input");
            inputradio.setAttribute('class', 'form-check-input');
            inputradio.setAttribute('id', `${inputId}`);
            inputradio.type = "radio";
            inputradio.name = `${inputName}`;
            inputradio.value = `${inputValue}`;
            //inputradio.checked = true;
            formcheck.appendChild(inputradio);

            //#nav-setting>form>div>div>fieldset>div>div>label
            let label_sexM = document.createElement("label");
            label_sexM.setAttribute('class', 'form-check-label');
            label_sexM.setAttribute('for', `${inputId}`);
            label_sexM.innerText = `${labelText}`;
            formcheck.appendChild(label_sexM);

            raidobox.appendChild(formcheck);
        }

        fieldset.appendChild(raidobox);
        fatherBox.appendChild(fieldset);
    }

    //----按鈕----
    //#nav-setting>form>div>div
    let btnBox = document.createElement("div");
    btnBox.setAttribute('class', 'btn-box');

    //#nav-setting>form>div>div>button
    let btn = document.createElement("button");
    btn.setAttribute('class', 'btn btn-save');
    btn.type = "submit";
    btn.innerText = "儲存";
    btnBox.appendChild(btn);

    form_div_div2.appendChild(btnBox);
    form.appendChild(form_div);
    settingBox.appendChild(form);

}

//===== 購買紀錄 =====
function showPurchase() {
    // -------動態生成---------
    let purchaseBox = document.getElementById("nav-purchase");
    purchaseBox.innerHTML = "";

    //#nav-purchase>h1
    let h1 = document.createElement("h1");
    h1.innerText = "購買紀錄";
    purchaseBox.appendChild(h1);

    //#nav-purchase>p
    let p = document.createElement("p");
    p.innerHTML = '以下是在 Kobo 完成的購買紀錄。即使從您的圖書庫刪除書籍，仍可在此處查看紀錄。若您有任何問題或需要購買上的協助，請<a href = "#" >聯繫我們</a>，或參閱我們的<a href = "#" >銷售條款</>。';
    purchaseBox.appendChild(p);

    /***模擬訂單清單***/
    let tdList = [];
    //let max = 0;
    let max = Math.floor(Math.random() * 10);
    for (let i = 0; i < max; i++) {
        let test = { ProductName: `標題${i}`, href: "#", OrderDate: "2021/5/18", OrderID: "1841543421", UnitPrice: "NT$0", ProductClass: "電子書" };
        tdList.push(test);
        //console.log(max);
    }
    if (tdList.length > 0) {
        //#nav-purchase>div
        let recordBody = document.createElement("div");
        recordBody.setAttribute('class', 'record-body');

        //#nav-purchase>div>div
        let recordBody_div = document.createElement("div");

        //#nav-purchase>div>div>div
        let orderbyBox = document.createElement("div");
        orderbyBox.setAttribute('class', 'orderby-box');

        //#nav-purchase>div>div>div>label
        let orderby_label = document.createElement("label");
        orderby_label.setAttribute('for', 'orderby');
        orderby_label.innerText = "排序方式：";
        orderbyBox.appendChild(orderby_label);

        //---下拉選單---
        let orderselect = [{ value: "datetime", text: "日期" },
        { value: "price", text: "價錢" },
        { value: "AtoZ", text: "字母A-Z" },
        { value: "ZtoA", text: "字母Z-A" },
        ]
        //#nav-purchase>div>div>div>select
        let select = document.createElement("select");
        select.setAttribute('class', 'form-select');
        select.setAttribute('aria-label', 'Default select ');
        select.setAttribute('id', 'orderby');
        //#nav-purchase>div>div>div>select>option
        orderselect.forEach((x, index) => {
            let option = document.createElement("option");
            option.value = x.value;
            option.innerText = x.text;
            if (index == 0) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        orderbyBox.appendChild(select);
        recordBody_div.appendChild(orderbyBox);
        //#nav-purchase>div>div>div
        let FormResultBox1 = document.createElement("div");
        FormResultBox1.setAttribute('class', 'FormResult');
        let FormResultP1 = document.createElement("p");
        FormResultBox1.appendChild(FormResultP1);

        recordBody_div.appendChild(FormResultBox1);
        recordBody.appendChild(recordBody_div);

        //#nav-purchase>div>div
        let recordBody_div2 = document.createElement("div");
        //----表格-----
        let trTitle = [{ class: "ProductName", title: "標題" },
        { class: "OrderDate", title: "訂單日期" },
        { class: "OrderID", title: "訂單號碼" },
        { class: "UnitPrice", title: "價格" },
        { class: "ProductClass", title: "類型" }];
        //#nav-purchase>div>div>table
        let table = document.createElement("table");
        //#nav-purchase>div>div>tbody
        let tbody = document.createElement("tbody");



        tdList.forEach((orderlist, index) => {

            if (index == 0) {
                let tr = document.createElement("tr");
                tr.setAttribute('class', 'row w-100');
                trTitle.forEach((x, index) => {
                    let th = document.createElement("th");
                    th.setAttribute('class', x.class);
                    th.innerText = x.title;
                    tr.appendChild(th);
                });
                tbody.appendChild(tr);
            }

            let tr = document.createElement("tr");
            tr.setAttribute('class', 'row w-100');
            trTitle.forEach((title, index) => {
                let td = document.createElement("td");
                td.setAttribute('class', title.class);
                if (index == 0) {
                    let a = document.createElement("a");
                    a.href = orderlist.href;
                    a.innerText = orderlist.ProductName;
                    td.appendChild(a);
                } else {
                    //console.log(title.class, orderlist[title.class]);
                    td.innerText = orderlist[title.class];
                }
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        recordBody_div2.appendChild(table);

        //#nav-purchase>div>div>div
        let FormResultBox2 = document.createElement("div");
        FormResultBox2.setAttribute('class', 'FormResult');
        let FormResultP2 = document.createElement("p");
        FormResultBox2.appendChild(FormResultP2);


        FormResultP1.innerText = `第 1 － ${tdList.length} 個結果，共 ${tdList.length} 個`;
        FormResultP2.innerText = `第 1 － ${tdList.length} 個結果，共 ${tdList.length} 個`;


        recordBody_div2.appendChild(FormResultBox2);
        recordBody.appendChild(recordBody_div2);

        purchaseBox.appendChild(recordBody);
    } else {
        let em = document.createElement("em");
        em.setAttribute('class', 'd-block py-4');
        em.innerText = "您尚未購買任何項目。";
        purchaseBox.appendChild(em);
    }

}




