export default {
	async fetchMatches() {
		return await { data: [{
			id: 1,
			teams:[
				{ id: 1,
					players:
					[
						{ 'id': 1, 'summoner_name': 'Kuenaimaku', 'common_name': 'Kyle', 'role': 'Support' },
						{ 'id': 2, 'summoner_name': 'Peruman', 'common_name': 'Peru', 'role': 'Jungle' },
						{ 'id': 3, 'summoner_name': 'ArmoredKoko47', 'common_name': 'Eric', 'role': 'Bot' },
						{ 'id': 4, 'summoner_name': 'Pudash', 'common_name': 'Jason', 'role': 'Top' },
						{ 'id': 5, 'summoner_name': 'Sean', 'common_name': 'Sean', 'role': 'Middle' }
					]
				},
				{ id: 2,
					players:
					[
						{ 'id': 1, 'summoner_name': 'CheshHat', 'common_name': 'Aline', 'role': 'Middle' },
						{ 'id': 2, 'summoner_name': 'About Damn Tahm', 'common_name': 'Matt', 'role': 'Jungle' },
						{ 'id': 3, 'summoner_name': 'Xayah Laßeouf', 'common_name': 'Tevin', 'role': 'Top' },
						{ 'id': 4, 'summoner_name': 'Pudgy Turtle', 'common_name': 'Ben', 'role': 'Support' },
						{ 'id': 5, 'summoner_name': 'msteele1', 'common_name': 'Marshall', 'role': 'Bot' }
					]
				}
			]
		}
		]}
	}
}