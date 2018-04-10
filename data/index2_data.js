var y_data = [0.669957062,
	0.402623434,
	0.377371438,
	0.277835566,
	0.348419911,
	0.343524526,
	0.309617336,
	0.324551448,
	0.283958664,
	0.27886793,
	0.262444927,
	0.263802628,
	0.273306877,
	0.252713474,
	0.241123988,
	0.245748912,
	0.237743879,
	0.269921191,
	0.22103363,
	0.204200656,
	0.198670888,
	0.189004034,
	0.178936416,
	0.175495431,
	0.208828908,
	0.160036868
].sort();

var index2_data = {
	title: {
		text: '甲级(1000元以上)',
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
			fontSize: 24
		}
		formatter: function(params) {
			var name = params[0].axisValue;
			var cap = params[0].value >= 0.2 ? '奖金150元' : '无奖金';
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
			'绝味沈阳沈辽路兴隆店',
			'绝味沈阳一克拉店',
			'绝味大连西安路二店',
			'绝味大连昌临街店',
			'绝味沈阳大什字街店',
			'绝味丹东新柳步行街店',
			'绝味沈阳惠工街店',
			'绝味沈阳黄河大街店',
			'绝味营口大福源店',
			'绝味大连北京街店',
			'绝味丹东新乐购店',
			'绝味大连和平广场店',
			'绝味沈阳海棠街店',
			'绝味沈阳云峰北街店',
			'绝味大连金石滩店',
			'绝味沈阳北一路万达店',
			'绝味沈阳沈师店',
			'绝味沈阳明廉店',
			'绝味大连南石道街店',
			'绝味沈阳宏发店',
			'绝味沈阳艳华街店',
			'绝味营口市东风店',
			'绝味大连泉水快轨站店',
			'绝味大连柳树南街店',
			'绝味沈阳宁官店',
		],
		axisLabel: {
			textStyle: {
				color: '#000',
				fontSize: 20,
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
				fontSize: 24,
				formatter: function(value) {
					return(value.data * 100).toFixed(2) + '%';
				}
			}
		},
		markLine: {
			data: [{
				name: '平均值',
				xAxis: 0.2
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
					if(params.data >= 0.2) {
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