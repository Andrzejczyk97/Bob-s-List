import * as React from "react";

export class ListItemErrorBoundary extends React.Component<React.PropsWithChildren> {
  // todo: render WrongItemPlaceholder if error caught
  
  public render() {
    return this.props.children;
  }
}
