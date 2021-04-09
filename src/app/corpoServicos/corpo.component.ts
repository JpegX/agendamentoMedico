import { ServicoService } from './../servico/servico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.scss']
})
export class CorpoComponent implements OnInit {
  constructor(private servico: ServicoService) {}

  ngOnInit(): void {
    this.servico.getUtilitarioEspecialidades().subscribe(a => console.log(a));
    this.servico.getUtilitarioExame().subscribe(b => console.log(b));
  }
}
