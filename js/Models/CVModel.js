Classes.CVModel = Backbone.Model.extend({
    
    defaults: {
        "itshim" : {"FR" : "C'est lui", "EN" : "That's him"},
        "education": {
            "title": {"FR" : "Études", "EN" : "Education"},
            "icon" : "book",
            "subsections" : [
                {
                    "school" : {"FR" : "Université de Sherbrooke", "EN" : "University of Sherbrooke"},
                    "degree" : {"FR" : "M.Sc. - Économie", "EN" : "M.Sc. - Economics"},
                    "year" : {"FR" : "(En cours)", "EN" : "(Ongoing)"}
                },
                {
                    "school" : {"FR" : "Université de Montréal", "EN" : "University of Montreal"},
                    "degree" : {"FR" : "B.Sc. - Communication et politique", "EN" : "B.Sc. - Communications and political science"},
                    "year" : {"FR" : "2013", "EN" : "2013"}
                }/*,
                {
                    "school" : {"FR" : "Université Paul-Valéry - Montpellier III", "EN" : "Paul-Valery University - Montpellier III"},
                    "degree" : {"FR" : "L1 - Études classiques", "EN" : "L1 - Classical studies"},
                    "year" : {"FR" : "2009", "EN" : "2009"}
                }*/
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
                        {"FR" : "HTML5, CSS3", "EN" : "HTML5, CSS3"},
                        {"FR" : "JavaScript/jQuery", "EN" : "JavaScript/jQuery"},
                        {"FR" : "Architecture CMV (BackboneJS)", "EN" : "CMV architecture (BackboneJS)"}
                    ]
                },
                {
                    "title": {"FR" : "APIs et gestion de données", "EN" : "APIs and data management"},
                    "icon" : "cloud",
                    "subsections" : [
                        {"FR" : "Node.js, PHP, Socket.io", "EN" : "Node.js, PHP, Socket.io"},
                        {"FR" : "MongoDB, MySQL, PostgreSQL", "EN" : "MongoDB, MySQL, PostgreSQL"},
                        {"FR" : "Satistiques : R, Stats", "EN" : "Statistics : R, Stata"}
                    ]
                },
                {
                    "title": {"FR" : "Programmation orientée-objet", "EN" : "Object-oriented programming"},
                    "icon" : "terminal", 
                    "subsections" : [
                        {"FR" : "Python", "EN" : "Python"},
                        {"FR" : "Java", "EN" : "Java"},
						{"FR" : "C++", "EN" : "C++"}
                    ]
                }
            ]
        },
        
        "horrid" : {"FR" : "Cette couleur est affreuse!", "EN" : "This color is horrid!"}
    }
});