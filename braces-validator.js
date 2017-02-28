/**
 ***************
Braces in a string are considered to be balanced if the following criteria are met:
For every opening brace (i.e., (, {, or [), there is a matching closing brace (i.e., ), }, or ]) of the same type (i.e., ( matches ), { matches }, and [ matches ]). An opening brace must appear before (to the left of) its matching closing brace. For example, ]{}[ is not balanced.
No unmatched braces lie between some pair of matched braces. For example, ({[]}) is balanced, but {[}]and [{)] are not balanced.
 
Complete the braces function in the editor below. It has one parameter: an array of n strings, values. For each string in values, it must determine if all the braces in the string are balanced. The function must return an array of strings where the string at each index i (where 0 ≤ i < n) denotes whether or not all the braces in string valuesi were balanced. If yes, then index i in the return array must contain the string YES; otherwise, index i in the return array must contain the string NO.
 
Input Format
Locked stub code in the editor reads the following input from stdin and passes it to the function:
The first line contains an integer, n, denoting the number of elements in values.
Each line i of the n subsequent lines (where 0 ≤ i < n) contains a string describing valuesi.
 
Constraints
1 ≤ n ≤ 15
1 ≤ length of valuesi ≤ 100
It is guaranteed that each valuesi consists of (, ), {, }, [, and ] only.
 
Output Format
The function must return an array of strings where each index i contains either YES or NO denoting whether or not valuesi was balanced. This is printed to stdout by locked stub code in the editor.
 
Sample Input 0
{}[]()
{[}]}
 
Sample Output 0
YES
NO
 
Explanation 0
values0: {}[]() meets the criteria for a balanced string, so index 0 in our return array should contain the string YES.
values1: {[}] contains unmatched braces between a matched pair in the substrings [}, {[}, and [}], so index 1 in our return array should contain the string NO.
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
