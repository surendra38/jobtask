import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  switchModal1: boolean = false;
  switchModal2: boolean = false;

  users:any=[{
    name:'Sachin Tiwari',
    mobile:'+91 8853299293',
    bookingDate:'09/12-2021',
    bookingTime:'09:00 AM',
    appoinmentDate:'10/12-2021',
    appoinmentTime:'10:00 AM',
    pickUp:'A-1234, CGC Residency, Near Bisleri office, Andheri East, Mumbai-400001',
  }];

  serviceAdvisor:any=[{
    bookingId:'MG1234567890',
    advisorName:'Aditya',
    vehicleName:'Maruti Suzuki XL6 Petrol',
    vehicle_no:'MH 04 AB 3827',
    service:["Starter Motor Repair","Basic Repair","Engine Scanning",'Inspection & Diagnostics']
  }]

  pickUpDetails=[{
    driverName:'',
    otp:'0099',
    pickupDate:this.users[0].appoinmentDate,
    pickUpTime:this.users[0].appoinmentTime,
    totalCharge:'6459'
  }]


  ngOnInit(): void {
    // console.log(this.serviceAdvisor[0].service)
  }
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup = this.fb.group({
    address: [this.users[0].pickUp],
    services: ['',]
  });

  onSubmit() {
    if(this.myForm.value.services){
      this.serviceAdvisor[0]['service'].push(this.myForm.value.services);
    }
    if(this.myForm.value.address){
      this.users[0]['pickUp']=this.myForm.value.address;
    }
  }

  changeModal(data: string) {
    if (data == 'address') {
      this.switchModal1 = true;
      this.switchModal2 = false;
    } else if (data == 'service') {
      this.switchModal2 = true;
      this.switchModal1 = false;
    }
  }
}
