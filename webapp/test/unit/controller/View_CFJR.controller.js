/*global QUnit*/

sap.ui.define([
	"zgcfioriajrpp/zgcfioriajrpp/controller/View_CFJR.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View_CFJR Controller");

	QUnit.test("I should test the View_CFJR controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
