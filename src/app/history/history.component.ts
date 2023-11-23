import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import './styles.css';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: [],
})
export class HistoryComponent {
  constructor(private historyService: HistoryService) {}

  getHistory() {
    this.historyService.getHistory();
  }
}
