Tools.color = {
    
    chars: ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],
    
    randcolor: function() {
	   var out = "#";
	   for (a=0;a<6;a++) {
           out += (""+(this.chars[Tools.mathsAndRandom.rfi(0,15)])+"");
       }
	   return out;
	},
    
    getgreen: function(elem) {
        var a = $(elem).css('background-color'); 
        var b = a.substring(4, (a.length-1)); 
        var c = b.split(', '); 
        /*
        var d = (parseInt(c[1])/(parseInt(c[0])+1)); 
        var e = (parseInt(c[1])/(parseInt(c[2])+1));
        */ 
        return c;
    },
    
    getred: function(elem) {
        var a = $(elem).css('background-color'); 
        var b = a.substring(4, (a.length-1)); 
        var c = b.split(', '); 
        return (((parseInt(c[0])/(parseInt(c[1])+1)) + (parseInt(c[0])/(parseInt(c[2])+1)))/2);
    },
    
    getblue: function(elem) {
        return parseInt($(elem).css('background-color').substring(5));
    },
    
    getInverse: function(col){
        return "#ffffff";
    },
    
    blackOrWhite: function(col){
        var rgb = this.hexToRgb(col);
        if (rgb.r+rgb.g+rgb.b > 500) {return "#000000";}
        return "#FFFFFF";
    },
    
    hexToRgb: function(hex) {
        var result = /^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    
};