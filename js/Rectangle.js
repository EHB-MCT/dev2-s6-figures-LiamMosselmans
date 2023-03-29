import Figure from "./Figure.js";

export default class Rectangle extends Figure {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
        
    }
    get surfaceArea() {
        return this.width * this.height;
    }

    get circumference() {
        return (this.width + this.height) * 2;
    }

    get innerHtml() {
       return `<div class="result">
        <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this.height} px</dd>
      
            <dt>Width</dt>
            <dd>${this.width} px</dd>
      
            <dt>Area</dt>
            <dd>${this.surfaceArea} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`;
    }
}