
# CSS Worksheet
To preview a markdown file in VS Code:

Ctrl + SHIFT + V


## Problem 1
Explain the difference between these two selectors (make sure to mention the elements that each selector is targeting):
```css
ul li.selected{
	/*rules (property settings) go here*/
}


ul li .selected{
	/*rules (property settings) go here*/
}
```
### Put your answer here

ul li.selected targets a specific li item. The css is applied only to the li with the class="selected"
	<li>dogs</li>					No CSS will be applied to dogs
	<li class="selected">Cats</li>  Cats will have the CSS applied to it
	<li>goats</li>  				No CSS will be applied to goats

ul li .selected targets an item inside of an li. the element such as a span must have the class="selected"
	<li>dogs</li>												No CSS applied
	<li>Cats <span class="selected">and</span> Kittens</li>  	CSS applied only to and
	<li>goats</li>  											No CSS applied



## Problem 2
What are **square brackets** used for in CSS selectors?
For example, what does the following selector target:
```css
input[type=text]{
	/*rules (property settings) go here*/
}
```
### Put your answer here

	In CSS the [] indicate the attribute that will be selected. In this case the text entered by the user will have
	the CSS applied to it.


## Problem 3
What is the **greater than** character used for in CSS selectors?
For example, what does the following selector target:
```css
div > p{
	/*rules (property settings) go here*/
}
```
### Put your answer here

	> only applies CSS to the direct children. It is no applied to grandchildren or any other decendents.

## Problem 4
What is the **tilde** used for in CSS selectors?
For example, what does the following selector target?
```css
h3 ~ p{
	/*rules (property settings) go here*/
}
```
### Put your answer here

	~ applies CSS to all of the siblings following the element it appears in.

## Problem 5
What is the **+** sign used for in CSS selectors?
For example, what does the following selector target:
```css
input[type=radio] + label{
	/*rules (property settings) go here*/
}
```
### Put your answer here

	+ only applies the CSS to the next sibling.

## Problem 6
Explain what a **psuedo selector** is in CSS.
And include a code sample that demonstrates a psuedo selector.
### Put your answer here

	psudo selecors apply CSS based on their state or position not their attrubute.