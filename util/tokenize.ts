export function tokenize(input: string):string[] {
	var withinQuotes:boolean = false
	var items:string[] = []
	var current:string = ""

	for(var i:number = 0; i < input.length; i++) {
		var char:string = input.charAt(i);

		if(char == "\""){
			withinQuotes = !withinQuotes
		}
		else if(char == " " && !withinQuotes) {
			items.push(current)
			console.log("Token found: ", current)
			current = ""
		}
		else {
			current = current.concat(char)
			if(i == input.length - 1) {
				console.log("Final Token Found: ", current)
				items.push(current)
				current = ""
			}
		}
	}

	return items
}
