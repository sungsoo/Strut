
		define(["vendor/Handlebars"], function(Handlebars) {
			return {
		
"PictureGrabber": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var self=this;  return "<div class=\"modal-header\">	<button class=\"close\" data-dismiss=\"modal\">×</button>	<h3>Insert Picture</h3></div><div class=\"modal-body\">	<h4>URL:</h4><input type=\"text\" name=\"imageUrl\"></input>	<h4>Preview:</h4>	<ul class=\"thumbnails\">		<li class=\"span4\">			<div class=\"thumbnail\">				<img src=\"\" class=\"preview\" width=\"360\" height\"268\"></img>			</div>		</li>	</ul></div><div class=\"modal-footer\">	<a href=\"#\" class=\"btn btn-primary ok\">OK</a>	<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancel</a></div>";})
}});