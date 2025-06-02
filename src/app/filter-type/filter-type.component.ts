import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-type-filter',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.scss'],
  standalone: false
})
export class FilterTypeComponent {
  // based on https://github.com/PokeAPI/sprites/blob/master/sprites/types/generation-viii/brilliant-diamond-and-shining-pearl/18.png
  public types: number[] = Array.from({ length: 18 }, (_, i) => i + 1);
  public selectedType: number | null = null;

  @Output() filterSelected = new EventEmitter<number>();

  selectType(type: number): void {
    if (type == this.selectedType) {
      this.selectedType = null;
      return;
    } 
    this.selectedType = type;
  }

  applyFilter(): void {
    if (this.selectedType !== null) {
      this.filterSelected.emit(this.selectedType);
    }
  }
}
