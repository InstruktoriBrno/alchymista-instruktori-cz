import React from 'react';
import PropTypes from 'prop-types';
import {useField} from 'react-final-form';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

import style from './CheckboxField.module.scss';

const CheckboxField = ({name, label}) => {
    const {input: {value, onChange, onBlur, onFocus}} = useField(name);

    return (
        <div className={style.main}>
            <input
                type="checkbox"
                className={style.box}
                checked={!!value}
                id={name}
                onChange={(event) => onChange(event.target.checked)}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            <label htmlFor={name} className={style.label}>
                <div className={style.checkMark}>
                    <FAIcon icon={faCheck} />
                </div>
                {label}
            </label>
        </div>
    );
};

CheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
};

CheckboxField.defaultProps = {
    label: '',
};

export default CheckboxField;
