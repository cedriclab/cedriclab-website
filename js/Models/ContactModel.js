Classes.ContactModel = Backbone.Model.extend({

    defaults: {
        "contact": {
            "title": {"FR" : "Pour joindre Cedric", "EN" : "To contact Cedric"},
            "subsections" : [
                {
                    "title" : {"FR" : "Où est Cedric?", "EN" : "Where's Cedric?"},
                    "icon" : "map-marker",
                    "value" : "Sherbrooke, QC"
                },
                {
                    "title" : {"FR" : "Courriel", "EN" : "E-Mail"},
                    "icon" : "envelope",
                    "value" : "cedric.levlab/[a]/gmail.com"
                },
                {
                    "title" : {"FR" : "Téléphone", "EN" : "Phone"},
                    "icon" : "phone",
                    "value" : "819-578-1128"
                }
            ]
        },
        
        "social" : {"FR" : "Médias sociaux", "EN" : "Social"},
        "horrid" : {"FR" : "Cette couleur est affeuse!", "EN" : "This color is horrid!"}
    }

});