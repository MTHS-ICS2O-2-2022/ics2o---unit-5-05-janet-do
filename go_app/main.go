// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file determines the type of triangle based on input

package main

import (
	"fmt"
)

func classifyTriangle(a, b, c int) string {
	// Check if inputs are valid
	if a <= 0 || b <= 0 || c <= 0 || a+b+c != 180 {
		return "Invalid input: please enter valid lengths for all sides of the triangle that add up to 180 degrees"
	}

	// Process
	switch {
	case a == b && b == c:
		return "The triangle is equilateral"
	case a == b || b == c || c == a:
		return "The triangle is isosceles"
	default:
		return "The triangle is scalene"
	}
}

func main() {
	var a, b, c int

	// Get user input for the lengths of the triangle
	fmt.Print("Enter the length of the first side: ")
	fmt.Scanln(&a)

	fmt.Print("Enter the length of the second side: ")
	fmt.Scanln(&b)

	fmt.Print("Enter the length of the third side: \n")
	fmt.Scanln(&c)

	// Classify the triangle
	classification := classifyTriangle(a, b, c)
	fmt.Println(classification)
}
