sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function(Controller, UIComponent, JSONModel) {
  "use strict";

  return Controller.extend("POC-CHECKSAP.controller.Detail", {
    onInit: function() {
      var oRouter = UIComponent.getRouterFor(this);
      oRouter.getRoute("detail").attachPatternMatched(this._onMatched, this);
    },

    _onMatched: async function(oEvent) {
      var sId = parseInt(oEvent.getParameter("arguments").id) + 1;
      var response = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then(r => r.json())
      .catch(e => MessageToast.show("Erro ao carregar: " + e.message));
      var oSelectedTask = response.find(t => t.id === sId);
      const oModel = new JSONModel({
        id: oSelectedTask.id,
        userId: oSelectedTask.userId,
        title: oSelectedTask.title,
        completed: oSelectedTask.completed,
      });
      this.getView().setModel(oModel);
    },

    onNavBack: function() {
      UIComponent.getRouterFor(this).navTo("main");
    }
  });
});
