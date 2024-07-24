let str_r2 = '';
var scroll_r2 = document.getElementsByClassName('scroll-box-flightcount').item(0);
var table = document.getElementsByClassName('scroll-tab-flightcount').item(0);
// 假设的API URL
// let apiUrl = 'http://172.22.120.125:12346/airport_count';
let apiUrl = 'http://localhost:8000/json/airport_count.json';
let isScrolling2 = false;
function fetchDataAndUpdateUI() {


    fetch(apiUrl)
        .then(response => response.json()) // 解析JSON数据
        .then(data_r2 => {
            console.log(data_r2);
            // //模拟数据
            // let data_r2 = {
            //     data: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
            // };
            for (let n = 0; n < data_r2.length; n++) {
                str_r2 +=
                    '<tr class="swiper-slide" style="height: 48px;"><td>' +
                    data_r2[n].airport_name +
                    '</td><td>' +
                    data_r2[n].count +
                    '</td></tr>';
            }

            $('.scrollContent-flightcount').append(str_r2);
            $('.scrollContent-flightcount').append(str_r2);//不能使用innerHtml  插入两次 目的是复制一份数据 使滚动区域高度大于容器高度 实现滚动效果


        });
    // 检查是否已经开始滚动
    if (!isScrolling2) {
        //执行函数
        roll(100);
        isScrolling2 = true; // 更新标志
    }
}
//滚动函数
function roll(t) {

    var timer_r2 = setInterval(rollStart, t); // 间隔时间t
    // // 鼠标移入table时暂停滚动
    // table.onmouseover = function () {
    //     clearInterval(timer);
    // };
    // // 鼠标移出table后继续滚动
    // table.onmouseout = function () {
    //     timer = setInterval(rollStart, t);
    // };
}

// 开始滚动函数
function rollStart() {

    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    if (scroll_r2.scrollTop >= scroll_r2.scrollHeight / 2) {
        //注此处高度相当于为俩个tbody高度 需除2
        scroll_r2.scrollTop = 0;
    } else {
        scroll_r2.scrollTop++;
    }
}
// 使用setInterval来每隔一段时间（例如5分钟）自动调用函数
// 5分钟 = 300000毫秒
setInterval(fetchDataAndUpdateUI, 10000);

// 首次加载页面时也调用一次函数，以便立即显示数据
fetchDataAndUpdateUI();