var chartDom = document.getElementById('echart_season');
var myChart_season = echarts.init(chartDom, 'dark');
var option_season;

option_season = {
    // color: ['#071E55', '#143074', '#2046A1', '#3868D9'],
    title: {
        // text: '季度航班统计',
        // subtext: 'Fake Data',
        left: 'left',
        // textStyle: {
        //     color: '#333', // 标题颜色
        //     fontStyle: 'normal', // 字体样式，可以是'normal'、'italic'、'oblique'
        //     fontWeight: 'bold', // 字体粗细，可以是'normal'、'bold'、'bolder'、'lighter'、100 | 200 | 300 | 400...
        //     fontFamily: 'sans-serif', // 字体系列
        //     fontSize: 18, // 字体大小
        // },
        // // 标题背景样式
        // backgroundColor: 'rgba(0,0,0,0)', // 背景颜色
        // borderColor: '#ccc', // 边框颜色
        // borderWidth: 1, // 边框宽度
        // borderRadius: 5, // 边框圆角
        // padding: [10, 15], // 内边距，可以是单个值或者数组形式表示[top, right, bottom, left]
        shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
        shadowBlur: 10, // 阴影模糊大小
        shadowOffsetX: 0, // 阴影水平偏移
        shadowOffsetY: 0, // 阴影垂直偏移
    },
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        bottom: 'bottom'
    },
    series: [
        {
            radius: ['40%', '70%'],
            name: 'Access From',
            type: 'pie',
            // radius: '50%',

            data: [
                { value: 1791091, name: 'Q1' },
                { value: 1813084, name: 'Q2' },
                { value: 1781118, name: 'Q3' },
                { value: 1624435, name: 'Q4' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
option_season && myChart_season.setOption(option_season);