function horoscopes() {
	const signs = [
		{
			sign: 'Sun',
			quote: 'Your having good luck',
			recommendation: '"trust no one"'
		}, {
			sign: 'moon',
			quote: 'Your having bad luck',
			recommendation: '"find someone to give it to"'
		}, {
			sign: 'Jupiter',
			quote: 'something will happen today',
			recommendation: '"stay on guard"'
		},	{
			sign: 'Saturn',
			quote: 'today you will get a job',
			recommendation: '"to make sure its one u want go out there and start looking"'
		}, {
			sign: 'Mercury',
			quote: 'today will be stressful',
			recommendation: '"protect your mental"'
		}, {
			sign: 'Venus',
			quote: 'Mercury is in retrograde',
			recommendation: '"enjoy ur stress free day before it un retrogrades"'
		}, {
			sign: 'Neptune',
			quote: 'no moon today',
			recommendation: '"make it a happy day while you still can"'
		}, {
			sign: 'Uranus',
			quote: 'i predict yours is clean',
			recommendation: '"keep it clean"'
		}
	]
	let rando = Math.floor(Math.random()*8);
	return `Your sign is ${signs[rando].sign} \n${signs[rando].quote} \nYou should: ${signs[rando].recommendation}`
}


console.log(horoscopes());
