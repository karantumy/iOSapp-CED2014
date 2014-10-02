var MyExtensionJavaScriptClass = function() {};

MyExtensionJavaScriptClass.prototype = {
	run: function(arguments) {
		arguments.completionFunction({"baseURI": document.baseURI, "selection": window.getSelection().toString()});
	}
};

var ExtensionPreprocessingJS = new MyExtensionJavaScriptClass;
