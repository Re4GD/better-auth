export const buildTelegramHash = (dataFields: object) => {
	// build data string
	const dataCheckString = Object.keys(dataFields)
		.filter((key) => dataFields[key as keyof typeof dataFields] !== undefined)
		.sort()
		.map((key) => `${key}=${dataFields[key as keyof typeof dataFields]}`)
		.join("\n");

	return dataCheckString;
};

export const getOriginHostname = (url: string) => {
	try {
		const parsedUrl = new URL(url);
		return parsedUrl.hostname;
	} catch (error) {
		return null;
	}
};
