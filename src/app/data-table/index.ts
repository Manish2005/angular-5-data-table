import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTable} from './components/table';
import { DataTableColumn } from './components/column';
import { DataTableColumnChild } from './components/column-child';
import { DataTableRow } from './components/row';
import { DataTablePagination } from './components/pagination';
import { DataTableHeader } from './components/header';

import { PixelConverter } from './utils/px';
import { Hide } from './utils/hide';
import { MinPipe } from './utils/min';

export * from './components/types';
export * from './tools/data-table-resource';

export { DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader };
export const DATA_TABLE_DIRECTIVES = [ DataTable, DataTableColumn ];


@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        DataTable, DataTableColumn, DataTableColumnChild,
        DataTableRow, DataTablePagination, DataTableHeader,
        PixelConverter, Hide, MinPipe
    ],
    exports: [ DataTable, DataTableColumn, DataTableColumnChild ]
})
export class DataTableModule { }
