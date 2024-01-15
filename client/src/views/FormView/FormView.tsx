import { ToDoForm } from "../../components";
import './FormView.css'
import { useTranslation } from 'react-i18next';

export const FormView = () => {
    const { t } = useTranslation()

    return (
    <div className="form">
        <h4>{t('form.todoApp')}</h4>
        <ToDoForm />
    </div>
)}