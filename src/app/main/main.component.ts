import {Component, OnInit} from '@angular/core';
import {Request} from "../shared/request";
import {Meeting} from "../shared/meeting";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  requests: Request[] = [
    {
    requestId: "62488d4eb75f3f2e56ac8905",
    user: {
      id: "1",
      email: "dadasd@dsadas.pl"
    },
    category: {
      name: "Football",
      inspirations: []
    },
    freeText: "lalallala",
    place: "online",
    expectedExpertise: "Beginner",
    declaredExpertise: "Expert",
    startDate: new Date(),
    endDate: new Date(),
    isNegative: false
  },
    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false
    },
    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: true
    },    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false
    },
    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false
    },
    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false
    },    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false
    },    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false
    },    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false
    },    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "1",
        email: "dadasd@dsadas.pl"
      },
      category: {
        name: "Football",
        inspirations: []
      },
      freeText: "lalallala",
      place: "online",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false
    },
    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "2",
        email: "sasadsa@das.dpl"
      },
      category: {
        name: "Books",
        inspirations: []
      },
      freeText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
      place: "Kraków",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: true
    }];


  matchedMeetings: Meeting[] = [{
    meetingId: '65af65s6f',
    date: new Date(),
    category: {
      name: "Books",
      inspirations: []
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
  ]

  pastMeetings = this.matchedMeetings

  constructor() {
  }

  ngOnInit(): void {
  }

}
