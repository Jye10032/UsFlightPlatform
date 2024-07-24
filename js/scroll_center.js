let str1 = '';
var scrollContent = document.getElementsByClassName('scroll-box').item(0);
var table = document.getElementsByClassName('scroll-tab').item(0);
// // 假设的API URL
// let apiUrl_route = 'http://172.22.120.125:12346/route';
let apiUrl_route = 'http://localhost:8000/json/route.json';
let isScrolling = false;
function routeDataAndUpdateUI() {
    //模拟数据
    // let data12 = {
    //     data: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
    // };
    fetch(apiUrl_route)
        .then(response => response.json()) // 解析JSON数据
        .then(data12 => {
            for (let n = 0; n < data12.length; n++) {
                str1 +=
                    '<tr class="swiper-slide" style="height: 48px;"><td>' +
                    data12[n].takeoff_time +
                    '</td><td>' +
                    data12[n].origin +
                    '</td><td>' +
                    data12[n].dest +
                    '</td><td>' +
                    data12[n].tailnum +
                    '</td>';
                if (data12[n].status == 0) {
                    str1 += '<td style="color: green;">';
                    str1 += '已降落';
                    str1 += '</td>'
                }
                else if (data12[n].status == 1) {
                    str1 += '<td style="color: blue;">';
                    str1 += '飞行中';
                    str1 += '</td>'
                }
                else {
                    str1 += '<td style="color: orange;">';
                    str1 += '待起飞';
                    str1 += '</td>'
                }
                str1 += '</tr>';
            }

            $('.scrollContent').append(str1);
            $('.scrollContent').append(str1);//不能使用innerHtml  插入两次 目的是复制一份数据 使滚动区域高度大于容器高度 实现滚动效果


        })
    // 检查是否已经开始滚动
    if (!isScrolling) {
        //执行函数
        roll(100);
        isScrolling = true; // 更新标志
    }
}

//滚动函数
function roll(t) {

    var timer = setInterval(rollStart, t); // 间隔时间t

}

// 开始滚动函数
function rollStart() {

    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    if (scrollContent.scrollTop >= scrollContent.scrollHeight / 2) {
        //注此处高度相当于为俩个tbody高度 需除2
        scrollContent.scrollTop = 0;
    } else {
        scrollContent.scrollTop++;
    }
}
// 使用setInterval来每隔一段时间（例如5分钟）自动调用函数
// 5分钟 = 300000毫秒
setInterval(routeDataAndUpdateUI, 10000);

// 首次加载页面时也调用一次函数，以便立即显示数据
routeDataAndUpdateUI();