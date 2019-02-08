// Lokendra has created for RORY's work

angular.module("myApp", [])
  .controller("Ctrl", function ($scope) {
    var vm = this;
    
    vm.floor = [
       { id: "C1", path1: "M171.687,136.686 L171.687,168.388 L211.136,168.388 L211.136,136.686 L171.687,136.686 z", x:0, y:0},
      { id: "C2", path1: "M211.136,136.686 L211.136,168.388 L250.585,168.388 L250.585,136.686 L211.136,136.686 z", x:0, y:0},
      { id: "C3", path1: "M250.298,136.84 L250.298,168.543 L289.747,168.543 L289.747,136.84 L250.298,136.84 z", x:0, y:0},
      { id: "C4", path1: "M289.747,136.84 L289.747,168.543 L330.465,168.543 L330.465,136.84 L289.747,136.84 z", x:0, y:0},
      { id: "C5", path1: "M382.456,157.769 L350.754,157.769 L350.754,197.218 L382.456,197.218 L382.456,157.769 z", x:0, y:0},
      { id: "C6", path1: "M382.456,197.218 L350.754,197.218 L350.754,236.667 L382.456,236.667 L382.456,197.218 z", x:0, y:0},
      { id: "A1", path1: "M392.753,531.135 L392.753,562.837 L432.202,562.837 L432.202,531.135 L392.753,531.135 z", x:0, y:0},
      { id: "A2", path1: "M432.202,531.135 L432.202,562.837 L471.651,562.837 L471.651,531.135 L432.202,531.135 z", x:0, y:0},
      { id: "A3", path1: "M476.055,531.134 L476.055,562.836 L515.504,562.836 L515.504,531.134 L476.055,531.134 z",  x:0, y:0},
      { id: "A4", path1: "M515.504,531.134 L515.504,562.836 L556.223,562.836 L556.223,531.134 L515.504,531.134 z",  x:0, y:0},
      { id: "A5", path1: "M556.223,531.134 L556.223,562.836 L595.672,562.836 L595.672,531.134 L556.223,531.134 z",  x:0, y:0},
      { id: "A6", path1: "M595.672,531.134 L595.672,562.836 L635.121,562.836 L635.121,531.134 L595.672,531.134 z",  x:0, y:0},
      { id: "B1", path1: "M261.453,524.191 L293.155,524.191 L293.155,484.742 L261.453,484.742 L261.453,524.191 z",  x:0, y:0},
      { id: "B2", path1: "M261.453,484.742 L293.155,484.742 L293.155,444.024 L261.453,444.024 L261.453,484.742 z", x:0, y:0},
      { id: "B3", path1: "M261.453,444.024 L293.155,444.024 L293.155,404.575 L261.453,404.575 L261.453,444.024 z",  x:0, y:0},
      { id: "B4", path1: "M261.453,404.575 L293.155,404.575 L293.155,365.126 L261.453,365.126 L261.453,404.575 z",  x:0, y:0},
      { id: "B5", path1: "M259.585,348.534 L291.287,348.534 L291.287,309.085 L259.585,309.085 L259.585,348.534 z",  x:0, y:0},
      { id: "B6", path1: "M259.585,309.085 L291.287,309.085 L291.287,269.636 L259.585,269.636 L259.585,309.085 z",  x:0, y:0},
      { id: "1", path1: "M848.222,767.665 L911.754,767.665 L911.754,683.371 L848.222,683.371 L848.222,767.665 z", x:0, y:0},
      { id: "2", path1: "M734.757,766.995 L798.289,766.995 L798.289,682.701 L734.757,682.701 L734.757,766.995 z",  x:0, y:0},
      { id: "3", path1: "M621.139,766.995 L684.671,766.995 L684.671,682.701 L621.139,682.701 L621.139,766.995 z",  x:0, y:0},
      { id: "4A", path1: "M508.253,767.186 L571.784,767.186 L571.784,682.892 L508.253,682.892 L508.253,767.186 z",  x:0, y:0},
      { id: "4B", path1: "M924.612,575.889 L988.144,575.889 L988.144,491.595 L924.612,491.595 L924.612,575.889 z",  x:0, y:0},
      { id: "5", path1: "M923.373,434.55 L986.905,434.55 L986.905,350.256 L923.373,350.256 L923.373,434.55 z",  x:0, y:0},
      { id: "6", path1: "M810.619,434.55 L874.151,434.55 L874.151,350.256 L810.619,350.256 L810.619,434.55 z",  x:0, y:0},
      { id: "7", path1: "M697.153,434.55 L760.685,434.55 L760.685,350.256 L697.153,350.256 L697.153,434.55 z",  x:0, y:0},
      { id: "8", path1: "M585.366,434.55 L648.898,434.55 L648.898,350.256 L585.366,350.256 L585.366,434.55 z", x:0, y:0},
      { id: "9", path1: "M923.616,253.94 L987.148,253.94 L987.148,169.647 L923.616,169.647 L923.616,253.94 z",  x:0, y:0},
      { id: "10", path1: "M810.621,253.94 L874.153,253.94 L874.153,169.647 L810.621,169.647 L810.621,253.94 z",  x:0, y:0},
      { id: "11", path1: "M601.033,209.262 L664.564,209.262 L664.564,124.968 L601.033,124.968 L601.033,209.262 z",  x:0, y:0},
      { id: "12", path1: "M489.248,209.262 L552.78,209.262 L552.78,124.968 L489.248,124.968 L489.248,209.262 z",  x:0, y:0},
      { id: "13", path1: "M346.975,83.262 L346.975,19.73 L262.681,19.73 L262.681,83.262 L346.975,83.262 z",  x:0, y:0},
      { id: "14", path1: "M245.083,83.262 L245.083,19.73 L160.789,19.73 L160.789,83.262 L245.083,83.262 z", x:0, y:0},
      { id: "15", path1: "M19.411,357.982 L82.943,357.982 L82.943,273.688 L19.411,273.688 L19.411,357.982 z",  x:0, y:0},
      { id: "16", path1: "M20.129,474.88 L83.661,474.88 L83.661,390.586 L20.129,390.586 L20.129,474.88 z", x:0, y:0},
      { id: "17", path1: "M19.411,591.765 L82.943,591.766 L82.943,507.472 L19.411,507.472 L19.411,591.765 z",  x:0, y:0},
      { id: "18", path1: "M132.144,768 L195.676,768 L195.676,683.706 L132.144,683.706 L132.144,768 z", x:0, y:0},
      { id: "19", path1: "M245.762,768 L309.294,768 L309.294,683.706 L245.762,683.706 L245.762,768 z",  x:0, y:0},
      { id: "20", path1: "M381.26,665.148 L381.26,728.68 L465.553,728.68 L465.553,665.148 L381.26,665.148 z",  x:0, y:0}
    ];
    
   
    $scope.$watch(function () { return vm.floor },
      function () {
        draw(vm.floor, $scope);   
      }, true); 
  });
  
function draw (data, scope) {
  var width = 5000,
      height = 5000,
      svg = d3.select("svg"),
      rects;
  
  var drag = d3.behavior.drag()
      .origin(function(d) { return d; })
      .on("drag", dragmove)
      .on("dragend", function (obj) {
        obj.x = this.attributes.x.value;
        obj.y = this.attributes.y.value;
        scope.$apply();
      });
      
  svg.attr("width", width) 
    .attr("height", height);
    
  rects = svg.selectAll("path")
    .data(data, function (d) { return d.id });
  rects.enter()
    .append("path")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", 0)
    .attr("y", 0)
    .attr("fill", "#00F")
    .attr("stroke", "#64686f")
    .attr("stroke-width", "2")
    .attr("d", function (d) { return d.path1 })
    .call(drag);
  rects.transition()
    .attr("x", function (d) { return d.x })
    .attr("y", function (d) { return d.y })
    .attr("transform", function (d) { return "translate(" + d.x + ", " + d.y + ")" })
    .transition()
    .attr("fill", "#00F");
  rects.exit()
    .transition()
      .attr("fill", "#F00")
    .transition()
      .attr("height", 0)
      .attr("width", 0)
      .remove();
}


        function dragStart() {
          console.log('dragStart')
          console.log(ind)
          console.log(this)
          target = d3.select(d3.event.sourceEvent.target);
          targetClass = target.attr('class');

          var elemCenter = getElementCenter();

          // tPos = SvgService.model.image[target.attr('ind')].getImageUpdatedTranslateCoordinates();
        
        }

        /**
         * For while the drag is happening
         * */
        function dragMove() {
          // console.log('dragMove')
          // checks the target class to choose the right function
          // to be executed while dragging
          // #1 - If the user is moving the element around
          if (targetClass.indexOf('move') > -1) {
            moveObject();
          }
          // #2 - If the user is resizing the element
         

          // apply the scope changes for any function that might
          // have been called, to keep things updated in the service model
          scope.$apply();
        }

        /**
         * For when the drag stops (the user release the element)
         * */
        function dragEnd() {
          // console.log('dragEnd')

          // check if the user was resizing
        
        }
        
        function getElementCenter() {
          // console.log("target.attr('ind')")
          // console.log(target.attr('ind'))
          var uCords = SvgService.model.image[target.attr('ind')].getImageUpdatedCoordinates();
          var result = {
            x: uCords.x + uCords.width / 2,
            y: uCords.y + uCords.height / 2,
          };
          return result;
        }

      
        /**
         * Function to move the object around
         * */
        function moveObject() {
            // console.log('moveObject')
            // console.log(tPos)

          // increments the x/y values with the dx/dy values from the d3.event object
          tPos.x += d3.event.dx;
          tPos.y += d3.event.dy;

          // updates the translate transform values to move the object to the new point
          SvgService.model.image[target.attr('ind')].updateImageTransform(
            'translate',
            'translate(' + [tPos.x, tPos.y] + ')'
          );
          // updates the translate coordinates in the model for further use
          SvgService.model.image[target.attr('ind')].updateImageTranslateCoordinates(tPos.x, tPos.y);
        }

function dragmove(d) {
  d3.select(this)
      .attr("x", d3.event.x)
      .attr("y", d3.event.y)
      .attr("transform", "translate(" + d3.event.x + ", " + d3.event.y + ")");

  console.log(d3.event)

}