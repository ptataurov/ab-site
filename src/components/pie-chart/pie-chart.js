import echarts from 'echarts'

const node = document.querySelector('.pie-chart__container')

if (node) {
	window.addEventListener('load', () => {
		const myChart = echarts.init(node)

		const option = {
			title: {
				text: 'Популярность',
				textStyle: {
					fontFamily: 'Rubik, sans-serif',
					fontWeight: 400,
					color: '#9da5b1'
				}
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c} ({d}%)'
			},
			legend: {
				type: 'scroll',
				orient: 'vertical',
				right: 10,
				top: 20,
				bottom: 20,
				data: [
					'Остальные бренды',
					'Grohe',
					'Roca',
					'Hansgrohe',
					'AM.PM',
					'Jacob Delafon',
					'IDDIS',
					'Lemark',
					'RAVAK',
					'Milardo'
				],

				selected: {}
			},
			series: [
				{
					name: 'Популярность',
					type: 'pie',
					radius: '55%',
					center: ['40%', '50%'],
					data: [
						{
							name: 'Остальные бренды',
							value: 62
						},
						{
							name: 'Grohe',
							value: 9
						},
						{
							name: 'Roca',
							value: 5
						},
						{
							name: 'Hansgrohe',
							value: 3
						},
						{
							name: 'AM.PM',
							value: 6
						},
						{
							name: 'Jacob Delafon',
							value: 4
						},
						{
							name: 'IDDIS',
							value: 2
						},
						{
							name: 'Lemark',
							value: 1
						},
						{
							name: 'RAVAK',
							value: 4
						},
						{
							name: 'Milardo',
							value: 3
						}
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}

		myChart.setOption(option)

		window.addEventListener('resize', () => {
			myChart.resize()
		})
	})
}
