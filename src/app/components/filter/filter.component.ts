import { Component, Output, EventEmitter} from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';


@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    {
      description: 'Ativo', value: true,
    },
        {
      description: 'Inativo', value: false,
    },
    
  ]

  @Output('onFilter') onFilterEmiit = new EventEmitter<IFilterOptions>();

  onFilter() {
  this.onFilterEmiit.emit(this.filterOptions);
  }
  


  /*foods = [
    {
      value: 'Teste',
      viewValue: 'Teste',
    }
  ];*/

}
