window.onload = function() {
    var sw = 578;
    var sh = 400;
    
    var stage = new Kinetic.Stage({
        container: 'test01',
        width: 578,
        height: 400
    });
    var layer = new Kinetic.Layer({
        y: -30
    });
    
    var leftEye = new Kinetic.Line({
        x: 150,
        points: [0, 200, 50, 190, 100, 200, 50, 210],
        tension: 0.5,
        closed: true,
        stroke: 'white',
        strokeWidth: 10
    });
    var rightEye = new Kinetic.Line({
        x: sw - 250,
        points: [0, 200, 50, 190, 100, 200, 50, 210],
        tension: 0.5,
        closed: true,
        stroke: 'white',
        strokeWidth: 10
    });
    var nose = new Kinetic.Line({
        
    });
    layer.add(leftEye).add(rightEye);
    stage.add(layer);
}
