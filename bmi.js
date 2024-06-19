function check() {
  const input_height = document.getElementById("height_box").value;
  const input_weight = document.getElementById("weight_box").value;
  const result = document.getElementById("result");
  const result_box = document.querySelector("result_box");
  const arrow = document.getElementById("arrow_");
  // let age;
  const height = parseFloat(input_height);
  const weight = parseFloat(input_weight);

  let bmi = weight / ((height / 100) * (height / 100));
  //   console.log(bmi);

  //   bmi = parseInt(bmii.value);
  console.log(bmi);

  if (bmi < 18.5) {
    console.log("You are Underweight");
    result.innerHTML = "You are Underweight";
    arrow.style.left = "29px";
    result.style.backgroundColor = "blue";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are Healthy");
    result.innerHTML = "You are Healthy";
    arrow.style.left = "105px";
    result.style.backgroundColor = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are Overweight");
    result.innerHTML = "You are Overweight";
    arrow.style.left = "185px";
    result.style.backgroundColor = "yellow";
  } else if (bmi >= 30 && bmi <= 34.9) {
    console.log("You are Obese");
    result.innerHTML = "You are Obese";
    arrow.style.left = "262px";
    result.style.backgroundColor = "orange";
  } else if (bmi >= 35) {
    console.log("You are Extreme Obese");
    result.innerHTML = "You are Extremely Obese";
    arrow.style.left = "340px";
    result.style.backgroundColor = "red";
  }
}
