var height = 200;
var width = 500;
var margin = {left: 50,right:50,top:40,bottom:0};

var tree = d3.tree().size([width,height]);

var svg = d3.select('body').append('svg').attr('width','100%').attr('height','100%');
var chartGroup = svg.append('g').attr('transform','translate('+margin.left+','+margin.top+')');

d3.json('machineLearning.json').get(function(error,data){

    console.log(data[0]);
    var root = d3.hierarchy(data[0]);
    tree(root);
    chartGroup.selectAll("circle")
        .data(root.descendants())
        .enter().append("circle")
        .attr("cx",function(d){ return d.x; })
        .attr("cy",function(d){ return d.y; })
        .attr("r","5");

    chartGroup.selectAll("path")
        .data(root.descendants().slice(1))
        .enter().append("path")
        .attr("class","link")
        .attr("d",function(d){ return "M"+d.x+","+d.y+"C"+d.x+","+(d.parent.y+d.y)/2+" "+d.parent.x+","+(d.y+d.parent.y)/2+" "+d.parent.x+","+d.parent.y; });




});
