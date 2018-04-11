var y_data = [1.307886623,
	1.119607856,
	0.894134929,
	0.803710714,
	0.710875881,
	0.704072699,
	0.704008497,
	0.670538302,
	0.633859977,
	0.585641974,
	0.526429314,
	0.497431957,
	0.421390416,
	0.421162814,
	0.39804599,
	0.367079976,
	0.355080483,
	0.354257529,
	0.326980202,
	0.304321113,
	0.297899661,
	0.254044103,
	0.249056439,
	0.23595739,
	0.235222581,
	0.201635766,
	0.15675236,
	0.112266091,
	0.107187482,
	0.104396954,
	0.097102405,
	0.076756829
].reverse();

var index2_data = {
	title: {
		text: '丙级(单店营收500元以下)',
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
			var cap = params[0].value >= 0.2 ? '奖金60元' : '离奖金只差一小步';
			cap = params[0].dataIndex >= y_data.length - 5 ? '奖金60元，前五名额外奖励300元' : cap;
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
		data: ['绝味大连明珠街店',
			'绝味大连山东路店',
			'绝味大连东财北门店',
			'绝味沈阳益格店',
			'绝味本溪水塔店',
			'绝味沈阳梅江街店',
			'绝味盘锦大润发店',
			'绝味铁岭龙首店',
			'绝味沈阳富民街店',
			'绝味沈阳沙河子店',
			'绝味鞍山山南店',
			'绝味黑山福山广场店',
			'绝味丹东站前店',
			'绝味沈阳保工北三路店',
			'绝味沈阳小北关街店',
			'绝味鞍山中华小学店',
			'绝味沈阳保利上林湾店',
			'绝味鞍山湖南店',
			'绝味黑山客运站店',
			'绝味大连唐山街二店',
			'绝味沈阳虹桥路店',
			'绝味沈阳沈辽路保工店',
			'绝味沈阳小什字街店',
			'绝味大连李家街店',
			'绝味锦州中央大街店',
			'绝味大连华东人家店',
			'绝味大连富民广场店',
			'绝味辽阳襄平店',
			'绝味鞍山卫钢街店',
			'绝味大连孙家沟店',
			'绝味沈阳齐贤街六路店',
			'绝味沈阳沈铁路店'
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