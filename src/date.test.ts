import { daysDiff } from "./functions/date";

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