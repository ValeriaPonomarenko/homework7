const start=document.querySelector('.startBtn');
let body=document.body;
const title=document.createElement('h1');
start.addEventListener('click', ()=>{
    start.parentNode.removeChild(start);
    title.textContent="Укажите своё имя";
    const name=document.createElement('input');
    body.append(title);
    body.append(name);
    name.addEventListener('keyup', (key)=>{
        if(key.code=="Enter"){
            if(name.value!=""){
                title.textContent="Добро пожаловать, "+name.value+"!";
                name.parentNode.removeChild(name);
                setTimeout(iLoveMath, 3000);
            }
        }
    });
});
function iLoveMath(){
    title.textContent="Уровень I love Math";
    const preTitle=document.createElement('p');
    preTitle.textContent="Сколько будет 2+2?";
    const inp=document.createElement('input');
    body.append(preTitle);
    body.append(inp);
    inp.addEventListener('keyup', (key)=>{
        if(key.code=="Enter"){
        if(inp.value!=""){
            if(inp.value==4){
                inp.parentNode.removeChild(inp);
                preTitle.textContent="Верно!";
                setTimeout(()=>{preTitle.parentNode.removeChild(preTitle)}, 3000);
                setTimeout(iLoveGeography, 3000);
            } else{
                preTitle.textContent="Неверно! Сколько будет 2+2?";
                inp.value="";
            }
        } else{
            preTitle.textContent="Вы не заполнили поле. Напишите ответ: сколько будет 2+2?";
        }}
    });
}
function iLoveGeography(){
    title.textContent="Уровень iLoveGeography";
    const preTitle=document.createElement('p');
    preTitle.textContent="Назовите столицу Бразилии";
    const inp=document.createElement('input');
    body.append(preTitle);
    body.append(inp);
    inp.addEventListener('keyup', (key)=>{
        if(key.code=="Enter"){
            if(inp.value!=""){
            if(inp.value.toLowerCase()=="бразилиа"){
                inp.parentNode.removeChild(inp);
                preTitle.textContent="Верно!";
                setTimeout(()=>{preTitle.parentNode.removeChild(preTitle)}, 3000);
                setTimeout(random, 3000);
            } else{
                preTitle.textContent="Неверно! Назовите столицу Бразилии";
                inp.value="";
            }} else{
                preTitle.textContent="Вы не заполнили поле. Напишите название столицы Бразилии";
            }
        }
    });
}
function random(){
    let randNumber=parseInt(Math.random()*(6-1)+1);
    title.textContent="Уровень random";
    const preTitle=document.createElement('p');
    preTitle.textContent="Угадайте число от 1 до 5";
    const inp=document.createElement('input');
    body.append(preTitle);
    body.append(inp);
    inp.addEventListener('keyup', (key)=>{
        if(key.code=="Enter"){
            if(inp.value!=""){
            if(inp.value==randNumber){
                inp.parentNode.removeChild(inp);
                preTitle.textContent="Верно!";
                setTimeout(()=>{preTitle.parentNode.removeChild(preTitle)}, 3000);
                setTimeout(blocks, 3000);
            } else{
                preTitle.textContent="Неверно! Угадайте число от 1 до 5";
                inp.value="";
            }} else{
                preTitle.textContent="Вы не заполнили поле. Напишите число, которое, на Ваш взгляд, было загадано (это число от 1 до 5).";
            }
        }
    });
}
function blocks(){
    title.textContent="Уровень blocks";
    const preTitle=document.createElement('p');
    preTitle.textContent="Введите любое число и нажмите Enter";
    const inp=document.createElement('input');
    body.append(preTitle);
    body.append(inp);
    inp.addEventListener('keyup', (key)=>{
        if(key.code=="Enter"){
            if(inp.value!=""){
            let n=inp.value;
            inp.parentNode.removeChild(inp);
            preTitle.textContent="Удалите все блоки на странице";
            for(let i=0; i<n-1; i++){
                let block=document.createElement('div');
                block.classList.add("block");
                block.style.position="absolute";
                block.style.top=parseInt(Math.random()*(500-1)+1)+"px";
                block.style.left=parseInt(Math.random()*(500-1)+1)+"px";
                body.append(block);
                block.addEventListener('click', ()=>{
                    block.parentNode.removeChild(block);
                })
            }
            let blockFind=document.createElement('div');
            blockFind.style.position="absolute";
            blockFind.style.top=parseInt(Math.random()*(500-1)+1)+"px";
            blockFind.style.left=parseInt(Math.random()*(500-1)+1)+"px";
            blockFind.classList.add("blockFind");
            body.append(blockFind);
            blockFind.addEventListener('click', ()=>{
                blockFind.classList.add('blockWasFound');
                function youWinBlocks(){
                    blockFind.parentNode.removeChild(blockFind);
                    let blocks=document.querySelectorAll(".block");
                    for (let bl of blocks){
                        bl.parentNode.removeChild(bl);
                    }
                    preTitle.parentNode.removeChild(preTitle);
                    States();
                }
                setTimeout(youWinBlocks, 4000);
            })
            } else{
                preTitle.textContent="Вы не заполнили поле. Введите в поле любое число и нажмите Enter";
            }
        }}
    );
}
function iLoveHistoryOfRome(){
    let Answer1;
    title.textContent="Уровень I love history of Rome";
    let preTitle1=document.createElement('p');
    let preTitle2=document.createElement('p');
    let preTitle3=document.createElement('p');
    let preTitle4=document.createElement('p');
    preTitle1.textContent="Нажмите на кнопку, на которой написано";
    preTitle2.textContent="имя римского императора, которого";
    preTitle3.textContent="Светоний назвал виновником";
    preTitle4.textContent="Великого римского пожара 64 г. н.э.";
    body.append(preTitle1);
    body.append(preTitle2);
    body.append(preTitle3);
    body.append(preTitle4);
    const iLoveHistoryOfRomebl1=document.createElement('button');
    const iLoveHistoryOfRomebl2=document.createElement('button');
    const iLoveHistoryOfRomebl3=document.createElement('button');
    const iLoveHistoryOfRomebl4=document.createElement('button');
    iLoveHistoryOfRomebl1.textContent="Домициан";
    iLoveHistoryOfRomebl2.textContent="Нерон";
    iLoveHistoryOfRomebl3.textContent="Траян";
    iLoveHistoryOfRomebl4.textContent="Диоклетиан";
    iLoveHistoryOfRomebl1.classList.add("bl");
    iLoveHistoryOfRomebl2.classList.add("bl");
    iLoveHistoryOfRomebl3.classList.add("bl");
    iLoveHistoryOfRomebl4.classList.add("bl");
    iLoveHistoryOfRomebl1.classList.add("btn");
    iLoveHistoryOfRomebl2.classList.add("btn");
    iLoveHistoryOfRomebl3.classList.add("btn");
    iLoveHistoryOfRomebl4.classList.add("btn");
    iLoveHistoryOfRomebl1.classList.add("btn-success");
    iLoveHistoryOfRomebl2.classList.add("btn-success");
    iLoveHistoryOfRomebl3.classList.add("btn-success");
    iLoveHistoryOfRomebl4.classList.add("btn-success");
    const div=document.createElement('div');
    div.classList.add("flex");
    body.append(div);
    div.append(iLoveHistoryOfRomebl1);
    div.append(iLoveHistoryOfRomebl2);
    div.append(iLoveHistoryOfRomebl3);
    div.append(iLoveHistoryOfRomebl4);
    iLoveHistoryOfRomebl1.addEventListener('click', ()=>{
        Answer1=1;
        Checker();
    });
    iLoveHistoryOfRomebl2.addEventListener('click', ()=>{
        Answer1=2;
        Checker();
    });
    iLoveHistoryOfRomebl3.addEventListener('click', ()=>{
        Answer1=3;
        Checker();
    });
    iLoveHistoryOfRomebl4.addEventListener('click', ()=>{
        Answer1=4;
        Checker();
    });
    function Checker(){
        if(Answer1==2){
            iLoveHistoryOfRomebl1.parentNode.removeChild(iLoveHistoryOfRomebl1);
            iLoveHistoryOfRomebl2.parentNode.removeChild(iLoveHistoryOfRomebl2);
            iLoveHistoryOfRomebl3.parentNode.removeChild(iLoveHistoryOfRomebl3);
            iLoveHistoryOfRomebl4.parentNode.removeChild(iLoveHistoryOfRomebl4);
            div.parentNode.removeChild(div);
            preTitle1.textContent="Верно!";
            preTitle2.textContent="";
            preTitle3.textContent="";
            preTitle4.textContent="";
            setTimeout(()=>{
                preTitle1.parentNode.removeChild(preTitle1);
                preTitle2.parentNode.removeChild(preTitle2);
                preTitle3.parentNode.removeChild(preTitle3);
                preTitle4.parentNode.removeChild(preTitle4);
            }, 3000);
            setTimeout(Runningblock, 3000);
        }else if ((Answer1==1)||(Answer1==3)||(Answer1==4)){
            preTitle1.textContent="Неверно! Нажмите на кнопку, на которой написано";
        }
    }
}
function PictureWithWarrior(){
    let Answer2;
    title.textContent="Уровень The picture with the warrior";
    let preTitle1=document.createElement('p');
    let preTitle2=document.createElement('p');
    preTitle1.textContent="Нажмите на кнопку, на которой написано название";
    preTitle2.textContent="изображённого на картинке воина.";
    body.append(preTitle1);
    body.append(preTitle2);
    const divImage=document.createElement('div');
    divImage.classList.add("divImage");
    const Warriorbl1=document.createElement('button');
    const Warriorbl2=document.createElement('button');
    const Warriorbl3=document.createElement('button');
    const Warriorbl4=document.createElement('button');
    Warriorbl1.textContent="Гоплит";
    Warriorbl2.textContent="Легионер";
    Warriorbl3.textContent="Сариссофор";
    Warriorbl4.textContent="Пельтаст";
    Warriorbl1.classList.add("bl");
    Warriorbl2.classList.add("bl");
    Warriorbl3.classList.add("bl");
    Warriorbl4.classList.add("bl");
    Warriorbl1.classList.add("btn");
    Warriorbl2.classList.add("btn");
    Warriorbl3.classList.add("btn");
    Warriorbl4.classList.add("btn");
    Warriorbl1.classList.add("btn-success");
    Warriorbl2.classList.add("btn-success");
    Warriorbl3.classList.add("btn-success");
    Warriorbl4.classList.add("btn-success");
    const div=document.createElement('div');
    div.classList.add("flex");
    body.append(divImage);
    body.append(div);
    div.append(Warriorbl1);
    div.append(Warriorbl2);
    div.append(Warriorbl3);
    div.append(Warriorbl4);
    Warriorbl1.addEventListener('click', ()=>{
        Answer2=1;
        Checker();
    });
    Warriorbl2.addEventListener('click', ()=>{
        Answer2=2;
        Checker();
    });
    Warriorbl3.addEventListener('click', ()=>{
        Answer2=3;
        Checker();
    });
    Warriorbl4.addEventListener('click', ()=>{
        Answer2=4;
        Checker();
    });
    function Checker(){
        if(Answer2==2){
            Warriorbl1.parentNode.removeChild(Warriorbl1);
            Warriorbl2.parentNode.removeChild(Warriorbl2);
            Warriorbl3.parentNode.removeChild(Warriorbl3);
            Warriorbl4.parentNode.removeChild(Warriorbl4);
            div.parentNode.removeChild(div);
            preTitle1.textContent="Верно!";
            preTitle2.textContent="";
            setTimeout(()=>{
                preTitle1.parentNode.removeChild(preTitle1);
                preTitle2.parentNode.removeChild(preTitle2);
                divImage.parentNode.removeChild(divImage);
            }, 3000);
            setTimeout(zagadka, 3000);
        }else if ((Answer2==1)||(Answer2==3)||(Answer2==4)){
            preTitle1.textContent="Неверно! Нажмите на кнопку, на которой написано название";
        }
    }
}
function Runningblock(){
    title.textContent="Уровень Running block";
    const preTitle1=document.createElement('p');
    const preTitle2=document.createElement('p');
    const preTitle3=document.createElement('p');
    const preTitle4=document.createElement('p');
    const preTitle5=document.createElement('p');
    const preTitle6=document.createElement('p');
    const BtnRunningblock=document.createElement('button');
    BtnRunningblock.classList.add("btn");
    BtnRunningblock.classList.add("btn-success");
    BtnRunningblock.textContent="Начать";
    preTitle1.textContent="Перед Вами появится блок, который каждую секунду";
    preTitle2.textContent="будет занимать новое место. Это также произойдёт,";
    preTitle3.textContent="если нажать на него.";
    preTitle4.textContent="Успейте нажать на блок как можно большее";
    preTitle5.textContent="количество раз.";
    preTitle6.textContent="Максимальное возможное количество нажатий - 16.";
    body.append(preTitle1);
    body.append(preTitle2);
    body.append(preTitle3);
    body.append(preTitle4);
    body.append(preTitle5);
    body.append(preTitle6);
    body.append(BtnRunningblock);
    BtnRunningblock.addEventListener('click', ()=>{
        BtnRunningblock.parentNode.removeChild(BtnRunningblock);
        let num=0;
        function CreateBlock(){
            let block2=document.createElement('div');
            block2.classList.add("block");
            block2.style.position="absolute";
            block2.style.top=parseInt(Math.random()*(750-1)+1)+"px";
            block2.style.left=parseInt(Math.random()*(750-1)+1)+"px";
            body.append(block2);
            block2.addEventListener('click', ()=>{
                block2.parentNode.removeChild(block2);
                num=num+1;
            })
            setTimeout(()=>{
                block2.parentNode.removeChild(block2);
            }, 1000)
        }
        for(let i=1; i<17; i++){
            setTimeout(CreateBlock, 1000*i);
        }
        setTimeout(()=>{
            preTitle1.textContent=`Вы поймали блок ${num} раз.`;
            preTitle2.parentNode.removeChild(preTitle2);
            preTitle3.parentNode.removeChild(preTitle3);
            preTitle4.parentNode.removeChild(preTitle4);
            preTitle5.parentNode.removeChild(preTitle5);
            preTitle6.parentNode.removeChild(preTitle6);
        }, 17000);
        setTimeout(()=>{
            preTitle1.parentNode.removeChild(preTitle1);
        }, 20000)
        setTimeout(CallThing, 20000);
    })
}
function States(){
    title.textContent="Уровень States";
    const preTitle1=document.createElement('p');
    const preTitle2=document.createElement('p');
    const preTitle3=document.createElement('p');
    const preTitle4=document.createElement('p');
    const preTitle5=document.createElement('p');
    preTitle1.textContent="Впишите в каждое поле по одному числу от 1 до 4";
    preTitle2.textContent="таким образом, чтобы вписанное в поле число";
    preTitle3.textContent="говорило правду о том, каким по счёту (среди";
    preTitle4.textContent="указанных здесь) появилось государство,";
    preTitle5.textContent="название которого написано слева от данного поля.";
    body.append(preTitle1);
    body.append(preTitle2);
    body.append(preTitle3);
    body.append(preTitle4);
    body.append(preTitle5);
    const div=document.createElement('div');
    const divch1=document.createElement('div');
    const divch2=document.createElement('div');
    div.classList.add("divSt");
    divch1.classList.add("divch");
    divch2.classList.add("divch");
    const divchp1=document.createElement('div');
    const divchp2=document.createElement('div');
    const divchp3=document.createElement('div');
    const divchp4=document.createElement('div');
    divchp1.classList.add("divchp");
    divchp2.classList.add("divchp");
    divchp3.classList.add("divchp");
    divchp4.classList.add("divchp");
    const divchpp1=document.createElement('p');
    const divchpp2=document.createElement('p');
    const divchpp3=document.createElement('p');
    const divchpp4=document.createElement('p');
    divchpp1.textContent="Древнегреческий полис Афины";
    divchpp2.textContent="Речь Посполитая";
    divchpp3.textContent="Российская Федерация";
    divchpp4.textContent="Древний Египет";
    divchpp1.classList.add("divchpp");
    divchpp2.classList.add("divchpp");
    divchpp3.classList.add("divchpp");
    divchpp4.classList.add("divchpp");
    const inp1=document.createElement('input');
    const inp2=document.createElement('input');
    const inp3=document.createElement('input');
    const inp4=document.createElement('input');
    inp1.classList.add('stinp');
    inp2.classList.add('stinp');
    inp3.classList.add('stinp');
    inp4.classList.add('stinp');
    const iAnswer=document.createElement('button');
    iAnswer.classList.add("btn");
    iAnswer.classList.add("btn-success");
    iAnswer.textContent="Ответить";
    body.append(div);
    div.append(divch1);
    div.append(divch2);
    divch1.append(divchp1);
    divch1.append(divchp2);
    divch1.append(divchp3);
    divch1.append(divchp4);
    divchp1.prepend(divchpp1);
    divchp2.prepend(divchpp2);
    divchp3.prepend(divchpp3);
    divchp4.prepend(divchpp4);
    divch2.append(inp1);
    divch2.append(inp2);
    divch2.append(inp3);
    divch2.append(inp4);
    body.append(iAnswer);
    iAnswer.addEventListener('click', ()=>{
        if((inp1.value==2)&&(inp2.value==3)&&(inp3.value==4)&&(inp4.value==1)){
            preTitle1.textContent="Верно!";
            preTitle2.parentNode.removeChild(preTitle2);
            preTitle3.parentNode.removeChild(preTitle3);
            preTitle4.parentNode.removeChild(preTitle4);
            preTitle5.parentNode.removeChild(preTitle5);
            divch1.parentNode.removeChild(divch1);
            divch2.parentNode.removeChild(divch2);
            inp1.parentNode.removeChild(inp1);
            inp2.parentNode.removeChild(inp2);
            inp3.parentNode.removeChild(inp3);
            inp4.parentNode.removeChild(inp4);
            div.parentNode.removeChild(div);
            iAnswer.parentNode.removeChild(iAnswer);
            setTimeout(()=>{preTitle1.parentNode.removeChild(preTitle1)}, 3000);
            setTimeout(PictureWithWarrior, 3000);
        }else if((inp1.value=="")||(inp2.value=="")||(inp3.value=="")||(inp4.value=="")){
            preTitle1.textContent="Вы не заполнили все поля. Впишите в каждое поле по одному";
            preTitle2.textContent="числу от 1 до 4 таким образом, чтобы вписанное в поле";
            preTitle3.textContent="число говорило правду о том, каким по счёту (среди";
            preTitle4.textContent="указанных здесь) появилось государство, название";
            preTitle5.textContent="которого написано слева от данного поля.";
        } else{
            preTitle1.textContent="Неверно! Впишите в каждое поле по одному числу от 1 до 4";
            preTitle2.textContent="таким образом, чтобы вписанное в поле число";
            preTitle3.textContent="говорило правду о том, каким по счёту (среди";
            preTitle4.textContent="указанных здесь) появилось государство,";
            preTitle5.textContent="название которого написано слева от данного поля.";
        }
    })
}
function zagadka(){
    let opr=parseInt(Math.random()*(6-1)+1);
    title.textContent="Уровень Загадка";
    const preTitle1=document.createElement('p');
    const preTitle2=document.createElement('p');
    preTitle1.textContent="Напишите в поле ответ на загадку";
    body.append(preTitle1);
    const inp=document.createElement('input');
    function forZagadka(textOfZagadka, ans1, ans2, ans3){
        preTitle2.textContent=textOfZagadka;
        body.append(preTitle2);
        body.append(inp);
        inp.addEventListener('keyup', (key)=>{
            if(key.code=="Enter"){
                if((inp.value.toLowerCase()==ans1)||(inp.value.toLowerCase()==ans2)||(inp.value.toLowerCase()==ans3)){
                    inp.parentNode.removeChild(inp);
                    preTitle1.textContent="Верно!";
                    preTitle2.parentNode.removeChild(preTitle2);
                    setTimeout(()=>{preTitle1.parentNode.removeChild(preTitle1)}, 3000);
                    setTimeout(iLoveHistoryOfRome, 3000);
                } else if(inp.value==""){
                    preTitle1.textContent="Вы не заполнили поле. Напишите в поле ответ на загадку";
                } else{
                    preTitle1.textContent="Неверно! Напишите в поле ответ на загадку";
                    inp.value="";
                }
            }}
        )
    }
    switch(opr){
        case 1:
            forZagadka("Зимой и летом одним цветом", "ель", "елка", "ёлка");
        break;
        case 2:
            forZagadka("Летом серый, зимой белый", "заяц", "anssdfvgfeerffdsdffssscv1", "anssdfvgfeerffdsdffssscv2");
        break;
        case 3:
            forZagadka("Сто одёжек и все без застёжек", "капуста", "anssdfvgfeerffdsdffssscv1", "anssdfvgfeerffdsdffssscv2");
        break;
        case 4:
            forZagadka("День и ночь ходят, с места не сходят", "часы", "часики", "anssdfvgfeerffdsdffssscv1");
        break;
        default:
            forZagadka("Весь свет одевает, сама одежды не знает", "игла", "иголка", "anssdfvgfeerffdsdffssscv2");
    }
}
function ChooseLi(){
    let expl;
    let opr=parseInt(Math.random()*(7-1)+1);
    let Answer3;
    title.textContent="Уровень Find the extra";
    const preTitle1=document.createElement('p');
    const preTitle2=document.createElement('p');
    preTitle1.textContent="Нажмите на кнопку, на которой написано название";
    preTitle2.textContent="лишнего объекта";
    body.append(preTitle1);
    body.append(preTitle2);
    const ChooseLibl1=document.createElement('button');
    const ChooseLibl2=document.createElement('button');
    const ChooseLibl3=document.createElement('button');
    const ChooseLibl4=document.createElement('button');
    ChooseLibl1.classList.add("bl");
    ChooseLibl2.classList.add("bl");
    ChooseLibl3.classList.add("bl");
    ChooseLibl4.classList.add("bl");
    ChooseLibl1.classList.add("btn");
    ChooseLibl2.classList.add("btn");
    ChooseLibl3.classList.add("btn");
    ChooseLibl4.classList.add("btn");
    ChooseLibl1.classList.add("btn-success");
    ChooseLibl2.classList.add("btn-success");
    ChooseLibl3.classList.add("btn-success");
    ChooseLibl4.classList.add("btn-success");
    const div=document.createElement('div');
    div.classList.add("flex");
    body.append(div);
    function forChooseLi(text1, text2, text3, text4, n2, textForCh, ex){
        ChooseLibl1.textContent=text1;
        ChooseLibl2.textContent=text2;
        ChooseLibl3.textContent=text3;
        ChooseLibl4.textContent=text4;
        div.append(ChooseLibl1);
        div.append(ChooseLibl2);
        div.append(ChooseLibl3);
        div.append(ChooseLibl4);
        function Checker(text, n){
            if(Answer3==n){
                ChooseLibl1.parentNode.removeChild(ChooseLibl1);
                ChooseLibl2.parentNode.removeChild(ChooseLibl2);
                ChooseLibl3.parentNode.removeChild(ChooseLibl3);
                ChooseLibl4.parentNode.removeChild(ChooseLibl4);
                div.parentNode.removeChild(div);
                preTitle1.textContent=text+", верно!";
                Explanationofferer(preTitle1, preTitle2, ex, "ChooseLi");
            }else{
                preTitle1.textContent="Неверно! Нажмите на кнопку, на которой написано название";
            }
        }
        ChooseLibl1.addEventListener('click', ()=>{
            Answer3=1;
            Checker(textForCh, n2);
        });
        ChooseLibl2.addEventListener('click', ()=>{
            Answer3=2;
            Checker(textForCh, n2);
        });
        ChooseLibl3.addEventListener('click', ()=>{
            Answer3=3;
            Checker(textForCh, n2);
        });
        ChooseLibl4.addEventListener('click', ()=>{
            Answer3=4;
            Checker(textForCh, n2);
        });
    }
    switch(opr){
        case 1:
            expl="Гоплон не был частью снаряжения римского легионера в I в. н.э., в отличие от гладиуса, лорики сегментаты и калиг.";
            forChooseLi("Гладиус", "Лорика сегментата", "Калиги", "Гоплон", 4, "Гоплон", expl);
        break;
        case 2:
            expl="Урук, Киш и Лагаш - это города Месопотамии, а Коринф - город Древней Греции.";
            forChooseLi("Урук", "Коринф", "Киш", "Лагаш", 2, "Коринф", expl);
        break;
        case 3:
            expl="Ксифос - это разновидность меча, пельта, гоплон и скутум - разновидности щитов.";
            forChooseLi("Пельта", "Гоплон", "Скутум", "Ксифос", 4, "Ксифос", expl);
        break;
        case 4:
            expl="Гоплон не был частью снаряжения римского легионера в I в. н.э., в отличие от гладиуса, лорики сегментаты и калиг.";
            forChooseLi("Гоплон", "Калиги", "Гладиус", "Лорика сегментата", 1, "Гоплон", expl);
        break;
        case 5:
            expl="Урук, Киш и Лагаш - это города Месопотамии, а Коринф - город Древней Греции.";
            forChooseLi("Коринф", "Киш", "Лагаш", "Урук", 1, "Коринф", expl);
        break;
        default:
            expl="Ксифос - это разновидность меча, пельта, гоплон и скутум - разновидности щитов.";
            forChooseLi("Скутум", "Ксифос", "Пельта", "Гоплон", 2, "Ксифос", expl);
    }
}
function CallThing(){
    let opr=parseInt(Math.random()*(5-1)+1);
    let Answer4;
    title.textContent="Уровень Call the thing";
    const preTitle1=document.createElement('p');
    const preTitle2=document.createElement('p');
    const preTitle3=document.createElement('p');
    const preTitle4=document.createElement('p');
    const preTitle5=document.createElement('p');
    preTitle1.textContent="Нажмите на кнопку, на которой написано название описываемой вещи";
    body.append(preTitle1);
    const CallThingbl1=document.createElement('button');
    const CallThingbl2=document.createElement('button');
    const CallThingbl3=document.createElement('button');
    const CallThingbl4=document.createElement('button');
    CallThingbl1.classList.add("bl");
    CallThingbl2.classList.add("bl");
    CallThingbl3.classList.add("bl");
    CallThingbl4.classList.add("bl");
    CallThingbl1.classList.add("btn");
    CallThingbl2.classList.add("btn");
    CallThingbl3.classList.add("btn");
    CallThingbl4.classList.add("btn");
    CallThingbl1.classList.add("btn-success");
    CallThingbl2.classList.add("btn-success");
    CallThingbl3.classList.add("btn-success");
    CallThingbl4.classList.add("btn-success");
    const div=document.createElement('div');
    div.classList.add("flex");
    function forCallThing(text1, text2, text3, text4, n2, textForCh){
        preTitle2.textContent=text1;
        preTitle3.textContent=text2;
        preTitle4.textContent=text3;
        preTitle5.textContent=text4;
        body.append(preTitle2);
        body.append(preTitle3);
        body.append(preTitle4);
        body.append(preTitle5);
        CallThingbl1.textContent="Гоплон";
        CallThingbl2.textContent="Линоторакс";
        CallThingbl3.textContent="Калиги";
        CallThingbl4.textContent="Скутум";
        body.append(div);
        div.append(CallThingbl1);
        div.append(CallThingbl2);
        div.append(CallThingbl3);
        div.append(CallThingbl4);
        function Checker(text, n){
            if(Answer4==n){
                CallThingbl1.parentNode.removeChild(CallThingbl1);
                CallThingbl2.parentNode.removeChild(CallThingbl2);
                CallThingbl3.parentNode.removeChild(CallThingbl3);
                CallThingbl4.parentNode.removeChild(CallThingbl4);
                div.parentNode.removeChild(div);
                preTitle2.parentNode.removeChild(preTitle2);
                preTitle3.parentNode.removeChild(preTitle3);
                preTitle4.parentNode.removeChild(preTitle4);
                preTitle5.parentNode.removeChild(preTitle5);
                preTitle1.textContent=text+", верно!";
                setTimeout(()=>{preTitle1.parentNode.removeChild(preTitle1)}, 3000);
                setTimeout(ChooseLi, 3000);
            }else{
                preTitle1.textContent="Неверно! Нажмите на кнопку, на которой написано название описываемой вещи";
            }
        }
        CallThingbl1.addEventListener('click', ()=>{
            Answer4=1;
            Checker(textForCh, n2);
        });
        CallThingbl2.addEventListener('click', ()=>{
            Answer4=2;
            Checker(textForCh, n2);
        });
        CallThingbl3.addEventListener('click', ()=>{
            Answer4=3;
            Checker(textForCh, n2);
        });
        CallThingbl4.addEventListener('click', ()=>{
            Answer4=4;
            Checker(textForCh, n2);
        });
    }
    let str1;
    let str2;
    let str3;
    let str4;
    switch(opr){
        case 1:
            str1="Это круглый выпуклый щит без умбона. Он делался из дерева. Его диаметр мог достигать";
            str2="90 см. Этот щит был довольно тяжёлым. В его центре была металлическая скоба, через";
            str3="которую гоплит просовывал левое предплечье, а у края - вторая рукоять, за которую";
            str4="он брался левой кистью. Так древнегреческий воин держал этот щит.";
            forCallThing(str1, str2, str3, str4, opr, "Гоплон");
        break;
        case 2:
            str1="Это доспех, использовавшийся древнегреческими гоплитами в VI";
            str2="и V вв. до н.э. Он делался из льняной ткани. Его длина";
            str3="доходила до верхней части бёдер, а подол был разрезан. Этот";
            str4="панцирь много раз изображался на древнегреческих сосудах.";
            forCallThing(str1, str2, str3, str4, opr, "Линоторакс");
        break;
        case 3:
            str1="Это кожаные башмаки, которые носили рядовые римские легионеры в I в. н.э.";
            str2="Эта обувь не имела каблука. Она подбивалась железными гвоздями с шляпкой";
            str3="пирамидальной формы. Один известный римский император, правивший с 37 г. н.э.,";
            str4="имел прозвище, однокоренное латинскому названию этих башмаков.";
            forCallThing(str1, str2, str3, str4, opr, "Калиги");
        break;
        default:
            str1="Это тяжёлый выпуклый щит вытянутой формы с умбоном. Он делался из дерева и кожи.";
            str2="Он использовался римскими легионерами и ассоциируется с ними. Во времена Республики";
            str3="использовалась овальная разновидность этого щита, во времена Империи - овальная";
            str4="с уплощёнными нижним и верхним краями и прямоугольная. ";
            forCallThing(str1, str2, str3, str4, opr, "Скутум");
    }
}
function FindHelm(){
    let helm;
    let opr=parseInt(Math.random()*(5-1)+1);
    let Answer5;
    switch(opr){
        case 1:
            helm="коринфский шлем";
        break;
        case 2:
            helm="шлем типа Монтефортино";
        break;
        case 3:
            helm="халкидский шлем";
        break;
        default:
            helm="иллирийский шлем";
    }
    title.textContent="Уровень Find the helmet";
    const preTitle=document.createElement('p');
    preTitle.textContent="Нажмите на картинку, на которой показан "+helm;
    body.append(preTitle);
    const FindHelmbl1=document.createElement('div');
    const FindHelmbl2=document.createElement('div');
    const FindHelmbl3=document.createElement('div');
    const FindHelmbl4=document.createElement('div');
    FindHelmbl1.classList.add("divHelmImage");
    FindHelmbl2.classList.add("divHelmImage");
    FindHelmbl3.classList.add("divHelmImage");
    FindHelmbl4.classList.add("divHelmImage");
    FindHelmbl1.classList.add("divHelmImage1");
    FindHelmbl2.classList.add("divHelmImage2");
    FindHelmbl3.classList.add("divHelmImage3");
    FindHelmbl4.classList.add("divHelmImage4");
    const div=document.createElement('div');
    div.classList.add("flexImg");
    body.append(div);
    div.append(FindHelmbl1);
    div.append(FindHelmbl2);
    div.append(FindHelmbl3);
    div.append(FindHelmbl4);
    function Checker(n){
        if(Answer5==n){
            FindHelmbl1.parentNode.removeChild(FindHelmbl1);
            FindHelmbl2.parentNode.removeChild(FindHelmbl2);
            FindHelmbl3.parentNode.removeChild(FindHelmbl3);
            FindHelmbl4.parentNode.removeChild(FindHelmbl4);
            div.parentNode.removeChild(div);
            preTitle.textContent="Верно!";
            const preTitle2=document.createElement('p');
            Explanationofferer(preTitle, preTitle2, "", "FindHelm");
            }else{
                preTitle.textContent="Неверно! Нажмите на картинку, на которой показан "+helm;
            }
        }
    FindHelmbl1.addEventListener('click', ()=>{
        Answer5=1;
        Checker(opr);
    });
    FindHelmbl2.addEventListener('click', ()=>{
        Answer5=2;
        Checker(opr);
    });
    FindHelmbl3.addEventListener('click', ()=>{
        Answer5=3;
        Checker(opr);
    });
    FindHelmbl4.addEventListener('click', ()=>{
        Answer5=4;
        Checker(opr);
    });
    
}
function End(){
    title.textContent="Поздравляем! Вы полностью прошли квест!";
    const preTitle=document.createElement('p');
    preTitle.textContent="Хотите сделать это ещё раз?";
    body.append(preTitle);
    Start(preTitle);
}
function Explanationofferer(y, x, explanation, explOpr){
    x.textContent="Хотите узнать почему?";
    if(explOpr=="FindHelm"){
        body.append(x);
    }
    const BtnExpl=document.createElement('button');
    const BtnCont1=document.createElement('button');
    BtnExpl.classList.add("bl");
    BtnCont1.classList.add("bl");
    BtnExpl.classList.add("btn");
    BtnCont1.classList.add("btn");
    BtnExpl.classList.add("btn-success");
    BtnCont1.classList.add("btn-success");
    const div=document.createElement('div');
    div.classList.add("flex");
    body.append(div);
    BtnExpl.textContent="Объяснение";
    BtnCont1.textContent="Продолжить";
    div.append(BtnExpl);
    div.append(BtnCont1);
    BtnExpl.addEventListener('click', ()=>{
        BtnExpl.parentNode.removeChild(BtnExpl);
        BtnCont1.parentNode.removeChild(BtnCont1);
        div.parentNode.removeChild(div);
        y.textContent="Объяснение";
        if(explOpr=="ChooseLi"){        
        x.textContent=explanation;
        } else if(explOpr=="FindHelm"){
            x.textContent="Коринфский, халкидский и иллирийский шлемы - это разновидности шлемов, использовавшиеся древними греками.";
            var preTitle3=document.createElement('p');
            var preTitle4=document.createElement('p');
            var preTitle5=document.createElement('p');
            var preTitle6=document.createElement('p');
            var preTitle7=document.createElement('p');
            var preTitle8=document.createElement('p');
            var preTitle9=document.createElement('p');
            preTitle3.textContent="Коринфский шлем отличается фигурным вырезом для рта и глаз, а также наличием наносника.";
            preTitle4.textContent="Халкидский шлем оставляет лицо гораздо более открытым, чем коринфский, и, в отличие от";
            preTitle5.textContent="него, всегда имеет вырезы для ушей. Иллирийский шлем обязательно оставляет всё или почти";
            preTitle6.textContent="всё лицо открытым (и не имеет наносника). Шлем типа Монтефортино - это шлем, использовавшийся";
            preTitle7.textContent="в римской армии во времена Республики. Его нащёчники прикрепляются к бокам шлема, сам";
            preTitle8.textContent="предмет снаряжения имеет навершие в виде шишки. Этот шлем, если носить его без нащёчников,";
            preTitle9.textContent="оставляет всё лицо открытым.";
            body.append(preTitle3);
            body.append(preTitle4);
            body.append(preTitle5);
            body.append(preTitle6);
            body.append(preTitle7);
            body.append(preTitle8);
            body.append(preTitle9);
        }
        const BtnCont2=document.createElement('button');
        BtnCont2.classList.add("bl");
        BtnCont2.classList.add("btn");
        BtnCont2.classList.add("btn-success");
        BtnCont2.classList.add("shortbl");
        BtnCont2.textContent="Продолжить";
        body.append(BtnCont2);
        BtnCont2.addEventListener('click', ()=>{
            BtnCont2.parentNode.removeChild(BtnCont2);
            y.parentNode.removeChild(y);    
            x.parentNode.removeChild(x);
            if(explOpr=="ChooseLi"){
                FindHelm(); 
            } else if(explOpr=="FindHelm"){
                preTitle3.parentNode.removeChild(preTitle3);
                preTitle4.parentNode.removeChild(preTitle4);
                preTitle5.parentNode.removeChild(preTitle5);
                preTitle6.parentNode.removeChild(preTitle6);
                preTitle7.parentNode.removeChild(preTitle7);
                preTitle8.parentNode.removeChild(preTitle8);
                preTitle9.parentNode.removeChild(preTitle9);
                End();
            }
        });                          
    });
    BtnCont1.addEventListener('click', ()=>{
        BtnExpl.parentNode.removeChild(BtnExpl);
        BtnCont1.parentNode.removeChild(BtnCont1);
        y.parentNode.removeChild(y);    
        x.parentNode.removeChild(x);    
        if(explOpr=="ChooseLi"){
        FindHelm(); 
        } else if(explOpr=="FindHelm"){
        End();
        }
    });
}
function Start(x){
    const start=document.createElement('button');
    start.classList.add("startBtn");
    start.classList.add("btn");
    start.classList.add("btn-success");
    start.textContent="Попробовать ещё раз"
    body.append(start);
    start.addEventListener('click', ()=>{
        start.parentNode.removeChild(start);
        x.parentNode.removeChild(x);
        title.textContent="Укажите своё имя";
        const name=document.createElement('input');
        body.append(name);
        name.addEventListener('keyup', (key)=>{
            if(name.value!=""){
                if(key.code=="Enter"){
                    title.textContent="Добро пожаловать, "+name.value+"!";
                    name.parentNode.removeChild(name);
                    setTimeout(iLoveMath, 3000);
                }
            }
        });
    });
}