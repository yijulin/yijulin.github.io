//===== 偏好設定與個人化 =====
document.getElementById("nav-setting-tab").onclick = function () {
    showSetting();
    //document.getElementById("nav-payment").innerHTML = "";
    //document.getElementById("nav-purchase").innerHTML = "";
};

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

    //#nav-setting>form>div>div>botton
    let btn = document.createElement("botton");
    btn.setAttribute('class', 'btn btn-save');
    btn.type = "submit";
    btn.innerText = "儲存";
    btnBox.appendChild(btn);

    form_div_div2.appendChild(btnBox);
    form.appendChild(form_div);
    settingBox.appendChild(form);

}



