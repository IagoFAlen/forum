export class Slug {
	public value: string
	
	constructor(value: string) {
		this.value = value
	}

	/**
	* Receives a string and normalize it as a slug.
	*
	* Example: "An example title" => "an-example-title"
	*
	* @param text {string}
	*/
	static createFromText(text: string) {
		const slugText = text.normalize("NFKD").toLowerCase().trim()
			.replace(/\s+/g, '-') //changes white space to hyphen
			.replace(/[^\w-]+/g, '') //removes everything that aren't words
			.replace(/_/g, '-') //changes underline to hyphen
			.replace(/--+/g, '-') //changes double hyphen to hyphen
			.replace(/-$/g, '') //removes hyphen as last character

			return new Slug(slugText)
	}
}