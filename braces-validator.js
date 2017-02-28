/**
 * Js file to validate the braces in string are balanced or not.
 * 
 * @author vadivel murugesan
 */

var BracesValidator = function() {
	this.output = [];
};

/**
 * Function to check the braces are balanced in given string arrays
 */
BracesValidator.prototype.validate = function(input) {

	/* Loop given array */
	for (aIndex = 0; aIndex < input.length; aIndex++) {
		var string = input[aIndex];
		var isBalanced = "YES";
		var stack = [];

		/* Loop string value to match braces */
		for (sIndex = 0; sIndex < string.length; sIndex++) {
			/* Get a character in string by index value */
			var currentBrace = string.charAt(sIndex);
			switch (currentBrace) {
			/* opening braces */
			case '(':
			case '{':
			case '[':
				stack.push(currentBrace); /* push it to stack */
				break;
			/* closing braces */
			case ')':
			case '}':
			case ']':
				if (stack.length > 0) /* Do if stack is not an empty */
				{
					/* pop the value from stack and check if it is balanced */
					var previousBrace = stack.pop();
					if ((currentBrace == '}' && previousBrace != '{')
							|| (currentBrace == ']' && previousBrace != '[')
							|| (currentBrace == ')' && previousBrace != '(')) {
						isBalanced = "NO";
					}
				} else { /* If no opening brace found for this closing brace */
					isBalanced = "NO";
				}
				break;
			default: /* skip other characters */
				break;
			}
		}

		/* If still stack is not empty */
		if (stack.length > 0) {
			isBalanced = "NO";
		}

		/* update the status in output array */
		this.output[aIndex] = isBalanced;
	}

	return this.output;
};
