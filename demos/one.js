var childs = [];
function makeChild(node, level, childCount) {
      if (node.level == level) {
        node.type ="F";
        node.name = node.name + ".pdf";
        node.fileSize = (Math.floor(Math.random() * 10000) + 1000).toString();  
        return;
    }

    for (var index = 0; index < childCount; index++) {
         var _node = { type:"D" , "isplaceholder": "0","parent":node.index };
        Object.defineProperty( _node, 'level', {
        value:(node.level + 1),
        writable:true,
        configurable:true,
        enumerable:false // this is the default value, so it could be excluded
    	});
        _node.index = node.index + "." + (index+1);
	 _node.name = "name " + _node.index ;
        childs.push(_node);
        makeChild(_node, level, childCount);
    }
}

function generateJSON() {
	var node = { level: 0, name: "entry node" };
	var depth = 3;
	var index = "1"
	var count = 3;
	try {
		index = document.getElementById("index").value;
		depth = document.getElementById("depth").value;
        count = document.getElementById("count").value;
		node.index = index;
		childs = [];
		// childs.push(node);
		makeChild(node, depth, count);
		document.getElementById("output").innerText = JSON.stringify(childs);
		console.log(childs)
	} catch (e) {
		alert("something is not right");
	}
}

//
