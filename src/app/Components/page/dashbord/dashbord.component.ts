import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../../../Service/registro.service';


import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  Ticks:any
  t=[]
 
  constructor(private _service:RegistroService) { 
        this.Ticks=this._service.obtene

       this.dRO().subscribe( val=> {
       this.t.push(val)
         console.log(this.t)

       })

      // return each item in group as array
      //mergeMap(group => group.pipe(toArray())));
  }


  ngOnInit() {

  }

  dRO()
  {
       const source = from(this.Ticks);
    //group by age
      const example = source.pipe(

        groupBy(person => person.Status)
        ,mergeMap(group => group.pipe(toArray()))
        );
        return example
  }

  
}