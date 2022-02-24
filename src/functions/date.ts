import { DateTime } from "luxon";

function daysDiff(nextDate: string, currentDate: string): number {
	const dateDiff = DateTime.fromISO(nextDate).diff(DateTime.fromISO(currentDate), ["days"]).toObject()['days'] || 0
	return Math.abs(Math.ceil(dateDiff))
}

export { daysDiff }