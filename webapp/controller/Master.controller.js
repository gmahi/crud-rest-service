sap.ui.define([
	"sapui5/demo/restservice/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sapui5.demo.restservice.controller.Master", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit: function() {
			// nothing to do at the moment
			this._IDSorter = new sap.ui.model.Sorter("id", false);
			this._NameSorter = new sap.ui.model.Sorter("Name", false);

		},

		/**
		 * Event handler when a table item gets pressed
		 * @param {sap.ui.base.Event} oEvent the table selectionChange event
		 * @public
		 */
		onListPress: function(oEvent) {
			// The source is the list item that got pressed
			this._showObject(oEvent.getSource());
		},

		/**
		 * Sorts the products table after ID
		 * @function
		 */

		onSortID: function() {
			this._IDSorter.bDescending = !this._IDSorter.bDescending;
			this.byId("table").getBinding("items").sort(this._IDSorter);

		},

		/**
		 * Sorts the products table after name
		 * @function
		 */
		onSortName: function() {
			this._NameSorter.bDescending = !this._NameSorter.bDescending;
			this.byId("table").getBinding("items").sort(this._NameSorter);
		},

		/**
		 * Navigates back in the browser history, if the entry was created by this app.
		 * If not, it navigates to the Fiori Launchpad home page
		 *
		 * @public
		 */

		// TODO - we don't need FLP stuff...
		onNavBack: function() {
			// The history contains a previous entry
			window.history.go(-1);

		},

		onAddSupplier: function() {
			this.getRouter().navTo("edit");
		},

		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */

		/**
		 * Shows the selected item on the object page
		 * On phones a additional history entry is created
		 * @param {sap.m.ObjectListItem} oItem selected Item
		 * @private
		 */
		_showObject: function(oItem) {
			var oBindingContext = oItem.getBindingContext();
			this.getRouter().navTo("detail", {
				id: oBindingContext.getPath().substr(1)
			});
		}
	});

});