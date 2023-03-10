import * as React from "react";
import { ListRecord } from "../types";

type ListItemProps = Omit<ListRecord, 'id'> & { avgGrade?: string };

export class ListItem extends React.Component<ListItemProps> {
  public render() {
    const {name, date, favouriteDish, grades, avgGrade} = this.props;

    if (
      typeof name !== "string" ||
      typeof date !== "string" ||
      typeof favouriteDish.name !== "string" ||
      !Array.isArray(grades) ||
      !grades.every((grade) => typeof grade === "number") ||
      (avgGrade !== undefined && typeof avgGrade !== "string")
    ) {
      throw new Error("Invalid props passed to ListItem component");
    }
    return (
      <div className="row listItem" data-test="list-item">
        <div className="column column-25">{this.props.name}</div>
        <div className="column column-25">{this.props.date}</div>
        <div className="column column-35">{this.props.favouriteDish.name}</div>
        <div className="column column-15">{this.props.avgGrade}</div>
      </div>
    );
  }
}
