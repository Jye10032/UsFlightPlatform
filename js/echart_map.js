var chartDom = document.getElementById('echart_map');
var myChart_map = echarts.init(chartDom, 'dark', { renderer: 'svg' });
var option_map;

// This example requires ECharts v5.4.0 or later
myChart_map.showLoading();
fetch('http://localhost:8000/json/USA.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(usaJson => {
        echarts.registerMap('USA', usaJson, {
            Alaska: {
                left: -131,
                top: 25,
                width: 15
            },
            Hawaii: {
                left: -110,
                top: 28,
                width: 5
            },
            'Puerto Rico': {
                left: -76,
                top: 26,
                width: 2
            }
        });
        option_map = {
            grid: {
                bottom: 20
            },
            title: {
                // text: '监控航班区域',
                // subtext: 'Fake Data',
                left: 'left',
            },
            backgroundColor: 'transparent',
            geo: {
                map: 'USA',
                roam: true,
                itemStyle: {
                    areaColor: '#e7e8ea'
                }
            }
        };
        myChart_map.hideLoading();
        myChart_map.setOption(option_map);
    })
    .catch(error => {
        console.error('Error loading the map:', error);
        myChart_map.hideLoading();
    });