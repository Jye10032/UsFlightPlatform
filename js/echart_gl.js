var ROOT_PATH = 'http://localhost:8000';

var chartDom = document.getElementById('echart_gl');
var myChart_gl = echarts.init(chartDom);
var option_gl;

fetch(ROOT_PATH + '/json/flights2.json')
    .then(response => response.json()) // 解析JSON数据
    .then(data => {
        // console.log(data);
        // function getAirportCoord(idx) {
        //     return [data.airports[idx][1], data.airports[idx][2]];
        // }

        // var routes = data.routes.map(function (airline) {
        //     return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
        // });
        var routes = data.map(function (airline) {
            // console.log(airline.from.split(',').map(Number) +
            //     airline.to.split(',').map(Number))
            return [
                airline.from.split(',').map(Number),
                airline.to.split(',').map(Number)
            ];
        });
        // console.log(routes);
        function calculateDistance(lat1, lon1, lat2, lon2) {
            var R = 6371; // 地球半径，单位为千米
            var dLat = (lat2 - lat1) * Math.PI / 180;
            var dLon = (lon2 - lon1) * Math.PI / 180;
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var distance = R * c; // 距离，单位为千米
            return distance;
        }
        // 假设这里是你的计算距离和设置颜色的函数
        function calculateDistanceAndSetColor(flight) {

            // 这里应该是计算两点间距离的逻辑
            var distance = calculateDistance(flight.from[1], flight.from[0], flight.to[1], flight.to[0]);
            // console.log(distance);
            var color;
            if (distance < 5000) {
                color = 'rgba(221, 56, 12, 1)'; // 非常短途航线，使用橙色
            }
            else {
                color = 'rgba(12, 221, 177, 1)'; // 非常长途航线，使用蓝绿色
            }
            // console.log(color);
            return color;
        }

        // 在设置option_gl之前处理routes
        routes.forEach(route => {
            var flight = {
                from: route[0],
                to: route[1]
            };
            route.lineStyle = { width: 2, color: calculateDistanceAndSetColor(flight), curveness: 0.2 };
            route.coords = [route[0], route[1]];
            route.value = 1;
            // console.log(route);
        });
        console.log(routes);
        myChart_gl.setOption({

            animation: 'auto',
            globe: {
                viewControl: { autoRotateSpeed: 10 },
                zlevel: -10,
                baseTexture: ROOT_PATH + '/images/world.topo.bathy.200401.jpg',
                heightTexture:
                    ROOT_PATH + '/images/bathymetry_bw_composite_4k.jpg',
                // environment: ROOT_PATH + '/images/starfield.jpg',
                displacementScale: 0.04,
                light: {
                    ambient: {
                        intensity: 1
                    },
                    main: {
                        intensity: 1,
                        shadow: true,
                        alpha: 40,
                        beta: 90
                    },

                }
            },
            shading: 'realistic',
            realisticMaterial: {
                roughness: 0.9
            },
            postEffect: {
                enable: true
            },
            series: {
                type: 'lines3D',
                coordinateSystem: 'globe',
                blendMode: 'lighter',
                effect: {
                    show: true
                },
                top: 10, left: 0,
                right: 0, bottom: 0,
                data: routes,


            }

        });
    });

option_gl && myChart_gl.setOption(option_gl);