import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';


@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})



export class StatisticPageComponent implements OnInit {
  tradeValue: any
  avgBlock: any

  title: string = '';
  titleAvgBlock: string = '';
  type: string = 'LineChart';
  column = 'aaaa'
  data = []
  dataAvgBlock = []
  options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
  };
  optionsAvgBlock = {
    colors: ['#a0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
  };
  width = 550;
  height = 400;
  constructor(private BitcoinService: BitcoinService) { }

  async ngOnInit() {
    // TradeVolume
    this.tradeValue = await this.BitcoinService.getTradeVolume()

    this.data = this.tradeValue.values.map(data => {
      let {y} = data
      return ['', y]
    })
    this.title = this.tradeValue.description

    // AverageBlock
    this.avgBlock = await this.BitcoinService.getAverageBlock()

    this.dataAvgBlock = this.avgBlock.values.map(data => {
      let {y} = data
      return ['', y]
    })
    this.titleAvgBlock = this.avgBlock.description





  }

}
