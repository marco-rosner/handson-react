import React, { Dispatch, SetStateAction } from 'react'
import { ToDoInterface } from '../../components/ContextProvider/ContextProvider';
import { ToDoForm } from "../../components";
import './FormView.css'
import { useTranslation } from 'react-i18next';

type FormViewProps = {
    setToDo: Dispatch<SetStateAction<ToDoInterface[]>>;
}

export const FormView = ({ setToDo }: FormViewProps) => {
    const { t } = useTranslation()

    return (
    <div className="form">
        <h4>{t('form.todoApp')}</h4>
        <ToDoForm setToDo={setToDo} />
    </div>
)}