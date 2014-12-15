/*
	mathChart.js 
	author: corehello <corehello@gmail.com>
	argument:
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
	xmlns : "https://www.w3.org/2000/svg",
	insertChart : function(canvas,data)
	{
		var svg = document.createElementNS(this.xmlns,"svg");
		svg.height = canvas.clientHeight;
		svg.width = canvas.clientWidth;
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
		for(i=0; i<data.data.length; ++i)
		{
			if(data.data[i][0].length == 2)
			{
				var dataTrans = this.transferData2D(svg, data.range, data.data[i]);
				var dd = dataTrans.join(" ");
			}
			else
			{
				var dataTrans = this.transferData3D(svg, data.range, data.data[i]);
				var dd = dataTrans.join(" ");
				
			}
			path = document.createElementNS("xmlns","polyline");
			path.setAttribute("d", dd);
			path.setAttribute("stroke", data.color);
			path.setAttribute("stroke-width", data.width);
			paths.push(path);
		}
		return paths;
	},
	
    adaptRange : function(x,y,range, data)
    {
        if (range.length == 0)
        {
            var r_x = [];
            var r_y = [];
            for (var i=0;i<data.length; ++i)
            {
                for (var j=0; j<data[0].length; ++i)
                {
                    r_x.push(data[i][j][0]);
                    r_y.push(data[i][j][1]);
                }
            }
            r_x.sort(function(a,b){return a-b});
            r_y.sort(function(a,b){return a-b});
            var rr =  [[r_x[0],r_x[r_x.length]],[r_y[0],r_y[r_y.length*3/2]]];
        }
        else
        {
            var rr =  range;
        }
        return rr;

    },

	transferData2D : function(svg, range, data)
	{
	    range_r = this.adaptRange(svg.width, svg.height, range, data);
        
	},
	
	transferData3D : function(svg, range, data)
	{
	    range_r = this.adaptRange(svg.width, svg.height, range, data);
	}
}
