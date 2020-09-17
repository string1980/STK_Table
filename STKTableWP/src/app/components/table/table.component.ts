import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CurrentUserModel} from '../../models/current-user.model';
import {IRow} from '../../models/table';
import {SharepointService} from '../../services/sharepoint.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {YesNoComponent} from '../../dialogs/yes-no/yes-no.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  constructor(private spService: SharepointService, private cdr: ChangeDetectorRef,  public dialog: MatDialog) {
  }

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

  onCheck(row: IRow, event, index: number) {
    this.selectedRowIndex = this.rowsFromServer.indexOf(row);
    this.isSelected = this.selectedRowIndex === index;
    console.log('selected row index', this.isSelected);
    if (event.target.checked) {
      this.rowChecked = true;
      row.checked = event.target.checked;
      this.selectedRows.push(row);
    } else {
      this.rowChecked = false;
      this.selectedRows.splice(this.selectedRows.indexOf(row), 1);
    }
    this.cdr.detectChanges();
    console.log('Selected rows', this.selectedRows);
  }


  onSubmitTemplateBased(tableForm) {
    // console.log('Table form', tableForm);
  }

  openYesNoDialog() {
    const dialogRef = this.dialog.open(YesNoComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        //  TODO: redirect to another page
      }
    });
    this.cdr.detectChanges();
  }


}
