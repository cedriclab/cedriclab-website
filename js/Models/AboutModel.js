Classes.AboutModel = Backbone.Model.extend({
    
    defaults: {
        "about" : {"FR" : "À propos", "EN" : "About"},
        "head" : {
            "FR" : "CedLabProd, Cedric Laberge Productions, se spécialise dans la conception et l'amélioration d'applications et de logiciels en ligne, mû par une vision:", 
            "EN" : "CedLabProd, Cedric Laberge Productions, mostly works on designing and improving online applications and software, with one idea in mind:"
        },
        "tag" : {
            "FR" : "Joindre l'utile à l'élégant", 
            "EN" : "Making the useful beautiful"
        },
        "par1" : {
            "FR" : "Misant sur une approche à la fois profondément cartésienne et un tantinet eccentrique, Cedric se plaît particulièrement à redonner de la texture à vos données.", 
            "EN" : "Both the rational and creative type, Cedric particularly enjoys giving back its texture to your data."
        },
        "par2" : {
            "FR" : "Que vous ayez un projet complet à réaliser ou que vous cherchiez une nouvelle addition à votre équipe de développeurs, faites signe!", 
            "EN" : "Whether you have a new project in mind or are looking to add a new player to your developer team, come and say hi!"
        }
    }
    
});