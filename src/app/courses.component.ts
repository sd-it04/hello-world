import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h2>{{getTitle()}}</h2>
        <img [src]="imgUrl" />
        
        <br/><p> Pipes and ngFor </p>
        <ul>
            <li *ngFor="let course of courses">
                {{course.name | uppercase}} <br/>
                {{course.price | currency: 'USD':true}} <br/>
                {{course.releaseDate | date:'shortDate' }}
            </li>
        </ul>
        
        <br/><p> Custom Pipes </p>
        <div>{{veryLongString}}</div>

        <br/><p> Event Binding </p>
        <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
        
        <br/><p>Style Binding </p>
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue': 'red'" [class.active]="isActive">Save</button>
        
        <br/><p>Event binding </p>
        <input [value]="email" (keyup.enter)="onKeyUp()"/>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        
        <br/><p> Favorite Component </p>
        <favorite></favorite>
    `
})
export class CoursesComponent {
    title = "List of courses";
    imgUrl = "https://picsum.photos/200/300";
    email = "email@domain.com";
    veryLongString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    onKeyUp() {
        console.log(this.email);
    }
    getTitle() {
        return "All of the " + this.title;
    }
    courses;
    isActive = false;

    onSave($event: Event) {
        console.log('Button clicked event:', $event);
    }
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
