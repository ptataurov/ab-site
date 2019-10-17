import echarts from 'echarts'

const node = document.querySelector('.area-chart__container')

if (node) {
	const myChart = echarts.init(node)

	const option = {
		title: {
			text: 'Количество отзывов',
			textStyle: {
				fontFamily: 'Rubik, sans-serif',
				fontWeight: 400,
				color: '#9da5b1'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data: ['Всего', 'Негативных']
		},
		toolbox: {
			show: false
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: [
					'Ноя 18',
					'Дек 18',
					'2019',
					'Фев 19',
					'Мар 19',
					'Июнь 19',
					'Июл 19'
				]
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: 'Всего',
				type: 'line',
				areaStyle: {},
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: 'Негативных',
				type: 'line',
				areaStyle: {},
				data: [220, 182, 191, 234, 290, 330, 310]
			}
		]
	}

	myChart.setOption(option)

	window.addEventListener('resize', () => {
		myChart.resize()
	})
}
