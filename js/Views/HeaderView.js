Classes.HeaderView = Backbone.View.extend({
    
    events: {
        "click .langswitch" : "switchLanguage",
        "click .navigator" : "navigate"
    },
    
    render: function(container){
        if (container) {container.html($(this.el).html(this.template(this.model.toJSON())));}
        else {$(this.el).html(this.template(this.model.toJSON()));}
        return this;
    },
    
    switchLanguage: function(event){
        console.log($(event.target).data("lang"));
        Tools.general.setLanguage($(event.target).data("lang"));
        Tools.general.changeLanguage();
    },
    
    navigate: function(event){
        var to = $(event.target).data("navi");
        //Tools.general.scrollElmVert(document.getElementById(to), 100);
        document.getElementById(to).scrollIntoView();
    }
    
});