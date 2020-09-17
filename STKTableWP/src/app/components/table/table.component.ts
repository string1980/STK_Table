import { Component, OnInit } from '@angular/core';
import {CurrentUserModel} from '../../models/current-user.model';
import {IRow} from '../../models/table';
import {Observable} from 'rxjs';

@Component({
  selector: 'yl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  currentUser: CurrentUserModel;
  rowsFromServer: IRow[] = [];

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  allowMultiSelect = true;
  selection = new SelectionModel<IRow>(true, []);
  selectedRows: Array<IRow> = [];
  selectedRow: IRow;
  isChecked: boolean = false;
  newListTitle: string = 'Sales Data';
  selectedRowIndex: number;
  isSelected: boolean;
  rowChecked: boolean;
  version: IRow;
  versionStatus: IRow;
  constructor() { }

  ngOnInit() {

    this.spService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log('current user', this.currentUser);
    });

    this.spService.getMasterDataList().subscribe(list => {
      console.log('list', list);
      this.rowsFromServer = [...list];
      console.log('rowsFromServer', this.rowsFromServer);
      this.rowsFromServer.forEach((x, index) => {
        this.displayedColumns.push(Object.keys(x)[index]);
      });
      this.displayedColumns = this.displayedColumns.filter(col => col === '' || col && !col.startsWith('odata'));
      this.displayedColumns = this.displayedColumns.map((item) => {
        item = item.replace(/_/g, '')
          .replace(/x002d/g, '-')
          .replace(/x0020/g, ' ')
          .replace(/x005c/g, '/')
          .replace(/x0025/g, '%');
        return item;
      }).filter(column =>
        column !== 'FileSystemObjectType' &&
        column !== 'Id' &&
        column !== 'ID' &&
        column !== 'ServerRedirectedEmbedUri' &&
        column !== 'ServerRedirectedEmbedUrl' &&
        column !== 'ContentTypeId' &&
        column !== 'ComplianceAssetId' &&
        column !== 'AuthorId' &&
        column !== 'EditorId' &&
        column !== 'ODataUIVersionString' &&
        column !== 'ODataUIVersionString' &&
        column !== 'GUID' &&
        column !== 'Attachments' &&
        column !== 'Modified' &&
        column !== 'Created' &&
        column !== 'Version' &&
        column !== 'Submitted by' &&
        column !== 'Update date' &&
        column !== 'Comments' &&
        column !== 'Status'
      );
      console.log('displayedColumns', this.displayedColumns);
      this.cdr.detectChanges();
      this.rowsFromServer = this.rowsFromServer.filter((row) => row.UserTest === '1_US');
      //
    });
    this.version = this.rowsFromServer.find(row => row.Version === '2021A');
    this.versionStatus = this.rowsFromServer.find(row => row.Status === 'Edit Mode');
  }



}
