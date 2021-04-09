import { ServicoService } from './../servico/servico.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corpo-exames',
  templateUrl: './corpoExames.component.html',
  styleUrls: ['./corpoExames.component.scss']
})
export class CorpoExamesComponent implements OnInit, OnDestroy {
  type: any;

  title: string;
  subtitle: string;

  data: any;

  especialidade = -1;
  estado = -1;
  estadoList: any;
  cidade = -1;
  cidadeList: any;
  bairro = '';
  bairroList: any;

  tabela: any;

  private sub: any;

  constructor(private servico: ServicoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe({
      next: params => {
        this.type = params.exame;
        let s;
        switch (this.type) {
          case 'exames':
            this.title = 'Exames laboratoriais';
            this.subtitle = 'Busque abaixo os laboratórios da nossa rede credenciada';
            s = this.servico.getUtilitarioExame();
            break;
          case 'consultas':
            this.title = 'Especialidades';
            this.subtitle = 'Busque abaixo os consultórios disponíveis na nossa rede credenciada';
            s = this.servico.getUtilitarioEspecialidades();
            break;
        }
        s.toPromise().then(e => {
          this.data = e;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSelectEspecialidade(event) {
    this.especialidade = event.target.value;
    if (this.especialidade === -1) {
      this.estadoList = null;
    } else {
      this.estadoList = this.data[this.especialidade].estados;
    }
    this.estado = -1;
    this.cidadeList = null;
    this.cidade = -1;
    this.bairroList = null;
    this.bairro = '';
  }

  onSelectEstado(event) {
    this.estado = +event.target.value;
    if (this.estado === -1) {
      this.cidadeList = null;
    } else {
      this.cidadeList = this.estadoList[this.estado].cidades;
    }
    this.cidade = -1;
    this.bairro = '';
    this.bairroList = null;
  }

  onSelectCidade(event) {
    this.cidade = +event.target.value;
    if (this.cidade === -1) {
      this.bairroList = null;
    } else {
      const bairroraw = this.cidadeList[this.cidade].bairros;
      this.bairroList = groupBy(bairroraw, 'bairro');
    }
    this.bairro = '';
  }

  onSelectBairro(event) {
    this.bairro = event.target.value;
    if (this.bairro === '') {
      this.tabela = null;
    } else {
      this.tabela = this.bairroList[this.bairro];
    }
  }

  trackBy(index) {
    return index;
  }

  log(e) {
    console.log(e);
  }

  msgWhatsapp(profissionalWhats, estadoWhats, cidadeWhats, bairroWhats) {
    return `https://api.whatsapp.com/send?phone=5511966449771&text=PROFISSIONAL: ${profissionalWhats};%0AESTADO: ${estadoWhats};%0ACIDADE: ${cidadeWhats};%0ABAIRRO: ${bairroWhats}.`;
  }
}

const groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
