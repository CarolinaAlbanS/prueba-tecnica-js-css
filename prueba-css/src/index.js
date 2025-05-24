var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <div class="head">
  <h1>Unique Element Challenge</h1>
  <img class="head-img" src="src/assets/logo.svg" alt="Logo Ancert">
  </div>

  <div class="container">
  <div class="container-info">
  <h2>Target</h2>
  <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>

  <h2>Considerations</h2>
  <ul>
    <li>Values are duplicated only twice.</li>
    <li>There is only one non duplicate value.</li>
    <li>The non duplicate value can be placed anywhere on the array.</li>
    <li>The result must be an integer.</li>
  </ul>
  </div>
  
  <div class="container-data">
  <div class="data-test">
  <h2>Test Data</h2>
  <div>${arrayTest}</div>
  </div>

  <div class="data-division">
  <div class="expected">
  <h2>Expected result</h2>
  <div>Y</div>
  </div>

  <div class="result">
  <h2>Your Result</h2>
  <div>Z</div>
  </div>
  </div>
  </div>
  </div>
`;
