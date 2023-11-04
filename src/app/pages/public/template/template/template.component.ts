import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  constructor(
    private formBuilder: FormBuilder
  ) {}

  serachForm = this.formBuilder.group({
    search: ''
  });

  public onSubmit(): void{
    alert("Pesquisar: " + this.serachForm.value.search);
  }



}
