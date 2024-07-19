import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {ApiService} from "../../services/api.service";
import {map, shareReplay} from "rxjs";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe,
    MatListOption,
    MatSelectionList
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private readonly api  = inject(ApiService);
  public users$ = this.api.getUsers().pipe(map((res) => res.filter((i, idx) => idx < 11)), shareReplay());
}
