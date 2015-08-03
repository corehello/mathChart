/*
	mathChart.js
	author: corehello <corehello@gmail.com>
	argument:
	data =
	{
		range : [[0,1],[2,3]];
		color : "black";
		data : [
		[[1,2],[2,3] ... ],
		[[3,4],[4,5] ... ],
		...
		];
	}
*/


var mathChart = {
	xmlns : "http://www.w3.org/2000/svg",

	insertChart : function(canvas,data)
	{
		var svg = document.createElementNS(this.xmlns,"svg");
		svg.setAttribute("height", canvas.clientHeight);
		svg.setAttribute("width", canvas.clientWidth);
		svg.setAttribute("xmlns:svg", this.xmlns);
		svg.setAttribute("xmlns", this.xmlns);

		var path = this.generatePath(svg,data);
		for(var i=0; i<path.length; ++i)
		{
			svg.appendChild(path[i]);
		}
		canvas.appendChild(svg);
	},

	generatePath : function(svg, data)
	{
		var paths=[];
		var dataTrans;
		var dd;
		for(var i=0; i<data.data.length; ++i)
		{
			if(data.data[i][0].length === 2)
			{
				dataTrans = this.transferData2D(svg, data.range, data.data[i]);
				dd = dataTrans.join(" ");
			}
			else
			{
				dataTrans = this.transferData3D(svg, data.range, data.data[i]);
				dd = dataTrans.join(" ");
			}
			var path = document.createElementNS(this.xmlns,"polyline");
			path.setAttribute("points", dd);
			path.setAttribute("stroke", data.color);
			path.setAttribute("stroke-width", data.width);
			path.setAttribute("fill", "none");
			paths.push(path);
		}
		return paths;
	},

  	transform2: function(data, tr_matrix)
	{
		var result=[];
		for(var i=0; i<data.length; i++){
			result[i] = [
					data[i][0]*tr_matrix[0][0]+data[i][1]*tr_matrix[1][0],
					data[i][0]*tr_matrix[0][1]+data[i][1]*tr_matrix[1][1]
			];
		}
		return result;
	},

	translation2: function(data, trans)
	{
		var result = [];
		for(var i=0; i< data.length; i++){
			result[i] = [data[i][0]+trans[0], data[i][1]+trans[1]];
		}
		return result;
	},

	transferData2D : function(svg, range, data)
	{
	    //return this.adaptRange(svg.width, svg.height, range, data);
			//console.log(data);
		return this.translation2(
			this.transform2(
				data,
				[[svg.width.baseVal.value/data.length,0],[0,-300]]
			),
			[0, svg.height.baseVal.value]
		);
	},

	transferData3D : function(svg, range, data)
	{
	    return this.adaptRange(svg.width, svg.height, range, data);
	},
	test: function(){
		return "this is just a test";
	},

	// generateData
	generateData: function(func)
	{
		var result=[];
		for(var i=0; i<300;i++)
		{
			result[i] = [i,func(i/50)];
		}
		return result;
	}
};

mathChart.test();
