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
  milestone: number;

  constructor(private storage: Storage, private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribe page to run code everytime this page is routed to
    this.route.params.subscribe(val => {
      this.getPoints();
      this.updateMilestone();
    });
  }

  async getPoints() {
    await this.storage.get("points").then(points => {
      // If the points don't exist, set to 0
      this.points = points == undefined ? 0 : points;
    });
  }

  async updateMilestone() {
    // Check if user hit milestone
    await this.storage.get("milestone").then(milestonePoints => {
      this.milestone = milestonePoints;

      // If points surpassed the milestone -> up the milestone
      if (this.points >= milestonePoints) {
        // Add to milestonePoints until it's over user points
        while (milestonePoints <= this.points) {
          milestonePoints += 10;
        }

        this.storage.set("milestone", milestonePoints);
        this.milestone = milestonePoints;
      }
    });
  }
}
