import { DateTime } from "luxon";

function daysDiff(nextDate: string, currentDate: string): number {
	const dateDiff = DateTime.fromISO(nextDate).diff(DateTime.fromISO(currentDate), ["days"]).toObject()['days'] || 0
	return Math.abs(Math.ceil(dateDiff))
}

function getNextDate(currentDate: DateTime, arrDates: DateTime[]): string{
	let nextDate = ""
	for(let date of arrDates){
		if(date >= currentDate){
			nextDate = date.toISODate()
			break;
		}
	}
	return nextDate
}

export { daysDiff, getNextDate }