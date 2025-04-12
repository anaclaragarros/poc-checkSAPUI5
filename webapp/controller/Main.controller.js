sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
  "use strict";
  return Controller.extend("POC-CHECKSAP.controller.Main", {
    onInit: function() {
      var oModel = new JSONModel({ tasks: [] });
      this.getView().setModel(oModel, "tasks");
      this._addButtonStyle();
      this._loadTasks();
    },

    _addButtonStyle: function() {
      var style = document.createElement("style");
      style.textContent = `
        .detailsButton {
          background-color: #e6f2f9 !important;
          color: #0A7C8E !important;
          border: 1px solid #d1e8f5 !important;
        }
      `;
      document.head.appendChild(style);
    },

    _loadTasks: function() {
      var oModel = this.getView().getModel("tasks");
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(r => r.json())
        .then(data => {
          oModel.setProperty("/tasks", data);
        })
        .catch(e => MessageToast.show("Erro ao carregar: " + e.message));
    },

    onSearch: function(oEvent) {
      var s = (oEvent.getParameter("query") || oEvent.getParameter("newValue") || "").toLowerCase();
      var oModel = this.getView().getModel("tasks");
      var aAll = oModel.getProperty("/tasks");
      oModel.setProperty("/tasks", aAll.filter(t => t.title.toLowerCase().includes(s)));
    },

    onShowDetails: function(oEvent) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      var oItem = oEvent.getSource().getBindingContext("tasks");
      var sPath = oItem.getPath();
      var aPathParts = sPath.split("/");
      var sId = aPathParts[aPathParts.length - 1];

      oRouter.navTo("detail", { id: sId }); 
    }
  });
});
