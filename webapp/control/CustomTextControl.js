sap.ui.define([
    "sap/ui/core/Control"
], (Control) => {
    "use strict";
    return Control.extend("project1.control.CustomTextControl", {
        metadata : {
            properties: {
                "text": { type: "string", defaultValue: "Hello, World!" },
                "color": { type: "string", defaultValue: "black" }
            },

            aggregations: {
                "items": {
                     type: "sap.m.Text", multiple: true
                }
            },

            events: {
                "press": {}
            }

        },

        renderer(oRM, oControl) {
            oRM.openStart("div", oControl);
			oRM.addStyle("color", oControl.getColor());
			oRM.openEnd();
            oRM.writeEscaped(oControl.getText());
			oRM.close("div");

            // Render the aggregation 'items'
            var aItems = oControl.getItems();
            aItems.forEach(function(oItem) {
                oRM.renderControl(oItem);
            });
        },

        onclick(oEvent) {
            this.firePress();
        }
    });
});
