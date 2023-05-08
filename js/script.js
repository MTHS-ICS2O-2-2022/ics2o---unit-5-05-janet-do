// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates the area of a triangle

"use strict"

function calculate() {
  // get input values from HTML form
  const lengthA = parseFloat(document.getElementById("angle1").value)
  const lengthB = parseFloat(document.getElementById("angle2").value)
  const lengthC = parseFloat(document.getElementById("angle3").value)

  // check if input is valid
  if (isNaN(lengthA) || isNaN(lengthB) || isNaN(lengthC)) {
    document.getElementById("triangleType").innerHTML =
      "Please enter valid numbers"
    return
  }

  // using the cosine law
  const angleA = Math.acos(
    (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
  ).toFixed(2)
  const angleB = Math.acos(
    (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
  ).toFixed(2)
  const angleC = Math.acos(
    (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
  ).toFixed(2)

  // determine triangle type based on side lengths
  let triangleType
  if (lengthA === lengthB && lengthB === lengthC) {
    triangleType = "equilateral"
  } else if (
    lengthA === lengthB ||
    lengthA === lengthC ||
    lengthB === lengthC
  ) {
    triangleType = "isosceles"
  } else {
    triangleType = "scalene"
  }

  // display result in HTML page
  document.getElementById("triangleType").innerHTML =
    "This is a " + triangleType + " triangle"
}
