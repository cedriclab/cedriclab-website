Classes.MapView = Backbone.View.extend({

    render: function(container){
        if (container) {container.html($(this.el).html(this.template(this.model.toJSON())));}
        else {$(this.el).html(this.template(this.model.toJSON()));}
        this.makeMap();
        return this;
    },
    
    makeMap: function(){
        var mapOptions = {
            center: new google.maps.LatLng(45.405680, -71.894833),
            zoom: 14
        };
        
        var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
        
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            title: 'Click to zoom'
        });
    }
    
});