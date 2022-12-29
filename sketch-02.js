const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degree) => {
  return (degree / 180) * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.08;
    const h = height * 0.01;
    let x, y;

    const numCopy = 30;
    const radius = width * 0.25;

    context.fillStyle = '#2B2B2B';

    for (let i = 0; i < numCopy; i++) {
      //Rectangle
      context.save();
      const degSlice = degToRad(360/numCopy);
      const angle = degSlice * i;
      
      x = cx + radius * Math.cos(angle);
      y = cy + radius * Math.sin(angle);

      context.translate(x, y);
      context.rotate(angle);
      

      context.beginPath();
      context.rect(-w*0.5, -h*0.5, w*Math.random(0.5), h*Math.random());
      context.fill();

      context.restore();

      //Arc
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      context.lineWidth = 10*Math.random(0.7);

      context.beginPath();
      context.arc(0, 0, radius*Math.random(), degSlice*-20*Math.random(), degSlice*5*Math.random());
      context.stroke();
      context.restore();
    };
  };
};

canvasSketch(sketch, settings);
