var y_data = [0.669957062,
	0.348419911,
	0.324551448,
	0.277835566,
	0.273306877,
	0.269921191,
	0.263802628,
	0.252713474,
	0.241123988,
	0.208828908,
	0.186293717,
	0.185949935,
	0.182200033,
	0.177320396,
	0.173432806,
	0.173411251,
	0.170528807,
	0.167333781,
	0.159870409,
	0.158676018
].reverse();

var index2_data = {
	title: {
		text: '甲级',
		subtext: '第一周',
		left: 'center',
		textStyle: {
			fontSize: 24,
			fontWeight: 'bolder',
			color: '#333'
		}
	},
	tooltip: {
		trigger: 'axis',
		textStyle: {
			fontSize: 14
		},
		formatter: function(params) {
			var name = params[0].axisValue;
			var cap = params[0].value >= 0.20 ? '奖金150元' : '离奖金只差一小步';
			cap = params[0].dataIndex >= y_data.length - 5 ? '奖金150元，前五名额外奖励300元' : cap;
			return name + '<br/>' + cap;
		}
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
		data: ['绝味沈阳中街1店',
			'绝味大连昌临街店',
			'绝味沈阳惠工街店',
			'绝味大连西安路二店',
			'绝味大连和平广场店',
			'绝味沈阳沈师店',
			'绝味丹东新乐购店',
			'绝味沈阳海棠街店',
			'绝味沈阳云峰北街店',
			'绝味大连柳树南街店',
			'绝味沈阳太原街店',
			'绝味大连理工北门店',
			'绝味辽阳光华店',
			'绝味锦州千盛店',
			'绝味沈阳迎春店',
			'绝味丹东女人街店',
			'绝味大连南平街店',
			'绝味丹东二院店',
			'绝味沈阳启工街店',
			'绝味沈阳长江街2店'
		].reverse(),
		axisLabel: {
			textStyle: {
				color: '#000',
				fontSize: 14,
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
		name: '提升百分比',
		type: 'bar',
		data: y_data,
		label: {
			normal: {
				position: 'insideRight',
				show: true,
				fontSize: 14,
				formatter: function(value) {
					return(value.data * 100).toFixed(2) + '%';
				}
			}
		},
		markLine: {
			data: [{
				name: '平均值',
				xAxis: 0.20
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
					if(params.data >= 0.20) {
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