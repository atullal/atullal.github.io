type Gradient = {
  left?: string | undefined;
  right?: string | undefined;
  top?: string | undefined;
  bottom?: string | undefined;
  height: number;
  width: number;
  color1: string;
  c1pos: number;
  color2: string;
  c2pos: number;
  blur: number;
  angle: number;
}

const Blurs = () => {

  const gradients: Gradient[] = [
    {
      left: "-200px",
      top: "-200px",
      height: 400,
      width: 400,
      color1: "#FFF73180",
      c1pos: 0,
      color2: "#FFF73110",
      c2pos: 100,
      blur: 50,
      angle: 0,
    },

    {
      right: "5vw",
      top: "-100px",
      height: 400,
      width: 400,
      color1: "#ff95b280",
      c1pos: 0,
      color2: "#ff95b210",
      c2pos: 100,
      blur: 80,
      angle: 0,
    }
  ];

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      {gradients.map((gradient:Gradient, index) => (
        <div
          key={index}
          className={`absolute rounded-full animate-gradient-move`}
          style={{
            background: `radial-gradient(${gradient.color1} ${gradient.c1pos}%, ${gradient.color2} ${gradient.c2pos}%)`,
            transform: `rotate(${gradient.angle}deg)`,
            filter: `blur(${gradient.blur}px)`,
            width: `${gradient.width}px`,
            height: `${gradient.height}px`,
            ...(gradient.left && { left: `${gradient.left}` }),
            ...(gradient.right && { right: `${gradient.right}` }),
            ...(gradient.top && { top: `${gradient.top}` }),
            ...(gradient.bottom && { bottom: `${gradient.bottom}` }),
          }}
        />
      ))}
    </div>
  );
};

export default Blurs;