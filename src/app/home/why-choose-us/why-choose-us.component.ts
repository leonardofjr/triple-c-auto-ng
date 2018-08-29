import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit {

  content = [
    { heading: "QUALITY CONTROL", 
      text: "A diverse client base has helped us develop our quality control program. Our quality control program stresses active involvement of management, employees and clients.", icon: {
        altText: "icon", 
        url: "#"
      }
    },

    { heading: "EXPERIENCE", 
      text: "ISA CLEAN has been providing cleaning services for more than 20 years. Our operations managers have each been with our company for over 25 years.", 
        icon: {
        altText: "icon", 
        url: "#"
      }
    },

    { heading: "WELL TRAINED STAFF", 
      text: "All ISA CLEAN employees are WHMIS, safety, and task trained. Our training is specific to your location, to ensure that your expectations are met. Additional training is provided when new procedures and equipment are available.", 
        icon: {
        altText: "icon", 
        url: "#"
      }
    },

    { heading: "INSURANCE", 
      text: "A cleaning contractor should be able to provide a current insurance certificate, and a current WSIB Certificate of Clearance. If they can not, then you may be liable for accidents, injuries or damages.", 
        icon: {
        altText: "icon", 
        url: "#"
      }
    },

    { heading: "INSPECTIONS", 
      text: "An inspection checklist is developed with your company and your requirements in mind. Supervisors visit your site to complete the checklist with our employees. A copy of the inspection is available for you to review.", 
        icon: {
        altText: "icon", 
        url: "#"
      }
    },

    { heading: "GREEN CLEAN", 
      text: "ISA CLEAN offers a “GREEN CLEAN” option where our staff will only use certified green products within your facility.", 
        icon: {
        altText: "icon", 
        url: "#"
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
