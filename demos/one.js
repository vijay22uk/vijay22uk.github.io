var childs = [];
function makeChild(node, level, childCount) {
    if (node.level == level) return;

    for (var index = 0; index < childCount; index++) {
        var _node = { level: (node.level + 1) };
        _node.index = node.index + "." + (index+1);
		_node.name = "Node with index --> " + _node.index;
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
		childs.push(node);
		makeChild(node, depth, count);
		document.getElementById("output").innerText = JSON.stringify(childs);
		console.log(childs)
	} catch (e) {
		alert("something is not right");
	}
}

//