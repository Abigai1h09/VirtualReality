class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color", "#FCBACB");
    base.setAttribute("width", "2");
    base.setAttribute("height", "2");
    base.setAttribute("depth", "2");
    base.setAttribute("position", "0 1 0");
    this.obj.append( base );
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color", "#9874D3");
    roof.setAttribute("radius", "1.4");
    roof.setAttribute("height", "2.2");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("rotation", "30 0 90");
    roof.setAttribute("position", "0 2.5 0");
    this.obj.append( roof );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}