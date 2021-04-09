import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import jsonData from '../../assets/utilitariojson/utilidades.json';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  constructor() {}

  public getUtilitarioExame(): Observable<any> {
    return of(jsonData.exame);
  }
  public getUtilitarioEspecialidades(): Observable<any> {
    return of(jsonData.consulta);
  }
}
