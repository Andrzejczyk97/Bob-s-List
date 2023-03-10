import * as React from "react";
import { ListRecord } from "../types";
import { ListItem } from "./ListItem";
import { ListHeader } from "./ListHeader";
import { WrongItemPlaceholder } from "./WrongItemPlaceholder";

interface ListProps {
  data: ListRecord[];
  filter: string,
  sorting: string,
}

interface ListErrorBoundaryState {
  hasError: boolean;
}

class ListErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ListErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error); 
    return { hasError: true };
  }
  public render() {
    if (this.state.hasError) {
      return <WrongItemPlaceholder />;
    }
    return this.props.children;
  }
}

export class List extends React.Component<ListProps> {
  private sortList(list: ListRecord[]) {
    const sortedItems = list.sort((a,b) => {
      if(a.avgGrade && b.avgGrade ) {
        switch (this.props.sorting)
        {
          case 'asc':
            if (a.avgGrade>b.avgGrade) return 1
            else if(a.avgGrade<b.avgGrade) return -1
            else return 0
          case 'desc':
            if (a.avgGrade>b.avgGrade) return -1
            else if(a.avgGrade<b.avgGrade) return 1
            else return 0
        }
      }
      return 0
    })
    return sortedItems
  }
  public render() {
    const filteredItems = this.props.data.filter(element => element.name.toLowerCase().includes(this.props.filter.toLowerCase()))
    const sortedItems = this.sortList(filteredItems);
    const listItems = sortedItems.map((element) => (
      <ListErrorBoundary key={element.id}>
        <ListItem
          name={element.name}
          date={element.date}
          favouriteDish={element.favouriteDish}
          grades={element.grades}
          avgGrade={element.avgGrade}
        />
      </ListErrorBoundary>
    ));

    return (
      <div data-test="notes-list">
        <ListHeader />
        {listItems}
      </div>
    );
  }
}
