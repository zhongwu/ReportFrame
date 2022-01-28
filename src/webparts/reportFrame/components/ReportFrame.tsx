import * as React from 'react';
import styles from './ReportFrame.module.scss';
import { IReportFrameProps } from './IReportFrameProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ReportFrame extends React.Component<IReportFrameProps, {}> {
  public render(): React.ReactElement<IReportFrameProps> {
    
    const reportsrc = this.props.reporturl + '?' + '&iframeSizedToWindow=true&:embed=yes';

    return (
      <div className={ styles.reportFrame }>
        <div className={ styles.container }>
          <p className={ styles.description }>{escape(this.props.description)}</p>
          <div>
            <iframe className={styles.report} src={reportsrc}></iframe>
          </div>
        </div>
      </div>
    );
  }
}
