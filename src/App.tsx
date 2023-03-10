import "./styles.css";
import { Filters } from "./filters/Filters";
import { List } from "./list/List";
import { ListRecord } from "./types";
import { useState, useEffect } from "react";
export function App() {
  const [notes, setNotes] = useState<ListRecord[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [sorting, setSorting] = useState<'asc' | 'desc'>('asc')
  useEffect(() => {
    const subscription = window.NotesStorage?.subscribe((updatedList) => {
      updatedList.forEach( element => {
        if(element.grades[0])
        element.avgGrade=(element.grades.reduce((sum, next) => sum + next) / element.grades.length).toFixed(2)
      })
      setNotes(updatedList);
    });
    return () => {
      subscription();
    };
  }, []);
 
  return (
    <div className="App">
      <h1>Bob's list</h1>
      
      <Filters
        filter = {filter}
        setFilter = {setFilter}
        sorting = {sorting}
        setSorting = {setSorting}            
      />
      <List 
        data={notes}
        filter = {filter} 
        sorting = {sorting}
      />
    </div>
  );
}
