import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ReportFrameWebPartStrings';
import ReportFrame from './components/ReportFrame';
import { IReportFrameProps } from './components/IReportFrameProps';

export interface IReportFrameWebPartProps {
  description: string;
  reporturl: string;
}

export default class ReportFrameWebPart extends BaseClientSideWebPart<IReportFrameWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReportFrameProps> = React.createElement(
      ReportFrame,
      {
        description: this.properties.description,
        reporturl: this.properties.reporturl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
                }),
                PropertyPaneTextField('reporturl', {
                  label: strings.ReportURLFieldLabel
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
