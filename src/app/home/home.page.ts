import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  points: number;

  constructor(private storage: Storage, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.getPoints();
    });
  }

  async getPoints() {
    await this.storage.get("points").then(points => {
      // If the points don't exist, set to 0
      this.points = points == undefined ? 0 : points;
    })
  }
}
