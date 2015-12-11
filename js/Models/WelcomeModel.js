Classes.WelcomeModel = Backbone.Model.extend({
    
    defaults: {
        "random" : {"FR" : "Aimez-vous la magie?", "EN" : "Do you like magic?"},
        "magic" : {"FR" : "Aimez-vous la magie?", "EN" : "Do you like magic?"},
        "sorted" : {"FR" : "Voilà qui est arrangé.", "EN" : "We've sorted that out."},
        "enjoy" : {"FR" : "Bon spectacle!", "EN" : "Enjoy!"},
        "welcome" : {"FR" : "[Bienvenue!]", "EN" : "You're [Welcome!]"},
        "yes" : {"FR" : "Oui", "EN" : "Yes"},
        "no" : {"FR" : "Non", "EN" : "No"},
        "ty" : {"FR" : "Merci", "EN" : "Thank you"},
        "a" : {"FR" : "", "EN" : ""},
        "ohno" : {"FR" : "D'accord, j'aime la magie!", "EN" : "OK, I like magic!"}
    }
    
});