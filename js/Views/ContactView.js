Classes.ContactView = Backbone.View.extend({
    
    initialize: function(){
        this.bgcolor = "#FFFFFF";
        this.textcolor = Tools.color.blackOrWhite(this.bgcolor);
    },
    
    events: {
        "click #cvchangecolor" : "changeColor"
    },
    
    render: function(container){
        if (container) {container.html($(this.el).html(this.template(this.model.toJSON())));}
        else {$(this.el).html(this.template(this.model.toJSON()));}
        return this;
    },
    
    changeColor: function(event){
        this.bgcolor = Tools.color.randcolor();
        this.textcolor = Tools.color.blackOrWhite(this.bgcolor);
        this.render();
    }
    
});