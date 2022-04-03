import {Component, OnInit} from '@angular/core';
import {Meeting} from "../shared/meeting";
import {Request} from "../shared/request";

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {

  requests: Request[] = [{
    requestId: "62488d4eb75f3f2e56ac8905",
    user: {
      id: "1"
    },
    category: {
      name: "Football"
    },
    freeText: "lalallala",
    place: "online",
    expectedExpertise: 1,
    declaredExpertise: 1,
    startDate: new Date(),
    endDate: new Date()
  },
    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "2"
      },
      category: {
        name: "Books"
      },
      freeText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
      place: "Kraków",
      expectedExpertise: 2,
      declaredExpertise: 1,
      startDate: new Date(),
      endDate: new Date()
    }];

  meeting: Meeting = {
    meetingId: '65af65s6f',
    date: new Date(),
    category: {
      name: "Books"
    },
    requests: this.requests,
    inspirations: ['1Q84 - an interesting book by Haruki Murakami', 'Wuthering Heights - an inspring read by Emily Brontë'],
    suggestedPlaces: [{
      placeId: '23456fgh',
      location: 'Krakow',
      name: 'Bookly',
      description: 'Cosy reading space'
    },
      {
        placeId: '23456fgh',
        location: 'Krakow',
        name: 'BooksyCafe',
        description: 'Relaxing cafe with books to read'
      },
    ],
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
