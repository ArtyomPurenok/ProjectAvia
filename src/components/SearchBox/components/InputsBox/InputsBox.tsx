import React, { useState } from "react";
import './InputsBox.scss';

import { Input } from "../../../Input";
import { Button } from "../../../Button";
import { TbCurrentLocation } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { useFormik } from 'formik';

export const InputsBox = ({ onChange }: any) => {
    const formik = useFormik({
        initialValues: {
            from: '',
            to: '',
            calendarStart: '',
            calendarFinish: ''
        },
        onSubmit: values => {
        }
    });
    const inputDateUp = () => {
        onChange(formik);
    };
    return <form onBlur={inputDateUp} onSubmit={formik.handleSubmit}>
        <div className="inputs-box">
            <div className="inputs-box_inputs">
                <div className="inputs-box_input-div-left">
                    <TbCurrentLocation className="inputs-box_input-div-left--img" />
                    <Input
                        className="inputs-box_input-div-left--input"
                        value={formik.values.from}
                        onChange={formik.handleChange}
                        placeholder="Откуда"
                        name="from"
                    />
                    <Button className="inputs-box_inputs--button" Icon={RiArrowLeftRightFill} />
                </div>
                <div className="inputs-box_input-div-right">
                    <IoLocationOutline className="inputs-box_input-div-right--img" />
                    <Input
                        className="inputs-box_input-div-right--input"
                        placeholder="Куда"
                        value={formik.values.to}
                        onChange={formik.handleChange}
                        name="to"
                    />
                </div>
            </div>
            <div className="container_Calendar">
                <Input
                    className="inputs-box_calendar"
                    type='date'
                    placeholder="Data S"
                    value={formik.values.calendarStart}
                    onChange={formik.handleChange}
                    name="calendarStart"
                />
                <Input
                    className="inputs-box_calendar"
                    type='date'
                    placeholder="Data F"
                    value={formik.values.calendarFinish}
                    onChange={formik.handleChange}
                    name="calendarFinish"
                />

            </div>
        </div >
    </form >;

};