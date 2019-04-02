// DrawRectangel
function main() {
  const canvas = document.getElementById("webgl");
  if (!canvas) {
    console.log("Failed to retrieve the <canvas> element");
    return;
  }

  const gl = canvas.getContext("webgl");

  gl.clearColor(0.0, 0.0, 1.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);
}
