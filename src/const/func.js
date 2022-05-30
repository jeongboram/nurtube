
export const calDate = (publishedDate) => {

	const today = new Date()
	const todays = {
		year: today.getFullYear().toString(),
		month: (today.getMonth() + 1).toString().padStart(2, "0"),
		date: today.getDate().toString().padStart(2, "0"),
		time_hour: today.getHours().toString().padStart(2, "0"),
		time_minutes: today.getMinutes().toString().padStart(2, "0")
	}

	const published = {
		year: publishedDate.slice(0,4).toString(),
		month: publishedDate.slice(5,7).toString().padStart(2, "0"),
		date: publishedDate.slice(8,10).toString().padStart(2, "0"),
		time_hour: publishedDate.slice(11,13).toString().padStart(2, "0"),
		time_minutes: publishedDate.slice(14,16).toString().padStart(2, "0")
	}

	const date_today = `${todays.year}-${todays.month}-${todays.date}`
	const date_published = `${published.year}-${published.month}-${published.date}`

	//업데이트 날짜가 당일 일 경우.
	if ( date_today == date_published) {
		
		const caldata = Number(todays.time_hour) - Number(published.time_hour)

		if (todays.time_hour == published.time_hour || caldata == 1 ) { //.... 03:00 / 02:55 일경우 케이스 작성
			//'시'가 같으면 방금전.
			return `방금전`
		} else {
			//n시간 전으로 표기.
			return `${caldata}시간전`
		}
	}

	//년도가 다를 경우.
	if ( todays.year !== published.year ) {
		const date = todays.year - published.year
		console.log('datedatedatedate', date)
		return `${date}년전`
	}

	if ( todays.year == published.year ) { //같은 년도.
		//달이 같으면..
		if ( todays.month == published.month ) {
			const dayss = Number(todays.date) - Number(published.date)
			if ( dayss == 7 ) {
				return '일주일전'
			}
			return `${dayss}일전`
		}
	}

};