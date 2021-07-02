import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../_models/profile';
import { SubscriptionService } from '../_services/subscription.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  @Input() profile: Profile;
  
  constructor(private subscriptionService : SubscriptionService,
              private toastr : ToastrService,
              private router : Router) { }

  ngOnInit(): void {
    
  }

  subscribe(){
    this.subscriptionService.subscribeTo(this.profile.username).subscribe(
      (response) => {
        this.toastr.success('You have subscribed to this user', 'Success');
        this.router.navigate(['profile/' + this.profile.username]);
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }

  unsubscribe(){    this.subscriptionService.unsubscribe(this.profile.username).subscribe(
    (response) => {
      this.toastr.success('You have removed subscription to this user', 'Success');
      this.router.navigate(['profile/' + this.profile.username]);
    },
    (error) => {
      this.toastr.error(error);
    }
  );

  }

}
