import { ToDoForm } from "../../components/ToDoForm/ToDoForm";
import './FormView.css'

type FormViewProps = {
    setToDo?: any;
}

export const FormView = ({ setToDo }: FormViewProps) => (
    <div className="form">
        <h4>To Do Application</h4>
        <ToDoForm setToDo={setToDo} />
    </div>
)