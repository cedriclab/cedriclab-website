Classes.CVModel = Backbone.Model.extend({
    
    defaults: {
        "itshim" : {"FR" : "C'est lui", "EN" : "That's him"},
        "education": {
            "title": {"FR" : "Études", "EN" : "Education"},
            "icon" : "book",
            "subsections" : [
                {
                    "school" : {"FR" : "Université de Sherbrooke", "EN" : "University of Sherbrooke"},
                    "degree" : {"FR" : "Certificat - Économie appliquée", "EN" : "Certificate - Economics"},
                    "year" : {"FR" : "(En cours)", "EN" : "(Ongoing)"}
                },
                {
                    "school" : {"FR" : "Université de Montréal", "EN" : "University of Montreal"},
                    "degree" : {"FR" : "Baccalauréat - Communication et politique", "EN" : "B.Sc. - Communications and political science"},
                    "year" : {"FR" : "2013", "EN" : "2013"}
                },
                {
                    "school" : {"FR" : "Université Paul-Valéry - Montpellier III", "EN" : "Paul-Valery University - Montpellier III"},
                    "degree" : {"FR" : "L1 - Études classiques", "EN" : "L1 - Classical studies"},
                    "year" : {"FR" : "2009", "EN" : "2009"}
                }
            ]
        },
        
        "skills" : {
            "title": {"FR" : "Compétences", "EN" : "Skills"},
            "icon" : "code",
            "subsections" : [
                {
                    "title": {"FR" : "Interfaces épatantes", "EN" : "Sleek interfaces"},
                    "icon" : "desktop",
                    "subsections" : [
                        {"FR" : "HTML5, CSS3/Bootstrap", "EN" : "HTML5, CSS3/Bootstrap"},
                        {"FR" : "JavaScript/jQuery", "EN" : "JavaScript/jQuery"},
                        {"FR" : "BackboneJS/UnderscoreJS", "EN" : "BackboneJS/UnderscoreJS"}
                    ]
                },
                {
                    "title": {"FR" : "APIs et gestion de données", "EN" : "APIs and data management"},
                    "icon" : "cloud",
                    "subsections" : [
                        {"FR" : "Node.JS/Express, PHP", "EN" : "Node.JS/Express, PHP"},
                        {"FR" : "MySQL, PostgreSQL, expérience avec MongoDB", "EN" : "MySQL, PostgreSQL, some experience with MongoDB"},
                        {"FR" : "Facebook API, Google Drive API", "EN" : "Facebook API, Google Drive API"}
                    ]
                },
                {
                    "title": {"FR" : "Programmation orientée-objet", "EN" : "Object-oriented programming"},
                    "icon" : "terminal", 
                    "subsections" : [
                        {"FR" : "Python", "EN" : "Python"},
                        {"FR" : "Bases en Java et en C++", "EN" : "Some experience with Java and C++"}
                    ]
                }
            ]
        },
        
        "horrid" : {"FR" : "Cette couleur est affreuse!", "EN" : "This color is horrid!"}
    }
});