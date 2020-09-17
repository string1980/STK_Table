import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'StkTableSpfxWebPartStrings';

/** Include Angular Elements JS and Style */

import '../../../../STKTableWP/dist/STKTableWP/bundle';
import '../../../../STKTableWP/dist/STKTableWP/styles.css';
// require('../../../node_modules/stk-table-wp/dist/STKTableWP/styles.css');

export interface IStkTableSpfxWebPartProps {
  description: string;
}

export default class StkTableSpfxWebPart extends BaseClientSideWebPart<IStkTableSpfxWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-stk-table-spfx-web-part description="${ this.properties.description }"></app-stk-table-spfx-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
