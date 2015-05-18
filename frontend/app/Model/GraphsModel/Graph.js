/*jshint node: true */
'use strict';

/*
* Name :  Graph.js
* Module : FrontEnd::Model::GraphsModel
* Location : /frontend/app/Model/GrapshModel
*
* History :
* Version       Date        Programmer                  Description
* =================================================================================================
* 0.1.4			2015-05-15	Francesco Rossetto			Various fix
*
* 0.1.3			2015-05-14	Maria Giovanna Chinellato	Add method getFlowList
*
* 0.1.3			2015-05-14	Francesco Rossetto			Fix constructor
*
* 0.1.2			2015-05-13	Francesco Rossetto			Fix constructor 
*
* 0.1.1			2015-05-12	Maria Giovanna Chinellato	Fix attributes
*
* 0.1.0         2015-05-12  Francesco Rossetto   		Add all attributes and all methods
*
* 0.0.1         2015-05-12  Francesco Rossetto			Initial code    
* =================================================================================================
*
*/

angular.module('app')
.factory('Graph', ['Flow', 'Legend', function(Flow, Legend){

	var flowList = [];
	var title = null;
	var height = null;
	var width = null;
	var legend = null;
	var enabledLegend = false;
	var horizontalGrid = true;
	var verticalGrid = true;
	var url = null;

	function Graph(info){
		//flowList.id = 'banana';
		if (info !== undefined) {
			if (info.title !== undefined) {
				title = info.title;
			}
			if (info.url !== undefined) {
				url = info.url;
			}
		}
	}

	Graph.prototype = {

		updateParameters : function(info) { //abstract
			if (info !== undefined) {
				if (info.title !== undefined) {
					title = info.title;
				}
				if (info.height !== undefined) {
					height = info.height;
				}
				if (info.width !== undefined) {
					width = info.width;
				}
				if (info.enabledLegend !== undefined && info.enabledLegend !== null) {
					enabledLegend = info.enabledLegend;
					if (enabledLegend && info.legend) {
						legend = new Legend(info.legend);
					}
				}
				if (info.horizontalGrid !== null) {
					horizontalGrid = info.horizontalGrid;
				}
				if (info.verticalGrid !== null) {
					verticalGrid = info.verticalGrid;
				}
			}
			return this;
		},
		addFlow : function(newId, newFlow) { //abstract

			var filteredFlows = flowList.filter(function(newId) {return newId === flowList.id;});
		    if(filteredFlows.length === 0) {
		        flowList.push({ id: newId, flow: newFlow});
    		}
    		// error
    		return this;
		},
		deleteFlow : function(flowID) {

    		var index;
    		for (var i = 0; i<flowList.length; i++){
    			if (flowList[i].id === flowID){
    				index = i;
    				return ;
    			}
    		}
    		delete flowList[index];
			
			return this;
		},
		
		getTitle : function() {
			return title;
		},
		getHeight : function() {
			return height;
		},
		getWidth : function() {
			return width;
		},
		getLegend : function() {
			if (enabledLegend) {
				return legend;
			} else {
				return null;
			}
		},
		getHGrid : function() {
			return horizontalGrid;
		},
		getVGrid : function() {
			return verticalGrid;
		},
		getUrl : function() {
			return url;
		},
		getFlowList : function() {
			return flowList;
		}
	};
	
	return( Graph );
}]);