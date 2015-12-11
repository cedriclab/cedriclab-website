Classes.PortfolioModel = Backbone.Model.extend({

    defaults: {
        "projects" : [
            {
                "title" : "ACET",
                "link" : "http://acetaminophene.accelerateur.ca",
                "date" : "2014",
                "description" : {
                    "FR" : "Membre de l'équipe de développeurs et chargé de projet pour Acetaminophene, le logiciel de gestion en ligne de l'<a href='http://acceletateur.ca'>ACET</a>, l'incubateur d'entreprises technologiques de Sherbrooke.",
                    "EN" : "Part of the developer team and account manager for Acetaminophene, the online management software for <a href='http://acceletateur.ca'>ACET</a>, Sherbrooke's tech startup hub."
                }
            },
            {
                "title" : "SAGAS",
                "link" : "http://clients.sagas.ca:8080",
                "date" : "2014",
                "description" : {
                    "FR" : "Développeur full-stack sur SAGAS v2, l'application de gestion en ligne pour les salles de spectacle développée par <a href='http://www.reseaucentre.qc.ca'>Réseau Centre</a>.",
                    "EN" : "Full-stack developer on SAGAS v2, an online management application for show venues developed by <a href='http://www.reseaucentre.qc.ca'>Reseau Centre</a>."
                }
            },
            {
                "title" : "Réseau Centre",
                "link" : "http://www.reseaucentre.qc.ca",
                "date" : "2013",
                "description" : {
                    "FR" : "Développeur full-stack sur le nouveau site web de Réseau Centre, incluant l'addition d'une base de données et d'utilitaires en ligne.",
                    "EN" : "Full-stack developer on Réseau Centre's new website, which includes a new database and online utilities."
                }
            }
        ]
    }
    
});