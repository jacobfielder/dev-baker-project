$(document).ready(function() {
      // I can now drag the red car
      $("#redCar").draggable({
    stop: function(event, ui) {
      // get position of red car after stopping
      const position = ui.position;
      
      // interact with console - log position of car
      console.log(`Red Car moved to: Left: ${position.left}, 
      Top: ${position.top}`);
    }
  });
     
    // get map dimensions and offset
    let map = $("#nuketown2025");
    let mapWidth = map.width();
    let mapHeight = map.height();
    let mapOffset = map.offset(); 

    // create mines inside the map with loop
    for (let i = 0; i < 5; i++) {
        let mine = $("<div></div>").addClass("mine")
            .css({
                position: "absolute",
                width: "20px",
                height: "20px",
                backgroundColor: "orange",
                top: `${mapOffset.top + Math.random() * (mapHeight - 20)}px`,
                left: `${mapOffset.left + Math.random() * (mapWidth - 20)}px`,
                borderRadius: "50%",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)"
            });

        map.append(mine);
    }
});