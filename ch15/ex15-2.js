// 아래 결과는 해당 지역의 표준시에 따라 다를 수 있습니다.
new Date();			// 현재 날짜

// 자바스크립트의 월은 0으로 시작합니다. 즉 0은 1월이고, 1은 2월입니다.
new Date(2015, 0);		// 2015년 1월 1일 0시
new Date(2015, 1);		// 2015년 2월 1일 0시
new Date(2015, 1, 14);		// 2015년 2월 14일 0시
new Date(2015, 1, 14, 13);	// 2015년 2월 14일 오후 1시
new Date(2015, 1, 14, 13, 30);	// 2015년 2월 14일 오후 1시 30분
new Date(2015, 1, 14, 13, 30, 5); // 2015년 2월 14일 오후 1시 30분 5초
new Date(2015, 1, 14, 13, 30, 5, 500); // 2015년 2월 14일 오후 1시 30분 5.5초

// 유닉스 타임스탬프로 날짜 생성
new Date(0);			// 12:00 A.M.,Jan 1, 1970 UTC
new Date(1000);			// 12:00:01 A.M., Jan 1, 1970 UTC
new Date(1463443200000);	// 5:00 P.M., May 16, 2016 UTC

// 유닉스 시간 원점 이전의 날짜를 구할 때
new Date(-365*24*60*60*1000);	// 12:00 A.M., Jan 1, 1969 UTC

// 날짜 문자열 해석 (표준시를 기준으로 합니다.)
new Date('June 14, 1903');	// 12:00 A.M., Jun 14, 1903 지역 표준시
new Date('June 14, 1903 GMT-0000'); // 12:00 A.M., Jun 14, 1903 UTC
