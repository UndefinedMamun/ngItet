import { Injectable } from '@angular/core';

@Injectable()
export class SearchPanelService {
  members = [
    {
      id: 1001,
      userName: "jason",
      name: "Jason Statham",
      designation: "Team Manager",
      company: "A company",
      academic: 2,
      contact: "+8801*********",
      relign: 1,
      email: "jason@gmail.com"
    },
    {
      id: 1002,
      userName: "mark",
      name: "Mark Ruffalo",
      designation: "Team Manager",
      company: "B company",
      academic: 1,
      contact: "+8801****5666",
      relign: 1,
      email: "mark@gmail.com"
    },
    {
      id: 1003,
      userName: "ryan",
      name: "Ryan Reynolds",
      designation: "Team Manager",
      company: "B company",
      academic: 2,
      contact: "+8801******535",
      relign: 3,
      email: "ryan@gmail.com"
    },
    {
      id: 1004,
      userName: "samuel",
      name: "Samuel L. Jackson",
      designation: "Team Manager",
      company: "C company",
      academic: 1,
      contact: "+8801*********",
      relign: 2,
      email: "samuel@gmail.com"
    },
    {
      id: 1005,
      userName: "tom",
      name: "Tom Hanks",
      designation: "Team Manager",
      company: "B company",
      academic: 2,
      contact: "+8801*********",
      relign: 1,
      email: "tom@gmail.com"
    },
    {
      id: 1006,
      userName: "tom",
      name: "Tom Cruise",
      designation: "Team Manager",
      company: "C company",
      academic: 3,
      contact: "+8801*********",
      relign: 3,
      email: "tom@gmail.com"
    },
    {
      id: 1007,
      userName: "robert",
      name: "Robert Downey Jr",
      designation: "The Boss",
      company: "F company",
      academic: 1,
      contact: "+8801*********",
      relign: 1,
      email: "robert@gmail.com"
    },
    {
      id: 1008,
      userName: "adam",
      name: "Adam Sandler",
      designation: "CEO",
      company: "D company",
      academic: 2,
      contact: "+8801*********",
      relign: 2,
      email: "adam@gmail.com"
    },
    {
      id: 1009,
      userName: "vin",
      name: "Vin Diesel",
      designation: "Team Manager",
      company: "B company",
      academic: 2,
      contact: "+8801*********",
      relign: 1,
      email: "vin@gmail.com"
    },
    {
      id: 1010,
      userName: "mark",
      name: "Mark Wahlberg",
      designation: "Team Manager",
      company: "D company",
      academic: 3,
      contact: "+8801******777",
      relign: 2,
      email: "mark@gmail.com"
    }
  ];

  constructor() { }

  search(sQuery:string){
    if(!sQuery)
      return [];

    let filtered = this.members.filter( member => {
      let inName = member.name.toLowerCase().includes(sQuery.toLowerCase())
      let inUserName = member.userName.toLowerCase().includes(sQuery.toLowerCase());
      return inName || inUserName;    
    });
    return filtered;
  }

}
