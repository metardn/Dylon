import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = "assets/user.png"
  sun = "assets/sun.png"
  
  option1 : EChartsOption = {
    color: [
      '#855752'
    ],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [1,2,3,4,5,6,7,8,9,10,11]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [2,3,5,4.5,5,7,4.5,7,4,5,4.5],
        type: 'line',
        areaStyle: {
          color: '#FDBFA5',
          opacity: 0.2
        }
      }
    ]
  };

  option2 : EChartsOption = {
    color: [
      '#82A78D'
    ],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [1,2,3,4,5,6,7,8,9,10]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [2,3,3.1,7,5.5,6,4,4.1,4,6],
        type: 'line',
        areaStyle: {
          color: '#BEE7BB',
          opacity: 0.2
        }
      }
    ]
  };

  option3 : EChartsOption = {
    color: [
      '#364FA2'
    ],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [1,2,3,4,5,6,7,8,9]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [2,3,2,7,3.1,4,2,4,2],
        type: 'line',
        areaStyle: {
          color: '#7AC2FA',
          opacity: 0.2
        }
      }
    ]
  };


  optionTraffic : EChartsOption = {
    legend: {},
    tooltip: {},
    itemStyle: {
      borderRadius: 3,
      borderWidth: 2
    },
    xAxis: {
      type: 'category',
      data: ['22', '23', '24', '25', '26', '27', '28']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          {
            value: 200,
            itemStyle: {
              color: '#FDBFA5'
            }
          },
          {
            value: 1000,
            itemStyle: {
              color: '#2B6FFF'
            }
          },
          {
            value: 1500,
            itemStyle: {
              color: '#7AC2FA'
            }
          },
          {
            value: 100,
            itemStyle: {
              color: '#BEE7BB'
            }
          },
          {
            value: 500,
            itemStyle: {
              color: '#6B57E0'
            }
          },
          {
            value: 1100,
            itemStyle: {
              color: '#FFE588'
            }
          },
          {
            value: 1200,
            itemStyle: {
              color: '#2B6FFF'
            }
          }
        ],
        type: 'bar'
      }
    ]
  };

  optionGeo : EChartsOption= {
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Ukraine', 'Hongkong', 'Indonesia', 'United States', 'Vietnam']
    },
    grid: {
      left: '35%'
    },
    series: [
      {
        data: [
            {
              value: 4,
              itemStyle: {
                color: '#FDBFA5'
              }
            },
            {
              value: 6,
              itemStyle: {
                color: '#2B6FFF'
              }
            },
            {
              value: 13,
              itemStyle: {
                color: '#7AC2FA'
              }
            },
            {
              value: 15,
              itemStyle: {
                color: '#BEE7BB'
              }
            },
            {
              value: 20,
              itemStyle: {
                color: '#FFE588'
              }
            }
        ],
        type: 'bar'
      }
    ]
  };

  optionView : EChartsOption = {
    color: [
      '#2B6FFF',
      '#FDBFA5',
      '#BEE7BB'
    ],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['70%', '95%'],
        itemStyle: {
          borderRadius: 4,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 79.1, name: 'Desktop' },
          { value: 2.8, name: 'Tablet' },
          { value: 9.4, name: 'Mobile' }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
