const fedexPattern = new RegExp(
	/^([0-9]{12}|100\d{31}|\d{15}|\d{18}|96\d{20}|96\d{32})$/,
);
const upsPattern = new RegExp(
	/^(1Z?[\w]{3}?[\w]{3}?[\w]{2}?[\w]{4}?[\w]{3}?[\w]|[\dT]\d{3}?\d{3}?\d[3])$/,
);
const uspsPattern = new RegExp(
	/^([A-Z]{2}\d{9}[A-Z]{2}|(420\d{9}(9[2345])?)?\d{20}|(420\d{5})?(9[12345])?(\d{24}|\d{20})|82\d{8})$/,
);

export function isTracking(string) {
	if (
		fedexPattern.test(string) ||
		upsPattern.test(string) ||
		uspsPattern.test(string)
	) {
		return true;
	} else {
		return false;
	}
}

export function getTracking(string) {
	switch (true) {
		case fedexPattern.test(string):
			return `https://www.fedex.com/fedextrack/?trknbr=${string}`;
		case upsPattern.test(string):
			return `https://wwwapps.ups.com/WebTracking/track?trackNums=${string}`;
		case uspsPattern.test(string):
			return `https://tools.usps.com/go/TrackConfirmAction.action?tLabels=${string}`;
		default:
			return false;
	}
}
