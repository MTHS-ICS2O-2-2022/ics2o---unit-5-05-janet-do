// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file determines triangle type

"use strict"

function calculate() {
  // input
  const lengthA = parseInt(document.getElementById("lengthA").value)
  const lengthB = parseInt(document.getElementById("lengthB").value)
  const lengthC = parseInt(document.getElementById("lengthC").value)

  // Check if inputs are valid
  if (
    lengthA <= 0 ||
    lengthB <= 0 ||
    lengthC <= 0 ||
    lengthA + lengthB + lengthC !== 180
  ) {
    // output
    document.getElementById("answer").innerHTML =
      "Invalid input: please enter valid lengths for all sides of the triangle that add up to 180 degrees"
    return
  }

  const sumOfAngles = Math.round(
    (Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) +
      Math.acos(
        (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
      ) +
      Math.acos(
        (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
      )) *
      (180 / Math.PI)
  )

  // process
  if (lengthA === lengthB && lengthB === lengthC) {
    // output
    document.getElementById("answer").innerHTML = "The triangle is equilateral"
  } else if (
    lengthA === lengthB ||
    lengthB === lengthC ||
    lengthC === lengthA
  ) {
    // output
    document.getElementById("answer").innerHTML = "The triangle is isosceles"
  } else if (
    lengthA !== lengthB &&
    lengthB !== lengthC &&
    lengthC !== lengthA
  ) {
    // output
    document.getElementById("answer").innerHTML = "The triangle is scalene"
  }
}

