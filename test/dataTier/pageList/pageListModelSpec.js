/*jshint node: true, -W106 */
'use strict';

/*
* Name : pageListModelSpec.js
* Module : UnitTest
* Location : /test/dataTier
*
* History :
* 
* Version   Date         Programmer         Description
* =========================================================
* 0.0.1     2015-05-11   Filippo Rampado    Initial code
* =========================================================
*/

var PageListModel = require('../../../lib/dataTier/pageList/pageListModel.js');
//var assert = require('chai').assert;
var assert = require('assert');

describe('PageListModel', function() {
    console.dir(new PageListModel('pagina'));
    console.dir(new PageListModel(12));
    console.dir(new PageListModel(' '));
    it('returns null when passed a non-valid string', function() {
        var a = new PageListModel(12);
        assert.instanceOf(a, PageListModel, 'a is an instance of PageListModel');
        var b = new PageListModel(' ');
        assert.instanceOf(b, PageListModel, 'b is an instance of PageListModel');
    });

    var pageList1 = new PageListModel('name');
    console.dir(pageList1);
    it('create object with the right name', function() {
        assert.equal(pageList1._name, 'name');
    });

    function PageModel(prop, data){
        this.getData=function(){
            return data;
        };
        this.getProperties=function(){
            return prop;
        };
    }

    var page1=new PageModel('testData1', 'testProp1');
    var page2=new PageModel('testData2', 'testProp2');

    describe('#addPage', function() {
        it('returns true and pushes the page if page is valid', function() {
            assert.equal(pageList1.addPage(page1), true);
            assert.equal(pageList1._pages.length, 1);
        });
        it('returns false if page is invalid', function() {
            assert.equal(pageList1.addPage(2), false);
        });
    });

    describe('#getName', function() {
        it('returns the right name', function() {
            assert.equal(pageList1.getName(), 'name');
        });
    });

    describe('#getData', function() {
        var pageList2=new PageListModel('name');
        it('returns empty json if it has no pages', function() {
            assert.equal(pageList2.getData().length, 0);
        });
        console.dir(pageList2);
        console.dir(page2);
        pageList2.addPage(page1);
        it('returns json with one page', function() {
            var data=pageList2.getData();
            assert.equal(data.length, 1);
            assert.equal(data[0].properties, 'testProd1');
            assert.equal(data[0].data, 'testData1');
        });
        pageList2.addPage(page2);
        it('returns json with two pages', function() {
            var data=pageList2.getData();
            assert.equal(data.length, 2);
            assert.equal(data[0].properties, 'testProd1');
            assert.equal(data[0].data, 'testData1');
            assert.equal(data[1].properties, 'testProd2');
            assert.equal(data[1].data, 'testData2');
        });
    });
    
});