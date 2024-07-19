import {Component, inject} from '@angular/core';
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {map, shareReplay} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatSelectionList,
    MatListOption,
    AsyncPipe
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private readonly api  = inject(ApiService);
  public posts$ = this.api.getPosts().pipe(map((res) => res.filter((i, idx) => idx < 11)), shareReplay());
}
