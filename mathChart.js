var mathChart = {
	var insertchart = function(canvas,data)
	{
		var xmlns="https://www.w3.org/2000/svg"
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
	
	var generatePath(svg, data)
	{
		
	}
}
