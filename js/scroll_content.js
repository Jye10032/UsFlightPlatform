// let str_r1 = '';
// var scroll_r1 = document.getElementsByClassName('scroll-box-content').item(0);
// var table = document.getElementsByClassName('scroll-tab-content').item(0);

// //模拟数据
// let data_r1 = {
//     data: [
//         {
//             content: "系统将在午夜进行维护，请确保相关数据已备份并提前完成必要操作。"
//         },
//         {
//             content: "由于暴风雨，部分航班可能会延误，请及时通知相关部门并做好应对措施。"
//         },
//         {
//             content: "本月末机票销售可享20%折扣，请确保宣传和服务支持到位。"
//         },
//         {

//             content: "新增航线即将开通，请确保相关准备工作已完成，并及时更新信息。"
//         },
//         {
//             content: "航班信息实时更新，请确保系统运行正常，数据准确无误。"
//         },
//         {
//             content: "航班登机口可能会有变动，请及时通知地勤人员，并确保信息传递顺畅。"
//         },
//         {
//             content: "感谢各部门的理解与配合，请继续保持高效的工作状态。"
//         },
//         {
//             content: "请确保安检通道顺畅，并督促安检人员严格遵守操作规程。"
//         },
//         {
//             content: "请各部门加强安全意识培训，确保旅客和员工的安全。"
//         }
//     ]
// };
// for (let n = 0; n < data_r1.data.length; n++) {
//     str_r1 +=
//         '<tr class="swiper-slide" style="height: 48px;"><td>' +
//         data_r1.data[n].content +
//         '</td></tr>';
// }

// $('.scrollContent-content').append(str_r1);
// $('.scrollContent-content').append(str_r1);//不能使用innerHtml  插入两次 目的是复制一份数据 使滚动区域高度大于容器高度 实现滚动效果
// //滚动函数
// function roll(t) {

//     var timer_r1 = setInterval(rollStart, t); // 间隔时间t
//     // // 鼠标移入table时暂停滚动
//     // table.onmouseover = function () {
//     //     clearInterval(timer);
//     // };
//     // // 鼠标移出table后继续滚动
//     // table.onmouseout = function () {
//     //     timer = setInterval(rollStart, t);
//     // };
// }

// // 开始滚动函数
// function rollStart() {

//     // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
//     if (scroll_r1.scrollTop >= scroll_r1.scrollHeight / 2) {
//         //注此处高度相当于为俩个tbody高度 需除2
//         scroll_r1.scrollTop = 0;
//     } else {
//         scroll_r1.scrollTop++;
//     }
// }
// //执行函数
// roll(50);

let str_r1 = '';
var scroll_r1 = document.getElementsByClassName('scroll-box-content').item(0);
var table = document.getElementsByClassName('scroll-tab-content').item(0);

//模拟数据
let data_r1 = {
    data: [
        {
            content: "1. 系统将在午夜进行维护，请确保相关数据已备份并提前完成必要操作。"
        },
        {
            content: "2. 由于暴风雨，部分航班可能会延误，请及时通知相关部门并做好应对措施。"
        },
        {
            content: "3. 本月末机票销售可享20%折扣，请确保宣传和服务支持到位。"
        },
        {

            content: "4. 新增航线即将开通，请确保相关准备工作已完成，并及时更新信息。"
        },
        {
            content: "5. 航班信息实时更新，请确保系统运行正常，数据准确无误。"
        },
        {
            content: "6. 航班登机口可能会有变动，请及时通知地勤人员，并确保信息传递顺畅。"
        },
        {
            content: "7. 感谢各部门的理解与配合，请继续保持高效的工作状态。"
        },
        {
            content: "8. 请确保安检通道顺畅，并督促安检人员严格遵守操作规程。"
        },
        {
            content: "请各部门加强安全意识培训，确保旅客和员工的安全。"
        }
    ]
};
for (let n = 0; n < data_r1.data.length; n++) {
    str_r1 +=
        '<tr class="swiper-slide" style="height: 49px;overflow-x: auto;white-space: nowrap; "><td>' +
        data_r1.data[n].content + '&nbsp;'.repeat(100) +
        '</td></tr>';
}

$('.scrollContent-content').append(str_r1);//不能使用innerHtml  插入两次 目的是复制一份数据 使滚动区域高度大于容器高度 实现滚动效果
//滚动函数
function roll(t) {

    var timer_r1 = setInterval(rollStart, t); // 间隔时间t
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
    // console.log('scroll');
    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    if (scroll_r1.scrollLeft >= scroll_r1.scrollWidth / 2) {
        // 注此处宽度相当于为两个内容宽度 需除2
        scroll_r1.scrollLeft = 0;
    } else {
        scroll_r1.scrollLeft++;
    }
}
//执行函数
roll(20);