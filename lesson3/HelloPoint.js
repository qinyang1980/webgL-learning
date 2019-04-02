const VSHADER_SOURCE = `
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 10.0;
}`;

const FSHADER_SOURCE = `
void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;

function main() {
  const canvas = document.getElementById("webgl");
  if (!canvas) {
    console.log("Failed to retrieve the <canvas> element");
    return;
  }

  const gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get render context for WebGL");
    return;
  }

  //初始化着色器
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.error("Failed to initialize shaders!");
  }

  gl.clearColor(0, 0, 0, 0.6);
  gl.clear(webgl.COLOR_BUFFER_BIT);

  //画点
  gl.drawArrays(webgl.POINTS, 0, 1);
}
