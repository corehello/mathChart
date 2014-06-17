/*
	mathChart.js 
	author: corehello(corehello@gmail.com)
	data = 
	{
		range : [[0,1],[2,3]];
		data : [
		[[1,2],[2,3] ... ],
		[[3,4],[4,5] ... ],
		...
		];
	}
*/


var mathChart = {
	var xmlns="https://www.w3.org/2000/svg";
	var insertchart = function(canvas,data)
	{
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
		var paths=[];
		for(i=0; i<data.data.length; ++i)
		{
			if(data.data[i][0].length == 2)
			{
				var dataTrans = transferData2D(svg, data.range, data.data[i]);
				var dd = dataTrans.join(" ");
			}
			else
			{
				var dataTrans = transferData3D(svg, data.range, data.data[i]);
				var dd = dataTrans.join(" ");
				
			}
			path = document.createElementNS("xmlns","polyline");
			path.setAttribute("d", dd);
			path.setAttribute("stroke", data.color);
			path.setAttribute("stroke-width", data.width);
			paths.push(path);
		}
		return paths;
	};
	
	var transferData2D = function(svg, range, data)
	{
			
	}
	
	var transferData3D = function(svg, range, data)
	{
		
	}
}
