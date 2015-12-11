var Classes = {
    
    makeSpot: function(params){
    
        var Spot = {
        
            initialize: function(){
                this.color = randcolor();
                this.size = rfi(min,max);
                this.center = [rfi((this.size/2),w-(this.size/2)), rfi((this.size/2),h-(this.size/2))];
                this.hpos = this.center[0] + (this.size/2);
                this.vpos = this.center[1] + (this.size/2);
                this.opacity = rfi(2,9);
            },
            
            addToDom: function(){
                this.element = createADot(this.number, this.color, this.vpos, this.hpos, this.opacity, this.size);
            },
            
            findSortedPlace: function(){
                var gr = getgreen(this.element);
                tow = ( ((w-max)/255)*parseInt(gr[1]) );
                toh = ( ((h-max)/255)*parseInt(gr[0]) );
                todim = ( ((max-min)/2)*(parseInt(gr[2])/127) )+min;
                this.hpos = tow;
                this.vpos = toh;
                $(this.element).animate({marginLeft:tow+"px", marginTop:toh+"px", width:todim+"px", height:todim+"px"},1000);
            },
            
            sendSomewhere: function(){
                var taw = rfi(0,w-max);
                var tah = rfi(0,h-max);
                this.hpos = taw;
                this.vpos = tah;
                $(this.element).animate({marginLeft:taw+"px", marginTop:tah+"px"},1000);
            },
            
            drop: function(){
                $(this.element).animate({marginTop: ((h-this.size)+"px")}, (((h-this.vpos)/h)*2000));
                this.vpos = h-this.size;
            }
            
        };
        for (p in params) {Spot[p] = params[p];}
        return Spot;
    
    }
    
};

var running = false;
var magicOn = false;
var lang;


var chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var speed = 200;
var min = 15;
var max = 5*min;
var w = window.innerWidth;
var h = window.innerHeight;

var fr = {
	"ok":"D'accord.", 
	"lets":"Aimez-vous que les choses soient ordonn&eacute;es?",
	"magic":"Dans ce cas, aimez-vous la magie?",
	"y":"Oui",
	"n":"Non",
	};
var en = {
	"ok":"Okay.", 
	"lets":"Do you like to order things around you?",
	"magic":"Then, do you like magic tricks?",
	"y":"Yes",
	"n":"No",
	};
/*
var Navet = Backbone.Model.extend({
	initiate: function() {
		},
	data: []
	});
	
var navet = new Navet();

var Jardin = Backbone.View.extend({
	model: navet,
	
	template: _.template("<p><%= title %></p>"),
	
	initialize: function () { 
        _.bindAll(this, "render");
        this.render();
    	},
    
    render: function () {
        this.el.html( this.template( this.model.toJSON() ) );
        return this;
        }
	});

var jardin = new Jardin();
*/
var numb=0;
var Spots = [];

function update() 
	{
	if (document.getElementById("size")) {min = document.getElementById("size").value; max = 5*min;}
	w = window.innerWidth;
	h = window.innerHeight;
	}

function rfi(from,to)
	{
    return Math.floor(Math.random()*(to-from+1)+from);
	}

function over(obj, ar)
	{
	//var cols = ["none", document.getElementById(obj).style.backgroundColor];
	var siz = ["0px", "5px"];
	//document.getElementById(obj).style.borderColor = cols[ar];
	document.getElementById(obj).style.borderWidth = siz[ar];
	}

function randcolor() 
	{
	var out = "#";
	for (a=0;a<6;a++) {out += (""+(chars[rfi(0,15)])+"");}
	return out;
	}
	
function createADot(n, colo, mt, ml, op, si)
	{
	var spot = document.createElement("div");
	
	spot.id = "ci"+n;
	spot.className = "circle";
	spot.style.backgroundColor = colo;
	spot.style.marginTop = mt+"px";
	spot.style.marginLeft = ml+"px";
	spot.style.opacity = "0."+op;
	spot.style.height = si+"px";
	spot.style.width = si+"px";
	spot.onmouseover = function(){over("ci"+numb, 1);};
	spot.onmouseout = function(){over("ci"+numb, 0);};
	
	
	document.getElementById("cbox").appendChild(spot);
    return spot;
	}

function getgreen(elem) {var a = $(elem).css('background-color'); var b = a.substring(4, (a.length-1)); var c = b.split(', '); /*var d = (parseInt(c[1])/(parseInt(c[0])+1)); var e = (parseInt(c[1])/(parseInt(c[2])+1));*/ return c;}
function getred(elem) {var a = $(elem).css('background-color'); var b = a.substring(4, (a.length-1)); var c = b.split(', '); return (((parseInt(c[0])/(parseInt(c[1])+1)) + (parseInt(c[0])/(parseInt(c[2])+1)))/2);}
function getblue(elem) {return parseInt($(elem).css('background-color').substring(5));}

function checkspeed() {return speed;}

function setlang(language) {lang = language;}

//setTimeout(function() {createADot(numb, randcolor(), rfi(0,h-max), rfi(0,w-max), rfi(2,9), min);
//createADot(numb, randcolor(), rfi(0,h-max), rfi(0,w-max), rfi(2,9), max);}, 100);

setInterval(function() {
    if (running  && numb < 150) {
        var spd = Classes.makeSpot({"number": numb});
        spd.number = numb;
        spd.initialize();
        spd.addToDom();
        Spots.push(spd);
    }
    numb+=1;
    update();
}, checkspeed());

function dotSort(){
    /*
    for (b=0; b<numb; b++){
		shit = document.getElementById("ci"+b);
		//document.body.removeChild(shit);
		tow = ( ((w-max)/255)*parseInt(getgreen(shit)[1]) );
		toh = ( ((h-max)/255)*parseInt(getgreen(shit)[0]) );
		todim = ( ((max-min)/2)*(parseInt(getgreen(shit)[2])/127) )+min;
		$(shit).animate({marginLeft:tow+"px", marginTop:toh+"px", width:todim+"px", height:todim+"px"},1000);
    }
    */
    for (spc in Spots){
        Spots[spc].findSortedPlace();
    }
}

function randomSort(){
    /*
    for (b=0; b<numb; b++){
		shit = document.getElementById("ci"+b);
		//document.body.removeChild(shit);
		tow = ( ((w-max)/255)*parseInt(getgreen(shit)[1]) );
		toh = ( ((h-max)/255)*parseInt(getgreen(shit)[0]) );
		todim = ( ((max-min)/2)*(parseInt(getgreen(shit)[2])/127) )+min;
		$(shit).animate({marginLeft:rfi(0,w-max)+"px", marginTop:rfi(0,h-max)+"px"},1000);
    }
    */
    for (spa in Spots){
        Spots[spa].sendSomewhere();
    }
}

function drop() {
    /*
    for (b=0; b<numb; b++){
        shit = document.getElementById("ci"+b);
		$(shit).animate({marginTop: ((h-$(shit).height())+"px")}, (((h-parseInt($(shit).css("margin-top")))/h)*2000));
    }
    */
    //document.getElementById("welgamea").href = "javascript:stop();";
    for (spb in Spots){
        Spots[spb].drop();
    }
}

function stop() {
	running = false;
	dotSort();
    //document.getElementById("welgamea").href = "javascript:drop();";
	//createADot(0, "#8AE68A", 500, (w/2)-300, 0.8, 600);
}

function magic(){
    speed = 1000;
    if (magicOn == false) {
        dotSort();
        setInterval(function(){
            randomSort();
            setTimeout(function(){
                drop();
                setTimeout(function(){
                    dotSort();
                },1000);
            },1000);
        },4000);
    }
    magicOn = true;
}

setTimeout(function() {
	$("#welbox").animate({opacity:"0.9"},1000).promise().done(function() {
		running=true;
		setTimeout(function() {$("#welcon").animate({opacity:"0.9"},1000).promise().done(function() {
			setTimeout(function() {$("#welgame").animate({opacity:"0.9"},1000)}, 4000);
			});}, 2000);
		});
	}, 1000);
