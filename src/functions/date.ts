import { DateTime } from "luxon";

function daysDiff(nextDate: string, currentDate: string): number {
	const dateDiff = DateTime.fromISO(nextDate).diff(DateTime.fromISO(currentDate), ["days"]).toObject()['days'] || 0
	return Math.abs(Math.ceil(dateDiff))
}

function getNextDate(currentDate: DateTime, arrDates: DateTime[]): DateTime{
	let nextDate = currentDate
	for(let date of arrDates){
		if(date >= currentDate){
			nextDate = date
			break;
		}
	}
	return nextDate
}

export { daysDiff, getNextDate }