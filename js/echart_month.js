var chartDom = document.getElementById('echart_month');
var myChart_month = echarts.init(chartDom, 'dark', { renderer: 'svg' });
var option_month;

option_month = {
    grid: {
        bottom: 20
    },
    title: {
        // text: '月度航班统计',
        // subtext: 'Fake Data',
        left: 'left',
    },
    backgroundColor: 'transparent',
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    yAxis: {
        type: 'value',
        min: 500000,
        align: 'right',
        axisLabel: {
            margin: 2,
            formatter: function (value, index) {
                if (value >= 10000 && value < 10000000) {
                    value = value / 10000 + "w";
                } else if (value >= 10000000) {
                    value = value / 10000000 + "kw";
                }
                return value;
            }
        },
        splitLine: {
            show: false // 设置此属性以去掉横线
        }

    },
    series: [
        {
            data: [
                605765, 569236, 616090, 598126, 606293, 608665, 627931, 612279, 540908,
                556205, 523272, 544958
            ],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 1,
            areaStyle: {
                color: '#5470C6',
                opacity: 0.5
            },
            lineStyle: {
                color: '#5470C6',
                width: 1,
                type: 'dashed'
            },
            itemStyle: {
                borderWidth: 1,
                borderColor: '#EE6666',
                color: 'yellow'
            }
        }
    ]
};

option_month && myChart_month.setOption(option_month);
window.addEventListener("resize", function () {
    myChart_month.resize();
});