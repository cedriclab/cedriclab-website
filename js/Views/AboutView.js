Classes.AboutView = Backbone.View.extend({

    render: function(container){
        if (container) {container.html($(this.el).html(this.template(this.model.toJSON())));}
        else {$(this.el).html(this.template(this.model.toJSON()));}
        return this;
    }
    
});