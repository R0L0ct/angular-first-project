import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Coin {
	id: string;
	name: string;
	symbol: string;
	image: string;
	current_price: number;
	price_change_percentage_24h: number;
	total_volume: number;
}

@Component({
  selector: 'app-coins-market',
  templateUrl: './coins-market.component.html',
  styleUrls: ['./coins-market.component.css']
})

export class CoinsMarketComponent implements OnInit {
	coins: Coin[] = [];
	filteredCoins: Coin[] = [];
	titles: string[] = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

	searchText = '';
	isLoading = false;

	searchCoin() {
		this.filteredCoins = this.coins.filter(
			(coin) =>
				coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
				coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
		);
	}

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.isLoading = true;
		this.http
			.get<Coin[]>(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.subscribe(
				(res) => {
					this.isLoading = false;
					this.coins = res;
					this.filteredCoins = res;
				},
				(err) => console.log(err)
			);
	}
}
