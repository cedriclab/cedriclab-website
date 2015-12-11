Tools.general = {
    
    min: 15,
    
    max: 75,
    
    language: "FR",
    
    w: function(){
        //return window.innerWidth;
        return $("#magicplace").width();
    },
    
    h: function(){
        //return window.innerHeight;
        return $("#magicplace").height();
    },
    
    startAll: function(){
        console.log("ALLO");
        window.headerView = new Classes.HeaderView({model: new Classes.HeaderModel()});
        headerView.render($("#header-box"));
        window.generalView = new Classes.GeneralView({model: new Classes.GeneralModel()});
        generalView.render($("#content-box"));
        window.welcomeView = new Classes.WelcomeView({model: new Classes.WelcomeModel()});
        welcomeView.render($("#welcome"));
        window.aboutView = new Classes.AboutView({model: new Classes.AboutModel()});
        aboutView.render($("#about"));
        window.cvView = new Classes.CVView({model: new Classes.CVModel()});
        cvView.render($("#cv"));
        window.portfolioView = new Classes.PortfolioView({model: new Classes.PortfolioModel()});
        portfolioView.render($("#portfolio"));
        window.mapView = new Classes.MapView({model: new Classes.MapModel()});
        mapView.render($("#map"));
        window.contactView = new Classes.ContactView({model: new Classes.ContactModel()});
        contactView.render($("#contact"));
        welcomeView.addBalls(document.getElementById("magicplace"));
    },
    
    loadTemplates: function(callback){
        
        var that = this;
        var templates = ["CV", "Portfolio", "Contact", "Header", "Welcome", "Map", "About", "General"];
        
        
        var cb = _.after(templates.length, callback);
        
        _.each(templates, function(temp){
            $.ajax({
                method: "GET",
                url: "/templates/"+temp+".html",
                success: function(a,b,c){
                    Classes[(temp+"View")].prototype.template = _.template(a);
                    cb();
                },
                error: function(a,b,c){
                    console.log(a);
                    console.log(b);
                    console.log(c);
                    cb();
                }
            });
        
        });
        
    },
    
    getCurrentLanguage: function(){
        return this.language;
    },
    
    setLanguage: function(l){
        this.language = l;
    },
    
    scrollElmVert: function(el,num) { // to scroll up use a negative number
        var re=/html$/i;
        while(!re.test(el.tagName) && (1 > el.scrollTop)) el=el.parentNode;
        if(0 < el.scrollTop) el.scrollTop += num;
    },
    
    changeLanguage: function(){
        welcomeView.changeOwnLang();
        headerView.render();
        aboutView.render();
        cvView.render();
        portfolioView.render();
        contactView.render();
    }
    
};