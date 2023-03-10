import * as React from "react";

interface FiltersProps {
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>,
  sorting: 'asc' | 'desc',
  setSorting: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>
}

export class Filters extends React.Component<FiltersProps> {
  public render() {
    return (
      <div className="row">
        <div className="column column-50">
          <label>Keyword</label>
          <input type="text" data-test="keyword-input" onChange={(e) => this.props.setFilter(e.target.value)} />
        </div>
        <div className="column column-50">
          <label>Grades Order</label>
          <select data-test="order-selector"  onChange={(e) => {if(e.target.value==='asc' || e.target.value==='desc') this.props.setSorting(e.target.value)}}>
            <option value="asc">asc ↑</option>
            <option value="desc">desc ↓</option>
          </select>
        </div>
      </div>
    );
  }
}
