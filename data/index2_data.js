var index2_data = {
	title: {
		text: '销售竞赛',
		subtext: '2018第一周',
		left: 'center'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		show: true,
		data: [{
			name: 'test',
			textStyle: {
				color: 'red'
			}
		}]
	},
	grid: {
		top: 50,
		bottom: 15,
		right: 20,
		containLabel: true
	},
	calculable: true,
	xAxis: [{
		type: 'value',
		show: false,
		axisLine: {
			show: false
		}
	}],
	yAxis: [{
		type: 'category',
		data: ['门店1', '门店2', '门店2', '门店2', '门店2', '门店2', '门店1', '门店2', '门店2', '门店2', '门店2', '门店2'],
		axisLabel: {
			textStyle: {
				color: '#000',
				fontSize: 12,
				align: 'right'
			}
		},
		offset: 10,
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		}
	}],
	series: [{
		name: '蒸发量',
		type: 'bar',
		data: [18, 17, 16, 15, 14, 13, 18, 17, 16, 15, 14, 100],
		label: {
			normal: {
				position: 'insideRight',
				show: true,
				fontSize: 14,
				formatter: function(value) {
					return value.data.value;
				}
			}
		},
		markLine: {
			data: [{
				name: '平均值',
				xAxis: 15
			}],
			itemStyle: {
				normal: {
					lineStyle: {
						type: 'solid',
						color: '#000'
					},
					label: {
						show: true,
						position: 'left'
					}
				}
			}
		},
		itemStyle: {
			normal: {
				color: function(params) {
					if(params.data >= 15) {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#41b7e7'
						}, {
							offset: 1,
							color: '#02ce99'
						}]);
					} else {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#ffdd9a'
						}, {
							offset: 1,
							color: '#ffaa06'
						}]);
					}
				},
			}
		}
	}]
};