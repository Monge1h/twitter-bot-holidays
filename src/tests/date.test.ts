import { DateTime } from "luxon";

import { daysDiff, getNextDate } from "../functions/date";
import holidays from "../holidays.json";

let arrDates = Object.keys(holidays).map(x => DateTime.fromISO(x))

describe('Testing dayDiff function',()=>{
	test('should return 1 day of diff',()=>{
		expect(daysDiff("2022-02-20","2022-02-21")).toBe(1)
	})

	test('should return 10 day of diff',()=>{
		expect(daysDiff("2022-02-20","2022-03-02")).toBe(10)
	})

	test('should return 0 day of diff',()=>{
		expect(daysDiff("2022-02-20","2022-02-20")).toBe(0)
	})
})

describe('Testing getNextDate function',()=>{
	test('should return 2022-05-10',()=>{
		expect(getNextDate(DateTime.fromISO("2022-05-04"),arrDates)).toBe("2022-05-10")
	})
})