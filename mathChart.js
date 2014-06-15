/*
	mathChart.js 
	author: corehello(corehello@gmail.com)
	data = 
	{
		range : [[0,1],[2,3]];
		data : [[1,2],[2,3],...];
	}
*/


var mathChart = {
	var insertchart = function(canvas,data)
	{
		var xmlns="https://www.w3.org/2000/svg";
		var svg = document.createElementNS(xmlns,"svg");
		svg.height = canvas.clientHeight;
		svg.width = canvas.clientWidth;
		var path = generatePath(svg,data);
		for(var i=0; i<path.length; ++i)
		{
			svg.appendChild(path[i]);
		}
		canvas.appendChild(svg);
	};
	
	var generatePath = function(svg, data)
	{
		var paths=[]
		for(i=0; i<data.data.length; ++i)
		{
			var dd = ""
			if(i == 0)
			{
				dd = dd + "M "+ data.data[i].join(" ");
			}
			else
			{
				dd = dd + "L "+ data.data[i].join(" ");
			}
			path = document.createElementNS("xmlns","path");
			path.setAttribute("d", dd);
			path.setAttribute("stroke", data.color);
			path.setAttribute("stroke-width", data.width);
			paths.push(path);
		}
		return paths;
	}
}
