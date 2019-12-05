import { Component, OnInit } from '@angular/core';
import * as L7 from '@antv/l7';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-l7-antv',
  templateUrl: './l7-antv.component.html',
  styleUrls: ['./l7-antv.component.scss']
})
export class L7AntvComponent implements OnInit {
  mapInfo = {
    zoom: undefined,
    center: undefined,
    pitch: undefined,
    lnglat: undefined
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getSimpleness();
    this.getDataoRigin();
    this.getLineAnimate();
  }
  // 简单入门级
  getSimpleness() {
    const that = this;
    // tslint:disable-next-line:no-unused-expression
    const scene = new L7.Scene({
      id: 'simpleness',
      mapStyle: 'light', // 样式URL
      center: [120.19382669582967, 30.258134],
      pitch: 0,
      zoom: 12
    });
    scene.on('loaded', function () {
      scene.on('mousemove', function (e) {
        console.log('hehe');
        that.mapInfo = {
          zoom: scene.getZoom(),
          center: scene.getCenter().toString(),
          pitch: scene.getPitch(),
          lnglat: e.lnglat.toString()
        };
      });
    });
  }
  // 数据源
  getDataoRigin() {
    function pointOnCircle(angle) {
      return {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [
                114.27755355834961 + Math.cos(angle) * 0.1,
                30.58989817188057 + Math.sin(angle) * 0.1
              ]
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [
                114.32441711425781 + Math.cos(angle) * 0.1,
                30.562704390543985 + Math.sin(angle) * 0.1
              ]
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [
                114.27806854248047 + Math.cos(angle) * 0.1,
                30.5650693698865 + Math.sin(angle) * 0.1
              ]
            }
          }
        ]
      };
    }
    const scene = new L7.Scene({
      id: 'dataorigin',
      mapStyle: 'light', // 样式URL
      center: [114.292, 30.5796],
      pitch: 0,
      zoom: 11
    });

    scene.on('loaded', function () {
      const data = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [114.25077438354492, 30.600093873550072],
                  [114.26502227783203, 30.600093873550072],
                  [114.26502227783203, 30.60807236997211],
                  [114.25077438354492, 30.60807236997211],
                  [114.25077438354492, 30.600093873550072]
                ]
              ]
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [114.31137084960938, 30.600093873550072],
                  [114.30656433105469, 30.589602628298536],
                  [114.31549072265625, 30.571572765814274],
                  [114.32167053222655, 30.593149091802424],
                  [114.32424545288086, 30.59965060448085],
                  [114.31137084960938, 30.600093873550072]
                ]
              ]
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [114.26004409790039, 30.57024256120887],
                  [114.24373626708983, 30.563886887421297],
                  [114.25472259521484, 30.555756930350302],
                  [114.26776885986328, 30.55560910664438],
                  [114.27618026733398, 30.56832112235078],
                  [114.26004409790039, 30.57024256120887]
                ]
              ]
            }
          }
        ]
      };
      scene
        .PolygonLayer({
          zIndex: 0
        })
        .source(data)
        .shape('fill')
        .color('#2F54EB')
        .style({
          opacity: 0.05
        })
        .render();

      scene
        .LineLayer({
          zIndex: 0
        })
        .source(data)
        .shape('line')
        .size(2)
        .color('#2F54EB')
        .style({
          opacity: 1.0
        })
        .render();
      const circleLayer = scene
        .PointLayer({
          zIndex: 0
        })
        .source(pointOnCircle(0))
        .shape('circle')
        .size(15) // default 1
        .active(true)
        .color('#2F54EB')
        .style({
          stroke: 'rgb(255,255,255)',
          strokeWidth: 2,
          opacity: 1
        })
        .render();

      function animateMarker(timestamp) {
        circleLayer.setData(pointOnCircle(timestamp / 1000));
        requestAnimationFrame(animateMarker);
      }
      animateMarker(0);
    });
  }
  // 线动画
  getLineAnimate() {
    const scene = new L7.Scene({
      id: 'lineAnimate',
      mapStyle: 'dark', // 样式URL
      center: [105.2825, 34.9],
      pitch: 15,
      zoom: 4
    });
    const that = this;
    scene.on('loaded', function () {
      const req = that.httpClient.get('https://gw.alipayobjects.com/os/basement_prod/9f6afbcd-3aec-4a26-bd4a-2276d3439e0d.json');
      req.subscribe(data => {
        console.log(data);
        scene.LineLayer({
          zIndex: 2
        }).source(data)
          .shape('line')
          .size('value', [1, 4])
          .color('value', ['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0']
            .reverse()).animate({
              enable: true, // 开启动画
              interval: 0.8, //  0-1 轨迹间隔
              duration: 2, // 动画时间
              trailLength: 0.8, // 轨迹长度 0-1
            })
          .render();
        new L7.Marker({
          color: 'red'
        }).setLnglat([112, 32]).addTo(scene);
      })
    });
  }
}
