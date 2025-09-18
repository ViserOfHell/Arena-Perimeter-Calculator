const savedShapes = [];

function GetInputs() {
  const shape = document.getElementById("select").value;
  const triangle = document.getElementById("triangle");
  const circle = document.getElementById("circle");
  const square = document.getElementById("square");
  const rectangular = document.getElementById("rectangular");

  rectangular.style.display = "none";
  triangle.style.display = "none";
  circle.style.display = "none";
  square.style.display = "none";

  if (shape === "triangle") {
    triangle.style.display = "block";
  } else if (shape === "circle") {
    circle.style.display = "block";
  } else if (shape === "square") {
    square.style.display = "block";
  }
  else if (shape === "rectangular") {
    rectangular.style.display = "block";
  }
}

function SaveShape() {
  const shape = document.getElementById("select").value;
  const isAreaChecked = document.getElementById("checkboxArea").checked;
  const isPerimeterChecked = document.getElementById("checkboxPerimeter").checked;

  let sides = {};
  let area = null;
  let perimeter = null;

  if (shape === "triangle") {
    sides.side1 = parseFloat(document.getElementById("side1").value);
    sides.side2 = parseFloat(document.getElementById("side2").value);
    sides.side3 = parseFloat(document.getElementById("side3").value);
    const p = (sides.side1 + sides.side2 + sides.side3) / 2;
    area = Math.sqrt(p* (p - sides.side1) * (p - sides.side2) * (p - sides.side3));
    perimeter = sides.side1 + sides.side2 + sides.side3;
  } else if (shape === "circle") {
    sides.radius = parseFloat(document.getElementById("radius").value);
    area = Math.PI * Math.pow(sides.radius, 2);
    perimeter = 2 * Math.PI * sides.radius;
  } else if (shape === "square") {
    sides.side = parseFloat(document.getElementById("side4").value);
    area = Math.pow(sides.side, 2);
    perimeter = 4 * sides.side;
  }
  else if (shape === "rectangular") {
    sides.side5 =document.getElementById("side5").value;
    sides.side6 = parseFloat(document.getElementById("side6").value);
    area = sides.side5 * sides.side6;
    perimeter = 2 * (sides.side5+sides.side6);
  }

  const savedShape = {
    type: shape,
    sides: sides,
  };

  if (isAreaChecked) {
    savedShape.area = area.toFixed(3);
  }
  if (isPerimeterChecked) {
    savedShape.perimeter = perimeter.toFixed(3);
  }

  savedShapes.push(savedShape);

  alert("Տվյալները հաջողությամբ պահպանվեց");
}

function ShowShapes() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 
  
    if (savedShapes.length === 0) {
      resultDiv.textContent = "Դեռ ոչ մի ձև չկա:";
      return;
    }
  
    savedShapes.forEach((shape, index) => {
      let shapeInfo = `Shape ${index + 1}:\n`;
      shapeInfo += `Type: ${shape.type}\n`;
  
      for (let a in shape.sides) {
        shapeInfo += `${a}: ${shape.sides[a]}\n`;
      }
        shapeInfo += `Area: ${shape.area}\n`;
        shapeInfo += `Perimeter: ${shape.perimeter}\n`;
      shapeInfo += "---------------------------\n";
  
      resultDiv.textContent += shapeInfo;
    });
  }
  