import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  serachForm = this.formBuilder.group({
    search: ''
  });

  ngOnInit() {
    this.serachForm.valueChanges.pipe(
      debounceTime(600)
    ).subscribe(txt => {
      if (txt?.search != null) {
        this.router.navigate(['/anuncios'], {
          queryParams: {
            textSearch: txt?.search
          }
        })
      } else {
        this.router.navigate(['']);
      }
    })
  }
}
