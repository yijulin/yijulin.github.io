//===== 偏好設定與個人化 =====
document.getElementById("nav-setting-tab").onclick = function () {
    showSetting();
    // document.getElementById("nav-payment").innerHTML = "";
    // document.getElementById("nav-purchase").innerHTML = "";
};
//=====  付款資訊 =====
document.getElementById("nav-payment-tab").onclick = function () {
    showPayment();
    // document.getElementById("nav-setting").innerHTML = "";
    // document.getElementById("nav-purchase").innerHTML = "";
};
//===== 購買紀錄 =====
document.getElementById("nav-purchase-tab").onclick = function () {
    showPurchase();
    // document.getElementById("nav-payment").innerHTML = "";
    // document.getElementById("nav-setting").innerHTML = "";

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
        label_name.setAttribute('for', inputId);
        label_name.setAttribute('class', 'form-label');
        label_name.innerText = labelText;
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
            inputradio.setAttribute('id', inputId);
            inputradio.type = "radio";
            inputradio.name = `${inputName}`;
            inputradio.value = `${inputValue}`;
            //inputradio.checked = true;
            formcheck.appendChild(inputradio);

            //#nav-setting>form>div>div>fieldset>div>div>label
            let label_sexM = document.createElement("label");
            label_sexM.setAttribute('class', 'form-check-label');
            label_sexM.setAttribute('for', inputId);
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
    btn.setAttribute('type', 'submit');
    btn.innerText = "儲存";
    btnBox.appendChild(btn);

    form_div_div2.appendChild(btnBox);
    form.appendChild(form_div);
    settingBox.appendChild(form);

}

//===== 付款資訊 =====
function showPayment() {
    // -------動態生成---------
    let payandbillBox = document.getElementById("nav-payment");
    payandbillBox.innerHTML = "";

    //#nav-payment>div
    let payandbillBox_div = document.createElement("div");

    //----付款資訊----
    //#nav-payment>div>div
    let paymentBox = document.createElement("div");
    paymentBox.setAttribute('class', 'payment-box');

    //#nav-payment>div>div>h1
    let h1 = document.createElement("h1");
    h1.innerText = "付款資訊";
    paymentBox.appendChild(h1);

    //#nav-payment>div>div>div
    let paymentBox_div = document.createElement("div");
    paymentBox_div.setAttribute('class', 'd-flex justify-content-between align-items-center mb-4');

    //#nav-payment>div>div>div>p
    let paymentBox_div_p = document.createElement("p");
    paymentBox_div_p.setAttribute('class', 'm-0 fs-14px');
    paymentBox_div_p.innerText = "信用卡／金融卡";
    paymentBox_div.appendChild(paymentBox_div_p);

    //----icon圖示----
    //#nav-payment>div>div>div>div
    let iconbox = document.createElement("div");
    iconbox.setAttribute('class', 'fs-5');

    //#nav-payment>div>div>div>div>i
    let iconList = [{ id: "visa", icon: "fab fa-cc-visa" },
    { id: "mastercard", icon: "fab fa-cc-mastercard" },
    { id: "jcb", icon: "fab fa-cc-jcb" }];
    iconList.forEach((x, index) => {
        let iconbox_i = document.createElement("i");
        iconbox_i.setAttribute('class', x.icon);
        iconbox.appendChild(iconbox_i);
    });
    paymentBox_div.appendChild(iconbox);
    paymentBox.appendChild(paymentBox_div);

    //----表單輸入框----
    //#nav-payment>div>div>form
    let paymentform = document.createElement("form");

    inputGenerate(paymentform, "CreditName", "信用卡上的姓名 *", null, "請確實輸入姓名");
    inputGenerate(paymentform, "CreditNumber", "信用卡號碼", 22, "不正確的信用卡長度");
    inputGenerate(paymentform, "SecurityCode", "安全碼", 4, "無效的 CVV/安全碼");

    //<!-- is-invalid 輸入格式錯誤時加這個class-->
    function inputGenerate(fatherBox, inputId, labelText, inputmaxlength, Feedback) {
        //#nav-payment>div>div>form>div
        let inputBox = document.createElement("div");
        inputBox.setAttribute('class', `${inputId}-box`);

        //#nav-payment>div>div>form>div>label
        let label = document.createElement("label");
        label.setAttribute('for', inputId);
        label.setAttribute('class', 'form-label');
        label.innerText = labelText;
        inputBox.appendChild(label);

        //#nav-payment>div>div>form>div>div
        let inputBox_div = document.createElement("div");
        inputBox_div.setAttribute('class', 'position-relative');

        //****安全碼特殊條件****/
        if (inputId == "SecurityCode") {
            let span = document.createElement("span");
            span.setAttribute('class', 'fas fa-question-circle position-absolute top-50 end-0 translate-middle bg-white ps-1');
            inputBox_div.appendChild(span);
        }
        //****特殊條件END****/

        //#nav-payment>div>div>form>div>input
        let input = document.createElement("input");
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `${inputId}`);
        input.type = "text";
        if (inputmaxlength != null) {
            input.maxLength = inputmaxlength;
        }
        input.required = true;

        if (Feedback != null) {
            input.setAttribute('aria-describedby', `${inputId}Feedback`);
            inputBox_div.appendChild(input);
            inputBox.appendChild(inputBox_div);

            //#nav-payment>div>div>form>div>input>div
            let FeedbackBox = document.createElement("div");
            FeedbackBox.setAttribute('class', 'invalid-feedback');
            FeedbackBox.setAttribute('id', `${inputId}Feedback`);
            FeedbackBox.innerText = Feedback;

            inputBox.appendChild(FeedbackBox);
        } else {
            inputBox_div.appendChild(input);
            inputBox.appendChild(inputBox_div);
        }

        fatherBox.appendChild(inputBox);

    }


    //#nav-payment>div>div>form>div
    let datetimeBox = document.createElement("div");
    datetimeBox.setAttribute('class', 'expiry-datetime-box');

    //#nav-payment>div>div>form>div>label
    let datetimelabel = document.createElement("label");
    datetimelabel.setAttribute('class', 'form-label');
    datetimelabel.innerText = "到期日 *";
    datetimeBox.appendChild(datetimelabel);

    //#nav-payment>div>div>form>div>div
    let datetimeBox_div = document.createElement("div");
    datetimeBox_div.setAttribute('class', 'd-flex align-items-end');

    //----表單選單----
    let monthList = [{ value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
    { value: 5, text: "05" },
    { value: 6, text: "06" },
    { value: 7, text: "07" },
    { value: 8, text: "08" },
    { value: 9, text: "09" },
    { value: 10, text: "10" },
    { value: 11, text: "11" },
    { value: 12, text: "12" }];
    selectGenerate(datetimeBox_div, null, "ExpiryDate", "月", monthList);
    //#nav-payment>div>div>form>div>div>span
    let span = document.createElement("span");
    span.setAttribute('class', 'p-2');
    span.innerText = "/";
    datetimeBox_div.appendChild(span);

    let yearList = [];
    let nowyear = new Date().getFullYear();
    //年限5年
    for (let i = 1; i <= 5; i++) {
        let topush = { value: nowyear, text: nowyear };
        yearList.push(topush);
        nowyear++;
    }
    selectGenerate(datetimeBox_div, null, "ExpiryYear", "年", yearList);

    function selectGenerate(fatherBox, divClass, selectId, labelText, selectList) {
        //#nav-payment>div>div>form>div>div>div
        let div = document.createElement("div");
        if (divClass != null) {
            div.setAttribute('class', divClass);
        }

        //#nav-payment>div>div>form>div>div>div>label
        let label = document.createElement("label");
        label.setAttribute('class', 'form-label');
        label.setAttribute('for', selectId);
        label.innerText = labelText;
        div.appendChild(label);

        //#nav-payment>div>div>form>div>div>div>select
        let select = document.createElement("select");
        select.setAttribute('class', 'form-select');
        select.setAttribute('id', selectId);
        select.setAttribute('aria-label', "Default select");
        selectList.forEach((x, index) => {
            let option = document.createElement("option");
            option.value = x.value;
            option.innerText = x.text;

            select.appendChild(option);
        });

        div.appendChild(select);
        fatherBox.appendChild(div);
    }

    datetimeBox.appendChild(datetimeBox_div);
    paymentform.appendChild(datetimeBox);

    //----按鈕----
    //#nav-payment>div>div>form>div>div
    let btnBox = document.createElement("div");
    btnBox.setAttribute('class', 'btn-box');

    //#nav-payment>div>div>form>div>div>button
    let btnSave = document.createElement("button");
    btnSave.setAttribute('class', 'btn btn-save');
    btnSave.setAttribute('type', 'submit');
    btnSave.innerText = "儲存";
    btnBox.appendChild(btnSave);

    let btnCancel = document.createElement("button");
    btnCancel.setAttribute('class', 'btn btn-cancel');
    btnCancel.innerText = "取消";
    btnBox.appendChild(btnCancel);

    paymentform.appendChild(btnBox);
    paymentBox.appendChild(paymentform);

    payandbillBox_div.appendChild(paymentBox);

    //----帳單資訊----
    //#nav-setting>div>div
    let billBox = document.createElement("div");
    billBox.setAttribute('class', 'bill-box');

    //#nav-setting>div>div>h2
    let h2 = document.createElement("h2");
    h2.innerText = "帳單地址";
    billBox.appendChild(h2);

    //----表單輸入框----
    //#nav-payment>div>div>form
    let billform = document.createElement("form");
    let countryList = [{ value: "TW", text: "台灣" },
    { value: "TW", text: "台灣" },
    { value: "TW", text: "台灣" },
    { value: "TW", text: "台灣" },
    { value: "TW", text: "台灣" }];
    selectGenerate(billform, "BillCountry-box", "BillCountry", "國家/地區", countryList);
    inputGenerate(billform, "BillCity", "城市", null, null);
    inputGenerate(billform, "BillAddress", "地址", null, null);
    inputGenerate(billform, "PostalCode", "郵遞區號", null, null);
    inputGenerate(billform, "BillPhone", "電話號碼", null, null);

    //----按鈕----
    //#nav-payment>div>div>form>div>div
    let btnBox2 = document.createElement("div");
    btnBox2.setAttribute('class', 'btn-box');

    //#nav-payment>div>div>form>div>div>button
    let btnSave2 = document.createElement("button");
    btnSave2.setAttribute('class', 'btn btn-save');
    btnSave2.setAttribute('type', 'submit');
    btnSave2.innerText = "儲存";
    btnBox2.appendChild(btnSave2);

    let btnCancel2 = document.createElement("button");
    btnCancel2.setAttribute('class', 'btn btn-cancel');
    btnCancel2.innerText = "取消";
    btnBox2.appendChild(btnCancel2);
    billform.appendChild(btnBox2);

    billBox.appendChild(billform);
    payandbillBox_div.appendChild(billBox);
    payandbillBox.appendChild(payandbillBox_div);
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



