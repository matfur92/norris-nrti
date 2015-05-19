/*
* Name :  BarChart.js
* Module : UnitTest
* Location : /frontend/test/unit/Model
*
* History :
* Version       Date        Programmer                  Description
* =================================================================================================
* 0.3.0			2015-05-18	Francesco Rossetto			Restructured test
*
* 0.2.3         2015-05-17  Maria Giovanna Chinellato   Fix code
*
* 0.2.2			2015-05-15	Maria Giovanna Chinellato	Fix test of Model::BarChart
*
* 0.2.1			2015-05-15	Maria Giovanna Chinellato	Fix methods test
*
* 0.2.0			2015-05-15	Maria Giovanna Chinellato	Add test of all the methods of LineChart classes
*
* 0.1.0			2015-05-15	Maria Giovanna Chinellato	Add test of Model::BarChart.js
*
* 0.0.1			2015-05-15	Maria Giovanna Chinellato	Initial code
* =================================================================================================
*
*/

describe('BarChart', function(){
	'use strict';

	var BarChart;
	var Graph;
	var Axis;
	var BarChartFlow;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function(_BarChart_, $injector){
		BarChart = _BarChart_;
		Graph = $injector.get('Graph');
		Axis = $injector.get('Axis');
		BarChartFlow = $injector.get('BarChartFlow');
	}));

	describe('Constructor', function(){

		var json = {
			'title' : 'fottutissimografico',
			'url' : 'localhost/page1/grafico1'
		};

		beforeEach(function(){
			BarChart = new BarChart(json);
		});

		afterEach(function(){
			BarChart = null;
		});

		it('BarChart created', function(){
			expect(BarChart).toBeDefined();
		});
		it('graph Constructor called', function(){
			expect(BarChart.getTitle()).toEqual('fottutissimografico');
		});
		it('graph Constructor called', function(){
			expect(BarChart.getUrl()).toEqual('localhost/page1/grafico1');
		});
		it('graph created with the correct axisX', function(){
			expect(BarChart.getX()).toEqual(null);
		});
		it('graph created with the correct axisY', function(){
			expect(BarChart.getY()).toEqual(null);
		});
		it('graph created with the correct barOrientation', function(){
			expect(BarChart.getBarOrientation()).toEqual('vertical');
		});
		it('graph created with the correct background', function(){
			expect(BarChart.getBackground()).toEqual('#FFF');
		});
		it('graph created with the correct sortable', function(){
			expect(BarChart.getSortable()).toEqual(true);
		});
		it('graph created with the correct barsGrouping', function(){
			expect(BarChart.getBarsGrouping()).toEqual('grouped');
		});
		it('graph created with the correct flow', function(){
			expect(BarChart.getFlowList().length).toEqual(0);
		});

	});

	/*describe('split', function(){
		var res;
		var json = {};
		var json1 = json;
		json = json1;
		json = {
			'title' : 'grafico',
			'height' : 300,
			'width' : 300,
			'enabledLegend' : true,
			'legend' : {},
			'horizontalGrid' : true,
			'verticalGrid' : true,
			'axisX' : {},
			'axisY' : {},
			'barOrientation' : 'horizontal',
			'background' : '#FFF',
			'sortable' : false,
			'barsGrouping' : 'stacked'
		};
		var g = {
			'title' : 'grafico',
			'height' : 300,
			'width' : 300,
			'enabledLegend' : true,
			'legend' : {},
			'horizontalGrid' : true,
			'verticalGrid' : true
		};
		var b = {
			'axisX' : {},
			'axisY' : {},
			'barOrientation' : 'horizontal',
			'background' : '#FFF',
			'sortable' : false,
			'barsGrouping' : 'stacked'
		};

		beforeEach(function(){
			res = BarChart.Test('split(json)');
		});

		it('json splitted in the correct way', function(){
			expect(res.graphJson).toEqual(g);
			expect(res.barJson).toEqual(b);
		});

	});*/

	describe('updateParameters', function(){
		var json = {
			'title' : 'graficonuovo',
			'height' : 400,
			'width' : 400,
			'enabledLegend' : false,
			'horizontalGrid' : false,
			'verticalGrid' : false,
			'axisX' : {},
			'axisY' : {},
			'barOrientation' : 'vertical',
			'background' : '#F0F',
			'sortable' : false,
			'barsGrouping' : 'stacked',
			'flows' : [{},{},{}]
		};
		/*var gJson = {
			'title' : 'graficonuovo',
			'height' : 400,
			'width' : 400,
			'enabledLegend' : false,
			'horizontalGrid' : false,
			'verticalGrid' : false,
		};*/

		beforeEach(function(){
			BarChart = new BarChart();
			BarChart.updateParameters(json);
		});

		afterEach(function(){
			BarChart = null;
		});	

		it('BarChart created', function(){
			expect(BarChart).toBeDefined();
		});
		it('graph updated with the correct axisX', function(){
			expect(BarChart.getX()).toEqual({});
		});
		it('graph updated with the correct axisY', function(){
			expect(BarChart.getY()).toEqual({});
		});
		it('graph updated with the correct barOrientation', function(){
			expect(BarChart.getBarOrientation()).toEqual('vertical');
		});
		it('graph updated with the correct background', function(){
			expect(BarChart.getBackground()).toEqual('#F0F');
		});
		it('graph updated with the correct sortable', function(){
			expect(BarChart.getSortable()).toEqual(false);
		});
		it('graph updated with the correct barsGrouping', function(){
			expect(BarChart.getBarsGrouping()).toEqual('stacked');
		});
		it('graph updated with the correct flow', function(){
			expect(BarChart.getFlowList().length).toEqual(3);
		});
		
	});
	
	describe('addFlow', function(){

		var json = {
			'ID' : 	'flusso1'
		};
		var fJson = {
			'dataFormat' : 'int',
			'name' : 'flusso1',
			'flowColor' : '#F2F',
			'legendOnPoint' : 'flusso1'
		};
		var newflow;

		beforeEach(function(){
			newflow = new BarChartFlow(fJson);
			BarChart = new BarChart();
			BarChart = BarChart.addFlow(json.ID, newflow);
		});

		afterEach(function(){
			BarChart = null;
		});	

		it('graph addFlow called with the correct parameters', function(){
			expect(BarChart.getFlowList().length).toEqual(1);
		});

	});

	describe('inizializeData', function(){

		var data = [
			{
				'ID' : '1',
				'records' : [{ 'NorrisRecordID' : '234321', 'value' : [0,1]},{}]
			}
		];
		var newFlow;

		beforeEach(function(){
			BarChart = new BarChart();
			newFlow = new BarChartFlow();
			BarChart = BarChart.addFlow(data[0].ID, newFlow);
			BarChart = BarChart.initializeData(data);
			console.log(BarChart.getFlowList()[0].getData()[0].NorrisRecordID);
		});

		afterEach(function(){
			BarChart = null;
		});	

		it('BarChartFlow inizializeData called in the right way', function(){
			expect(BarChart.getFlowList()[0].getData().length).toEqual(2);
		});

	});

	describe('inPlaceUpdate', function(){

		var data = [
			{
				'ID' : '2',
				'records' : [{'NorrisRecordID' : 'record2', 'value' : [3,3] }]
			}
		];
		var data1 = 	{
			'ID' : '2',
			'NorrisRecordID' : 'record2',
			'value' : [4,4]
		};
		var newFlow;

		beforeEach(function(){
			BarChart = new BarChart();
			newFlow = new BarChartFlow({});
			BarChart = BarChart.addFlow(data[0].ID, newFlow);
			BarChart = BarChart.inPlaceUpdate(data1);
		});

		afterEach(function(){
			BarChart = null;
		});	

		it('BarChartFlow inPlaceUpdate called in the right way', function(){
			//expect(BarChart.parent.getFlowList()[0].getData()[0].value).toEqual([3,3]);
			expect(BarChart.getFlowList()[0].getData()[0].value).toEqual([4,4]);
		});
	});

});